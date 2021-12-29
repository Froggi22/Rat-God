const { MessageEmbed } = require("discord.js")
const { embedDesign, general } = require("../../config.json")

module.exports = {
	description: "List of the latest updates",
	run (interaction) {
		interaction.reply({
			embeds: [ new MessageEmbed()
				.setColor(embedDesign.color)
				.setAuthor({ name: "Latest update", url: embedDesign.wikiMain, iconURL: embedDesign.ratGodImage })
				.setDescription(`\`\`\`diff\n# ${general.version}\n\n${general.latestUpdateMessage}\n\`\`\``)
				.addField("Appreciation letter", `Thank you for inviting and using my bot!\n I appreciate all feedback in the [Support Server](${general.supportInviteLink})!\n`)
				.setFooter({ text: embedDesign.gameUpdate })
				.setTimestamp()
			]
		})
	}
}
