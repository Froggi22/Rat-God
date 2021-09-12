const chalk = require('chalk')

module.exports = {
	async run (client) {
		let guilds = ''
		client.guilds.cache.forEach((guild) => {
			guilds = guilds.concat(guild).concat(' || ')
		})
		console.log(`----- Guilds -----\n${guilds}\n----- ${client.guilds.cache.size} Servers -----`)
		const date = new Date().toISOString().replace('T', ' ').substr(0, 19)
		console.log(`${chalk.bgHex('#00FF00')('    ')} ${date} || Ready! Logged in as ${client.user.tag}`)
		client.user.setPresence({ activities: [{ type: 'LISTENING', name: `/Help | In ${client.guilds.cache.size} Servers` }] })
	}
}
