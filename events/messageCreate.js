const { general } = require('../config.json')

module.exports = {
	async run (message, client) {
		if (message.content.startsWith('<@866073671155974174>') || message.content.startsWith('<@!866073671155974174>')) {
			console.log(message.channel)
			if (message.channel === 'DMChannel') {
				console.log('ITS A DM')
				return message.channel.send(general.prefixMessage)
			} else if (message.channel !== 'DMChannel' && !message.guild.me.permissions.has('SEND_MESSAGES')) {
				console.log('ITS NOT A DM AND NO PERMS')
				message.author.send(general.sendMessageError)
			} else {
				console.log('ITS PERFECT')
				return message.channel.send(general.prefixMessage)
			}
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
