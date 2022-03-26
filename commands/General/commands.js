import { MessageEmbed } from "discord.js"
import { interactionReply } from "../../utils.js"
import { config } from "../../index.js"

export const description = "A complete list of Rat Gods commands"
export function run (interaction) {
	interactionReply(interaction, {
		messageEmbed: new MessageEmbed()
			.setColor(config.embedDesign.color)
			.setAuthor({ name: "🐀 A Complete List Of Commands For Rat God", url: config.generalLinks.wikiMain })
			.setDescription("A list of all functioning commands for Rat God:")
			.addFields(
				{
					name: "Ammo",
					value: "`12x70mm`\n`20x70mm`\n`23x70mm`\n`9x18mm Makarov`\n`7.62x25mm Tokarev`\n`9x19mm Parabellum`\n`.45 ACP`\n`9x21mm Gyurza`\n`5.7x28mm FN`\n`4.6x30mm HK`\n`9x39mm`\n`.366 TKM`\n`5.45x39`\n`5.56x45mm NATO`\n`.300 Blackout`\n`7.62x39mm`\n`7.62x51mm NATO`\n`7.62x54mmR`\n`.338 Lapua Magnum`\n`12.7x55mm STs-130`\n`40x46 mm`\n`Stationary Weapons`",
					inline: true
				},
				{
					name: "Maps",
					value: "`Customs`\n`Factory`\n`Interchange`\n`Lighthouse`\n`Reserve`\n`Shoreline`\n`Labs`\n`Woods`",
					inline: true
				},

				// { name: "Keys", value: "WIP", inline: false },
				// { name: "Guns", value: "WIP", inline: false }

				{
					name: "General",
					value: "`Commands` - This message.\n`Help` - Help command.\n`Latest` - Latest update.\n`Modabuse` - Funny meme about mod abuse.\n`Ping` - Pinging the bot.\n`Service-Status` - WIP Status on Tarkov services\n`Statistics` - Bot statistics.\n`Support` - Contact details.\n`Time` - Current in-game raid time\n`Mention` - Mention the bot to recieve the prefix."
				}
			)
			.setFooter({ text: config.embedDesign.gameUpdate })
	})
}
