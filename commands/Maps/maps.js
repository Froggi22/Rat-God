const { MessageEmbed } = require("discord.js")
const { embedDesign, maps } = require("../../config.json")
const commandReply = require("../../commandReply.js")

module.exports = {
	description: "Map guides",
	options: [
		{
			name: "customs",
			description: "Customs area",
			type: "SUB_COMMAND",
			options: [
				{
					name: "map",
					description: "What kind of map guide?",
					type: "STRING",
					choices: maps.customs.map(choice => { return { name: choice, value: choice } })
				}
			]
		},
		{
			name: "factory",
			description: "Factory area",
			type: "SUB_COMMAND",
			options: [
				{
					name: "map",
					description: "What kind of map guide?",
					type: "STRING",
					choices: maps.factory.map(choice => { return { name: choice, value: choice } })
				}
			]
		},
		{
			name: "interchange",
			description: "Interchange area",
			type: "SUB_COMMAND",
			options: [
				{
					name: "map",
					description: "What kind of map guide?",
					type: "STRING",
					choices: maps.interchange.map(choice => { return { name: choice, value: choice } })
				}
			]
		},
		{
			name: "lighthouse",
			description: "Lighthouse area",
			type: "SUB_COMMAND",
			options: [
				{
					name: "map",
					description: "What kind of map guide?",
					type: "STRING",
					choices: maps.lighthouse.map(choice => { return { name: choice, value: choice } })
				}
			]
		},
		{
			name: "reserve",
			description: "Reserve area",
			type: "SUB_COMMAND",
			options: [
				{
					name: "map",
					description: "What kind of map guide?",
					type: "STRING",
					choices: maps.reserve.map(choice => { return { name: choice, value: choice } })
				}
			]
		},
		{
			name: "shoreline",
			description: "Shoreline area",
			type: "SUB_COMMAND",
			options: [
				{
					name: "map",
					description: "What kind of map guide?",
					type: "STRING",
					choices: maps.shoreline.map(choice => { return { name: choice, value: choice } })
				}
			]
		},
		{
			name: "labs",
			description: "The Lab area",
			type: "SUB_COMMAND",
			options: [
				{
					name: "map",
					description: "What kind of map guide?",
					type: "STRING",
					choices: maps.labs.map(choice => { return { name: choice, value: choice } })
				}
			]
		},
		{
			name: "woods",
			description: "Woods area",
			type: "SUB_COMMAND",
			options: [
				{
					name: "map",
					description: "What kind of map guide?",
					type: "STRING",
					choices: maps.woods.map(choice => { return { name: choice, value: choice } })
				}
			]
		}
	],
	run (interaction) {
		const location = interaction.options.getSubcommand() // Fetch location, e.g. customs
		const map = interaction.options.getString("map") || "null" // What kind of map, e.g. Hidden Stashes
		const locationCap = location[0].toUpperCase() + location.slice(1) // Capitalize location name, e.g. customs -> Customs

		return commandReply.interactionReply(interaction, {
			embeds: [new MessageEmbed()
				.setColor(embedDesign.defaultColor)
				.setAuthor({ name: "Escape From Tarkov Maps Wiki", url: embedDesign.wikiMaps, iconURL: embedDesign.ratGodImage })
				.setTitle(`${locationCap} ${maps.titles[map]}`)
				.setDescription(maps.descriptions[map][location] || maps.descriptions[map])
				.setImage(maps.images[location][map])
				.addFields(maps.fields[location][map])
				.setFooter({ text: embedDesign.gameUpdate })
				.setTimestamp()
			]
		})
	}
}
