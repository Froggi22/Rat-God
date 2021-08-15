const { MessageEmbed } = require('discord.js')
const { embedColor } = require('../../config.json')

module.exports = {
	description: 'Joke prefix command',
	async run (message) {
		const Embed = new MessageEmbed()
			.setTitle('You are using the prefix to get this message?')
			.setColor(embedColor)
			.setTimestamp()

		await message.reply({ embeds: [Embed] })
	}
}
