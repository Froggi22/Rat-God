const { MessageEmbed } = require('discord.js');
const { embedDesign, general } = require('../../config.json');

module.exports = {
	description: 'List of the latest updates',
	run (interaction) {
		interaction.reply({
			embeds: [new MessageEmbed()
				.setAuthor('Latest update', embedDesign.ratGodImage, embedDesign.wikiMain)
				.setDescription(`\`\`\`diff\n# ${general.version}\n\n${general.latestUpdateMessage}‎`)
				.setColor(embedDesign.color)
				.addField('Appreciation letter', 'Thank you for inviting and using my bot!\n I appreciate all feedback in the Support Server!\n')
				.setTimestamp()
				.setFooter(embedDesign.gameUpdate)]
		});
	}
};
