import { messageReply } from "../utils.js"
import { config, commands } from "../index.js"

export async function run (message, client) {
	const botId = client.user.id
	if (message.content.match(RegExp(`^<@!?${botId}>`))) { // If message starts with bot ping
		return messageReply(message, config.general.prefixMessage) // Reply with prefix
	}

	if (!config.general.developers.includes(message.author.id)) return // If message isn't from developers[] then return

	switch (message.content) { // Check for interaction update commands
	case "!guild":
		await client.guilds.cache.get(config.general.developerGuildID).commands.set(commands.map(command => command))
		return messageReply(message, "Deployed Guild Slash Commands!")
	case "!removeguild":
		await client.guilds.cache.get(config.general.developerGuildID).commands.set([])
		return messageReply(message, "Removed Guild Slash Commands!")
	case "!global":
		await client.application.commands.set(commands.map(command => command))
		return messageReply(message, "Deployed Global Slash Commands!")
	case "!removeglobal":
		await client.application.commands.set([])
		return messageReply(message, "Removed Global Slash Commands!")
	}
}
