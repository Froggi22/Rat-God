import { MessageEmbed, MessageActionRow, MessageButton } from "discord.js"
import { interactionReply } from "../utils.js"
import { config } from "../index.js"

export const description = "Commands & help on how to use Rat God"
export function run (interaction) {
	const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setURL(config.generalLinks.website)
				.setLabel("Website")
				.setStyle("LINK"),

			new MessageButton()
				.setURL(config.generalLinks.github)
				.setLabel("Github")
				.setStyle("LINK"),

			new MessageButton()
				.setURL(config.generalLinks.discordInvite)
				.setLabel("Support")
				.setStyle("LINK")
		)

	return interactionReply(interaction, {
		messageEmbed: new MessageEmbed()
			.setColor(config.embedDesign.color.gold)
			.setAuthor({ name: "🐀 Rat Gods Commands", url: config.generalLinks.wikiMain })
			.addFields(
				{ name: "Commands", value: "\n`Ammo` - Caliber bullet specifics. \n`Maps` - Map information.\n`Time` - Current in-game raid time.\n\n`Statistics` - Bot statistics." },
				{ name: `Version ${config.general.version}`, value: `${config.general.lastUpdatedMessage}\n\`Latest\` - Latest updates.` }
			)
			.setFooter({ text: config.embedDesign.gameUpdate }),
		messageComponents: [row]
	})
}
