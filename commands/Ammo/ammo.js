const { MessageEmbed } = require("discord.js")
const { embedDesign, ammo } = require("../../config.json")
const commandReply = require("../../commandReply.js")

module.exports = {
	description: "Ammo charts for different calibers",
	options: [{
		type: "STRING",
		name: "caliber",
		description: "The ammunition caliber",
		required: true,
		choices: Object.keys(ammo).map(choice => { return { name: choice, value: choice } })
	}],
	run (interaction) {
		const caliber = interaction.options.getString("caliber")
		commandReply.interactionReply(interaction, {
			embeds: [ new MessageEmbed()
				.setColor(embedDesign.color)
				.setAuthor({ name: `${caliber} ${embedDesign.ammoTitle}`, url: embedDesign.wikiBallistics, iconURL: embedDesign.ratGodImage })
				.setDescription(`${embedDesign.ammoDescription}`)
				.setImage(ammo[caliber])
				.setFooter({ text: embedDesign.gameUpdate })
				.setTimestamp()
			]
		})
	}
}
