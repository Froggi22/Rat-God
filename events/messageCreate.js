const { general } = require("../config.json")
const commandReply = require("../commandReply.js")

module.exports = {
	async run (message, client) {
		const botId = client.user.id
		if (message.content.match(RegExp(`^<@!?${botId}>`))) { // If message starts with bot ping
			return commandReply.messageReply(message, general.prefixMessage) // Reply with prefix
		}

		if (!general.developers.includes(message.author.id)) return // If message isn't from developers[] then return

		switch (message.content) { // Check for interaction update commands
		case "!guild":
			await client.guilds.cache.get(general.developerGuildID).commands.set(client.commands.map(command => command))
			return commandReply.messageReply(message, "Deployed Guild Slash Commands")
		case "!global":
			await client.application.commands.set(client.commands.map(command => command))
			return commandReply.messageReply(message, "Deployed Global Slash Commands")
		case "!removeguild":
			await client.guilds.cache.get(general.developerGuildID).commands.set([])
			return commandReply.messageReply(message, "Removed Guild Slash Commands")
		}
	}
}
