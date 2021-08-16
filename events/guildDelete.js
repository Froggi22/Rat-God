const { MessageEmbed } = require('discord.js')
const { embedDesign } = require('../config.json')

module.exports = {
	async run (guild, client) {
		const date = new Date().toISOString().replace('T', ' ').substr(0, 19)
		console.log(`${date} || Rat God is no longer in "${guild.name}", and is now in "${client.guilds.cache.size}" servers.`)

		// 372005's Note: I'm a rentless person and because it works idk we need catch. if there were errors we will catch later

		const owner = await guild.fetchOwner()
		const embed = new MessageEmbed()
			.setTitle('Sorry to see you go!')
			.setDescription('foobar')
			.setColor(embedDesign.color)
			.setTimestamp()

		owner.send({ embeds: [embed] })

		const channel = client.channels.cache.get('867736540645031966')
		const collector = owner.user.dmChannel.createMessageCollector({ time: 600000 })
		collector.on('collect', message => { if (message) channel.send(message) })
		collector.on('end', collected => console.log(`Collected ${collected.size} messages`))
	}
}
