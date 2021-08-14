const { MessageEmbed } = require("discord.js");
const confX = require("../../config.json");

function embedFieldFFS(fieldName, fieldValue) {
	embedFieldMain.name = fieldName;
	console.log(embedFieldMain)
}

module.exports = {
	name: "maps",
	description: "Map guides",
	options: [
		{
			name: "factory",
			description: "Factory area",
			type: "SUB_COMMAND",
			options: [
				{
					name: "map",
					description: "What kind of map guide?",
					type: "STRING",
					choices: [
						{ name: "Info", value: "Info" },
						{ name: "Map", value: "Map" },
						{ name: "Interactive Map", value: "Interactive Map" },
					]
				},
			]
		},
		{
			name: "woods",
			description: "Woods area",
			type: "SUB_COMMAND",
			options: [
				{
					name: "map",
					description: "What kind of map guide?",
					type: "STRING",
					choices: [
						{ name: "Info", value: "Info" },
						{ name: "Map", value: "Map" },
						{ name: "Hidden Stashes", value: "Hidden Stashes" },
						{ name: "Interactive Map", value: "Interactive Map" },
					]
				},
			]
		},
		{
			name: "customs",
			description: "Customs area",
			type: "SUB_COMMAND",
			options: [
				{
					name: "map",
					description: "What kind of map guide?",
					type: "STRING",
					choices: [
						{ name: "Info", value: "Info" },
						{ name: "Map", value: "Map" },
						{ name: "Hidden Stashes", value: "Hidden Stashes" },
						{ name: "Interactive Map", value: "Interactive Map" },
						{ name: "Dorms Map", value: "Dorms" },
						{ name: "3D Map", value: "3D" },

					]
				},
			]
		},
	],
	execute (interaction) {
		//const data1 = interaction.options.getString("area")
		const data2 = interaction.options.getString("map")
		// EMBEDS - ONLY ONE, CHANGE THE CHANGEY BOIS NOT 100 FUCKING EMBEDS

		var location = interaction.options.getSubcommand()
		var locationCap = location.charAt(0).toUpperCase() + location.slice(1)

		/* FAILED ATTEMPT TO OPTIMIZE
		var embedFieldMain = {
			name: "Foo",
			value: "Bar"
		}

		const embedMain = new MessageEmbed() // Main
			.addFields({name: `${embedFieldMain.name}`, value: `${embedFieldMain.value}`})
			.setColor(confX.embedColor)
			.setTimestamp()
			.setFooter(confX.gameUpdate)

		switch (data2) {
			case null:
				embedMain.setTitle(`${locationCap} Maps Command`)
				embedMain.setDescription(confX.mapsEmbedNullDescription)
				var embedFieldMain.name = "Type \"/Maps ABRA Info\" to get detailed info about the area";
				//embedMain.fields.push({ name: `Type \"/Maps YEAH Info\" to get detailed info about the area`})
				console.log(embedMain.fields)
				//embedMain.fields[0].name = `Type \"/Maps YEAH Info\" to get detailed info about the area`
				break;
			case "Info":
				embedMain.setTitle(`${locationCap} Detailed Information`)
				embedMain.setDescription(confX.mapsEmbedInfoDescription)
				break;
			case "Map":
				embedMain.setTitle(`Detailed ${locationCap} Map`)
				embedMain.setDescription(`A useful ${locationCap} map`)
				break;
			case "Hidden Stashes":
				embedMain.setTitle(`${locationCap} Hidden Stashes`)
				embedMain.setDescription(`Locations of all hidden stashes`)
				break;
			case "Interactive Map":
				embedMain.setTitle(`Interactive ${locationCap} map`)
				break;
			case "Custom":
				embedMain.setTitle("AAAAAAAAAAAAAAAAA")
				break;
		} */

		const embedNull = new MessageEmbed() // Null
			.setTitle(`${locationCap} Maps Command`)
			.setDescription(confX.mapsEmbedNullDescription)
			.setColor(confX.embedColor)
			.setTimestamp()
			.setFooter(confX.gameUpdate)
			
		const embedInfo = new MessageEmbed() // Info
			.setTitle(`${locationCap} Detailed Information`)
			.setDescription(confX.mapsEmbedInfoDescription)
			.setColor(confX.embedColor)
			.setTimestamp()
			.setFooter(confX.gameUpdate)

		const embedMap = new MessageEmbed() // Map
			.setTitle(`Detailed ${locationCap} Map`)
			.setDescription(`A useful ${locationCap} map`)
			.setColor(confX.embedColor)
			.setTimestamp()
			.setFooter(confX.gameUpdate)

		const embedHS = new MessageEmbed() // Hidden Stashes <=
			.setTitle(`${locationCap} Hidden Stashes`)
			.setDescription(`Locations of all hidden stashes`)
			.setColor(confX.embedColor)
			.setTimestamp()
			.setFooter(confX.gameUpdate)

		const embedIM = new MessageEmbed() // Interactive Map
			.setTitle(`Interactive ${locationCap} map`)
			.setColor(confX.embedColor)
			.setTimestamp()
			.setFooter(confX.gameUpdate)
		
		const embedCustom = new MessageEmbed() // Custom Embed <=
			.setColor(confX.embedColor)
			.setTimestamp()
			.setFooter(confX.gameUpdate)
		// EMBEDS

		
			switch (location) {
				case "factory":
					switch (data2) {
						case null: embedNull.setImage(confX.mapsFactoryNullImage), embedNull.addField(`Type \"/Maps Factory Info\" to get detailed info about the area`, `Detailed map: **/Maps Factory Map**‎\nInteractive map: **/Maps Factory Interactive Map**`) ; break
						//case null: embedMain.setImage(confX.mapsFactoryNullImage); embedFieldMain.value = "CADABRA" ; break //`Detailed map: **/Maps FUCK YEAH Map**‎\nInteractive map: **/Maps Factory Interactive Map**`
						case "Info":
							embedInfo.setImage(confX.mapsFactoryInfoImage),
							embedInfo.addFields(
								{name: "Description", value: "‎The industrial estate and facilities of chemical factory #16 were rented out illegally to the TerraGroup company.\nDuring the Contract Wars, this factory was a hotbed for numerous firefights between USEC and BEAR operatives that determined control over the entire Tarkov industrial district.\nWith time, the factory premises were converted into a shelter for local civilians, Scavs, along with the occasional USEC or BEAR operators."},
								{name: "Features", value: "A small, fast-paced CQC map inside of a multi-story industrial factory, complete with tunnels and overhead walkways."},
								{name: "Boss", value: "**Name:** Tagilla."},
								{name: "Locations", value: "Tagilla can be found mainly nearby the pit and underground sections of Factory.\n**as of 0.12.11**"},
								{name: "Health", value: "1220 Total, Head: 100, Thorax: 320, Stomach: 260, Arms: 130 each, Legs: 140 each."},
								{name: "Followers", value: "Tagilla has no followers of any sort."},
								{name: "Suggestions", value: "Leave suggestions about what else would be nice to have inside of this command."}
							) ; break
						case "Map": embedMap.setImage(confX.mapsFactoryMapImage), embedMap.addField(`Type \"/Maps Factory Info\" to get detailed info about the area`, `Made for **0.12.11**‎\nMap is still valid.`) ; break
						case "Interactive Map": embedIM.setDescription("[A **very** useful Factory map](https://tarkov-tools.com/map/factory)"), embedIM.addField(`Type \"/Maps Factory Info\" to get detailed info about the area`, `Made for **0.12.11**‎\nMap is still valid.`) ; break
					}
				case "woods":
					switch (data2) {
						case null: embedNull.setImage(confX.mapsWoodsNullImage), embedNull.addField(`Type \"/Maps Woods Info\" to get detailed info about the area`, `Detailed map: **/Maps Woods Map**\nGuide for hidden stashes: **/Maps Woods Hidden Stashes**\nInteractive map: **/Maps Woods Interactive Map**`) ; break
						case "Info":
							embedInfo.setImage(confX.mapsWoodsInfoImage),
							embedInfo.addFields(
								{name: "Description", value: "The Priozersky Natural Reserve recently became part of the state-protected wildlife reserves of the North Western Federal District."},
								{name: "Features", value: "Woods is the largest map containing a moderately sized section of woods with some open fields, small hills, a logging camp, and the bunkers [ZB-014](https://escapefromtarkov.fandom.com/wiki/Key_ZB-014) and [ZB-016](https://escapefromtarkov.fandom.com/wiki/ZB-016)."},
								{name: "Boss", value: "**Name:** Shturman."},
								{name: "Locations", value: "Shturman and his followers typically spawn in and around the Lumber Mill in the center of the map, rarely leaving the grounds.\n**as of 0.12.11**"},
								{name: "Health", value: "812 Total, Head: 62, Thorax: 180, Stomach: 150, Arms: 100 each, Legs: 110 each."},
								{name: "Followers", value: "Shturman always has two followers, each with high caliber weapons and deadly accuracy, additionally they can have class 3-6 armor vests."},
								{name: "Suggestions", value: "Leave suggestions about what else would be nice to have inside of this command."}
							) ; break
						case "Map": embedMap.setImage(confX.mapsWoodsMapImage), embedMap.addField(`Type \"/Maps Woods Info\" to get detailed info about the area`, `Made for **0.12.11**‎\nMap is still valid.`) ; break
						case "Hidden Stashes": embedHS.setImage(confX.mapsWoodsHSImage), embedHS.addField(`Type \"/Maps Woods Info\" to get detailed info about the area`, `Made for **0.12.11**‎\nMap is still valid.`) ; break
						case "Interactive Map": embedIM.setDescription("[A **very** useful Woods map](https://tarkov-tools.com/map/woods)"), embedIM.addField(`Type \"/Maps Woods Info\" to get detailed info about the area`, `Made for **0.12.11**‎\nMap is still valid.`) ; break
					}
				case "customs":
					switch (data2) {
						case null: embedNull.setImage(confX.mapsCustomsNullImage), embedNull.addField(`Type \"/Maps Customs Info\" to get detailed info about the area`, `Detailed map: **/Maps Customs Map**\nGuide for hidden stashes: **/Maps Customs Hidden Stashes**\nInteractive map: **/Maps Customs Interactive Map**\nDorms map: **/Maps Customs Dorms**\n3D map: **/Maps Customs 3D**`) ; break
						case "Info":
							embedInfo.setImage(confX.mapsCustomsInfoImage),
							embedInfo.addFields(
								{name: "Description", value: "A large area of industrial park land situated adjacent to the factory. This area houses a customs terminal, fuel storage facilities, offices, and dorms as well as a variety of other infrastructure buildings."},
								{name: "Features", value: "**The Dorms** are two buildings located in the southernmost area of the map. The eastern building is three stories tall while the western building is two stories tall. Each structure boasts a front entrance and a fire escape at each end with doorways leading to each floor (some of which are blocked or permanently locked). These dorms are the location of many Quests and unlockable rooms.\n\n**Construction** is a two story concrete frame of a building. This structure had a wide view of the river crossing and bridge.\n\n**New Gas Station** is a building at the western side of the map, near the main road. The building has two unlockable rooms in it, and a view on the shortcut.\n\n**Military Checkpoint** is at the end of the road past the Gas Station. This point has many Scavs and is the only location with easy access through the wall to the extraction zones.\n\n**ZB-1013 or Stronghold** is at the northern end of the map and features a unlockable extract; loot; and views of crackhouse, construction and the train crossing."},
								{name: "Boss", value: "**Name:** Reshala."},
								{name: "Locations", value: "Marked circles on the map.\nIn the \"Dorms\", in the \"New Gas Station\", or in the \"Scav Stronghold\"\nRarely at the tower south of the \"New Gas Station\"\nRarely at the passage between Checkpoint and Sub-Station\n**as of 0.12.11**"},
								{name: "Health", value: "752 Total, Head: 62, Thorax: 145, Stomach: 125, Arms: 100 each, Legs: 110 each."},
								{name: "Followers", value: "Following Reshala around are 4 heavily armed guards."},
								{name: "Suggestions", value: "Leave suggestions about what else would be nice to have inside of this command."}
							) ; break
						case "Map": embedMap.setImage(confX.mapsCustomsMapImage), embedMap.addField(`Type \"/Maps Customs Info\" to get detailed info about the area`, `Made for **0.12.11**‎\nMap is still valid.`) ; break
						case "Hidden Stashes": embedHS.setImage(confX.mapsCustomsHSImage), embedHS.addField(`Type \"/Maps Customs Info\" to get detailed info about the area`, `Made for **0.12.11**‎\nMap is still valid.`) ; break
						case "Interactive Map": embedIM.setDescription("[A **very** useful Customs map](https://tarkov-tools.com/map/customs)"), embedIM.addField(`Type \"/Maps Customs Info\" to get detailed info about the area`, `Made for **0.12.11**‎\nMap is still valid.`) ; break
						case "Dorms Map": embedCustom.setTitle(`Customs Dorms Map`), embedCustom.setDescription(`Dorms guide`), embedCustom.setImage(confX.mapsCustomsDormsImage), embedCustom.addField(`Type \"/Maps Customs Info\" to get detailed info about the area`, `Made for **0.12.11**‎\nMap is still valid.`) ; break
						case "3D Map": embedCustom.setTitle(`3D Customs Map`), embedCustom.setDescription(`A useful 3D Customs map`), embedCustom.addField(`Type \"/Maps Customs Info\" to get detailed info about the area`, `Made for **0.12.11**‎\nMap is still valid.`) ; break
					}
				case "shoreline":
					switch (data2) {
						case null: ; break
						case "Info": ; break
						case "Map": ; break
						case "Hidden Stashes": ; break
						case "Interactive Map": ; break
						case "Key Spawns Map": ; break
						case "Resort Map": ; break
						case "3D Map": ; break
					}
				case "interchange":
					switch (data2) {
						case null: ; break
						case "Info": ; break
						case "Map": ; break
						case "Hidden Stashes": ; break
						case "Interactive Map": ; break
					}
				case "labs":
					switch (data2) {
						case null: ; break
						case "Info": ; break
						case "Map": ; break
						case "Interactive Map": ; break
						case "Basement Floor Map": ; break
						case "First Floor Map": ; break
						case "Second Floor Map": ; break
						case "3D Map": ; break			
					}
				case "reserve":
					switch (data2) {
						case null: ; break
						case "Info": ; break
						case "Map": ; break
						case "Interactive Map": ; break
						case "Key Map": ; break
						case "D2 Bunker Map": ; break
					}
    		}
			//console.log(embedMain.fields)
			switch (data2) {
				case null: interaction.reply({ embeds: [embedNull] }) ; break
				case "Info": interaction.reply({ embeds: [embedInfo] }) ; break
				case "Map": interaction.reply({ embeds: [embedMap] }) ; break
				case "Hidden Stashes": interaction.reply({ embeds: [embedHS] }) ; break
				case "Interactive Map": interaction.reply({ embeds: [embedIM] }) ; break
				case "Custom": interaction.reply({ embeds: [embedCustom] }) ; break
			}
	}
}