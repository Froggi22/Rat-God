import { MessageEmbed, MessageActionRow, MessageButton } from "discord.js"
import { interactionReply, capitalizeWords, ObjectKeyValueSearch } from "../../utils.js"
import { config } from "../../index.js"
import { fetchMaps } from "../../events/ready.js"

export const description = "Information and maps about a specific location"
export const options = [{
	name: "location",
	description: "Specify the location",
	type: "STRING",
	required: true,
	choices: Object.keys(config.locations).map(location => ({ name: capitalizeWords(location), value: location })) // Factory, Shoreline, Labs etc.
}]

let mapsJSONObj = {}

export async function run (interaction) {
	const location = interaction.options.getString("location") // e.g. customs

	if (!mapsJSONObj[location]) { // If obj doesnt have said location
		mapsJSONObj = await fetchMaps(mapsJSONObj, location)
	}

	const BLS = mapsJSONObj[location].BossLocationSpawn.find(BLSObj => BLSObj.BossName.startsWith("boss"))

	let bossEscortAmountCount = 0
	if (BLS?.Supports) {
		for (let i = 0; i < BLS.Supports.length; i++) {
			if (BLS.Supports[i].BossEscortAmount) {
				bossEscortAmountCount += Number(BLS.Supports[i].BossEscortAmount)
			}
		}
	} else if (BLS?.BossEscortAmount) {
		bossEscortAmountCount += Number(BLS.BossEscortAmount)
	}
	const embed = new MessageEmbed()
		.setColor(config.embedDesign.color.gold)
		.setAuthor({ name: "🐀 Escape From Tarkov Maps Wiki", url: config.generalLinks.wikiMaps })
		.setTitle(`${capitalizeWords(location)} guide`)
		.addFields(
			{ name: "Raid Time", value: `${mapsJSONObj[location].escape_time_limit}m`, inline: true },
			{ name: "Players", value: `${mapsJSONObj[location].MinPlayers} - ${mapsJSONObj[location].MaxPlayers}`, inline: true },
			{ name: "Insurance", value: `${mapsJSONObj[location].Insurance ? "Yes" : "No"}`, inline: true },
			{ name: "\u200B", value: "**Extractions**" }
		)
		.setImage(config.locations[location].map)
		.setFooter({ text: config.embedDesign.gameUpdate })

	if (Object.keys(config.locationDesc).includes(location)) {
		embed.setDescription(`*${config.locationDesc[location]}*`)
	} else {
		embed.setDescription(`*${mapsJSONObj[location].Description.trim() || "\u200B"}*`)
	}

	if (BLS?.BossChance !== 0 && BLS?.BossChance !== undefined) { // If the boss can spawn, then add the info
		embed.setDescription(`${embed.description}\n\n**Boss:** ${ObjectKeyValueSearch(config.locationBossName, BLS.BossName.replace("boss", ""))}\n**Follower count:** ${bossEscortAmountCount}\n**Spawn:** ${BLS.BossZone.replace(/Zone/g, "").replace(/,/g, ", ")}\n**Spawn chance:** ${BLS.BossChance}%\n`)
	}
	const InfofieldsLength = embed.fields.length

	for (let i = 0; i < mapsJSONObj[location].exits.length; i++) {
		embed.addField(`${capitalizeWords(mapsJSONObj[location].exits[i].Name.replace("EXFIL_", "").replace(/_/g, " "))}`, `Chance: ${mapsJSONObj[location].exits[i].Chance}%\nTime: ${mapsJSONObj[location].exits[i].ExfiltrationTime}s`, true)
	}

	for (let i = 0; i < (3 - ((embed.fields.length - InfofieldsLength) % 3)) % 3; i++) {
		embed.addField("\u200B", "\u200B", true) // Add whitespace fields for nice formatting, (Fills up so the embed.fields.length % 3 === 0)
	}

	const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setURL(`https://escapefromtarkov.fandom.com/wiki/${location}`)
				.setLabel("Wiki")
				.setStyle("LINK")
		)

	if (config.locations[location].interactive) {
		row.addComponents(
			new MessageButton()
				.setURL(config.locations[location].interactive)
				.setLabel("Interactive Map")
				.setStyle("LINK")
		)
	}

	for (const specialMap in config.locations[location]) { // All other maps / buttons
		if (specialMap !== "map" && specialMap !== "interactive") {
			row.addComponents(
				new MessageButton()
					.setCustomId(`location-${location}-${specialMap.replace(" ", "_").replace("-", "").toLowerCase()}`)
					.setLabel(`${capitalizeWords(specialMap)} Map`)
					.setStyle("PRIMARY")
			)
		}
	}

	return interactionReply(interaction, { messageEmbed: embed, messageComponents: [row] })
}
