const { MessageEmbed } = require('discord.js')

module.exports = {
	description: 'Pinging responsetimes',
	async run (interaction, client) {
		const embed = new MessageEmbed()
			.setColor('#FF0000')
			.setAuthor(`🏓 Pong!\nThe heartbeat ping is ${Math.round(client.ws.ping)}ms.`)
		const reply = await interaction.reply({ embeds: [embed], fetchReply: true })
		embed
			.setColor('#00FF00')
			.setAuthor(`🏓 Pong!\nThe heartbeat ping is ${Math.round(client.ws.ping)}ms.\nThe message round-trip took ${reply.createdTimestamp - interaction.createdTimestamp}ms.`)
		interaction.editReply({ embeds: [embed] })
	}
}
