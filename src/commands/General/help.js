import { MessageEmbed, MessageActionRow, MessageButton } from "discord.js"
import { interactionReply } from "../../utils.js"
import { config } from "../../index.js"

export const description = "A compact list of Rat Gods commands"
export function run (interaction) {
	const embed = new MessageEmbed()
		.setColor(config.embedDesign.color.gold)
		.setAuthor({ name: "🐀 Rat Gods Commands", url: config.generalLinks.wikiMain })
		.setDescription(config.general.prefixMessage)
		.addFields(
			{ name: "Commands", value: "\n`Ammo` - Caliber bullet specifics. \n`Maps` - Map information.\n`Time` - Current in-game raid time.\n\n`Ping` - Pinging the bot.\n`Modabuse` - Funny meme about mod abuse.\n`Statistics` - Bot statistics." },
			{ name: `Version ${config.general.version}`, value: `${config.general.lastUpdatedMessage}\n\`Latest\` - Latest updates.` }
		)
		.setFooter({ text: config.embedDesign.gameUpdate })

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

	return interactionReply(interaction, { messageEmbed: embed, messageComponents: [row] })
}
