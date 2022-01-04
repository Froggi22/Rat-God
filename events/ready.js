module.exports = {
	async run (client) {
		const date = new Date().toISOString().replace("T", " ").replace("Z", "")
		console.log(`${date} || Ready! Logged in as ${client.user.tag}`)
		client.user.setPresence({ activities: [{ type: "LISTENING", name: `/Help | In ${client.guilds.cache.size} Servers` }] })
	}
}
