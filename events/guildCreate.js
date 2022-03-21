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

	const embed = new MessageEmbed()
		.setColor(config.embedDesign.defaultColor)
		.setThumbnail(config.embedDesign.ratGodImage)
		.setTitle("Thank you for inviting Rat God!")
		.setDescription(config.general.descriptionRatGod)
		.addField(`${config.general.prefixMessage}`, `${config.general.permissionsRatGod}\n`)
		.setFooter({ text: config.embedDesign.gameUpdate })

	const channel = guild.channels.cache.find(channel => channel.type === "GUILD_TEXT" && channel.viewable && channel.isText() && channel.permissionsFor(guild.me).has(Permissions.FLAGS.VIEW_CHANNEL) && channel.permissionsFor(guild.me).has(Permissions.FLAGS.SEND_MESSAGES)) // Find the first textchannel where the bot can send the welcome message with specific conditions
	if (channel) channel.send({ embeds: [embed] }).catch() // If such channel exists, send the embed
}
