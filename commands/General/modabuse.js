const { MessageEmbed } = require("discord.js")
const { embedDesign, general } = require("../../config.json")

module.exports = {
	description: "Users breaking rules and complaining about mod abuse",
	run (interaction) {
		interaction.reply({
			embeds: [new MessageEmbed()
				.setAuthor("Mod abuse", embedDesign.ratGodImage, embedDesign.wikiMain)
				.setColor(embedDesign.color)
				.setImage(general.modAbuseImage)
				.setTimestamp()]
		})
	}
}
