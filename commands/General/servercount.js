import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../commandReply.js"
import { config } from "../../index.js"

export const description = "Amount of servers, channels and users the bot has cached"
export function run (interaction, client) {
	console.log(`${client.uptime * 0.001}s`)
	interactionReply(interaction, {
		embeds: [new MessageEmbed()
			.setColor(config.embedDesign.defaultColor)
			.addFields(
				{ name: "Servers", value: `${client.guilds.cache.size}`, inline: true },
				{ name: "Channels", value: `${client.channels.cache.size}`, inline: true },
				{ name: "Users", value: `${client.users.cache.size}`, inline: true }
			)
		]
	})
}
