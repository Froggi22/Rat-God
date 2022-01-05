module.exports = {
	async run (client) {
		const startupDate = new Date().toLocaleString().replace(",", "")
		console.log(`${startupDate} || Ready! Logged in as ${client.user.tag}`)
		client.user.setPresence({ activities: [{ type: "LISTENING", name: `/Help | In ${client.guilds.cache.size} Servers` }] })
	}
}
