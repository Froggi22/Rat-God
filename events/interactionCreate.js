const { general } = require("../config.json")
const commandReply = require("../commandReply.js")

module.exports = {
	async run (interaction, client) {
		if (!interaction.isCommand()) return // Return if interaction isn't a command

		const command = client.commands.get(interaction.commandName)
		if (!command) return

		// Cooldown
		const now = Date.now()
		const expirationTime = client.cooldowns.get(interaction.user.id) + general.cooldown
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000
			return commandReply.interactionReply(interaction, `Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
		}

		client.cooldowns.set(interaction.user.id, now)
		setTimeout(() => client.cooldowns.delete(interaction.user.id), general.cooldown)
		command.run(interaction, client)
	}
}
