module.exports = {
	run (_guild, client) {
		client.user.setPresence({
			status: "online",
			activities: [{
				type: "LISTENING",
				name: `/Help | In ${client.guilds.cache.size} Servers`
			}]
		})
	}
}
