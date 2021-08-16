const { owners } = require('../config.json')
module.exports = {
	async run (message, client) {
		if (message.content === '!deploy' && owners.includes(message.author.id)) {
			await client.application?.fetch()

			// Guild Slash Comamnds
			await client.guilds.cache.get('861948446910578699').commands.set(client.commands.map(command => command))

			// Global Slash Commands
			await client.application.commands.set([])

			message.channel.send('Deployed Guild Slash Commands')
		}
	}
}
