// const fetch = require("node-fetch")
import { readFile } from "fs/promises"

const tarkovJSONRaw = JSON.parse(await readFile("tarkovJSON.json"))
export const tarkovJSONValues = Object.values(tarkovJSONRaw)

console.log("\n\n===================================================")

const tarkovJSONAmmo = tarkovJSONValues.filter(Obj => Obj._props && Obj._props.Caliber && Obj._props.ammoType !== "grenade" && Obj._name.toLowerCase() !== "ammo" && !Obj._name.toLowerCase().startsWith("shrapnel"))
for (let i = 0; i < tarkovJSONAmmo.length; i++) {
	console.log(tarkovJSONAmmo[i]._name)
}

/*
for (let item = 0; item < tarkovJSONValues.length; item++) {
	// console.log(tarkovJSONArray[item])
	if (tarkovJSONValues[item]._props && tarkovJSONValues[item]._props.Caliber) {
		console.log(typeof (myArray))
		console.log(tarkovJSONValues[item]._props.Caliber.replace("Caliber", ""))
		// counter += 1
	}
} */

// console.log("===================================================")
// console.log(Object.values(tarkovJSONObj)[0])
// console.log(Object.values(tarkovJSONObj)[0]._props.Weight)
// export let TarkovJSONArray

// const startTime2 = new Date()
// fs.readFile("tarkovJSON.json", "utf8", (err, data) => {
// if (err) console.log(err)
// const JSONObj = JSON.parse(data)
// const result = JSONObj[Object.keys(JSONObj)[0]]
// TarkovJSONArray = "Object.values(JSONObj)[0]"
// console.log(TarkovJSONArray)
// console.log(Object.keys(JSONObj).length)
// let counter = 0
/* for (let item = 0; item < Object.keys(JSONObj).length; item++) {
				// console.log(`For, Item! ${result[item]._props}`)
				if (JSONArray[item]._props && JSONArray[item]._props.Caliber) {
					console.log(JSONArray[item]._props.Caliber.replace("Caliber", ""))
					// counter += 1
				}
			} */
// console.log(`Counter > ${counter}!`)
// console.log(`Timedelta2 > ${new Date() - startTime2}ms`)
// })

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

// const { MessageEmbed } = require("discord.js")
// const { embedDesign, general } = require("../../config.json")
// const commandReply = require("../../commandReply.js")
/*
module.exports = {
	description: "List of the latest updates",
	async run (interaction) {
		await interaction.deferReply({ ephemeral: true })
*/
// interaction.editReply(`${fetchedJSON["590a358486f77429692b2790"]._props.Name}`)
// console.log(Object.keys(fetchedJSON)[0])
/* commandReply.interactionReply(interaction, {
			embeds: [new MessageEmbed()
				.setColor(embedDesign.defaultColor)
				.setAuthor({ name: "🐀 Latest update", url: embedDesign.wikiMain })
				.setDescription(`\`\`\`diff\n# ${general.version}\n\n${general.latestUpdateMessage}\n\`\`\``)
				.addField("Appreciation letter", `Thank you for inviting and using my bot! I'm so thankful for surpassing 100 servers!\n I appreciate all feedback in the [Support Server](${general.supportInviteLink})!\n`)
				.setFooter({ text: embedDesign.gameUpdate })
				.setTimestamp()
			]
		}) */
/*
	}
}
*/
