const { general } = require("./config.json")

module.exports = {
	// Function for replying to interactions
	interactionReply: function (interaction, messageContent) {
		// This is for inducing an interaction failure
		// const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
		// await delay(4000)

		interaction.reply(messageContent)
			.catch(() => {
				interaction.channel.send(messageContent)
					.catch(() => {
						interaction.user.send(messageContent)
						interaction.user.send(`Interaction failed **and** ${general.sendMessageError}`)
							.catch(error => console.log(`InteractionReply catch! > ${error}`))
					})
			})
	},
	// Function for replying to standard messages
	messageReply: function (message, messageContent) {
		message.reply(messageContent)
			.catch(() => {
				message.author.send(messageContent)
				message.author.send(general.sendMessageError)
					.catch(error => console.log(`MessageReply catch! > ${error}`))
			})
	}
}
