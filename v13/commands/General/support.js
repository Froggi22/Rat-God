const { MessageEmbed } = require('discord.js');
const { embedColor, supportInviteLink } = require("../../config.json");

module.exports = {
    name: "support",
    description: "Link to Froggis DMs and the support discord server",
    async execute(message) {
        const Embed = new MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/865617643449221141/866742462093852742/Rat_God.jpg")
        .setTitle("Support")
        .setDescription("Contact information for support")
        .setColor(embedColor)
        .addFields(
            {name: "Discord Server", value: `[Link](${supportInviteLink})`},
            {name: "Froggis DMs", value: "Froggi22#3436"}
        )
        .setTimestamp()

        await message.reply({ embeds: [Embed] });
    }
}