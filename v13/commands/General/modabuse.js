const { MessageEmbed } = require('discord.js');
const { embedColor, modAbuseImage } = require("../../config.json");

module.exports = {
    name: "modabuse",
    description: "For those complaining about mod abuse",
    async execute(message) {
        const Embed = new MessageEmbed()
        .setTitle("Mod abuse")
        .setColor(embedColor)
        .setImage(modAbuseImage)
        .setTimestamp()

        await message.reply({ embeds: [Embed] });
    }
}