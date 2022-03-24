import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../utils.js"
import { config } from "../../index.js"

export const description = "Pinging responsetimes"
export function run (interaction, client) {
	interactionReply(interaction, {
		messageEmbed: new MessageEmbed()
			.setColor(config.embedDesign.color)
			.setTitle("🏓 Pong!")
			.setDescription(`Ping is **${Math.round(client.ws.ping)}**ms!\nI am online and responsive! 🕙`)
	})
}
