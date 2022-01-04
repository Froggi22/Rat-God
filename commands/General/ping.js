const { MessageEmbed } = require("discord.js")
const { embedDesign } = require("../../config.json")

module.exports = {
	description: "Pinging responsetimes",
	async run (interaction, client) {
		const embed = new MessageEmbed() // First embed
			.setColor(embedDesign.colorRed)
			.setAuthor({ name: `🏓 Pong!\nThe heartbeat ping is ${Math.round(client.ws.ping)}ms.` })
			.setTimestamp()
		const startTime = new Date()
		await interaction.reply({ embeds: [embed], fetchReply: true }).catch() // Reply with first embed but wait for an edit
		embed // Second embed
			.setColor(embedDesign.color)
			.setAuthor({ name: `🏓 Pong!\nThe heartbeat ping is ${Math.round(client.ws.ping)}ms.\nThe message round-trip took ${new Date() - startTime}ms.` })
			.setTimestamp()
		interaction.editReply({ embeds: [embed] }).catch() // Edit the message with new info
	}
}
