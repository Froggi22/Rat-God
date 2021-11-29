const { MessageEmbed } = require("discord.js")
const { embedDesign } = require("../../config.json")

module.exports = {
	description: "Joke mention command",
	run (interaction) {
		interaction.reply({
			embeds: [new MessageEmbed()
				.setAuthor("🤦‍♂️ You are supposed to mention the bot dummy 🤦‍♂️", embedDesign.ratGodImage, embedDesign.wikiMain)
				.setColor(embedDesign.color)
				.setTimestamp()]
		})
	}
}
