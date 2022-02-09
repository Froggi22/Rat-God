const { MessageEmbed } = require("discord.js")
const { embedDesign, general } = require("../../config.json")
const commandReply = require("../../commandReply.js")

module.exports = {
	description: "Funny meme about mod abuse",
	run (interaction) {
		commandReply.interactionReply(interaction, {
			embeds: [new MessageEmbed()
				.setColor(embedDesign.defaultColor)
				.setImage(general.modAbuseImage)
				.setTimestamp()
			]
		})
	}
}
