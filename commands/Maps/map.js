import { MessageEmbed, MessageActionRow, MessageButton } from "discord.js"
import { interactionReply } from "../../commandReply.js"
import { config } from "../../index.js"
import { fetchMaps } from "../../events/ready.js"

export const description = "Information and maps about a specific location"
export const options = [{
	name: "location",
	description: "What location",
	type: "STRING",
	required: true,
	choices: config.maps.maplist.map(location => ({ name: location, value: location })) // Factory, Shoreline, Labs etc.
}]

let mapsJSONObj = {}

export async function run (interaction) {
	const location = interaction.options.getString("location") // e.g. Customs

	if (!mapsJSONObj[location]) { // If obj doesnt have said location
		const delayStart = new Date()
		mapsJSONObj = await fetchMaps(mapsJSONObj, location)
		console.log(`fetchMaps() delay: ${new Date() - delayStart}ms`)
	}

	const BLS = mapsJSONObj[location].BossLocationSpawn.find(BLSObj => BLSObj.BossName !== "sectantPriest")

	const embed = new MessageEmbed()
		.setColor(config.embedDesign.defaultColor)
		.setAuthor({ name: "🐀 Escape From Tarkov Maps Wiki", url: config.embedDesign.wikiMaps })
		.setTitle(`${location} guide`)
		.setDescription(`${mapsJSONObj[location].Description || "\u200B"}\n\nBoss: ${BLS.BossName.replace("boss", "")}\nFollower count: ${BLS.BossEscortAmount}\nSpawn: ${BLS.BossZone.replace(/Zone/g, "").replace(/,/g, ", ")}\nSpawn chance: ${BLS.BossChance}%`)
		.addFields(
			{ name: "Raid Time", value: `${mapsJSONObj[location].escape_time_limit}m`, inline: true },
			{ name: "Players", value: `${mapsJSONObj[location].MinPlayers} - ${mapsJSONObj[location].MaxPlayers}`, inline: true },
			{ name: "Insurance", value: `${mapsJSONObj[location].Insurance ? "Yes" : "No"}`, inline: true },
			{ name: "\u200B", value: "**Extractions**" }
		)
		.setImage(config.maps.images[location.toLowerCase()].Map)
		.setFooter({ text: config.embedDesign.gameUpdate })

	for (let i = 0; i < mapsJSONObj[location].exits.length; i++) {
		embed.addField(`${mapsJSONObj[location].exits[i].Name}`, `Chance: ${mapsJSONObj[location].exits[i].Chance}%\nTime: ${mapsJSONObj[location].exits[i].ExfiltrationTime}s`, true)
	}
	for (let i = 0; i < (3 - ((embed.fields.length - 4) % 3)) % 3; i++) embed.addField("\u200B", "\u200B", true) // Add whitespace fields for nice formatting, (Fills up so the embed.fields.length % 3 === 0)

	return interactionReply(interaction, { embeds: [embed] })
}
