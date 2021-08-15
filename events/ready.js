const chalk = require('chalk')

module.exports = {
	async run (client) {
		console.log(`${chalk.bgHex('#00FF00')('    ')} Ready! Logged in as ${client.user.tag}`)
		client.user.setPresence({ activities: [{ type: 'LISTENING', name: '/Help' }] })
		if (!client.application?.owner) await client.application?.fetch()
		client.guilds.cache.get('861948446910578699').commands.set(client.commands.map(command => command))
		console.log(`${chalk.bgHex('#00FF00')('    ')} Deployed Slash Commands!`)
	}
}
