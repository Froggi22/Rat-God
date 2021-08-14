const { MessageEmbed } = require('discord.js')
const { embedDesign, ammo } = require('../../config.json')

module.exports = {
	name: 'ammo',
	description: 'Ammo charts for different calibers',
	options: [{
		type: 'STRING',
		name: 'caliber',
		description: 'The ammunition caliber',
		required: true,
		choices: Object.keys(ammo).map(choice => { return { name: choice, value: choice } })
	}],
	execute (interaction) {
		const caliber = interaction.options.getString('caliber')
		return interaction.reply({
			embeds: [new MessageEmbed()
				.setTitle(`${caliber} ${embedDesign.ammoTitle}`)
				.setDescription(`${embedDesign.ammoDescription}`)
				.setImage(ammo[caliber])
				.setFooter(embedDesign.gameUpdate)
				.setColor(embedDesign.color)
				.setTimestamp()
			]
		})
	}
}
