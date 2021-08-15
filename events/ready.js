module.exports = {
	run (client) {
		console.log(`Ready! Logged in as ${client.user.tag}`)
		client.user.setPresence({ activities: [{ type: 'LISTENING', name: '/Help' }] })
	}
}
