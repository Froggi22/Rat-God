const { MessageEmbed } = require('discord.js')
const { embedColor } = require('../../config.json')

module.exports = {
	description: 'Joke prefix command',
	run (interaction) {
		interaction.reply({
			embeds: [new MessageEmbed()
				.setTitle('You are using the prefix to get this message?')
				.setColor(embedColor)
				.setTimestamp()]
		})
	}
}
