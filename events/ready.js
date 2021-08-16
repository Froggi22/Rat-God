const chalk = require('chalk')

module.exports = {
	async run (client) {
		console.log(`${chalk.bgHex('#00FF00')('    ')} Ready! Logged in as ${client.user.tag}`)
		client.user.setPresence({ activities: [{ type: 'LISTENING', name: `/Help | In ${client.guilds.cache.size} Servers` }] })
	}
}
