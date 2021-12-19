module.exports = {
	async run (guild, client) {
		client.user.setPresence({ activities: [{ type: "LISTENING", name: `/Help | In ${client.guilds.cache.size} Servers` }] })
		/* const date = new Date().toISOString().replace("T", " ").replace("Z", "")
		console.log(`${date} || Rat God is no longer in "${guild.name}", and is now in "${client.guilds.cache.size}" servers.`) */
	}
}
