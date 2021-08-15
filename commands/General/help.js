const { MessageEmbed } = require('discord.js')
const { embedDesign, general } = require('../../config.json')

module.exports = {
	description: 'A mini-list of Rat Gods commands',
	run (interaction) {
		interaction.reply({
			embeds: [new MessageEmbed().setTitle('Rat Gods Commands')
				.setDescription('Leave suggestions to Froggi22#3436')
				.setColor(embedDesign.color)
				.addFields(
					{ name: 'Commands', value: `${general.prefixMessage}.\n\`Ammo\` - Shows all ammo commands. \n\`Maps\` - Shows all maps commands.\n‏‏‎\n\`Ping\` - Pings the bot.\n\`Modabuse\` - For those complaining about mod abuse.\n\`Servercount\` - How many servers the bot is invited to.\n\`Support\` - Sends support link.‎\n` },
					{ name: 'Version 1.3.0', value: `‏‏‎**Last updated -** ${general.lastUpdated}\n\`Latest\` - Shows latest updates.\n‏‏‎ ‎` }
				)
				.setTimestamp()
				.setFooter(embedDesign.gameUpdate)]
		})
	}
}
