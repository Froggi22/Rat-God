const { MessageEmbed } = require('discord.js')
const { embedColor } = require('../../config.json')

module.exports = {
	name: 'prefix',
	description: 'Joke prefix command',
	async execute (message) {
		const Embed = new MessageEmbed()
			.setTitle('You are using the prefix to get this message?')
			.setColor(embedColor)
			.setTimestamp()

		await message.reply({ embeds: [Embed] })
	}
}
