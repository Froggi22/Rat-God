import { config } from "./index.js"

// Function for replying to interactions
export async function interactionReply (interaction, messageContent) {
	// This is for inducing an interaction failure
	/* const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
	await delay(4000) */

	let error;
	[, error] = await tryCatchPromise(interaction.deferReply())
	if (!error) {
		[, error] = await tryCatchPromise(interaction.editReply(messageContent))
		// If both deferReply and editReply successful then return
		if (!error) return
	}
	[, error] = await tryCatchPromise(interaction.channel.send(messageContent))
	// If channel.send successful then return
	if (!error) return
	[, error] = await tryCatchPromise(interaction.user.send(messageContent))
	if (!error) {
		[, error] = await tryCatchPromise(interaction.user.send(`Interaction failed **and** ${config.general.sendMessageError}`))
		// If both user.send successful then return
		if (!error) return
	}

	console.log(`InteractionReply catch! > ${error}`)
}

// Function for replying to standard messages
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

export async function tryCatchPromise (promise) {
	try {
		const data = await promise
		return [data, null]
	} catch (error) {
		return [null, error]
	}
}
