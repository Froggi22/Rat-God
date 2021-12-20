/*const { MessageEmbed, Permissions } = require("discord.js")
const { embedDesign, general } = require("../config.json")*/

module.exports = {
	async run (guild, client) {
		client.user.setPresence({ activities: [{ type: "LISTENING", name: `/Help | In ${client.guilds.cache.size} Servers` }] })
		/* const date = new Date().toISOString().replace("T", " ").replace("Z", "")
		console.log(`${date} || Rat God joined a new server "${guild.name}", and is now in "${client.guilds.cache.size}" servers.`) */

		/*const embed = new MessageEmbed()
			.setTitle("Thank you for inviting Rat God!")
			.setDescription(general.descriptionRatGod)
			.setThumbnail(embedDesign.ratGodImage)
			.setColor(embedDesign.color)
			.addField(`${general.prefixMessage}`, `${general.permissionsRatGod}\n`)
			.setFooter(embedDesign.gameUpdate)
			.setTimestamp()

		const channel = guild.channels.cache.find(channel => channel.permissionsFor(guild.me).has(Permissions.FLAGS.SEND_MESSAGES))
		console.log(channel.type)
		if (channel) channel.send({ embeds: [embed] })*/
	}
}
