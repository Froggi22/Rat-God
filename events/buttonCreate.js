import { MessageEmbed } from "discord.js"
import { config } from "../index.js"
import { interactionReply } from "../commandReply.js"
import { capitalizeWords } from "../utils.js"

export function run (interaction) {
	if (interaction.customId.startsWith("location")) {
		const location = interaction.customId.split("-")[1]
		const locationCap = capitalizeWords(location)
		const guide = interaction.customId.split("-")[2].replace("_", " ")

		const embed = new MessageEmbed()
			.setColor(config.embedDesign.color)
			.setTitle(`${locationCap} ${capitalizeWords(guide)} Map`)
			.setImage(config.locations[location][guide])
			.setFooter({ text: config.embedDesign.gameUpdate })

		return interactionReply(interaction, { messageEmbed: embed, messageEphemeral: true })
	}
}
