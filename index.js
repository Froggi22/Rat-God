require("dotenv").config()
const { readdirSync } = require("fs")
const { Client, Collection, Intents } = require("discord.js")

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] })
client.commands = new Collection()
client.cooldowns = new Collection()
client.login(process.env.TOKEN)

// Export commands
const commands = []
readdirSync("./commands").forEach(folder => {
	readdirSync(`./commands/${folder}`).forEach(file => {
		commands.push(file.replace(".js", ""))
	})
})
module.exports = { commands }

// Event Handler
readdirSync("./events").forEach(file => {
	const event = require(`./events/${file}`)
	event.name = file.replace(/.(j|t)s/, "")
	if (event.run) client.on(event.name, (...args) => event.run(...args, client))
	else console.log(`[./events/${file}] You forgot run!`)
})

// Command Handler
readdirSync("./commands").forEach(folder => {
	readdirSync(`./commands/${folder}`).forEach(file => {
		const command = require(`./commands/${folder}/${file}`)
		command.name = file.replace(/.(j|t)s/, "")
		if (command.description && command.run) client.commands.set(command.name, command)
		if (!command.description) console.log(`[./commands/${folder}/${file}] You forgot description!`)
		if (!command.run && folder !== "Keys") console.log(`[./commands/${folder}/${file}] You forgot run!`)
	})
})
