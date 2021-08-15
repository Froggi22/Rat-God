const { MessageEmbed } = require('discord.js')
const { embedColor } = require('../../config.json')

module.exports = {
	description: 'Joke mention command',
	async run (message) {
		const Embed = new MessageEmbed()
			.setTitle(':facepalm: You are supposed to mention the bot dummy :facepalm:')
			.setColor(embedColor)
			.setTimestamp()

		await message.reply({ embeds: [Embed] })
	}
}
