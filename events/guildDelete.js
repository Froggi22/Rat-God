module.exports = {
	run (_guild, client) {
		client.user.setPresence({ activities: [{ type: "LISTENING", name: `/Help | In ${client.guilds.cache.size} Servers` }] })
	}
}
