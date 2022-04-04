import { MessageEmbed, MessageActionRow, MessageButton } from "discord.js"
import { interactionReply } from "../../utils.js"
import { config } from "../../index.js"

export const description = "A compact list of Rat Gods commands"
export function run (interaction) {
	const embed = new MessageEmbed()
		.setColor(config.embedDesign.color.gold)
		.setAuthor({ name: "🐀 Rat Gods Commands", url: config.generalLinks.wikiMain })
		.setDescription(`Leave suggestions to ${config.general.devDiscordTag}.`)
		.addFields(
			{ name: "Commands", value: `${config.general.prefixMessage}\n${config.general.helpCommands}\n` },
			{ name: `Version ${config.general.version}`, value: `${config.general.lastUpdatedMessage}\n${config.general.helpCommandSubtext}` }
		)
		.setFooter({ text: config.embedDesign.gameUpdate })

	const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setURL(config.generalLinks.discordInvite)
				.setLabel("Support")
				.setStyle("LINK"),

			new MessageButton()
				.setCustomId("devDiscordTag") // Necessary but useless
				.setLabel(`Dev: ${config.general.devDiscordTag}`)
				.setStyle("SECONDARY")
				.setDisabled(true)
		)

	return interactionReply(interaction, { messageEmbed: embed, messageComponents: row })
}
