const { MessageEmbed } = require("discord.js")
const { embedDesign, general } = require("../../config.json")

module.exports = {
	description: "Link to Froggis DMs and the support discord server",
	run (interaction) {
		interaction.reply({
			embeds: [new MessageEmbed()
				.setThumbnail(embedDesign.ratGodImage)
				.setAuthor("Support", embedDesign.ratGodImage, general.supportInviteLink)
				.setDescription("Contact information for support")
				.setColor(embedDesign.color)
				.addFields(
					{ name: "Discord Server", value: `[Link](${general.supportInviteLink})` },
					{ name: "Froggis DMs", value: "Froggi22#3436" }
				)
				.setTimestamp()]
		})
	}
}
