const { commands } = require('../../index')

module.exports = {
	description: 'Dynamic Help Command',
	options: [{
		type: 'STRING',
		name: 'command_name',
		description: 'The Command Name To Get Help With',
		choices: commands.map(choice => { return { name: choice, value: choice } })
	}],
	run (interaction, client) {
		const command_name = interaction.options.getString('command_name')

		const data = []

		if (!command_name) {
			data.push('Here\'s a list of all my commands:')
			data.push(client.commands.map(command => command.name).join(', '))
			data.push('\nYou can send `/help [command name]` to get info on a specific command!')

			return interaction.reply(data.join('\n'))
		}
		const command = client.commands.get(command_name)

		data.push(`**Name:** ${command.name}`)
		data.push(`**Description:** ${command.description}`)

		interaction.reply(data.join('\n'))
	}
}
