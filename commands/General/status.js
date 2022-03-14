import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../commandReply.js"
import { config } from "../../index.js"
import fetch from "node-fetch"
// import { readFile } from "fs/promises"

let tarkovServiceStatus
export async function fetchStatus () {
	// const serviceStatus = JSON.parse(await readFile("tarkovServiceStatus.json")) // Used for mass-testing/restarting when you don't want to spam requests to the API. Uncomment this code line & import readFile but also comment out the fetch. Open the API URL in your browser, save as json file in project directory.
	const url = "https://status.escapefromtarkov.com/api/services"
	const settings = {
		method: "GET"
	}
	const serviceStatus = await fetch(url, settings)
		.then(async response => {
			console.log(response)
			return await response.json()
		})
		.catch(error => console.log(`Status fetch error > ${error}`))
	return {
		serviceStatus,
		fetched: Date.now()
	}
}

export const description = "Current status on Tarkov services"
export async function run (interaction) {
	if (!tarkovServiceStatus?.fetched || Date.now() - tarkovServiceStatus.fetched > 60 * 60 * 1000) tarkovServiceStatus = await fetchStatus() // If fetch time data is undefined or older than an hour, fetch again
	if (!tarkovServiceStatus?.serviceStatus) { // If fetching was unsuccessful, reply with an error response
		interactionReply(interaction, {
			embeds: [new MessageEmbed()
				.setColor(config.embedDesign.red)
				.setAuthor({ name: "🐀 Current Tarkov Service Status", url: "https://status.escapefromtarkov.com" })
				.setDescription("Something went wrong when fetching the current Tarkov service status, please try again!")
			]
		}, true)
		return
	}

	const embed = new MessageEmbed()
		.setAuthor({ name: "🐀 Current Tarkov Service Status", url: "https://status.escapefromtarkov.com" })
	let greenCounter = 0 // "Green" service counter
	for (let i = 0; i < tarkovServiceStatus.serviceStatus.length; i++) {
		if (tarkovServiceStatus.serviceStatus[i].status === 0) { // If there's no issue with the service
			embed.addField(tarkovServiceStatus.serviceStatus[i].name, ":green_circle:", true) // Add the name, a green circle with inline property
			greenCounter++
		} else embed.addField(tarkovServiceStatus.serviceStatus[i].name, ":red_circle:", true) // If there's an issue with the service - add the name, a red circle with inline property
	}
	const greenQuota = greenCounter / tarkovServiceStatus.serviceStatus.length // Calculate the amount of greens - which will be used to determine the embed color
	if (greenQuota === 1) embed.setColor(config.embedDesign.green)			// Green	(10 Green)
	else if (greenQuota >= 0.75) embed.setColor(config.embedDesign.yellow)	// Yellow	(7-9 Green)
	else if (greenQuota >= 0.5) embed.setColor(config.embedDesign.orange)	// Orange	(5-6 Green)
	else embed.setColor(config.embedDesign.red)								// Red		(0-4 Green)
	interactionReply(interaction, { embeds: [embed] })
}
