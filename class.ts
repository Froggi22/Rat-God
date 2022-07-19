import { embedLimits } from "./const.ts"
import { Bot, Embed, User } from "./type.ts"
import { EmbedFile } from "./type.ts"
export class Embeds extends Array<Embed> {
	currentTotal = 0
	file?: EmbedFile
	bot: Bot
	constructor(bot: Bot) {
		super()
		this.bot = bot
		return this
	}
	setAuthor(name: string, iconUrl?: string | User, url?: string) {
		const embed = this.#getLastEmbed()
		embed.author = { name: this.#fitData(name, embedLimits.authorName) }
		if (iconUrl) {
			embed.author = { ...embed.author, iconUrl: typeof iconUrl === "string"
				? iconUrl
				: this.bot.helpers.avatarURL(iconUrl.id, iconUrl.discriminator, { avatar: iconUrl.avatar }) }
		}
		if (url) embed.author = { ...embed.author, url }
		return this
	}
	setColor(color: string) {
		this.#getLastEmbed().color = color.toLowerCase() === `random`
			? Math.floor(Math.random() * (0xffffff + 1))
			: parseInt(color.replace("#", ""), 16)
		return this
	}
	setDescription(description: string | string[]) {
		this.#getLastEmbed().description = this.#fitData(
			typeof description === "string" ? description : description.join("\n"),
			embedLimits.description
		)
		return this
	}
	addField(name: string, value: string, inline = false) {
		const embed = this.#getLastEmbed()
		if (embed.fields!.length < 25) {
			embed.fields?.push({
				name: this.#fitData(name, embedLimits.fieldName),
				value: this.#fitData(value, embedLimits.fieldValue),
				inline
			})
		}
		return this
	}
	addBlankField(inline = false) {
		return this.addField("\u200B", "\u200B", inline)
	}
	attachFile(file: unknown, name: string) {
		this.file = { blob: file, name }
		this.setImage(`attachment://${name}`)
		return this
	}
	setFooter(text: string, icon?: string) {
		const embed = this.#getLastEmbed()
		embed.footer = { text: this.#fitData(text, embedLimits.footerText) }
		if (icon) embed.footer = { ...embed.footer, iconUrl: icon }
		return this
	}
	setImage(url: string | User) {
		this.#getLastEmbed().image = { url: typeof url === "string"
			? url
			: this.bot.helpers.avatarURL(url.id, url.discriminator, { avatar: url.avatar, size: 2048 }) }
		return this
	}
	setTimestamp(time: number | string = Date.now()) {
		this.#getLastEmbed().timestamp = typeof time === "string" ? Date.parse(time) : time
		return this
	}
	setTitle(title: string, url?: string) {
		this.#getLastEmbed().title = this.#fitData(title, embedLimits.title)
		if (url) this.#getLastEmbed().url = url
		return this
	}
	setThumbnail(url: string) {
		this.#getLastEmbed().thumbnail = { url }
		return this
	}
	addEmbed(embed?: Embed) {
		if (this.length < 10) this.push({ ...embed, fields: embed?.fields ?? [] })
		return this
	}
	#fitData(data: string, max: number) {
		return data.substring(0, max).substring(0, embedLimits.total - this.currentTotal)
	}
	#getLastEmbed() {
		if (this.length === 0) this.push({ fields: [] })
		return this.at(-1)!
	}
}
