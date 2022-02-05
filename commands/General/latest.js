const { MessageEmbed } = require("discord.js")
const { embedDesign, general } = require("../../config.json")
const commandReply = require("../../commandReply.js")

module.exports = {
	description: "List of the latest updates",
	run (interaction) {
		commandReply.interactionReply(interaction, {
			embeds: [new MessageEmbed()
				.setColor(embedDesign.defaultColor)
				.setAuthor({ name: "Latest update", url: embedDesign.wikiMain, iconURL: embedDesign.ratGodImage })
				.setDescription(`\`\`\`diff\n# ${general.version}\n\n${general.latestUpdateMessage}\n\`\`\``)
				.addField("Appreciation letter", `Thank you for inviting and using my bot! I'm so thankful for surpassing 100 servers!\n I appreciate all feedback in the [Support Server](${general.supportInviteLink})!\n`)
				.setFooter({ text: embedDesign.gameUpdate })
				.setTimestamp()
			]
		})
	}
}
