const { MessageEmbed } = require("discord.js")
const { embedDesign } = require("../../config.json")

module.exports = {
	description: "A complete list of Rat Gods commands",
	async run (interaction) {
		interaction.reply({
			embeds: [new MessageEmbed()
				.setAuthor("A Complete List Of Commands For Rat God", embedDesign.ratGodImage, embedDesign.wikiMain)
				.setDescription("A list of all functioning commands for Rat God:")
				.setColor(embedDesign.color)
				.addFields(
					{ name: "Ammo", value: "`12x70mm`\n`20x70mm`\n`23x70mm`\n`9x18mm Makarov`\n`7.62x25mm Tokarev`\n`9x19mm Parabellum`\n`.45 ACP`\n`9x21mm Gyurza`\n`5.7x28mm FN`\n`4.6x30mm HK`\n`9x39mm`\n`.366 TKM`\n`5.45x39`\n`5.56x45mm NATO`\n`.300 Blackout`\n`7.62x39mm`\n`7.62x51mm NATO`\n`7.62x54mmR`\n`.338 Lapua Magnum`\n`12.7x55mm STs-130`\n`40x46 mm`\n`Stationary Weapons`", inline: true },
					{ name: "Maps", value: "`Maps`\n`Customs`\n`Customs Info`\n`Customs Map`\n`Customs HS`\n`Customs IM`\n`Customs Dorms`\n\n`Factory`\n`Factory Info`\n`Factory Map`\n`Factory IM`\n\n`Interchange`\n`Interchange Info`\n`Interchange Map`\n`Interchange HS`\n`Interchange IM`\n\n`Lighthouse`\n`Lighthouse Info`\n`Lighthouse Map`\n`Lighthouse IM`", inline: true },
					{ name: "\u200b", value: "`Reserve`\n`Reserve Info`\n`Reserve Map`\n`Reserve IM`\n`Reserve Key Guide`\n`Reserve D-2 Bunker`\n\n`Shoreline`\n`Shoreline Info`\n`Shoreline Map`\n`Shoreline HS`\n`Shoreline IM`\n`Shoreline Key Spawns`\n`Shoreline Resort`\n\n`Labs`\n`Labs Info`\n`Labs Map`\n`Labs IM`\n`Labs Basement`\n`Labs 1st Floor`\n`Labs 2nd Floor`\n\n`Woods`\n`Woods Info`\n`Woods Map`\n`Woods HS`\n`Woods IM`", inline: true },

					{ name: "General", value: "`Help` - Help command.\n`Ping` - Pings the bot.\n`Commands` - This message.\n`Modabuse` - Users breaking rules and complaining about mod abuse.\n`Mention` - Mention the bot to recieve the prefix.\n`Servercount` - Bot's popularity.\n`Support` - Contact details.\n`Latest` - Latest updates.", inline: true }
				// {name: "Keys", value: "WIP", inline: false}
				// {name: "Guns", value: "WIP", inline: false},
				)
				.setFooter(embedDesign.gameUpdate)
				.setTimestamp()]
		})
	}
}
