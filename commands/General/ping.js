import { MessageEmbed } from "discord.js"
import { config } from "../../index.js"

// Would be nice if we could integrate this to commandReply.js ...

export const description = "Pinging responsetimes"
export async function run (interaction, client) {
	const embed = new MessageEmbed() // First embed
		.setColor(config.embedDesign.colorRed)
		.setAuthor({ name: `🏓 Pong!\nThe heartbeat ping is ${Math.round(client.ws.ping)}ms.` })
		.setTimestamp()
	const startTime = new Date()
	await interaction.reply({ embeds: [embed], fetchReply: true }).catch() // Reply with first embed but wait for an edit
	embed // Second embed
		.setColor(config.embedDesign.defaultColor)
		.setAuthor({ name: `🏓 Pong!\nThe heartbeat ping is ${Math.round(client.ws.ping)}ms.\nThe message round-trip took ${new Date() - startTime}ms.` })
		.setTimestamp()
	await interaction.editReply({ embeds: [embed] }).catch() // Edit the message with new info
}
