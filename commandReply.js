const { general } = require("./config.json")

module.exports = {
	interactionReply: function (interaction, messageContent) { // Function for replying to interactions
		/* const delay = ms => new Promise(resolve => setTimeout(resolve, ms)) // This is for inducing an interaction faliure
		await delay(4000) */
		interaction.reply(messageContent)
			.catch(() => {
				interaction.channel.send(messageContent)
					.catch(() => {
						interaction.user.send(messageContent)
							.catch(error => {
								console.log(`InteractionReply catch! > ${error}`)
								interaction.user.send(`Interaction failed **and** ${general.sendMessageError}`)
									.catch()
							})
					})
			})
	},
	messageReply: function (message, messageContent) { // Function for replying to standard messages
		message.reply(messageContent)
			.catch(() => {
				message.author.send(messageContent)
					.catch(error => {
						console.log(`MessageReply catch! > ${error}`)
						message.author.send(general.sendMessageError)
							.catch()
					})
			})
	}
}
