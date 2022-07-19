import { Bot, Interaction, InteractionResponseTypes } from "./type.ts"
export { createBot, startBot } from "discordeno"

export async function reply(bot: Bot, interaction: Interaction, content: string) {
	await bot.helpers.sendInteractionResponse(interaction.id, interaction.token, {
		type: InteractionResponseTypes.ChannelMessageWithSource,
		data: { content }
	})
}
