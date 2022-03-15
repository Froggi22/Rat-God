import fetch from "node-fetch"
// import { readFile } from "fs/promises"

export async function fetchAmmo () {
	// const tarkovJSON = JSON.parse(await readFile("tarkovJSON.json")) // Used for mass-testing/restarting when you don't want to spam requests to the API. Uncomment this code line & import readFile but also comment out the fetch. Open the API URL in your browser, save as json file in project directory.
	const url = "https://dev.sp-tarkov.com/SPT-AKI/Server/raw/branch/development/project/assets/database/templates/items.json"
	const settings = { method: "GET" }
	const tarkovJSON = await fetch(url, settings)
		.then(response => response.json())
		.catch(error => console.log(`Error > ${error}`))
	return Object.values(tarkovJSON)
		.filter(Obj => Obj._props && Obj._props.Caliber && Obj._name !== "Ammo" && !Obj._name.startsWith("shrapnel"))
}

export async function run (client) {
	const startupDate = new Date().toLocaleString().replace(",", "")
	console.log(`${startupDate} - Ready! Logged in as ${client.user.tag}`)
	console.log(`${client.uptime * 0.001}s`)
	client.user.setPresence({
		status: "online",
		activities: [{
			type: "LISTENING",
			name: `/Help | In ${client.guilds.cache.size} Servers`
		}]
	})
}
