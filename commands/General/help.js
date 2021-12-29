const { MessageEmbed } = require("discord.js")
const { embedDesign, general } = require("../../config.json")

module.exports = {
	description: "A mini-list of Rat Gods commands",
	run (interaction) {
		interaction.reply({
			embeds: [ new MessageEmbed()
				.setColor(embedDesign.color)
				.setAuthor({ name: "Rat Gods Commands", url: embedDesign.wikiMain, iconURL: embedDesign.ratGodImage })
				.setDescription(`Leave suggestions to ${general.froggiDiscordTag}.`)
				.addFields(
					{ name: "Commands", value: `${general.prefixMessage}.\n${general.helpCommands}\n` },
					{ name: `Version ${general.version}`, value: `${general.lastUpdatedMessage}\n${general.helpCommandSubtext}` }
				)
				.setFooter({ text: embedDesign.gameUpdate })
				.setTimestamp()
			]
		})
	}
}
