module.exports = {
	run (guild, client) {
		const date = new Date().toISOString().replace('T', ' ').substr(0, 19)
		console.log(`${date} || Rat God is no longer in "${guild.name}", and is now in "${client.guilds.cache.size}" servers.`)
	}
}
