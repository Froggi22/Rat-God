import { interactionReply } from "../commandReply.js"
import { config, cooldowns, commands } from "../index.js"
import { capitalizeFirstChar } from "../utils.js"

export function run (interaction, client) {
	if (interaction.isCommand()) {
		const command = commands.get(interaction.commandName)
		if (!command) return

		// Cooldown
		const now = Date.now()
		const expirationTime = cooldowns.get(interaction.user.id) + config.general.cooldown
		if (now < expirationTime) return interactionReply(interaction, { messageContent: `Please wait ${((expirationTime - now) / 1000).toFixed(1)} more second(s) before reusing the \`${capitalizeFirstChar(command.name)}\` command.` })

		cooldowns.set(interaction.user.id, now) // Set user cooldown
		setTimeout(() => cooldowns.delete(interaction.user.id), config.general.cooldown)

		command.run(interaction, client)
	} else if (interaction.isButton()) client.emit("buttonCreate", interaction, client)
}
