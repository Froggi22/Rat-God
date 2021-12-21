const { MessageEmbed } = require("discord.js")
const { embedDesign, general } = require("../../config.json")

module.exports = {
	description: "A mini-list of Rat Gods commands",
	run (interaction) {
		interaction.reply({
			embeds: [new MessageEmbed()
				.setAuthor("Rat Gods Commands", embedDesign.ratGodImage, embedDesign.wikiMain)
				.setDescription(`Leave suggestions to ${general.froggiDiscordTag}.`)
				.setColor(embedDesign.color)
				.addFields(
					{ name: "Commands", value: `${general.prefixMessage}.\n${general.helpCommands}\n` },
					{ name: `Version ${general.version}`, value: `${general.lastUpdatedMessage}\n${general.helpCommandSubtext}` }
				)
				.setTimestamp()
				.setFooter(embedDesign.gameUpdate)]
		})
	}
}
