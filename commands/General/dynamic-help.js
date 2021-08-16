const { MessageEmbed } = require('discord.js')
const { commands } = require('../../index')
const { embedDesign, general } = require('../../config.json')
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

		const embed = new MessageEmbed()
			.setTitle('Rat Gods Commands')
			.setDescription('Leave suggestions to Froggi22#3436')
			.setColor(embedDesign.color)
			.setTimestamp()
			.setFooter(embedDesign.gameUpdate)

		if (!command_name) {
			embed
				.setTitle('Rat Gods Commands')
				.setDescription('Leave suggestions to Froggi22#3436')
				.addField('Commands', client.commands.map(command => `\`${command.name}\` - ${command.description}`).join('\n'))
				.addField('Version 1.3.0', `‏‏‎**Last updated -** ${general.lastUpdated}\n\`Latest\` - Shows latest updates.\n‏‏‎ ‎`)
			return interaction.reply({ embeds: [embed] })
		}

		const command = client.commands.get(command_name)
		embed
			.setTitle(command.name)
			.setDescription(command.description)
		interaction.reply({ embeds: [embed] })
	}
}
