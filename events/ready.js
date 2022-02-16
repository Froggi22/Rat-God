// const fetch = require("node-fetch")
import { readFile } from "fs/promises"

const tarkovJSONRaw = JSON.parse(await readFile("tarkovJSON.json"))
export const tarkovJSONValues = Object.values(tarkovJSONRaw)

export const tarkovJSONAmmo = tarkovJSONValues.filter(Obj => Obj._props && Obj._props.Caliber && Obj._props.ammoType !== "grenade" && Obj._name.toLowerCase() !== "ammo" && !Obj._name.toLowerCase().startsWith("shrapnel"))

/* Iterate thorugh ammo names
for (let i = 0; i < tarkovJSONAmmo.length; i++) {
	console.log(tarkovJSONAmmo[i]._name)
} */

/* Timedelta
const startTime2 = new Date()
console.log(`Timedelta2 > ${new Date() - startTime2}ms`) */

/* Fetching API
const { fetchedJSON } = await fetch("https://www.reddit.com/r/popular.json")
	.then(response => response.json())
const fetch = require("node-fetch")

const url = "https://dev.sp-tarkov.com/SPT-AKI/Server/raw/branch/development/project/assets/database/templates/items.json"
const settings = { method: "Get" }
const startTime = new Date()
fetch(url, settings)
	.then(res => res.json())
	.then((json) => {
		console.log(`Timedelta > ${new Date() - startTime}ms`)
		fs.writeFile("tarkovJSON.json", JSON.stringify(json), err => {
			if (err) console.error(err)
		})
	}) */

// Main Ready function
export async function run (client) {
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

/* Dynamic statistics and information
	BSG has a JSON file with information about all in-game items.
	Fetch the JSON file async on ready event (bot restarts every ~12-24h) and either store it in memory or save it as a JSON file.
	Here we can filter through the items and find whatever we like (ammo).
	When searching for ammo, we will look for a specific caliber.

	Then store all the correct calibers and collect their stats (Flesh-, armor dmg).
	Return then that to the user who requested it with the proper formatting.

	Ready >
		Fetches API, stores in memory
	Other files e.g Ammo >
		Requires variable & does shit
*/
