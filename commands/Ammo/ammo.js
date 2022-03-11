import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../commandReply.js"
import { fetchAmmo } from "../../events/ready.js"
import { config } from "../../index.js"
import AsciiTable from "ascii-table"

export const description = "Ammo charts for different calibers"
export const options = [{
	type: "STRING",
	name: "caliber",
	description: "The ammunition caliber",
	required: true,
	choices: Object.entries(config.ammo).map(choice => ({ name: choice[0], value: choice[1] }))
}]

const tarkovJSONAmmo = await fetchAmmo()

export function run (interaction) {
	const caliber = interaction.options.getString("caliber")
	const valueToKey = Object.keys(config.ammo).find(key => config.ammo[key] === caliber)

	const table = new AsciiTable()
	table.removeBorder()
	table.addRow([
		"Name",
		"Pen",
		"Dmg",
		"A Dmg",
		"Frag",
		"Velo"
	])

	function pushData (item, itemProps) {
		console.log(item._name)
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
	tableData.sort((x, y) => y[1] - x[1] || y[2] - x[2])
	for (const stat in tableData) {
		table.addRow([
			tableData[stat][0], // Name
			tableData[stat][1], // Pen
			tableData[stat][2], // Dmg
			tableData[stat][3], // A Dmg
			`${tableData[stat][4]}%`, // Frag
			`${tableData[stat][5]}m/s` // Velo
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
