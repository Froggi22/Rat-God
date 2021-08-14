const { MessageEmbed } = require('discord.js');
const { embedColor } = require("../../config.json");

module.exports = {
    name: "mention",
    description: "Joke mention command",
    async execute(message) {
        const Embed = new MessageEmbed()
        .setTitle(":facepalm: You are supposed to mention the bot dummy :facepalm:")
        .setColor(embedColor)
        .setTimestamp()

        await message.reply({ embeds: [Embed] });
    }
}