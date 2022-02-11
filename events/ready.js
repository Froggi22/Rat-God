// const fetch = require("node-fetch")
// const fs = require("fs")

module.exports = {
	async run (client) {
		const startupDate = new Date().toLocaleString().replace(",", "")
		console.log(`${startupDate} || Ready! Logged in as ${client.user.tag}`)
		client.user.setPresence({
			status: "online",
			activities: [{
				type: "LISTENING",
				name: `/Help | In ${client.guilds.cache.size} Servers`
			}]
		})

		// const { fetchedJSON } = await fetch("https://www.reddit.com/r/popular.json")
		// .then(response => response.json())
		// const fetch = require("node-fetch")

		/*
		const url = "https://dev.sp-tarkov.com/SPT-AKI/Server/raw/branch/development/project/assets/database/templates/items.json"
		const settings = { method: "Get" }
		const startTime = new Date()
		fetch(url, settings)
			.then(res => res.json())
			.then((json) => {
				// console.log(json)
				console.log(`Timedelta > ${new Date() - startTime}ms`)
				fs.writeFile("tarkovJSON.json", JSON.stringify(json), err => {
					if (err) console.error(err)
				})
			})
		*/

		/*
		const startTime2 = new Date()
		fs.readFile("tarkovJSON.json", "utf8", (err, data) => {
			if (err) console.log(err)
			const JSONObj = JSON.parse(data)
			// const result = JSONObj[Object.keys(JSONObj)[0]]
			const result = Object.values(JSONObj)
			console.log(Object.keys(JSONObj).length)
			let counter = 0
			for (let item = 0; item < Object.keys(JSONObj).length; item++) {
				// console.log(`For, Item! ${result[item]._props}`)
				if (result[item]._props && result[item]._props.Caliber) {
					console.log(result[item]._props.Caliber.replace("Caliber", ""))
					counter += 1
				}
			}
			console.log(`Counter > ${counter}!`)
			console.log(`Timedelta2 > ${new Date() - startTime2}ms`)
		})
		*/
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
