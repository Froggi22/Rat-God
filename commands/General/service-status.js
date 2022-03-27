import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../utils.js"
import { config } from "../../index.js"
import got from "got"

/**
 * Fetching a JSON with all tarkov service statuses
 * @returns {*} The JSON if fetching was successful, else undefined
 */
async function fetchStatus () {
	try {
		const requestBody = JSON.stringify({
			query: `
				{
					status {
						currentStatuses {
						name
						message
						status
					}
					messages {
						time
						type
						content
						solveTime
					}
				}
			}
			`
		})

		const response = await got.post(config.generalLinks.tarkovAPIStatus, {
			responseType: "json",
			body: requestBody
		})
		console.log("====================")
		console.log(response)
		console.log("====================")
		if (response.statusCode !== 200) throw new Error("Status fetch failed")
		else return response.body
	} catch (error) {
		console.error(error)
		return undefined
	}
}

const serviceStatus = {}

export const description = "Current status on Tarkov services"
export async function run (interaction) {
	if (!serviceStatus?.statuses || new Date() - serviceStatus?.fetched > 15 * 60 * 1000) { // If status hasn't fetched or older than 15m
		const delayStart = new Date()
		serviceStatus.statuses = await fetchStatus()
		serviceStatus.fetched = new Date()
		console.log(`fetchStatus() delay: ${new Date() - delayStart}ms`)
	}

	console.log("====================")
	console.log(JSON.stringify(serviceStatus?.statuses, null, 2))
	console.log("====================")

	if (!serviceStatus?.statuses) {
		interactionReply(interaction, {
			messageEmbed: new MessageEmbed()
				.setColor(config.embedDesign.color.red)
				.setAuthor({ name: "🐀 Current Tarkov Service Status", url: config.generalLinks.tarkovOfficialStatus })
				.setDescription("Uh oh, something went wrong when fetching the current Tarkov service status, please try again!"),
			messageEphemeral: true
		})
	}

	const embed = new MessageEmbed()
		.setAuthor({ name: "🐀 Current Tarkov Service Status", url: config.generalLinks.tarkovOfficialStatus })

	let greenCounter = 0 // "Green" service counter
	for (let i = 0; i < serviceStatus.statuses.data.status.currentStatuses.length; i++) {
		if (serviceStatus.statuses.data.status.currentStatuses[i].status === 0) { // If there's no issue with the service
			embed.addField(serviceStatus.statuses.data.status.currentStatuses[i].name, ":green_circle:", true) // Add the name, a green circle with inline property
			greenCounter++
		} else embed.addField(serviceStatus.statuses.data.status.currentStatuses[i].name, ":red_circle:", true) // If there's an issue with the service - add the name, a red circle with inline property
	}

	if (serviceStatus.statuses.data.status.messages.length !== 0 && Array.isArray(serviceStatus.statuses.data.status.messages)) { // Has content and is an array
		if (serviceStatus.statuses.data.status.messages[0].length <= 1024) { // 1024 is the embed field value character limit
			embed.addField("Messages", serviceStatus.statuses.data.status.messages[0])
		} else {
			embed.addField("Messages", `${serviceStatus.statuses.data.status.messages[0].slice(0, (1024 - 3))}...`) // Slices off message so that it has exactly the space for the 3 extra dots
		}
	}

	const greenQuota = greenCounter / serviceStatus.statuses.data.status.currentStatuses.length // Calculate the amount of greens - which will be used to determine the embed color
	if (greenQuota === 1) embed.setColor(config.embedDesign.color.green)			// Green	(10 Green)
	else if (greenQuota >= 0.75) embed.setColor(config.embedDesign.color.yellow)	// Yellow	(7-9 Green)
	else if (greenQuota >= 0.5) embed.setColor(config.embedDesign.color.orange)		// Orange	(5-6 Green)
	else embed.setColor(config.embedDesign.color.red)								// Red		(0-4 Green)
	return interactionReply(interaction, { messageEmbed: embed })
}
