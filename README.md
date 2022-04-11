<h1 align="center"><img src="assets/RG.png" alt="Rat God" width="150" title="Rat God" /></h1>

<h1 align="center">Rat God</h1>

<p align="center">
	A Discord bot to help you in Escape From Tarkov!
</p>
<p align="center">
	<a href="LICENSE"><img src="https://badgen.net/badge/License/AGPLv3/blue" alt="AGPLv3 license" title="AGPLv3 license" /></a>
	<a href="https://discord.com/invite/kg7VfRQ9Xw"><img src="https://badgen.net/discord/online-members/kg7VfRQ9Xw?icon=discord&label" alt="Discord Server" title="Join our Discord community!" /></a>
	<br />
	<a href="https://top.gg/bot/864572952275714059"><img src="https://top.gg/api/widget/status/864572952275714059.svg" alt="Bot Status" title="Bot Status" /></a>
	<a href="https://top.gg/bot/864572952275714059"><img src="https://top.gg/api/widget/servers/864572952275714059.svg" alt="Bot Server Count" title="Bot Server Count" /></a>
</p>

- - -

## About 💡

Rat God is an Open Source Discord bot that helps you in the game Escape From Tarkov, and is covered by the [Affero General Public License version 3](LICENSE)! The information is sourced from the game and the Official Wiki. It can be requested using [Discord's slash commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ). This bot benefits the user because it's a fast lookup for ammunition and maps details, presents unique data and is more than likely faster than looking it up on said Wiki!

This project is constantly being worked on and improved upon by a few people as a hobby. So please show your support in the [Discord Server](https://discord.com/invite/kg7VfRQ9Xw)!

### Data Collection 📊

This project does not collect nor store any data, thus not selling anything to 3rd parties - Because ignorance is bliss.

### Revenue 💰

The revenue this project generates is by generous donations on our [Patreon site](https://www.patreon.com/Froggi22) by kind souls like you!

- - -

## Links 🔗

- [Invite Bot](https://discord.com/api/oauth2/authorize?client_id=864572952275714059&permissions=274877958208&scope=bot%20applications.commands)
- [Discord Server](https://discord.com/invite/kg7VfRQ9Xw) *<-- Highly recommend to join!*
- [Website](https://rat-god-website.herokuapp.com)
- [Website's repository](https://github.com/Froggi22/Rat-God-Website)
- Vote on [Top.gg](https://top.gg/bot/864572952275714059/vote)
- [Patreon site](https://www.patreon.com/Froggi22)

- - -

## How to use 🌟

1. [Add me to your server](https://discord.com/api/oauth2/authorize?client_id=864572952275714059&permissions=274877958208&scope=bot%20applications.commands).
2. Use the [commands](#features)! 🎉

- - -

## Features 🧰

- Rat God uses [Slash commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ) - Prefix: `/`.
- Auto-complete choices, so you don't have to remember any by heart!
- To get a list of **all** commands, execute `/commands`.
- For extra help or questions, execute `/support` or head over to the [Discord Server](https://discord.com/invite/kg7VfRQ9Xw).

### Ammunition 💥

The ammunition command `/ammo` consists of 2 parts:

1. Choosing the caliber, e.g. `/ammo caliber:20x70mm`.
2. Optionally selecting the order of the bullets, e.g. `/ammo caliber:20x70mm sorting:Damage`.

### Maps 🗺️

The maps command `/map` consists of 1 part:

1. Choosing the location, e.g. `/map location:Factory`.

The embed response has some buttons (amount varies on the map).\
Some buttons link to external websites e.g. the wiki and to an interactive map.\
The blue buttons however will send another message containing a special map e.g. an in-game map.

### Misc ⌚

- The time command `/time` will display the current in-game raid time.

- - -

## FAQ 📚

Expand the sections below to view the most commonly asked questions along with their answers:

<details>
	<summary>Where can I test out the bot and get in contact with you?</summary>
	Our <a href="https://discord.com/invite/kg7VfRQ9Xw" target="_blank">Discord Server</a> is just for this! Join now!
</details>

<details>
	<summary>Do you have a video explaining how to use the bot?</summary>
	<div class="faq-answer">
		Yes we do! The video is <a href="https://youtu.be/xQwQqnkmScg" target="_blank">on youtube</a> - <i>Yes many cringe</i>
	</div>
</details>

- - -

## Permissions ⚙️

Rat God requests a few permissions. Some are required for the bot to function as intended. Here are the permissions requested by the bot with an explanation of what the use-cases are:
- Send Messages (Replying to mentions & Interaction fallbacks)
- Send Messages in Threads (Replying to mentions & Interaction fallbacks - but in threads this time)
- Embed Links (Not required. For future expansion)
- Attach Files (Not required. For future expansion)
- Add Reactions (Not required. For future expansion)

- - -

## Contributing 🔨

We're always looking for people who can help with anything from simple spelling mistakes, icon updates, bug fixes, etc. Contributions can grant you a unique role in the Discord Server! However, please get in touch over Discord in advance to discuss suggestions, as it will greatly increase the chances of merging the Pull Request.

### Prerequisites 📩

- Installed [Node.js](https://nodejs.org) version 16.9.0 or newer.
- Have a [Discord application](https://discord.com/developers/applications) with Bot enabled.
- We use [ESLint](https://eslint.org) to enforce a consistent coding style.

### Implementing Changes 🏗️

1. Fork this repository (should be on the top right of this page).
2. Clone the fork to your desired local Github projects folder.
3. Create a new file called: `.env` ([Read more about enviroment variables](https://nodejs.dev/learn/how-to-read-environment-variables-from-nodejs)).
4. Enviroment variables in the project:
	- `BOT_TOKEN`: The Discord bot token.
	- `TOPGG_TOKEN`: An optional Top.gg token for posting bot statistics to their website.
5. Install dependencies: `npm ci`.
6. Code your new feature!
7. Test out the program: `node .`.
8. Stage, commit, and push your files to your fork.
9. Create a new pull request.

#### Slash Commands 🧪

To make [slash commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ) work during testing with your bot, edit the [config.json](config.json) file and change `developerGuildID` & `developers` to your [server and user ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-), respectively. Run your bot, find a text channel in your server where the bot has access to, and enter `!guild`. The`!guild` command will enable slash commands instantly in said server. If you would like to execute slash commands globally (in other servers and DM's), enter `!global` instead. Please note that global slash commands can take up to an hour to set up!

- - -

## Folder & File Information 🗂️

### Folder Info 📂

- `.vscode/` - Visual Studio Code settings.

### File Info 📄

- `.eslintrc` - Settings for linting extensions.
- `.gitignore` - Used for ignoring files from Git.
- `config.json` - Central file for information/text that the bot sends.
- `Procfile` - For Heroku - the bot's hosting platform.
- `README.md` - The documentation you're reading right now.
