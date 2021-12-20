# Rat God

<img align="right" src="Images/RG_Christmas.png" alt="Rat God profile image" width="150" />

[![License: GPL v3](https://badgen.net/badge/License/GPL%20v3/blue)](LICENSE)
[![Discord](https://badgen.net/discord/online-members/kg7VfRQ9Xw?icon=discord&label)](https://discord.com/invite/kg7VfRQ9Xw)

This is the source code for Rat God, a Discord bot that will help you in Escape From Tarkov. Have easy and fast access to in-game information!

- [Website](https://rat-god-website.herokuapp.com/)
- [Support Discord Server](https://discord.com/invite/kg7VfRQ9Xw) *<-- Highly recommend to join!*
- [Website repository](https://github.com/Froggi22/Rat-God-Website)

## Table of contents

- [How to use](#how-to-use)
- [Features](#features)
- [Contributing](#contributing)

- - -

## How to use

1. [Click here to add me to your server!](https://discord.com/api/oauth2/authorize?client_id=864572952275714059&permissions=2147600448&scope=bot%20applications.commands)
2. Use the commands provided [here](#features) or with the help commands in Discord.

## Features

- Rat God uses **Slash commands** - Prefix: `/`.
- Auto-complete choices, so you don't have to remember any by heart!
- To get a list of **all** commands type `/Commands`.
- For extra help or questions type `/Support` or click [here](https://discord.com/invite/kg7VfRQ9Xw) to head over to the Discord support server.

Commands for all calibers:\
Example command: `/ammo 20x70mm`.

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
Note: All maps have an Info command as well.

```txt
Customs:        Normal Map | Hidden Stashes | Interactive Map | Dorms Map | 3D Map
Factory:        Normal Map | Interactive Map
Interchange:    Normal Map | Hidden Stashes | Interactive Map
Lighthouse:     Normal Map | Interactive Map
Reserve:        Normal Map | Interactive Map | Keys | D-2 Bunker Map
Shoreline:      Normal Map | Hidden Stashes | Interactive Map | Key Spawns | Resort Map | 3D Map
Labs:           Normal Map | Interactive Map | Basement Map | 1st Floor Map | 2nd Floor Map | 3D Map
Woods:          Normal Map | Hidden Stashes | Interactive Map
```

## Contributing

### General Information

- This code is distributed under the terms of the [GNU General Public License, v3](LICENSE).
- Indentation: Tabs.
- Node.js version 16.6+
- Commit titles are named using the [Calver](https://calver.org/) scheme YYYY.0M.0D.MICRO.
  - Example: `2021.12.07.0`.
  - Explanation: The first commit on the 7th of December 2021.
- Bot is hosted on Heroku, hence the: `Procfile`.

### Run me locally

1. Clone me where you keep your Github projects: `git clone https://github.com/Froggi22/Rat-God.git`
2. Navigate to the project folder: `cd Rat-God`.
3. Create a new file called: `.env`.
4. Edit said env file and write: `TOKEN=your-token-here`, but replace the "your-token-here" text with your API token, obtained from the [Discord Developer Portal](https://discord.com/developers).
5. Install dependencies: `npm i`.
6. Execute the program: `node .`.

### Submit a Pull Request

1. Fork this repository (should be on the top right of this page).
2. Clone the fork to your desired local Github projects folder.
3. Code your cool new feature!
4. [Run](#run-me-locally) and test your cool new feature.
5. Stage, commit, and push your files:

```txt
git add <changed-files...>
git commit -m "YYYY.0M.0D.MICRO" -m "Description of changes"
git push origin <awesome-new-feature-name>
```

6. `git` will output a link to help you create a new pull request from there.
