const { MessageEmbed } = require("discord.js")
const { embedDesign, general } = require("../../config.json")
const commandReply = require("../../commandReply.js")

module.exports = {
	description: "Link to Froggi's DMs and the Discord Support Server",
	run (interaction) {
		commandReply.interactionReply(interaction, {
			embeds: [new MessageEmbed()
				.setColor(embedDesign.defaultColor)
				.setAuthor({ name: "Support", url: general.supportInviteLink, iconURL: embedDesign.ratGodImage })
				.setThumbnail(embedDesign.ratGodImage)
				.setDescription("Contact information for support;")
				.addFields(
					{ name: "Discord Server", value: `[Link](${general.supportInviteLink})` },
					{ name: "Froggi's DMs", value: general.froggiDiscordTag }
				)
				.setTimestamp()
			]
		})
	}
}
