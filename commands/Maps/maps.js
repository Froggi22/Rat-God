const { MessageEmbed } = require('discord.js')
const { embedDesign, maps } = require('../../config.json')

module.exports = {
	description: 'Map guides',
	options: [
		{
			name: 'factory',
			description: 'Factory area',
			type: 'SUB_COMMAND',
			options: [
				{
					name: 'map',
					description: 'What kind of map guide?',
					type: 'STRING',
					choices: maps.factory.map(choice => { return { name: choice, value: choice } })
				}
			]
		},
		{
			name: 'woods',
			description: 'Woods area',
			type: 'SUB_COMMAND',
			options: [
				{
					name: 'map',
					description: 'What kind of map guide?',
					type: 'STRING',
					choices: maps.woods.map(choice => { return { name: choice, value: choice } })
				}
			]
		},
		{
			name: 'customs',
			description: 'Customs area',
			type: 'SUB_COMMAND',
			options: [
				{
					name: 'map',
					description: 'What kind of map guide?',
					type: 'STRING',
					choices: maps.customs.map(choice => { return { name: choice, value: choice } })
				}
			]
		},
		{
			name: 'shoreline',
			description: 'Shoreline area',
			type: 'SUB_COMMAND',
			options: [
				{
					name: 'map',
					description: 'What kind of map guide?',
					type: 'STRING',
					choices: maps.shoreline.map(choice => { return { name: choice, value: choice } })
				}
			]
		},
		{
			name: 'interchange',
			description: 'Interchange area',
			type: 'SUB_COMMAND',
			options: [
				{
					name: 'map',
					description: 'What kind of map guide?',
					type: 'STRING',
					choices: maps.interchange.map(choice => { return { name: choice, value: choice } })
				}
			]
		},
		{
			name: 'labs',
			description: 'The Lab area',
			type: 'SUB_COMMAND',
			options: [
				{
					name: 'map',
					description: 'What kind of map guide?',
					type: 'STRING',
					choices: maps.labs.map(choice => { return { name: choice, value: choice } })
				}
			]
		},
		{
			name: 'reserve',
			description: 'Reserve area',
			type: 'SUB_COMMAND',
			options: [
				{
					name: 'map',
					description: 'What kind of map guide?',
					type: 'STRING',
					choices: maps.reserve.map(choice => { return { name: choice, value: choice } })
				}
			]
		}
	],
	run (interaction) {
		const location = interaction.options.getSubcommand()
		const map = interaction.options.getString('map') || 'null'
		const locationCap = location[0].toUpperCase() + location.slice(1)

		return interaction.reply({
			embeds: [new MessageEmbed()
				.setTimestamp()
				.setColor(embedDesign.color)
				.setFooter(embedDesign.gameUpdate)
				.setTitle(`${locationCap} ${maps.titles[map]}`)
				.setDescription(maps.descriptions[map][location] || maps.descriptions[map])
				.setImage(maps.images[location][map])
				.addFields(maps.fields[location][map])
			]
		})
	}
}
