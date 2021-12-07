const { MessageEmbed } = require("discord.js")
const { embedDesign } = require("../config.json")

module.exports = {
	async run (guild, client) {
		const date = new Date().toISOString().replace("T", " ").replace("Z", "")
		//console.log(`${date} || Rat God is no longer in "${guild.name}", and is now in "${client.guilds.cache.size}" servers.`)
		client.user.setPresence({ activities: [{ type: "LISTENING", name: `/Help | In ${client.guilds.cache.size} Servers` }] })

		const owner = await guild.fetchOwner().catch(error => console.log(`Error: ${error}`))
		if (!owner) return //console.log("Cannot Fetch Owner")
		const embed = new MessageEmbed()
			.setTitle("Sorry to see you go!")
			.setDescription("If you would like to give any feedback on what we should improve, please send that in **one** message below!")
			.setThumbnail("https://cdn.discordapp.com/attachments/865617643449221141/866742462093852742/Rat_God.jpg")
			.setColor(embedDesign.color)
			.setTimestamp()
		// Sorry to see you go
		owner.send({ embeds: [embed] })
			.then(() => {
				const filter = message => message.content.length > 2
				const channel = client.channels.cache.get("867736540645031966")

				owner.user.dmChannel.awaitMessages({ filter, max: 1, time: 600000, errors: ["time"] })
					.then(collected => {
						// #Suggestions
						embed
							.setTitle(`Server: ${guild.name}`)
							.setDescription(`Owner: ${owner.user.tag}`)
							.setFields([{ name: "Message", value: `${collected.first().content}` }])
						channel.send({ embeds: [embed] })
						// Feedback Received
						embed
							.setTitle("Feedback Received!")
							.setDescription("Thank you for sending the feedback.\nWe will take a look at it as soon as possible!")
							.setFields([])
						owner.user.dmChannel.send({ embeds: [embed] })
					})
					.catch(collected => {
						// Feedback closed
						embed
							.setTitle("Feedback message closed!")
							.setDescription("We're sorry you didn't want to send us feedback!\nIf you did, please head over to the [Support Server!](https://discord.gg/kg7VfRQ9Xw)")
							.setFields([])
						owner.user.dmChannel.send({ embeds: [embed] })
					})
			})
			.catch(error => console.log(`Error: ${error}`))
	}
}
