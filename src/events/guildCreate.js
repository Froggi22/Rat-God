import { MessageEmbed, Permissions } from "discord.js"
import { config } from "../index.js"

export function run (guild, client) {
	client.user.setPresence({
		status: "online",
		activities: [{
			type: "LISTENING",
			name: `/Help | In ${client.guilds.cache.size} Servers`
		}]
	})

	if (!guild.available) return

	const channel = guild.channels.cache.find(channel => channel.isText() && channel.type === "GUILD_TEXT" && channel.viewable && channel.permissionsFor(guild.me).has(Permissions.FLAGS.VIEW_CHANNEL) && channel.permissionsFor(guild.me).has(Permissions.FLAGS.SEND_MESSAGES)) // Find the first channel with specifications

	if (channel) { // If such channel exists, send the embed
		channel.send({
			embeds: [new MessageEmbed()
				.setColor(config.embedDesign.color.gold)
				.setThumbnail(config.generalLinks.botProfileImage)
				.setTitle("Thank you for inviting Rat God!")
				.setDescription("Rat God will help you in Escape From Tarkov, by accessing in-game information and delivering it to you!")
				.addField(`${config.general.prefixMessage}`, `To understand why Rat God requires certain permissions, please view the "Permissions" section on [our Github page](${config.generalLinks.github}).\n`)
				.setFooter({ text: config.embedDesign.gameUpdate })]
		}).catch(console.log)
	}
}
