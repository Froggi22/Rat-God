import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../commandReply.js"
import { tarkovJSONAmmo } from "../../events/ready.js"
import { config } from "../../index.js"

export const description = "Ammo charts for different calibers"
export const options = [{
	type: "STRING",
	name: "caliber",
	description: "The ammunition caliber",
	required: true,
	choices: Object.keys(config.ammo).map(choice => { return { name: choice, value: choice } })
}]

export function run (interaction) {
	console.log("========== Ammo interaction ==========")
	const caliber = interaction.options.getString("caliber")
	const caliberMatch = caliber.replace("mm", "").replace(".", "").trim()
	console.log(`CALIBER REQUESTED >> ${caliberMatch}`)

	for (let i = 0; i < tarkovJSONAmmo.length; i++) {
		console.log(tarkovJSONAmmo[i]._name.replace("patron_", "").replace(/_/g, " ").trim())
	}
	interactionReply(interaction, {
		embeds: [new MessageEmbed()
			.setColor(config.embedDesign.defaultColor)
			.setAuthor({ name: `🐀 ${caliber} ${config.embedDesign.ammoTitle}`, url: config.embedDesign.wikiBallistics })
			.setDescription(`${config.embedDesign.ammoDescription}`)
			.setImage(config.ammo[caliber])
			.setFooter({ text: config.embedDesign.gameUpdate })
			.setTimestamp()
		]
	})
}

// 1143x23 == 45 ACP
// 57x28 == 57x28
//
