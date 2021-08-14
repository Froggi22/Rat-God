module.exports = {
	name: "messageCreate",
	async execute(message, client) {
		if (!client.application?.owner) await client.application?.fetch();
        if (message.content.toLowerCase() === "!deploy" && message.author.id === client.application?.owner.id) {
            client.guilds.cache.get('861948446910578699').commands.set(client.commands.map(command => command))
        }
    }
};