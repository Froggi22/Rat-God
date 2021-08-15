const { MessageEmbed } = require('discord.js')
const { embedColor, lastUpdated, gameUpdate } = require('../../config.json')

module.exports = {
	description: 'A mini-list of Rat Gods commands',
	async run (message) {
		const Embed = new MessageEmbed()
			.setTitle('Rat Gods Commands')
			.setDescription('Leave suggestions to Froggi22#3436')
			.setColor(embedColor)
			.addFields(
				{ name: 'Commands', value: '‎‎‏‏‎My prefix is "%".\n`Ping` - Pings the bot.\n`Modabuse` - For those complaining about mod abuse.\n`Servercount` - How many servers the bot is invited to.\n`Support` - Sends support link.\n`Ammocmd` - Shows all ammo commands. \n`Maps` - Shows all maps commands.\n‏‏‎ ‎' },
				{ name: 'Version 0.1.1', value: '‏‏‎**Last updated -** `' + lastUpdated + '`\n`Latest` - Shows latest updates.\n‏‏‎ ‎' }
			)
			.setTimestamp()
			.setFooter(gameUpdate)

		await message.reply({ embeds: [Embed] })
	}
}
