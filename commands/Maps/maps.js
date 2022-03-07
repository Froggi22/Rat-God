import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../commandReply.js"
import { config } from "../../index.js"

export const description = "Map guides"
export const options = [
	{
		name: "customs",
		description: "Customs area",
		type: "SUB_COMMAND",
		options: [
			{
				name: "map",
				description: "What kind of map guide?",
				type: "STRING",
				choices: config.maps.customs.map(choice => { return { name: choice, value: choice } })
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
				choices: config.maps.factory.map(choice => { return { name: choice, value: choice } })
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
				choices: config.maps.interchange.map(choice => { return { name: choice, value: choice } })
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
				choices: config.maps.lighthouse.map(choice => { return { name: choice, value: choice } })
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
				choices: config.maps.reserve.map(choice => { return { name: choice, value: choice } })
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
				choices: config.maps.shoreline.map(choice => { return { name: choice, value: choice } })
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
				choices: config.maps.labs.map(choice => { return { name: choice, value: choice } })
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
				choices: config.maps.woods.map(choice => { return { name: choice, value: choice } })
			}
		]
	}
]
export function run (interaction) {
	const location = interaction.options.getSubcommand() // Fetch location, e.g. customs
	const map = interaction.options.getString("map") || "null" // What kind of map, e.g. Hidden Stashes
	const locationCap = location[0].toUpperCase() + location.slice(1) // Capitalize location name, e.g. customs -> Customs

	return interactionReply(interaction, {
		embeds: [new MessageEmbed()
			.setColor(config.embedDesign.defaultColor)
			.setAuthor({ name: "🐀 Escape From Tarkov Maps Wiki", url: config.embedDesign.wikiMaps })
			.setTitle(`${locationCap} ${config.maps.titles[map]}`)
			.setDescription(config.maps.descriptions[map][location] || config.maps.descriptions[map])
			.setImage(config.maps.images[location][map])
			.addFields(config.maps.fields[location][map])
			.setFooter({ text: config.embedDesign.gameUpdate })
		]
	})
}
