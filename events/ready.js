module.exports = {
	async run (client) {
		console.log("- - -  Please ignore the message \"[./commands/Keys/keys.js] You forgot run!\" due to it being a work in progress  - - -")
		const date = new Date().toISOString().replace("T", " ").replace("Z", "")
		console.log(`${date} || Ready! Logged in as ${client.user.tag}`)
		client.user.setPresence({ activities: [{ type: "LISTENING", name: `/Help | In ${client.guilds.cache.size} Servers` }] })
	}
}
