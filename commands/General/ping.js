module.exports = {
	description: 'Pinging responsetimes',
	async run (interaction, client) {
		const reply = await interaction.reply({ content: `🏓 Pong!\nThe heartbeat ping is ${Math.round(client.ws.ping)}ms.`, fetchReply: true })
		interaction.editReply({ content: `🏓 Pong!\nThe heartbeat ping is ${Math.round(client.ws.ping)}ms.\nThe message round-trip took ${reply.createdTimestamp - interaction.createdTimestamp}ms.` })
	}
}
