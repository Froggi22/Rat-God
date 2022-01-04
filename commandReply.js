const { general } = require("./config.json")

module.exports = {
	interactionReply: function(interaction, messageContent) { // Function for replying to interactions
		/*const delay = ms => new Promise(resolve => setTimeout(resolve, ms)) // This is for inducing an interaction faliure
		await delay(4000)*/
		interaction.reply(messageContent)
		.catch(err => interaction.channel.send(messageContent)
		.catch(err =>
			interaction.user.send(messageContent)
			.catch(err => console.log(`InteractionReply catch! > ${err}`),
			interaction.user.send(`Interaction failed **and** ${general.sendMessageError}`)
			.catch()
		))
		)
	},
	messageReply: function(message, messageContent) { // Function for replying to standard messages
		message.reply(messageContent)
		.catch(err =>
			message.author.send(messageContent)
			.catch(err => console.log(`MessageReply catch! > ${err}`),
			message.author.send(general.sendMessageError)
			.catch()
		))
	}
}
