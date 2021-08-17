const { general } = require('../config.json')
const { Permissions } = require('discord.js')

module.exports = {
	async run (message, client) {
		if (message.content.startsWith('<@866073671155974174>') || message.content.startsWith('<@!866073671155974174>')) {
			if (message.channel.type === 'DM') return message.reply(general.prefixMessage)
			else if (message.channel.permissionsFor(message.guild.me).has(Permissions.FLAGS.SEND_MESSAGES)) return message.reply(general.prefixMessage)
			else return message.author.send(general.sendMessageError).catch(error => console.log(`Error: ${error}`))
		}

		if (message.content === '!deploy' && general.owners.includes(message.author.id)) {
			await client.application?.fetch()

			// Guild Slash Comamnds
			await client.guilds.cache.get('861948446910578699').commands.set(client.commands.map(command => command))

			// Global Slash Commands
			await client.application.commands.set([])

			message.channel.send('Deployed Guild Slash Commands')
		}
	}
}
