const { MessageEmbed } = require('discord.js');
const { embedColor } = require("../../config.json");

module.exports = {
    name: "servercount",
    description: "Amount of servers, channels and users the bot is connected to",
    async execute(message, client) {
        const Embed = new MessageEmbed()
        .setColor(embedColor)
        .addFields(
            {name: "Servers", value: `${client.guilds.cache.size}`, inline: true},
            {name: "Channels", value: `${client.channels.cache.size}`, inline: true},
            {name: "Users", value: `${client.users.cache.size}`, inline: true}
        )
        .setTimestamp()

        await message.reply({ embeds: [Embed] });
    }
}