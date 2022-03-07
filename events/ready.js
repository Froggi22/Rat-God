// const fetch = require("node-fetch")
import { readFile } from "fs/promises"

const startTime2 = new Date()
const tarkovJSONRaw = JSON.parse(await readFile("tarkovJSON.json"))
export const tarkovJSONValues = Object.values(tarkovJSONRaw)

export const tarkovJSONAmmo = tarkovJSONValues.filter(Obj => Obj._props && Obj._props.Caliber && Obj._props.ammoType !== "grenade" && Obj._name.toLowerCase() !== "ammo" && !Obj._name.toLowerCase().startsWith("shrapnel"))

/* const arr = []
// Iterate thorugh ammo names
for (let item = 0; item < tarkovJSONAmmo.length; item++) {
	if (!arr.includes(tarkovJSONAmmo[item]._props.Caliber)) {
		arr.push(tarkovJSONAmmo[item]._props.Caliber)
	}
	// console.log(tarkovJSONAmmo[i]._name)
} */

/* const tarkovAmmo = { // Switch this out to config.json
	"12x70mm": "12g",						// 15
	"20x70mm": "20g",						// 11
	"23x75mm": "23x75",							// 20
	"9x18mm Makarov": "9x18PM",			// 1
	"7.62x25mm Tokarev": "762x25TT",	// 3
	"9x19mm Parabellum": "9x19PARA",	// 8
	".45 ACP": "1143x23ACP",					// 22
	"9x21mm Gyurza": "9x21",				// 12
	"5.7x28mm FN": "57x28",					// 18
	"4.6x30mm HK": "46x30",				// 6
	"9x39mm": "9x39",						// 14
	".366 TKM": "366TKM",				// 9
	"5.45x39mm": "545x39",				// 5
	"5.56x45mm NATO": "556x45NATO",		// 4
	".300 Blackout": "762x35",				// 17
	"7.62x39mm": "762x39",					// 10
	"7.62x51mm NATO": "762x51",			// 2
	"7.62x54mmR": "762x54R",			// 7
	".338 Lapua Magnum": "86x70",			// 19
	"12.7x55mm STs-130": "127x55",			// 16
	"40x46 mm": "40x46",						// 21
	"Stationary Weapons": "127x108"			// 13
} */
// console.log(Object.keys(tarkovAmmo))
// console.log(arr.join("\n"))

// Timedelta
console.log(`Timedelta2 > ${new Date() - startTime2}ms`)

/* Fetching API
const { fetchedJSON } = await fetch("https://www.reddit.com/r/popular.json")
	.then(response => response.json())
const fetch = require("node-fetch")

const tarkovURL = "https://dev.sp-tarkov.com/SPT-AKI/Server/raw/branch/development/project/assets/database/templates/items.json" // BSG JSON
const TDurl = "https://raw.githubusercontent.com/TarkovTracker/tarkovdata/master/ammunition.json" // TarkovData JSON
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
	+ BSG has a JSON file with information about all in-game items.
	~ Fetch the JSON file async on ready event (bot restarts every ~12-24h) and either store it in memory or save it as a JSON file.
	+ Here we can filter through the items and find whatever we like (ammo).
	+ When searching for ammo, we will look for a specific caliber.

	+ Then store all the correct calibers and collect their stats (Flesh-, armor dmg).
	+ Return then that to the user who requested it with the proper formatting.

	~ Ready >
		~ Fetches API, stores in memory
	+ Other files e.g Ammo >
		+ Requires variable & does shit
*/
