const { general } = require("../config.json")
const { Permissions } = require("discord.js")

module.exports = {
	async run (message, client) {
		if (message.content.match(/^<@!?866073671155974174>/)) {
			if (message.channel.type === "DM") {
				console.log(`${message.author.tag} || DM Mention`)
				return message.reply(general.prefixMessage)
			} else if (message.channel.permissionsFor(message.guild.me).has(Permissions.FLAGS.SEND_MESSAGES)) {
				console.log(`${message.author.tag} || Mention`)
				return message.reply(general.prefixMessage)
			}	else {
				console.log(`${message.author.tag} || Mention Error`)
				return message.author.dmChannel.send(general.sendMessageError).catch(error => console.log(`Error: ${error}`))
			}
		}

		if (!general.owners.includes(message.author.id)) return

		switch (message.content) {
		case "!guild":
			await client.guilds.cache.get("861948446910578699").commands.set(client.commands.map(command => command))
			return message.reply("Deployed Guild Slash Commands")
		case "!global":
			await client.application.commands.set(client.commands.map(command => command))
			return message.reply("Deployed Global Slash Commands")
		case "!removeguild":
			await client.guilds.cache.get("861948446910578699").commands.set([])
			return message.reply("Removed Guild Slash Commands")
		}
	}
}
