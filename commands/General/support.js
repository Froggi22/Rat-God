const { MessageEmbed } = require("discord.js")
const { embedDesign, general } = require("../../config.json")

module.exports = {
	description: "Link to Froggi's DMs and the Discord Support Server",
	run (interaction) {
		interaction.reply({
			embeds: [new MessageEmbed()
				.setThumbnail(embedDesign.ratGodImage)
				.setAuthor("Support", embedDesign.ratGodImage, general.supportInviteLink)
				.setDescription("Contact information for support;")
				.setColor(embedDesign.color)
				.addFields(
					{ name: "Discord Server", value: `[Link](${general.supportInviteLink})` },
					{ name: "Froggi's DMs", value: "Froggi22#3436" }
				)
				.setTimestamp()]
		})
	}
}
