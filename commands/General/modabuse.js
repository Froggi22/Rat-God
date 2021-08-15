const { MessageEmbed } = require('discord.js')
const { embedDesign, general } = require('../../config.json')

module.exports = {
	description: 'For those complaining about mod abuse',
	run (interaction) {
		interaction.reply({
			embeds: [new MessageEmbed()
				.setTitle('Mod abuse')
				.setColor(embedDesign.color)
				.setImage(general.modAbuseImage)
				.setTimestamp()]
		})
	}
}
