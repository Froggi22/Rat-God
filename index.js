require('dotenv').config()
const { readdirSync } = require('fs')
const { Client, Collection, Intents } = require('discord.js')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

// Command Handler
client.commands = new Collection()
readdirSync('./commands').forEach(folder => {
	readdirSync(`./commands/${folder}`).forEach(file => {
		const command = require(`./commands/${folder}/${file}`)
		client.commands.set(command.name, command)
	})
})

// Event Handler
const eventFiles = readdirSync('./events').filter(file => file.endsWith('.js'))

for (const file of eventFiles) {
	const event = require(`./events/${file}`)
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client))
	} else {
		client.on(event.name, (...args) => event.execute(...args, client))
	}
}

client.login(process.env.token)
