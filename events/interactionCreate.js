const chalk = require('chalk')

module.exports = {
	async run (interaction, client) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`)
		if (!interaction.isCommand()) return
		const command = client.commands.get(interaction.commandName)
		if (!command) return console.log(`${chalk.bgHex('#FFFF00')('    ')} UNHANDLED_COMMAND_WARNING: ${interaction.commandName}`)
		try {
			command.run(interaction, client)
		} catch (error) {
			console.log(error)
			return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
		}
	}
}
