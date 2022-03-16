import { MessageEmbed, version } from "discord.js"
import { interactionReply } from "../../commandReply.js"
import { config } from "../../index.js"
import ms from "ms"

export const description = "Bot statistics"
export function run (interaction, client) {
	interactionReply(interaction, {
		embeds: [new MessageEmbed()
			.setColor(config.embedDesign.defaultColor)
			.setThumbnail(config.embedDesign.ratGodImage)
			.addFields(
				{ name: "D.JS version", value: `v${version}`, inline: true },
				{ name: "Node version", value: `${process.version}`, inline: true },
				{ name: "Uptime", value: (ms(client.uptime)), inline: true },
				{ name: "Servers", value: `${client.guilds.cache.size}`, inline: true },
				{ name: "Cached Channels", value: `${client.channels.cache.size}`, inline: true },
				{ name: "Cached Users", value: `${client.users.cache.size}`, inline: true }
			)
		]
	})
}
