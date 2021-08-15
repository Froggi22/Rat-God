module.exports = {
	async run (interaction, client) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`)
		if (!interaction.isCommand()) return
		const command = client.commands.get(interaction.commandName)
		if (!command) return
		try {
			command.run(interaction)
		} catch (error) {
			console.log(error)
			return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
		}
	}
}
