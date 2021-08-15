module.exports = {
	description: 'Pinging responsetimes',
	async run (message, client) {
		message.reply(`:ping_pong: Pong!\nWebsocket heartbeat: ${client.ws.ping}ms.`)
	}
}
