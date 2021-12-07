const { general } = require("../config.json")

module.exports = {
	async run (interaction, client) {
		if (!interaction.isCommand()) return

		const command = client.commands.get(interaction.commandName)

		if (!command) return
		const date = new Date().toISOString().replace("T", " ").replace("Z", "")
		//console.log(`${date} || ${interaction.user.tag} || Interaction`)

		// Cooldown
		const now = Date.now()
		const expirationTime = client.cooldowns.get(interaction.user.id) + general.cooldown
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000
			return interaction.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
		}

		client.cooldowns.set(interaction.user.id, now)

		setTimeout(() => client.cooldowns.delete(interaction.user.id), general.cooldown)

		command.run(interaction, client)
	}
}
