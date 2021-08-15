const { MessageEmbed } = require('discord.js')
const { embedDesign, general } = require('../config.json')

module.exports = {
	async run (guild, client) {
		const date = new Date().toISOString().replace('T', ' ').substr(0, 19)
		const owner = await guild.fetchOwner()
		console.log(`${date} || Rat God joined a new server "${guild.name}", and is now in "${client.guilds.cache.size}" servers.`)

		const embed = new MessageEmbed()
			.setTitle('Thank you for inviting Rat God!')
			.setDescription(general.descriptionRatGod)
			.setThumbnail('https://cdn.discordapp.com/attachments/865617643449221141/866742462093852742/Rat_God.jpg')
			.setColor(embedDesign.color)
			.addField(`\n${general.prefixMessage}`, `${general.permissionsRatGod}\n`)
			.setFooter(embedDesign.gameUpdate)
			.setTimestamp()

		owner.send({ embeds: [embed] })
	}
}