const { MessageEmbed } = require("discord.js")
const { embedDesign, general } = require("../../config.json")
const commandReply = require("../../commandReply.js")

module.exports = {
	description: "Users breaking rules and complaining about mod abuse",
	run (interaction) {
		commandReply.interactionReply(interaction, {
			embeds: [new MessageEmbed()
				.setColor(embedDesign.color)
				.setImage(general.modAbuseImage)
				.setTimestamp()
			]
		})
	}
}
