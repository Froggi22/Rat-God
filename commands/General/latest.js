import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../commandReply.js"
import { config } from "../../index.js"

export const description = "List of the latest updates"
export function run (interaction) {
	interactionReply(interaction, {
		embeds: [new MessageEmbed()
			.setColor(config.embedDesign.defaultColor)
			.setAuthor({ name: "🐀 Latest update", url: config.embedDesign.wikiMain })
			.setDescription(`\`\`\`diff\n# ${config.general.version}\n\n${config.general.latestUpdateMessage}\n\`\`\``)
			.addField("Appreciation letter", `Thank you for inviting and using my bot! I'm so thankful for surpassing 100 servers!\n I appreciate all feedback in the [Support Server](${config.general.supportInviteLink})!\n`)
			.setFooter({ text: config.embedDesign.gameUpdate })
			.setTimestamp()
		]
	})
}
