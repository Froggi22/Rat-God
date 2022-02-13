const { general } = require("./config.json")

module.exports = {
	// Function for replying to interactions
	interactionReply: async (interaction, messageContent) => {
		// This is for inducing an interaction failure
		/* const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
		await delay(4000) */

		await interaction.editReply(messageContent)
			.catch(() => {
				interaction.channel.send(messageContent)
					.catch(async () => {
						await interaction.user.send(messageContent)
						await interaction.user.send(`Interaction failed **and** ${general.sendMessageError}`)
							.catch(error => console.log(`InteractionReply catch! > ${error}`))
					})
			})
	},
	// Function for replying to standard messages
	messageReply: async (message, messageContent) => {
		const botmessage = await message.reply({ content: "Rat God is thinking...", allowedMentions: { repliedUser: false } })
		await botmessage.edit(messageContent)
			.catch(async () => {
				console.log(console.error)
				await message.author.send(messageContent)
				await message.author.send(general.sendMessageError)
					.catch(error => console.log(`MessageReply catch! > ${error}`))
			})
	}
	await interaction.deferReply({ ephemeral: true }).catch()
}
