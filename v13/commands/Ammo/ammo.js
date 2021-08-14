const { MessageEmbed } = require("discord.js");
const confX = require("../../config.json");

module.exports = {
	name: "ammo",
	description: "epic mosin cartridge",
	options: [{
		type: "STRING",
		name: "caliber",
		description: "pew pew",
		required: true,
		choices: [
			{ name: "12x70mm", value: "12x70mm" },
			{ name: "20x70mm", value: "20x70mm" },
			{ name: "23x75mm", value: "23x75mm" },
			{ name: "9x18mm Makarov", value: "9x18mm Makarov" },
			{ name: "7.62x25mm Tokarev", value: "7.62x25mm Tokarev" },
			{ name: "9x19mm Parabellum", value: "9x19mm Parabellum" },
			{ name: ".45 ACP", value: ".45 ACP" },
			{ name: "9x21mm Gyurza", value: "9x21mm Gyurza" },
			{ name: "5.7x28mm FN", value: "5.7x28mm FN" },
			{ name: "4.6x30mm HK", value: "4.6x30mm HK" },
			{ name: "9x39mm", value: "9x39mm" },
			{ name: ".366 TKM", value: ".366 TKM" },
			{ name: "5.45x39mm", value: "5.45x39mm" },
			{ name: "5.56x45mm NATO", value: "5.56x45mm NATO" },
			{ name: ".300 Blackout", value: ".300 Blackout" },
			{ name: "7.62x39mm", value: "7.62x39mm" },
			{ name: "7.62x51mm NATO", value: "7.62x51mm NATO" },
			{ name: "7.62x54mmR", value: "7.62x54mmR" },
			{ name: ".338 Lapua Magnum", value: ".338 Lapua Magnum" },
			{ name: "12.7x55mm STs-130", value: "12.7x55mm STs-130" },
			{ name: "40x46 mm", value: "40x46 mm" },
			{ name: "Stationary Weapons", value: "Stationary Weapons" },
		]
	}],
	execute (interaction) {
		const embed = new MessageEmbed()
			.setDescription(confX.ammoEmbedDescription)
			.setColor(confX.embedColor)
			.setTimestamp()
			.setFooter(confX.gameUpdate)
			
			const data = interaction.options.getString("caliber")
			embed.setTitle(`${data} ${confX.ammoEmbedTitle}`);
			switch (data) {
				case "12x70mm": embed.setImage(confX.ammo12gImage) ; break
				case "20x70mm": embed.setImage(confX.ammo20gImage) ; break
				case "23x75mm": embed.setImage(confX.ammo4gImage) ; break
				case "9x18mm Makarov": embed.setImage(confX.ammo918Image) ; break
				case "7.62x25mm Tokarev": embed.setImage(confX.ammot762Image) ; break
				case "9x19mm Parabellum": embed.setImage(confX.ammo919Image) ; break
				case ".45 ACP": embed.setImage(confX.ammo45Image) ; break
				case "9x21mm Gyurza": embed.setImage(confX.ammo921Image) ; break
				case "5.7x28mm FN": embed.setImage(confX.ammoa57Image) ; break
				case "4.6x30mm HK": embed.setImage(confX.ammo46Image) ; break
				case "9x39mm": embed.setImage(confX.ammo939Image) ; break
				case ".366 TKM": embed.setImage(confX.ammo366Image) ; break
				case "5.45x39mm": embed.setImage(confX.ammo545Image) ; break
				case "5.56x45mm NATO": embed.setImage(confX.ammo556Image) ; break
				case ".300 Blackout": embed.setImage(confX.ammo300Image) ; break
				case "7.62x39mm": embed.setImage(confX.ammo762Image) ; break
				case "7.62x51mm NATO": embed.setImage(confX.ammon762Image) ; break
				case "7.62x54mmR": embed.setImage(confX.ammor762Image) ; break
				case ".338 Lapua Magnum": embed.setImage(confX.ammo338Image) ; break
				case "12.7x55mm STs-130": embed.setImage(confX.ammo127Image) ; break
				case "40x46 mm": embed.setImage(confX.ammo40Image) ; break
				case "Stationary Weapons": embed.setImage(confX.ammoStationaryImage) ; break

    		}
		interaction.reply({ embeds: [embed] });
	}
}