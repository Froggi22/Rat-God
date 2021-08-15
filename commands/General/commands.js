const { MessageEmbed } = require('discord.js')
const { embedDesign: { color } } = require('../../config.json')

module.exports = {
	description: 'A complete list of Rat Gods commands',
	async run (interaction) {
		interaction.reply({
			embeds: [new MessageEmbed()
				.setTitle('A Complete List Of Commands For Rat God')
				.setDescription('A list of all functioning commands for Rat God')
				.setColor(color)
				.addFields(
					{ name: 'Ammo', value: '`Ammocmd` - List of calibers\n`12x70mm`\n`20x70mm`\n`23x70mm`\n`9x18mm Makarov`\n`7.62x25mm Tokarev`\n`9x19mm Parabellum`\n`.45 ACP`\n`9x21mm Gyurza`\n`5.7x28mm FN`\n`4.6x30mm HK`\n`9x39mm`\n`.366 TKM`\n`5.45x39`\n`5.56x45mm NATO`\n`.300 Blackout`\n`7.62x39mm`\n`7.62x51mm NATO`\n`7.62x54mmR`\n`.338 Lapua Magnum`\n`12.7x55mm STs-130`\n`40x46 mm`\n`Stationary Weapons`', inline: true },
					{ name: 'Maps', value: '`Maps`\n`Factory`\n`Factoryinfo`\n`Factorymap`\n`Factoryim`\n\n`Woods`\n`Woodsinfo`\n`Woodsmap`\n`Woodshs`\n`Woodsim`\n\n`Customs`\n`Customsinfo`\n`Customsmap`\n`Customshs`\n`Customsim`\n`Customsdorms`\n\n`Shoreline`\n`Shorelineinfo`\n`Shorelinemap`\n`Shorelinehs`\n`Shorelineim`\n`Shorelinekey`\n`Shorelineresort`', inline: true },
					{ name: '\u200B', value: '`Interchange`\n`Interchangeinfo`\n`Interchangemap`\n`Interchangehs`\n`Interchangeim`\n\n`Labs`\n`Labsinfo`\n`Labsmap`\n`Labsim`\n`Labsb`\n`Labs1`\n`Labs2`\n\n`Reserve`\n`Reserveinfo`\n`Reservemap`\n`Reserveim`\n`Reservekey`\n`Reserved2`', inline: true },
					{ name: 'General', value: '`Mention` - Mention the bot to get the prefix.\n`Ping` - Pings the bot to check the status.\n`Help` - Help command.\n`Latest` - Latest updates.\n`Modabuse` - For those complaining about mod abuse.\n`Servercount` - How many servers the bot is invited to.\n`Support` - Sends support link.\n`Commands` - This message.', inline: true }
				// {name: "Guns", value: "WIP", inline: false},
				// {name: "Keys", value: "WIP", inline: false}
				)
				.setTimestamp()]
		})
	}
}
