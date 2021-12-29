const { MessageEmbed } = require("discord.js")
const { embedDesign } = require("../../config.json")

module.exports = {
	description: "Amount of servers, channels and users the bot is connected to",
	run (interaction, client) {
		interaction.reply({
			embeds: [ new MessageEmbed()
				.setColor(embedDesign.color)
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
