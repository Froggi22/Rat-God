import { interactionReply } from "../commandReply.js"
import { config, cooldowns, commands } from "../index.js"

export function run (interaction, client) {
	if (!interaction.isCommand()) return // Return if interaction isn't a command

	const command = commands.get(interaction.commandName)
	if (!command) return

	// Cooldown
	const now = Date.now()
	const expirationTime = cooldowns.get(interaction.user.id) + config.general.cooldown
	if (now < expirationTime) {
		const timeLeft = (expirationTime - now) / 1000
		return interactionReply(interaction, `Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
	}
	cooldowns.set(interaction.user.id, now)
	setTimeout(() => cooldowns.delete(interaction.user.id), config.general.cooldown)

	command.run(interaction, client)
}
