// import fetch from "node-fetch"
import { readFile } from "fs/promises"

export async function fetchAmmo () {
	const tarkovJSONRaw = JSON.parse(await readFile("tarkovJSON.json"))
	/* // const TDurl = "https://raw.githubusercontent.com/TarkovTracker/tarkovdata/master/ammunition.json" // TarkovData JSON
	const tarkovURL = "https://dev.sp-tarkov.com/SPT-AKI/Server/raw/branch/development/project/assets/database/templates/items.json" // BSG JSON
	const settings = { method: "GET" }
	const tarkovJSON = await fetch(tarkovURL, settings)
		.then(response => response.json())
		.catch(error => console.log(`Error > ${error}`))
	return Object.values(tarkovJSON)
		.filter(Obj => Obj._props && Obj._props.Caliber && Obj._props.ammoType !== "grenade" && Obj._name !== "Ammo" && !Obj._name.startsWith("shrapnel")) */
	return Object.values(tarkovJSONRaw)
		.filter(Obj => Obj._props && Obj._props.Caliber && Obj._name !== "Ammo" && !Obj._name.startsWith("shrapnel"))
}

export async function run (client) {
	const startTime = new Date()
	// console.log(tarkovJSONAmmo[0]._name)
	console.log(`Startup delay > ${new Date() - startTime}ms`)
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
