<h1 align="center"><img src="assets/RG.png" alt="Rat God" width="150" /></h1>

<h1 align="center">Rat God</h1>

<p align="center">
	A Discord bot to help you in Escape From Tarkov!
</p>
<p align="center">
	<a href="LICENSE"><img src="https://badgen.net/badge/License/GPL%20v3/blue" alt="License GPL v3" /></a>
	<a href="https://discord.com/invite/kg7VfRQ9Xw"><img src="https://badgen.net/discord/online-members/kg7VfRQ9Xw?icon=discord&label" alt="Discord Server" /></a>
</p>

- - -

## Table of contents

- [About](#about)
- [Links](#links)
- [How to use](#how-to-use)
- [Features](#features)
- [Contributing](#contributing)
	- [Prerequisites](#prerequisites)
	- [Submit a Pull Request](#submit-a-pull-request)
	- [Slash commands](#slash-commands)
- [Folder & File Information](#folder--file-information)
	- [Folders](#folders)
	- [Files](#files)

- - -

## About

Rat God is an open source Discord bot that will help you in the game Escape From Tarkov! It obtains information from the Official Escape from Tarkov Wiki, and delivering it to the user with a slash command request. This bot benefits the user due to it being a fast lookup for ammunition and maps details, and most likely faster than looking it up on said Wiki!

This project is constantly being worked and improved upon by a few number of people as a hobby. So please show your support in the Discord Support Server!

## Links

- [Invite Bot](https://discord.com/api/oauth2/authorize?client_id=864572952275714059&permissions=274877958208&scope=bot%20applications.commands)
- [Support Discord Server](https://discord.com/invite/kg7VfRQ9Xw) *<-- Highly recommend to join!*
- [Website](https://rat-god-website.herokuapp.com/)
- [Website's repository](https://github.com/Froggi22/Rat-God-Website)
- Vote on [Top.gg](https://top.gg/bot/864572952275714059/vote)

## How to use

1. Click [here](https://discord.com/api/oauth2/authorize?client_id=864572952275714059&permissions=274877958208&scope=bot%20applications.commands) to add me to your server!
2. Use the commands provided [here](#features).

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
Reserve:        Normal Map | Interactive Map | Keys | D-2 Bunker Map
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

### Prerequisites

- This code is distributed under the terms of the [GNU General Public License, v3](LICENSE). Read and understand it.
- Installed [Node.js](https://nodejs.org/en/) version 16.9.0 or newer.
- Have a [Discord application](https://discord.com/developers/applications) ("Bot").
- We use ESLint to enforce a consistent coding style.

### Submit a Pull Request

1. Fork this repository (should be on the top right of this page).
2. Clone the fork to your desired local Github projects folder.
3. Create a new file called: `.env`.
4. Edit said env file and write: `TOKEN=your-token-here`, but replace the "your-token-here" text with your API token, obtained from the [Discord Developer Portal](https://discord.com/developers/applications).
5. Install dependencies: `npm ci`.
6. Code your cool new feature!
7. Test out the program: `node .`.
8. Stage, commit, and push your files to your fork.
9. Create a new pull request.

#### Slash commands

For slash commands to work during testing, edit the [config.json](config.json) file and change `developerGuildID` & `developers` to your [server and user ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) respectively.

## Folder & File Information

### Folders

- `.vscode/` - Visual Studio Code settings.

### Files

- `.eslintrc` - Settings for linting extensions.
- `.gitignore` - Used for ignoring files from Git.
- `config.json` - Central file for information/text that the bot sends.
- `Procfile` - For Heroku - the bot's hosting platform.
- `README.md` - The documentation you're reading right now.
