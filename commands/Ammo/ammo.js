import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../commandReply.js"
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
	const caliber = interaction.options.getString("caliber")
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
