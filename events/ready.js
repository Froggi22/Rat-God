import fetch from "node-fetch"
import { config } from "../index.js"

/**
 * Fetching a JSON with all tarkov items, but filtering out everything except ammo
 * @returns {Array} Each bullet item's stats
 */
export async function fetchAmmo () {
	const url = config.generalLinks.tarkovItems
	const settings = { method: "GET" }
	const tarkovJSON = await fetch(url, settings)
		.then(response => response.json())
		.catch(error => console.log(`Error > ${error}`))
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

	const delayStart = new Date()
	const url = `https://dev.sp-tarkov.com/SPT-AKI/Server/raw/branch/development/project/assets/database/locations/${correctedName.toLowerCase()}/base.json`
	const settings = { method: "GET" }
	const data2 = await fetch(url, settings)
		.then(response => response.json())
		.catch(error => console.log(`Error > ${error}`))
	mapsJSONObj[location] = data2
	console.log(`fetchMaps() delay: ${new Date() - delayStart}ms`)
	return mapsJSONObj
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
