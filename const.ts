import "dotenv"

export const DISCORD_TOKEN = Deno.env.get("DISCORD_TOKEN")!

export const PORT = parseInt(Deno.env.get("PORT") ?? "80")

export const embedLimits = {
	title: 256,
	description: 4096,
	fieldName: 256,
	fieldValue: 1024,
	footerText: 2048,
	authorName: 256,
	fields: 25,
	total: 6000
}
