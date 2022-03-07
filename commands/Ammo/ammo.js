import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../commandReply.js"
import { tarkovJSONAmmo } from "../../events/ready.js"
import { config } from "../../index.js"
import AsciiTable from "ascii-table"

/* const tarkovAmmo = {
	"12x70mm": "12g",						// 15
	"20x70mm": "20g",						// 11
	"23x75mm": "23x75",							// 20
	"9x18mm Makarov": "9x18PM",			// 1
	"7.62x25mm Tokarev": "762x25TT",	// 3
	"9x19mm Parabellum": "9x19PARA",	// 8
	".45 ACP": "1143x23ACP",					// 22
	"9x21mm Gyurza": "9x21",				// 12
	"5.7x28mm FN": "57x28",					// 18
	"4.6x30mm HK": "46x30",				// 6
	"9x39mm": "9x39",						// 14
	".366 TKM": "366TKM",				// 9
	"5.45x39mm": "545x39",				// 5
	"5.56x45mm NATO": "556x45NATO",		// 4
	".300 Blackout": "762x35",				// 17
	"7.62x39mm": "762x39",					// 10
	"7.62x51mm NATO": "762x51",			// 2
	"7.62x54mmR": "762x54R",			// 7
	".338 Lapua Magnum": "86x70",			// 19
	"12.7x55mm STs-130": "127x55",			// 16
	"40x46 mm": "40x46",						// 21
	"Stationary Weapons": "127x108"			// 13
} */

export const description = "Ammo charts for different calibers"
export const options = [{
	type: "STRING",
	name: "caliber",
	description: "The ammunition caliber",
	required: true,
	choices: Object.entries(config.ammo).map(choice => { return { name: choice[0], value: choice[1] } })
}]

export function run (interaction) {
	console.log("========== Ammo interaction ==========")
	const caliber = interaction.options.getString("caliber")
	console.log(`caliber > ${caliber}`)
	console.log(`config.ammo > ${config.ammo.toString()}`)
	const valueToKey = (Object.keys(config.ammo).find(key => config.ammo[key] === caliber))
	// console.log(Object.keys(config.ammo).find(key => {
	// 	console.log(`key > ${key}`)
	// 	return config.ammo[key] === caliber
	// }))
	// const valueToKey = (Object.keys(config.ammo).find(key => config.ammo[key] === caliber)).replace("mm", "")
	console.log(`ValueToKey > ${valueToKey}`)
	// console.log(interaction.options.get("caliber"))

	const table = new AsciiTable()
	const tableData = []
	table.removeBorder()
	table.addRow([
		"Name",
		"Pen",
		"Dmg",
		"A Dmg",
		"Frag",
		"Velo"
	])

	// const arr = []
	for (let objNr = 0; objNr < tarkovJSONAmmo.length; objNr++) {
		const item = tarkovJSONAmmo[objNr]
		const itemProps = item._props
		// if (tarkovJSONAmmo[item]._props.Caliber && !arr.includes(tarkovJSONAmmo[item]._props.Caliber)) arr.push(tarkovJSONAmmo[item]._props.Caliber)
		// console.log(`>>>>>> ${tarkovJSONAmmo[item]._props.ammoCaliber.replace("Caliber", "")} --> ${caliber}`)
		if (itemProps.Caliber && item._props.Caliber.replace("Caliber", "") === caliber) {
			console.log(
				tarkovJSONAmmo[objNr]._name
					.toLowerCase()
					.replace(valueToKey.replace("acp", ""), "")
					.replace("patron_", "")
					.replace(caliber, "")
					.replace(`${valueToKey}_`, "")
					.replace(valueToKey.replace("mm", ""), "")
					.replace(/_/g, " ")
					.trim()
					.replace(/\w\S*/g, w => `${w[0].toUpperCase()}${w.slice(1)}`))
			tableData.push([
				item._name
					.toLowerCase()
					.replace(valueToKey.replace("acp", ""), "")
					.replace("patron_", "")
					.replace(caliber, "")
					.replace(`${valueToKey}_`, "")
					.replace(valueToKey.replace("mm", ""), "")
					.replace(/_/g, " ")
					.trim()
					.replace(/\w\S*/g, w => `${w[0].toUpperCase()}${w.slice(1)}`),
				itemProps.PenetrationPower,
				itemProps.Damage,
				itemProps.ArmorDamage,
				Math.floor(itemProps.FragmentationChance * 100),
				itemProps.InitialSpeed
			])
		}
		// TODO
		// ERROR, FIX > STATIONARY WEAPONS, THERE ARE 2 VALUES NEEDED TO BE SEARCHED FOR 127x108 & 30x29!
		// Capitalize each word
	}
	tableData.sort((x, y) => { return y[1] - x[1] || y[2] - x[2] })
	for (const i in tableData) {
		table.addRow([
			tableData[i][0],
			tableData[i][1],
			tableData[i][2],
			tableData[i][3],
			`${tableData[i][4]}%`,
			`${tableData[i][5]}m/s`
		])
	}

	// console.log(arr)
	interactionReply(interaction, {
		embeds: [new MessageEmbed()
			.setColor(config.embedDesign.defaultColor)
			.setAuthor({ name: `🐀 ${valueToKey} ${config.embedDesign.ammoTitle}`, url: config.embedDesign.wikiBallistics })
			// .setDescription(config.embedDesign.ammoDescription)
			.setDescription(`\`\`\`${table.toString()}\`\`\``)
			// .setImage(config.ammo[caliber])
			.setFooter({ text: config.embedDesign.gameUpdate })
			.setTimestamp()
		]
	})
}
