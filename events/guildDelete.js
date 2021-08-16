const { MessageEmbed } = require('discord.js')
const { embedDesign } = require('../config.json')

module.exports = {
	async run (guild, client) {
		const date = new Date().toISOString().replace('T', ' ').substr(0, 19)
		console.log(`${date} || Rat God is no longer in "${guild.name}", and is now in "${client.guilds.cache.size}" servers.`)

		const owner = await guild.fetchOwner()
		const embed = new MessageEmbed()
			.setTitle('Sorry to see you go!')
			.setDescription('If you would like to give any feedback on what we should improve, please send that in one message below!')
			.setThumbnail('https://cdn.discordapp.com/attachments/865617643449221141/866742462093852742/Rat_God.jpg')
			.setColor(embedDesign.color)
			.setTimestamp()

		owner.send({ embeds: [embed] })

		const filter = message => message.content.length > 2
		const channel = client.channels.cache.get('867736540645031966')
		const collector = owner.user.dmChannel.createMessageCollector({ filter, max: 2, time: 600000 })
		collector.on('collect', message => channel.send(`Server: ${guild.name} - Owner: ${owner.user.tag}\nMessage: ${message}`))
	}
}
