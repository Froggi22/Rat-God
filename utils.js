import { config } from "./index.js"

/**
 * Capitalizes each words first letter in a string.
 * @param {string} string Any string
 * @returns {string} String with first letters in each word capitalized
 */
export function capitalizeWords (string) {
	return string
		.split(" ")
		.map(word => word.match(/[a-z]/i) ? word.replace(word.match(/[a-z]/i)[0], word.match(/[a-z]/i)[0].toUpperCase()) : word)
		.join(" ")
}

/**
 * Sends a reply to an interaction.
 * @param {*} interaction The Discord interaction
 * @param {object} messageItems An object specifying the message details
 */
export async function interactionReply (interaction, { messageContent = undefined, messageEmbed = undefined, messageEphemeral = false, messageComponents = undefined }) {
	// This is for inducing an interaction failure
	/* const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
	await delay(4000) */

	let error;
	[, error] = await tryCatchPromise(interaction.deferReply({ ephemeral: messageEphemeral }))
	if (!error) {
		[, error] = await tryCatchPromise(interaction.editReply({ content: messageContent, embeds: messageEmbed ? [messageEmbed] : undefined, components: messageComponents ? [messageComponents] : undefined }))
		// If both deferReply and editReply successful then return
		if (!error) return
	}
	[, error] = await tryCatchPromise(interaction.channel.send({ content: messageContent, embeds: messageEmbed ? [messageEmbed] : undefined }))
	// If channel.send successful then return
	if (!error) return
	[, error] = await tryCatchPromise(interaction.user.send({ content: messageContent, embeds: messageEmbed ? [messageEmbed] : undefined }))
	if (!error) {
		[, error] = await tryCatchPromise(interaction.user.send(`Interaction failed **and** ${config.general.sendMessageError}`))
		// If both user.send successful then return
		if (!error) return
	}

	console.log(`InteractionReply catch! > ${error}`)
}

/**
 * Sends a reply to a message command.
 * @param {*} message The Discord message
 * @param {string} messageContent Text in the message
 */
export async function messageReply (message, messageContent) {
	let botmessage, error
	[botmessage, error] = await tryCatchPromise(message.reply({ content: "Rat God is thinking :thinking:", allowedMentions: { repliedUser: false } }))

	if (!error) {
		[, error] = await tryCatchPromise(botmessage.edit(messageContent))
		// If both reply and edit successful then return
		if (!error) return
	}

	[botmessage, error] = await tryCatchPromise(message.author.send(messageContent))
	if (!error) {
		[botmessage, error] = await tryCatchPromise(botmessage.author.send(config.general.sendMessageError))
		// If both send author successful then return
		if (!error) return
	}

	console.log(`MessageReply catch! > ${error}`)
}

/**
 * Takes a promise and handles it.
 * @param {promise} promise Any promise
 * @returns {array} Arryay with one truthy element - data or error
 */
async function tryCatchPromise (promise) {
	try {
		const data = await promise
		return [data, null]
	} catch (error) {
		return [null, error]
	}
}
