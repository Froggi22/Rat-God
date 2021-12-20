module.exports = {
	async run (guild, client) {
		/* const date = new Date().toISOString().replace("T", " ").replace("Z", "")
		console.log(`${date} || Rat God is no longer in "${guild.name}", and is now in "${client.guilds.cache.size}" servers.`) */
		client.user.setPresence({ activities: [{ type: "LISTENING", name: `/Help | In ${client.guilds.cache.size} Servers` }] })
	}
}
