module.exports = {
    name: "ping",
    description: "Pinging responsetimes",
    async execute(message, client) {
		message.reply(`:ping_pong: Pong!\nWebsocket heartbeat: ${client.ws.ping}ms.`);
    }
}