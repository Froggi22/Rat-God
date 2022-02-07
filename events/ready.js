module.exports = {
	run (client) {
		const startupDate = new Date().toLocaleString().replace(",", "")
		console.log(`${startupDate} || Ready! Logged in as ${client.user.tag}`)
		client.user.setPresence({
			status: "online",
			activities: [{
				type: "LISTENING",
				name: `/Help | In ${client.guilds.cache.size} Servers`
			}]
		})
	}
}
