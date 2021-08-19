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
				return message.reply(general.sendMessageError).catch(error => console.log(`Error: ${error}`))
			}
		}
		if (message.content === '!guild' && general.owners.includes(message.author.id)) {
			await client.guilds.cache.get('861948446910578699').commands.set(client.commands.map(command => command))
			message.reply('Deployed Guild Slash Commands')
		}
		if (message.content === '!global' && general.owners.includes(message.author.id)) {
			await client.application.commands.set(client.commands.map(command => command))
			message.reply('Deployed Global Slash Commands')
		}
	}
}
