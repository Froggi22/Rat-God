import { MessageEmbed, MessageActionRow, MessageButton } from "discord.js"
import { config } from "../index.js"
import { interactionReply, capitalizeWords } from "../utils.js"
import { tarkovTime } from "../commands/time.js"

export function run (interaction) {
	if (interaction.customId.startsWith("location")) {
		const location = interaction.customId.split("-")[1]
		const guide = interaction.customId.split("-")[2].replace("_", " ")

		return interactionReply(interaction, {
			messageEmbed: new MessageEmbed()
				.setColor(config.embedDesign.color.gold)
				.setTitle(`${capitalizeWords(location)} ${capitalizeWords(guide)} Map`)
				.setImage(config.locations[location][guide])
				.setFooter({ text: config.embedDesign.gameUpdate }),
			messageEphemeral: true
		})
	} else if (interaction.customId === "time-refresh") {
		interaction.update({
			components: [
				new MessageActionRow()
					.addComponents(
						new MessageButton()
							.setCustomId("time-refresh")
							.setLabel(`${tarkovTime(true)} ⌚ ${tarkovTime(false)}`)
							.setStyle("SECONDARY")
					)
			]
		}).catch()
	}
}
