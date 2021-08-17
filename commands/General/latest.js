const { MessageEmbed } = require('discord.js')
const { embedDesign } = require('../../config.json')

module.exports = {
	description: 'List of the latest updates/fixes/additions',
	run (interaction) {
		interaction.reply({
			embeds: [new MessageEmbed()
				.setAuthor('Latest update', embedDesign.ratGodImage, embedDesign.wikiMain)
				.setDescription('```diff\n# 1.3.0\n\n~ Changed prefix from `%` to `/`.\n--- The command execution will be slash commands, so technically the prefix was removed.\n+ Every command has a Rat God icon and a link to the official wiki.\n--- The link is clickable on the commands title.\n+ 3 second command execution cooldown for each user.\n+ Welcome message in DMs to the guild owner.\n+ Goodbye message in DMs to the guild owner when kicked.\n--- A feedback request message will also be included.\n--- If the feedback goes through, it will confirm it by another message.\n--- If the timer (curr. 10 min) ends, a message will appear.\n- Removed Ammocmd.\n```‎')
				.setColor(embedDesign.color)
				.addField('Appreciation letter', 'Thank you for inviting and using my bot!\n I appreciate all critique and improvement suggestions in the Support Server!\n')
				.setTimestamp()
				.setFooter(embedDesign.gameUpdate)]
		})
	}
}
