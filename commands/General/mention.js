const { MessageEmbed } = require('discord.js')
const { embedDesign } = require('../../config.json')

module.exports = {
	description: 'Joke mention command',
	run (interaction) {
		interaction.reply({
			embeds: [new MessageEmbed()
				.setTitle(':facepalm: You are supposed to mention the bot dummy :facepalm:')
				.setColor(embedDesign.color)
				.setTimestamp()]
		})
	}
}
