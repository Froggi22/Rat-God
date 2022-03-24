import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../utils.js"
import { config } from "../../index.js"

export const description = "Link to Froggi's DMs and the Discord Support Server"
export function run (interaction) {
	interactionReply(interaction, {
		messageEmbed: new MessageEmbed()
			.setColor(config.embedDesign.color)
			.setAuthor({ name: "🐀 Support", url: config.general.supportInviteLink })
			.setThumbnail(config.generalLinks.botProfileImage)
			.setDescription("Contact information for support:")
			.addFields(
				{ name: "Discord Server", value: `[Link](${config.general.supportInviteLink})` },
				{ name: "Developers DM's", value: config.general.froggiDiscordTag }
			)
	})
}
