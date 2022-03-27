import { MessageEmbed } from "discord.js"
import { interactionReply, capitalizeWords, ObjectKeyValueSearch } from "../../utils.js"
import { fetchAmmo } from "../../events/ready.js"
import { config } from "../../index.js"

import AsciiTable from "ascii-table"

const stats = { // Object with full names and short names of the stats respectively
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
		required: false,
		choices: Object.entries(stats).splice(1).map(stat => ({ name: stat[0], value: stat[1] }))
	}
]
let tarkovJSONAmmo

export async function run (interaction) {
	if (!tarkovJSONAmmo) {
		const delayStart = new Date()
		tarkovJSONAmmo = await fetchAmmo()
		console.log(`fetchAmmo() delay: ${new Date() - delayStart}ms`)
	}

	const caliber = interaction.options.getString("caliber")
	const sorting = interaction.options.getString("sorting")
	const valueToKey = Object.keys(config.ammo).find(key => config.ammo[key] === caliber) // Fetches the caliber's full name / common name

	const table = new AsciiTable()
	table.removeBorder()
	table.addRow(Object.values(stats)) // Adds table headers e.g. Name

	/**
	 * Pushing cherry-picked data from the item object to an array.
	 * @param {object} item The bullet object
	 */
	function pushData (item) {
		const correctedItemNames = { // Change keys to raw version (item._name)
			patron_12x70_slug_50_bmg_m17_traccer: ".50 BMG",
			patron_12x70_slug: "Lead Slug",
			patron_12x70_buckshot_65: "6.5mm Express",
			patron_12x70_buckshot: "7.5mm",
			patron_12x70_buckshot_85: "8.5mm Magnum",
			patron_12x70_buckshot_525: "5.25mm",
			patron_20x70_slug_broadhead: "Slug Devastator",
			patron_20x70_buckshot_73: "7.3mm",
			patron_20x70_buckshot: "7.5mm",
			patron_20x70_buckshot_62: "6.2mm",
			patron_20x70_buckshot_56: "5.6mm",
			patron_762x25tt_T_Gzh: "PT Gzh",
			patron_9x19_GT: "T gzh",
			patron_9x19_7n31: "PBP Gzh", // Either works tbh
			patron_1143x23_acp: "FMJ",
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
		const itemProps = item._props
		let itemName = ObjectKeyValueSearch(correctedItemNames, item._name)
		if (itemName === item._name) {
			itemName = item._name.replace(/_/g, " ")
				.replace("patron ", "")
				.split(" ").slice(1).join(" ") // Removes the caliber
				.replace("slug", "")
				.replace("buckshot", "")
				.replace("acp", "")
				.trim()
			itemName = capitalizeWords(itemName)
		}
		tableData.push([ // Add the bullet's data as a new row
			itemName,
			itemProps.PenetrationPower,
			itemProps.ProjectileCount > 1 ? itemProps.Damage * itemProps.ProjectileCount : itemProps.Damage,
			itemProps.ArmorDamage,
			Math.floor(itemProps.FragmentationChance * 100),
			itemProps.InitialSpeed
		])
	}

	const tableData = []
	for (let objNr = 0; objNr < tarkovJSONAmmo.length; objNr++) { // Iterate through each ammo object
		const item = tarkovJSONAmmo[objNr]
		const itemProps = item._props
		if (!itemProps.Caliber) continue
		if (itemProps.Caliber.replace("Caliber", "") === caliber) pushData(item)
		else if (caliber === "127x108" && itemProps.Caliber.replace("Caliber", "") === "30x29")	pushData(item) // The caliber 127x108 includes 30x29
	}
	/**
	 * Sorting tableData.
	 * @param {Array} statSorting The sorting order - array with elements in the obj "stats"
	 */
	function sortTable (statSorting) {
		const statPos = []
		for (let i = 0; i < statSorting.length; i++) statPos.push(Object.values(stats).indexOf(statSorting[i])) // Fetches the sorting stat's position in stats
		tableData.sort((x, y) => y[statPos[0]] - x[statPos[0]] || y[statPos[1]] - x[statPos[1]] || y[statPos[2]] - x[statPos[2]])
	}
	if (!sorting || sorting === "Pen") sortTable(["Pen", "Dmg", "A Dmg"])
	else if (sorting === "Dmg") sortTable(["Dmg", "A Dmg", "Pen"])
	else if (sorting === "A Dmg") sortTable(["A Dmg", "Dmg", "Pen"])
	else if (sorting === "Frag") sortTable(["Frag", "Pen", "Dmg"])
	else sortTable(["Velo", "Pen", "Dmg"])
	for (const stat in tableData) {
		table.addRow([
			tableData[stat][0], // Name
			tableData[stat][1], // Penetration Power
			tableData[stat][2], // Damage
			`${tableData[stat][3]}%`, // Armor Damage
			`${tableData[stat][4]}%`, // Fragmentation Chance
			`${tableData[stat][5]}m/s` // Initial Velocity
		])
	}

	interactionReply(interaction, {
		messageEmbed: new MessageEmbed()
			.setColor(config.embedDesign.color.gold)
			.setAuthor({ name: `🐀 ${valueToKey} ${config.embedDesign.ammoTitle}`, url: config.generalLinks.wikiBallistics })
			.setDescription(`\`\`\`txt\n${table.toString()}\`\`\``)
			.setFooter({ text: config.embedDesign.gameUpdate })
	})
}
