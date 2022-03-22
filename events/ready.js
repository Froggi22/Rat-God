import fetch from "node-fetch"
import { readFile, stat } from "fs/promises"

const doesfileExist = path => stat(path).then(() => true, () => false)

/**
 * Fetching a JSON with all tarkov items, but filtering out everything except ammo
 * @returns {Array} Each bullet item's stats
 */
export async function fetchAmmo () {
	let tarkovJSON
	if (await doesfileExist("./tarkovJSON.json")) {
		tarkovJSON = JSON.parse(await readFile("./tarkovJSON.json")) // Used for mass-testing/restarting when you don't want to spam requests to the API. Uncomment this code line & import readFile but also comment out the fetch. Open the API URL in your browser, save as json file in project directory.
	} else {
		const url = "https://dev.sp-tarkov.com/SPT-AKI/Server/raw/branch/development/project/assets/database/templates/items.json"
		const settings = { method: "GET" }
		tarkovJSON = await fetch(url, settings)
			.then(response => response.json())
			.catch(error => console.log(`Error > ${error}`))
	}
	return Object.values(tarkovJSON)
		.filter(Obj =>
			Obj._props &&
			Obj._props.Caliber &&
			Obj._name !== "Ammo" &&
			!Obj._name.startsWith("shrapnel")
		)
}

/**
 * Fetching a JSON with a specific Tarkov location
 * @param {*} mapsJSONObj Object of fetched maps
 * @param {string} location Requested location
 * @returns {Array} Updated object of fetched maps
 */
export async function fetchMaps (mapsJSONObj, location) {
	let correctedName = location
	const correctedLocationNamesObj = {
		customs: "bigmap",
		factory: "factory4_day",
		reserve: "rezervbase",
		labs: "laboratory"
	}

	if (Object.keys(correctedLocationNamesObj).find(key => key === location.toLowerCase())) correctedName = correctedLocationNamesObj[location.toLowerCase()] // If the corrected name exists - use it

	if (await doesfileExist("./mapsJSON.json")) {
		const data1 = JSON.parse(await readFile("./mapsJSON.json"))
		if (data1[location]) mapsJSONObj[location] = data1[location]
		return mapsJSONObj
	} else {
		const delayStart = new Date()
		const url = `https://dev.sp-tarkov.com/SPT-AKI/Server/raw/branch/development/project/assets/database/locations/${correctedName.toLowerCase()}/base.json`
		const settings = { method: "GET" }
		const data2 = await fetch(url, settings)
			.then(response => response.json())
			.catch(error => console.log(`Error > ${error}`))
		mapsJSONObj[location] = data2
		// appendFile("./mapsJSON.json", JSON.stringify(mapsJSONObj))
		console.log(`fetchMaps() delay: ${new Date() - delayStart}ms`)
		return mapsJSONObj
	}
}

export async function run (client) {
	const startupDate = new Date().toLocaleString().replace(",", "")
	console.log(`${startupDate} - Ready! Logged in as ${client.user.tag}`)
	client.user.setPresence({
		status: "online",
		activities: [{
			type: "LISTENING",
			name: `/Help | In ${client.guilds.cache.size} Servers`
		}]
	})
}
