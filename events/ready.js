const chalk = require('chalk')

module.exports = {
	async run (client) {
		const date = new Date().toISOString().replace('T', ' ').substr(0, 19)
		console.log(`${chalk.bgHex('#00FF00')('    ')} ${date} || Ready! Logged in as ${client.user.tag}`)
		client.user.setPresence({ activities: [{ type: 'LISTENING', name: `/Help | In ${client.guilds.cache.size} Servers` }] })
	}
}
