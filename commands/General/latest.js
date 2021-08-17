const { MessageEmbed } = require('discord.js')
const { embedDesign } = require('../../config.json')

module.exports = {
	description: 'List of the latest updates/fixes/additions',
	run (interaction) {
		interaction.reply({
			embeds: [new MessageEmbed()
				.setAuthor('Changelogs', embedDesign.ratGodImage, embedDesign.wikiMain)
				.setDescription("```\u200b--1.2--\nAdded Mention and Prefix as joke commands.\nPing commmand is now responding with the actual delay time and a pingpong emoji.\nResponding to missing permissions.\n\n--1.1--\nMaps (incl. commands for all maps).\nCapitalization and punctuation fixes.\nBack-end formatting fixes.\nAdded Timestamps on most embeds.\nPing command is now an embed.\n'Ammo' is now a shortcut for the Ammocmd command.\n\n--1.0--\nCreated Rat god.\nNew general commands: Ping, Help, Latest, Modabuse, Servercount and Support.\nWhen mentioned the bot replies with its prefix.\nNew Tarkov commands:\nAmmocmd (incl. commands for all calibers).```‎")
				.setColor(embedDesign.color)
				.addField('Appreciation letter', 'Thank you for inviting and using my bot!\n I appreciate all critique and improvement suggestions in the Support Server!\n')
				.setTimestamp()
				.setFooter(embedDesign.gameUpdate)]
		})
	}
}
