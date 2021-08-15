const { readdirSync } = require('fs')
const { commands } = require('../../index')
module.exports = {
	description: 'Reload command',
	options: [{
		name: 'command_name',
		description: 'The command name to reload',
		type: 'STRING',
		required: true,
		choices: commands
	}],
	run (interaction, client) {
		const commandName = interaction.options.getString('command_name')
		const command = client.commands.get(commandName)

		if (!command) {
			return interaction.reply(`There is no command with name or alias \`${commandName}\`, ${interaction.author}!`)
		}

		const commandFolders = readdirSync('./commands')
		const folderName = commandFolders.find(folder => readdirSync(`./commands/${folder}`).includes(`${command.name}.js`))

		delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)]

		try {
			const newCommand = require(`../${folderName}/${command.name}.js`)
			newCommand.name = command.name
			client.commands.set(newCommand.name, newCommand)
			interaction.reply(`Command \`${newCommand.name}\` was reloaded!`)
		} catch (error) {
			console.error(error)
			interaction.reply(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``)
		}
	}
}
