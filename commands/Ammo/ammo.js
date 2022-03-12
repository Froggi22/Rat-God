import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../commandReply.js"
import { fetchAmmo } from "../../events/ready.js"
import { config } from "../../index.js"
import AsciiTable from "ascii-table"

const stats = {
	Name: "Name",
	"Penetration Power": "Pen",
	Damage: "Dmg",
	"Armor Damage": "A Dmg",
	"Fragmentation Chance": "Frag",
	"Initial Velocity": "Velo"
}

export const description = "Ammo charts for different calibers"
export const options = [
	{
		name: "caliber",
		description: "The ammunition caliber",
		type: "STRING",
		required: true,
		choices: Object.entries(config.ammo).map(choice => ({ name: choice[0], value: choice[1] }))
	},
	{
		name: "sorting",
		description: "The order of the bullets in the list",
		type: "STRING",
		choices: Object.entries(stats).splice(1).map(stat => ({ name: stat[0], value: stat[1] }))
	}
]
const startTime = new Date()
const tarkovJSONAmmo = await fetchAmmo()
console.log(`fetchAmmo delay: ${new Date() - startTime}ms`)

export function run (interaction) {
	const caliber = interaction.options.getString("caliber")
	const sorting = interaction.options.getString("sorting")
	const valueToKey = Object.keys(config.ammo).find(key => config.ammo[key] === caliber)

	const table = new AsciiTable()
	table.removeBorder()
	table.addRow(Object.values(stats))

	function pushData (item, itemProps) {
		// console.log(item._name)
		const correctedItemNamesObj = { // Change keys to raw version (item._name)
			patron_12x70_slug: "Lead Slug",
			patron_12x70_buckshot_65: "Buckshot 6.5 Express",
			patron_12x70_buckshot_85: "Buckshot 8.5 Magnum",
			patron_12x70_buckshot_525: "Buckshot 5.25",
			patron_20x70_slug_broadhead: "Slug Devastator",
			patron_20x70_buckshot_73: "Buckshot 7.3",
			patron_12x70_buckshot: "Buckshot 7.5",
			patron_20x70_buckshot_62: "Buckshot 6.2",
			patron_20x70_buckshot_56: "Buckshot 5.6",
			patron_762x25tt_T_Gzh: "PT Gzh",
			patron_9x19_GT: "T gzh",
			patron_9x19_7n31: "PBP Gzh", // Either works tbh
			patron_1143x23_acp: "Acp FMJ",
			patron_1143x23_rip: "Acp Rip",
			patron_9x21_sp10: "PS Gzh",
			patron_9x21_sp11: "P Gzh",
			patron_9x21_sp12: "PE Gzh",
			patron_9x21_sp13: "BT Gzh",
			patron_366_custom_ap: "TKM AP-M",
			patron_545x39_7n39: "PPBS",
			patron_556x45_MK_255_Mod_0: "RRLP",
			patron_556x45_mk_318_mod_0: "SOST",
			patron_762x51_tpz_sp: "TCW SP",
			patron_762x51_bpz_fmj: "BCP FMJ",
			patron_762x54r_7n37: "BS",
			patron_762x54r_7bt1: "BT",
			patron_762х54R_7N1: "PS",
			patron_86x70_lapua_magnum: "Lapua FMJ",
			patron_86x70_lapua_magnum_upz: "Lapua UCW",
			patron_127x108: "B-32 gl"
		}
		let itemName = item._name
		const correctedItemName = Object.keys(correctedItemNamesObj).find(key => key === itemName)
		if (correctedItemName !== undefined) itemName = correctedItemNamesObj[correctedItemName]
		else {
			itemName = item._name.replace(/_/g, " ")
				.replace("patron ", "")
				.split(" ").slice(1).join(" ")
				.trim()
				.replace(/\w\S*/g, w => w.match(/[a-z]/i) ? w.replace(w.match(/[a-z]/i)[0], w.match(/[a-z]/i)[0].toUpperCase()) : w)
		}
		tableData.push([
			itemName,
			itemProps.PenetrationPower,
			itemProps.ProjectileCount > 1 ? itemProps.Damage * itemProps.ProjectileCount : itemProps.Damage,
			itemProps.ArmorDamage,
			Math.floor(itemProps.FragmentationChance * 100),
			itemProps.InitialSpeed
		])
	}

	const tableData = []
	for (let objNr = 0; objNr < tarkovJSONAmmo.length; objNr++) {
		const item = tarkovJSONAmmo[objNr]
		const itemProps = item._props
		if (!itemProps.Caliber) continue
		if (itemProps.Caliber.replace("Caliber", "") === caliber) pushData(item, itemProps)
		else if (caliber === "127x108" && itemProps.Caliber.replace("Caliber", "") === "30x29")	pushData(item, itemProps)
	}
	const sortTable = (stat1, stat2, stat3) => tableData.sort((x, y) => y[stat1] - x[stat1] || y[stat2] - x[stat2] || y[stat3] - x[stat3])
	if (!sorting || sorting === "Pen") sortTable(1, 2, 3)
	else if (sorting === "Dmg") sortTable(2, 3, 1)
	else if (sorting === "A Dmg") sortTable(3, 2, 1)
	else if (sorting === "Frag") sortTable(4, 1, 2)
	else sortTable(5, 1, 2)
	for (const stat in tableData) {
		table.addRow([
			tableData[stat][0], // Name
			tableData[stat][1], // Penetration Power
			tableData[stat][2], // Damage
			tableData[stat][3], // Armor Damage
			`${tableData[stat][4]}%`, // Fragmentation Chance
			`${tableData[stat][5]}m/s` // Initial Velocity
		])
	}

	interactionReply(interaction, {
		embeds: [new MessageEmbed()
			.setColor(config.embedDesign.defaultColor)
			.setAuthor({ name: `🐀 ${valueToKey} ${config.embedDesign.ammoTitle}`, url: config.embedDesign.wikiBallistics })
			.setDescription(`\`\`\`txt\n${table.toString()}\`\`\``)
			.setFooter({ text: config.embedDesign.gameUpdate })
		]
	})
}
