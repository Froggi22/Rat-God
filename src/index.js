import { AutoPoster } from "topgg-autoposter"
import discordjs from "discord.js"
import fs from "fs"
import dotenv from "dotenv"
dotenv.config()

// Bot Token
const BOT_TOKEN = process.env.BOT_TOKEN
if (!BOT_TOKEN) throw new Error("No BOT_TOKEN found!")

export const client = new discordjs.Client({
	intents: [
		discordjs.Intents.FLAGS.GUILDS,
		discordjs.Intents.FLAGS.GUILD_MESSAGES,
		discordjs.Intents.FLAGS.DIRECT_MESSAGES
	]
})

client.login(BOT_TOKEN)

// Commands
export const commands = new discordjs.Collection()

// Cooldowns
export const cooldowns = new discordjs.Collection()

// Event Handler
for (const file of fs.readdirSync("./src/events")) {
	import(`./events/${file}`).then(event => {
		const eventName = file.replace(/\.(c|m)?(j|t)s/, "")
		if (event.run) client.on(eventName, (...args) => event.run(...args, client))
		else console.log(`WARN ignoring src/events/${file}`)
	})
}

// Command Handler
for (const folder of fs.readdirSync("./src/commands")) {
	if (folder === "Keys") continue
	for (const file of fs.readdirSync(`./src/commands/${folder}`)) {
		import(`./commands/${folder}/${file}`).then(command => {
			const commandName = file.replace(/\.(c|m)?(j|t)s/, "")
			if (command.description && command.run) commands.set(commandName, { ...command, name: commandName })
			else console.log(`WARN ignoring commands/${folder}/${file}`)
		})
	}
}

// JSON config
export const config = JSON.parse(fs.readFileSync("./src/config.json"))

// Top.gg servercount
if (process.env.TOPGG_TOKEN) {
	const poster = AutoPoster(process.env.TOPGG_TOKEN, client)

	poster.on("error", error => {
		console.log(`Top.gg error >> ${error}`)
	})
}
