import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../commandReply.js"
import { tarkovJSONAmmo } from "../../events/ready.js"
import { config } from "../../index.js"
import AsciiTable from "ascii-table"

export const description = "Ammo charts for different calibers"
export const options = [{
	type: "STRING",
	name: "caliber",
	description: "The ammunition caliber",
	required: true,
	choices: Object.entries(config.ammo).map(choice => { return { name: choice[0], value: choice[1] } })
}]

export function run (interaction) {
	const caliber = interaction.options.getString("caliber")
	const valueToKey = (Object.keys(config.ammo).find(key => config.ammo[key] === caliber))

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
		tableData.push([
			item._name
				.toLowerCase()
				.replace(/_/g, " ")
				.replace("patron ", "")
				.split(" ").slice(1).join(" ") // This instead of something like: .replace(caliber.replace("mm", ""), "")
				.replace("mm", "")
				.trim()
				.replace(/\w\S*/g, w => w.match(/[a-z]/) ? w.replace(w.match(/[a-z]/)[0], w.match(/[a-z]/)[0].toUpperCase()) : console.log(`errorrrrrr > ${w}`)
				),
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
		if (item._props.Caliber.replace("Caliber", "") === caliber) pushData(item, itemProps)
		else if (caliber === "127x108" && item._props.Caliber.replace("Caliber", "") === "30x29") pushData(item, itemProps)

		/* TODO
		FIX > STATIONARY WEAPONS, THERE ARE 2 VALUES NEEDED TO BE SEARCHED FOR 127x108 & 30x29!
		*/
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
