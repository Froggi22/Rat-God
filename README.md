<h1 align="center"><img src="assets/RG.png" alt="Rat God" width="150" title="Rat God" /></h1>

<h1 align="center">Rat God</h1>

<p align="center">
	A Discord bot to help you in Escape From Tarkov!
</p>
<p align="center">
	<a href="LICENSE"><img src="https://badgen.net/badge/License/AGPLv3/blue" alt="AGPLv3 license" title="AGPLv3 license" /></a>
	<a href="https://discord.com/invite/kg7VfRQ9Xw"><img src="https://badgen.net/discord/online-members/kg7VfRQ9Xw?icon=discord&label" alt="Discord Server" title="Join our Discord community!" /></a>
</p>

- - -

## Table of contents

- [About](#about)
	- [Data Collection](#data-collection)
	- [Why Open Source](#why-open-source)
		- [Peer review & Reliability](#peer-review--reliability)
		- [Transparency](#transparency)
		- [Flexibility](#flexibility)
		- [The Price Tag](#the-price-tag)
	- [How This Project Makes Money](#how-this-project-makes-money)
- [Links](#links)
- [How to use](#how-to-use)
- [Features](#features)
- [Contributing](#contributing)
	- [If you wanna help out, please do!](#if-you-wanna-help-out-please-do)
	- [Prerequisites](#prerequisites)
	- [Submit a Pull Request](#submit-a-pull-request)
	- [Slash commands](#slash-commands)
- [Folder & File Information](#folder--file-information)
	- [Folder Info](#folder-info)
	- [File Info](#file-info)

- - -

## About

Rat God is an Open Source Discord bot project that will help you in the game Escape From Tarkov, and is covered by the [Affero General Public License version 3](LICENSE)! It obtains information from the Official Escape from Tarkov Wiki and delivers it to the user with a slash command request. This bot benefits the user due to it being a fast lookup for ammunition and maps details, and most likely faster than looking it up on said Wiki!

This project is constantly being worked on and improved upon by a few people as a hobby. So please show your support in the Discord Support Server! And if you're a very kind soul, you can check out the [Patreon site](https://www.patreon.com/Froggi22)!

### Data Collection

This project does not collect nor store any data, thus not selling anything to 3rd parties - Because ignorance is bliss.

### Why Open Source

Here are the following reasons why this project is open source and supporting the movement:

#### **Peer review & Reliability**

Since the source code is freely accessible and any peer programmers can contribute, it turns into living code rather than closed and stagnant. Consequently, this may result that the community could keep updating the project and make it outlive its original authors. Additionally, this means that you can find help, resources, and perspectives that reach beyond one interest group or company.

#### **Transparency**

All code changes, data tracking, and collections are public and allow you to check and track that for yourself without relying on vendor promises. This results in a trustworthy and reliable product or service as you can see all the shenanigans going on.

#### **Flexibility**

The emphasis on modification can make the community address their unique problems with code suggestions. Alternatively, create forks and add said specific features tailored to their needs. Another flexibility perk is the freedom - you can take your open source code anywhere and use it for anything, at any time.

#### **The Price Tag**

Services that are open source are often also free of charge, like this project.

### How This Project Makes Money

This project does not make any money. However, you can make donations on our [Patreon site](https://www.patreon.com/Froggi22) to support this project!

## Links

- [Invite Bot](https://discord.com/api/oauth2/authorize?client_id=864572952275714059&permissions=274877958208&scope=bot%20applications.commands)
- [Support Discord Server](https://discord.com/invite/kg7VfRQ9Xw) *<-- Highly recommend to join!*
- [Website](https://rat-god-website.herokuapp.com/)
- [Website's repository](https://github.com/Froggi22/Rat-God-Website)
- Vote on [Top.gg](https://top.gg/bot/864572952275714059/vote)
- [Patreon site](https://www.patreon.com/Froggi22)

## How to use

1. [Add me to your server](https://discord.com/api/oauth2/authorize?client_id=864572952275714059&permissions=274877958208&scope=bot%20applications.commands).
2. Use the [commands](#features)! 🎉

## Features

- Rat God uses **Slash commands** - Prefix: `/`.
- Auto-complete choices, so you don't have to remember any by heart!
- To get a list of **all** commands, execute `/commands`.
- For extra help or questions, execute `/support` or click [here](https://discord.com/invite/kg7VfRQ9Xw) to head over to the Discord support server.

Commands for all calibers:\
Example command: `/ammo 20x70mm`.\
The raw command for copy-pasting: `/ammo caliber:20x70mm`.

```txt
12x70mm
20x70mm
23x75mm
9x18mm Makarov
7.62x25mm Tokarev
9x19mm Parabellum
.45 ACP
9x21mm Gyurza
5.7x28mm FN
4.6x30mm HK
9x39mm
.366 TKM
5.45x39mm
5.56x45mm NATO
.300 Blackout
7.62x39mm
7.62x51mm NATO
7.62x54mmR
.338 Lapua Magnum
12.7x55mm STs-130
40x46 mm
Stationary Weapons
```

Commands for all maps:\
Example command: `/maps woods map`.\
The raw command for copy-pasting: `/maps woods map:Map`.\
Note: All maps have an Info command as well.

```txt
Customs:        Normal Map | Hidden Stashes | Interactive Map | Dorms Map | 3D Map
Factory:        Normal Map | Interactive Map
Interchange:    Normal Map | Hidden Stashes | Interactive Map
Lighthouse:     Normal Map | Hidden Stashes | Interactive Map | 3D Map
Reserve:        Normal Map | Interactive Map | Keys | D-2 Bunker Map | 3D Map
Shoreline:      Normal Map | Hidden Stashes | Interactive Map | Key Spawns | Resort Map | 3D Map
Labs:           Normal Map | Interactive Map | Basement Map | 1st Floor Map | 2nd Floor Map | 3D Map
Woods:          Normal Map | Hidden Stashes | Interactive Map
```

## Permissions

Rat God requests a few permissions. Some are these are required for the bot to be able to function as intended. Here are the permissions requested by the bot with an explanation of what the use-cases are:
- Send Messages (Replying to mentions & Interaction fallbacks)
- Send Messages in Threads (Replying to mentions & Interaction fallbacks, but in threads this time)
- Embed Links (Not required. For future expansion)
- Attach Files (Not required. For future expansion)
- Add Reactions (Not required. For future expansion)

## Contributing

### If you wanna help out, please do!

We're always looking for people who can help with anything from simple spelling mistakes, icon updates, fixes for small bugs, or just posting issues to keep track of what needs to be done.

### Prerequisites

- Installed [Node.js](https://nodejs.org/en/) version 16.9.0 or newer.
- Have a [Discord application](https://discord.com/developers/applications) ("Bot").
- We use ESLint to enforce a consistent coding style.

### Submit A Pull Request

1. Fork this repository (should be on the top right of this page).
2. Clone the fork to your desired local Github projects folder.
3. Create a new file called: `.env`.
4. Edit said env file and write: `TOKEN=your-token-here`, but replace the "your-token-here" text with your API token, obtained from the [Discord Developer Portal](https://discord.com/developers/applications).
5. Install dependencies: `npm ci`.
6. Code your cool new feature!
7. Test out the program: `node .`.
8. Stage, commit, and push your files to your fork.
9. Create a new pull request.

#### Slash Commands

For [slash commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ) to work during testing with your own bot, edit the [config.json](config.json) file and change `developerGuildID` & `developers` to your [server and user ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) respectively.

## Folder & File Information

### Folder Info

- `.vscode/` - Visual Studio Code settings.

### File Info

- `.eslintrc` - Settings for linting extensions.
- `.gitignore` - Used for ignoring files from Git.
- `config.json` - Central file for information/text that the bot sends.
- `Procfile` - For Heroku - the bot's hosting platform.
- `README.md` - The documentation you're reading right now.
