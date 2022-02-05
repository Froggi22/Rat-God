const { MessageEmbed, Permissions } = require("discord.js")
const { embedDesign, general } = require("../config.json")

module.exports = {
	async run (guild, client) {
		client.user.setPresence({ activities: [{ type: "LISTENING", name: `/Help | In ${client.guilds.cache.size} Servers` }] })

		const embed = new MessageEmbed()
			.setColor(embedDesign.defaultColor)
			.setThumbnail(embedDesign.ratGodImage)
			.setTitle("Thank you for inviting Rat God!")
			.setDescription(general.descriptionRatGod)
			.addField(`${general.prefixMessage}`, `${general.permissionsRatGod}\n`)
			.setFooter({ text: embedDesign.gameUpdate })
			.setTimestamp()

		const channel = guild.channels.cache.find(channel => channel.type === "GUILD_TEXT" && channel.permissionsFor(guild.me).has(Permissions.FLAGS.VIEW_CHANNEL) && channel.permissionsFor(guild.me).has(Permissions.FLAGS.SEND_MESSAGES)) // Find the first textchannel where the bot can send the welcome message and have VIEW_CHANNEL & SEND_MESSAGES permissions
		if (channel) channel.send({ embeds: [embed] }).catch() // If such channel exists, send the embed
	}
}
