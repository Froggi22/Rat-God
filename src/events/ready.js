import fetch from "node-fetch"
import { config } from "../index.js"

/**
 * Fetching a JSON with all tarkov items, but filtering out everything except ammo
 * @returns {Array} Each bullet item's stats
 */
export async function fetchAmmo () {
	const url = config.generalLinks.tarkovItems
	const settings = { method: "GET" }
	const items = await fetch(url, settings)
		.then(res => res.json())
		.catch(e => console.log(`Error > ${e}`))
	return Object.values(items)
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
	let locationCorrect = location
	const correctedLocations = {
		customs: "bigmap",
		factory: "factory4_day",
		reserve: "rezervbase",
		labs: "laboratory"
	}

	if (Object.keys(correctedLocations).find(key => key === location.toLowerCase())) locationCorrect = correctedLocations[location.toLowerCase()] // If the corrected name exists - use it

	const delayStart = new Date()
	const url = `https://dev.sp-tarkov.com/SPT-AKI/Server/raw/branch/development/project/assets/database/locations/${locationCorrect.toLowerCase()}/base.json`
	const settings = { method: "GET" }
	const locationInfo = await fetch(url, settings)
		.then(res => res.json())
		.catch(e => console.log(`Error > ${e}`))
	mapsJSONObj[location] = locationInfo
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
