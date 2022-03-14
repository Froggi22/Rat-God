import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../commandReply.js"
import { config } from "../../index.js"

export const description = "Link to Froggi's DMs and the Discord Support Server"
export function run (interaction) {
	interactionReply(interaction, {
		embeds: [new MessageEmbed()
			.setColor(config.embedDesign.defaultColor)
			.setAuthor({ name: "🐀 Support", url: config.general.supportInviteLink })
			.setThumbnail(config.embedDesign.ratGodImage)
			.setDescription("Contact information for support;")
			.addFields(
				{ name: "Discord Server", value: `[Link](${config.general.supportInviteLink})` },
				{ name: "Froggi's DMs", value: config.general.froggiDiscordTag }
			)
		]
	})
}
