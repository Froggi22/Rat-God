import { MessageEmbed, version } from "discord.js"
import { interactionReply } from "../utils.js"
import { config } from "../index.js"
import ms from "ms"
import fs from "fs"

let commitHash = fs.readFileSync("./.git/logs/refs/heads/main", "utf-8").split("\n")
try {
	commitHash = commitHash[commitHash.length - 2].split(" ")[1].slice(0, 7)
} catch (e) {
	console.log(e)
}

export const description = "Bot statistics"
export function run (interaction, client) {
	interactionReply(interaction, {
		messageEmbed: new MessageEmbed()
			.setColor(config.embedDesign.color.gold)
			.setThumbnail(config.generalLinks.botProfileImage)
			.addFields(
				{ name: "D.JS version", value: `v${version}`, inline: true },
				{ name: "Node version", value: `${process.version}`, inline: true },
				{ name: "Uptime", value: ms(client.uptime), inline: true },
				{ name: "Servers", value: `${client.guilds.cache.size}`, inline: true },
				{ name: "Cached Channels", value: `${client.channels.cache.size}`, inline: true },
				{ name: "Cached Users", value: `${client.users.cache.size}`, inline: true }
			)
			.setFooter({ text: `Commit: ${commitHash}` })
	})
}
