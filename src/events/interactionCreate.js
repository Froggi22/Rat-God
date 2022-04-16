import { interactionReply, capitalizeWords } from "../utils.js"
import { config, cooldowns, commands } from "../index.js"

export function run (interaction, client) {
	if (interaction.isCommand()) {
		const cmd = commands.get(interaction.commandName)
		if (!cmd) return

		// Cooldown
		const now = Date.now()
		const expirationTime = cooldowns.get(interaction.user.id) + config.general.cooldown
		if (now < expirationTime) return interactionReply(interaction, { messageContent: `Please wait **${((expirationTime - now) * 0.001).toFixed()}s** before reusing the \`${capitalizeWords(cmd.name)}\` command.` })

		cooldowns.set(interaction.user.id, now) // Set user cooldown
		setTimeout(() => cooldowns.delete(interaction.user.id), config.general.cooldown)

		cmd.run(interaction, client)
	} else if (interaction.isButton()) client.emit("buttonCreate", interaction, client)
}
