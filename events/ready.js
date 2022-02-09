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

/* Dynamic statistics and information
	BSG has a JSON file with information about all in-game items.
	Fetch the JSON file async on ready event (bot restarts every ~12-24h) and either store it in memory or save it as a JSON file.
	Here we can filter through the items and find whatever we like (ammo).
	When searching for ammo, we will look for a specific caliber.
	Then store all the correct calibers and collect their stats (Flesh-, armor dmg).
	Return then that to the user who requested it with the proper formatting.
*/
