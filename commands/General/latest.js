import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../utils.js"
import { config } from "../../index.js"

export const description = "List of the latest updates"
export function run (interaction) {
	interactionReply(interaction, {
		messageEmbed: new MessageEmbed()
			.setColor(config.embedDesign.color.gold)
			.setAuthor({ name: "🐀 Latest update", url: config.generalLinks.wikiMain })
			.setDescription(`\`\`\`diff\n# ${config.general.version}\n\n${config.general.latestUpdateMessage}\n\`\`\``)
			.addField("Appreciation letter", `Thank you so much for inviting and using my bot! We're very thankful for surpassing 200 servers!\n We appreciate all feedback and suggestions in our [Discord Server](${config.generalLinks.discordInvite})!\n`)
			.setFooter({ text: config.embedDesign.gameUpdate })
			.setTimestamp(new Date(config.general.latestUpdateDate))
	})
}
