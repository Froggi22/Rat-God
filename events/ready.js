const chalk = require('chalk')

module.exports = {
	async run (client) {
		console.log(`${chalk.bgHex('#00FF00')('    ')} Ready! Logged in as ${client.user.tag}`)
		client.user.setPresence({ activities: [{ type: 'LISTENING', name: '/help' }] })

		if (!client.application?.owner) await client.application?.fetch()
		await client.guilds.cache.get('861948446910578699').commands.set(client.commands.map(command => command))
		console.log(`${chalk.bgHex('#00FF00')('    ')} Deployed Slash Commands!`)
		await client.commands.set([])
		console.log('telled discord api to unregister Global Slash Commands')
	}
}
