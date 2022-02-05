const { MessageEmbed } = require("discord.js")
const { embedDesign } = require("../../config.json")
const commandReply = require("../../commandReply.js")

module.exports = {
	description: "Amount of servers, channels and users the bot is connected to",
	run (interaction, client) {
		commandReply.interactionReply(interaction, {
			embeds: [new MessageEmbed()
				.setColor(embedDesign.defaultColor)
				.addFields(
					{ name: "Servers", value: `${client.guilds.cache.size}`, inline: true },
					{ name: "Channels", value: `${client.channels.cache.size}`, inline: true },
					{ name: "Users", value: `${client.users.cache.size}`, inline: true }
				)
				.setTimestamp()
			]
		})
	}
}
