import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../commandReply.js"
import { config } from "../../index.js"

export const description = "Pinging responsetimes"
export function run (interaction, client) {
	interactionReply(interaction, {
		embeds: [new MessageEmbed()
			.setColor(config.embedDesign.defaultColor)
			.setTitle("🏓 Pong!")
			.setDescription(`My ping is **${Math.round(client.ws.ping)}**ms!\nI am online and responsive! 🕙`)
			.setTimestamp()
		]
	})
}
