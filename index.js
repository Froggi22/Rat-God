require('dotenv').config()
const chalk = require('chalk')
const { readdirSync } = require('fs')
const { Client, Collection, Intents } = require('discord.js')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
client.commands = new Collection()
client.cooldowns = new Collection()
client.login(process.env.token)

// Export commands
const commands = []
readdirSync('./commands').forEach(folder => {
	readdirSync(`./commands/${folder}`).forEach(file => {
		commands.push(file.replace('.js', ''))
	})
})
module.exports = { commands }

// Event Handler
readdirSync('./events').forEach(file => {
	const event = require(`./events/${file}`)
	event.name = file.replace('.js', '')
	if (event.run) client.on(event.name, (...args) => event.run(...args, client))
	else console.log(`${chalk.bgHex('#FFFF00')('    ')} [./events/${file}] You forgot run!`)
})

// Command Handler
readdirSync('./commands').forEach(folder => {
	readdirSync(`./commands/${folder}`).forEach(file => {
		const command = require(`./commands/${folder}/${file}`)
		command.name = file.replace('.js', '')
		if (command.description && command.run) client.commands.set(command.name, command)
		if (!command.description) console.log(`${chalk.bgHex('#FFFF00')('    ')} [./commands/${folder}/${file}] You forgot description!`)
		if (!command.run) console.log(`${chalk.bgHex('#FFFF00')('    ')} [./commands/${folder}/${file}] You forgot run!`)
	})
})
