import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../commandReply.js"
import { config } from "../../index.js"

export const description = "A compact list of Rat Gods commands"
export function run (interaction) {
	interactionReply(interaction, {
		messageEmbed: new MessageEmbed()
			.setColor(config.embedDesign.color)
			.setAuthor({ name: "🐀 Rat Gods Commands", url: config.generalLinks.wikiMain })
			.setDescription(`Leave suggestions to ${config.general.froggiDiscordTag}.`)
			.addFields(
				{ name: "Commands", value: `${config.general.prefixMessage}\n${config.general.helpCommands}\n` },
				{ name: `Version ${config.general.version}`, value: `${config.general.lastUpdatedMessage}\n${config.general.helpCommandSubtext}` }
			)
			.setFooter({ text: config.embedDesign.gameUpdate })
	})
}
