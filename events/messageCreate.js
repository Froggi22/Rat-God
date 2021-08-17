const { general } = require('../config.json')
const { Permissions } = require('discord.js')

module.exports = {
	async run (message, client) {
		if (message.content.startsWith('<@866073671155974174>') || message.content.startsWith('<@!866073671155974174>')) {
			if (message.channel.type === 'DM') {
				console.log(`${message.author.tag} || DM Mention`)
				return message.reply(general.prefixMessage)
			} else if (message.channel.permissionsFor(message.guild.me).has(Permissions.FLAGS.SEND_MESSAGES)) {
				console.log(`${message.author.tag} || Mention`)
				return message.reply(general.prefixMessage)
			}	else {
				console.log(`${message.author.tag} || Mention Error`)
				return message.author.send(general.sendMessageError).catch(error => console.log(`Error: ${error}`))
			}
		}

		if (message.content === '!deploy' && general.owners.includes(message.author.id)) {
			await client.application?.fetch()

			// Guild Slash Comamnds
			// await client.guilds.cache.get('861948446910578699').commands.set(client.commands.map(command => command))

			// Global Slash Commands
			// await client.application.commands.set([])
			await client.application.commands.set(client.commands.map(command => command))
			message.channel.send('Deployed Guild Slash Commands')
		}
	}
}
