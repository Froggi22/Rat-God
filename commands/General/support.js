const { MessageEmbed } = require("discord.js")
const { embedDesign, general } = require("../../config.json")

module.exports = {
	description: "Link to Froggi's DMs and the Discord Support Server",
	run (interaction) {
		interaction.reply({
			embeds: [ new MessageEmbed()
				.setColor(embedDesign.color)
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
