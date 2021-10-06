const { MessageEmbed } = require('discord.js');
const { embedDesign, ammo } = require('../../config.json');

module.exports = {
	description: 'Ammo charts for different calibers',
	options: [{
		type: 'STRING',
		name: 'caliber',
		description: 'The ammunition caliber',
		required: true,
		choices: Object.keys(ammo).map(choice => { return { name: choice, value: choice }; })
	}],
	run (interaction) {
		const caliber = interaction.options.getString('caliber');
		interaction.reply({
			embeds: [new MessageEmbed()
				.setAuthor(`${caliber} ${embedDesign.ammoTitle}`, embedDesign.ratGodImage, embedDesign.wikiBallistics)
				.setDescription(`${embedDesign.ammoDescription}`)
				.setImage(ammo[caliber])
				.setFooter(embedDesign.gameUpdate)
				.setColor(embedDesign.color)
				.setTimestamp()
			]
		});
	}
};
