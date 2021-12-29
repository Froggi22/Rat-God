const { MessageEmbed } = require("discord.js")
const { embedDesign } = require("../../config.json")

module.exports = {
	description: "Pinging responsetimes",
	async run (interaction, client) {
		const embed = new MessageEmbed()
			.setColor(embedDesign.colorRed)
			.setAuthor({ name: `🏓 Pong!\nThe heartbeat ping is ${Math.round(client.ws.ping)}ms.` })
			.setTimestamp()
		const reply = await interaction.reply({ embeds: [embed], fetchReply: true })
		embed
			.setColor(embedDesign.color)
			.setAuthor({ name: `🏓 Pong!\nThe heartbeat ping is ${Math.round(client.ws.ping)}ms.\nThe message round-trip took ${reply.createdTimestamp - interaction.createdTimestamp}ms.` })
			.setTimestamp()
		interaction.editReply({ embeds: [embed] })
	}
}
