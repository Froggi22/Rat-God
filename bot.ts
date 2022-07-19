import { DISCORD_TOKEN } from "./const.ts"
import { createBot, reply, startBot } from "./function.ts"
import { Intents } from "./type.ts"

const bot = createBot({
	token: DISCORD_TOKEN,
	intents: Intents.Guilds | Intents.GuildMembers | Intents.GuildMessages | Intents.MessageContent,
	events: {
		interactionCreate(bot, interaction) {
			reply(bot, interaction, "Hello, World!")
		}
	}
})

await startBot(bot)

export default bot
