const { MessageEmbed } = require('discord.js');
const { embedColor, gameUpdate } = require("../../config.json");

module.exports = {
    name: "latest",
    description: "List of the latest updates/fixes/additions",
    async execute(message) {
        const Embed = new MessageEmbed()
        .setTitle("Changelogs")
        .setDescription("```\u200b--1.2--\nAdded Mention and Prefix as joke commands.\nPing commmand is now responding with the actual delay time and a pingpong emoji.\nResponding to missing permissions.\n\n--1.1--\nMaps (incl. commands for all maps).\nCapitalization and punctuation fixes.\nBack-end formatting fixes.\nAdded Timestamps on most embeds.\nPing command is now an embed.\n'Ammo' is now a shortcut for the Ammocmd command.\n\n--1.0--\nCreated Rat god.\nNew general commands: Ping, Help, Latest, Modabuse, Servercount and Support.\nWhen mentioned the bot replies with its prefix.\nNew Tarkov commands:\nAmmocmd (incl. commands for all calibers).```‎")
        .setColor(embedColor)
        .addFields(
            {name: "Appreciation letter", value: "Thank you for inviting my bot!\n I appreciate all critique and improvement suggestions!\n"}
        )
        .setTimestamp()
        .setFooter(gameUpdate)

        await message.reply({ embeds: [Embed] });
    }
}