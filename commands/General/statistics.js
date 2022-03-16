import { MessageEmbed, version } from "discord.js"
import { interactionReply } from "../../commandReply.js"
import { config } from "../../index.js"

export const description = "Bot statistics"
export function run (interaction, client) {
	interactionReply(interaction, {
		embeds: [new MessageEmbed()
			.setColor(config.embedDesign.defaultColor)
			.setThumbnail(config.embedDesign.ratGodImage)
			.addFields(
				{ name: "D.JS version", value: `${version}`, inline: true },
				{ name: "Node version", value: `${process.version}`, inline: true },
				{ name: "Uptime", value: `${(client.uptime * 0.001 / 60 / 60).toFixed(2)} hours`, inline: true },
				{ name: "Servers", value: `${client.guilds.cache.size}`, inline: true },
				{ name: "Cached Channels", value: `${client.channels.cache.size}`, inline: true },
				{ name: "Cached Users", value: `${client.users.cache.size}`, inline: true }
			)
		]
	})
}
