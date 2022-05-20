import { MessageActionRow, MessageButton } from "discord.js"
import { interactionReply } from "../utils.js"

export const description = "Current in-game raid time"

/* In-game raid time algorithm
	In-game time moves at 7 seconds per irl second.
	00:00:00 is equal to the unix time 10800000, which is 3 hours (UTC+3 - Russia)
	Thus the algorithm to calculate the in-game time is: (UnixNow * 7 % 24 hours) + 3 hours
*/

/**
 * Calculating the in-game Tarkov raid time.
 * @param {bool} left The left time, i.e. opposite time of default (+12h)
 * @returns {string} Formatted time string
 */
export function tarkovTime (left) {
	const hToMs = (h) => h * 60 * 60 * 1000 // Converts hours into milliseconds
	const tarkovRatio = 7 // Ratio between tarkov and irl seconds
	const clock = new Date((((Date.now() * tarkovRatio)) % hToMs(24)) + (left ? hToMs(3) : hToMs(3) + hToMs(12))) // Calculates in-game time
	return `${(`0${clock.getUTCHours()}`).slice(-2)}:${(`0${clock.getUTCMinutes()}`).slice(-2)}:${(`0${clock.getUTCSeconds()}`).slice(-2)}` // Returns correct time format, with leading zeroes
}

export function run (interaction) {
	interactionReply(interaction, {
		messageComponents: [
			new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId("time-refresh")
						.setLabel(`${tarkovTime(true)} ⌚ ${tarkovTime(false)}`)
						.setStyle("SECONDARY")
				)
		]
	})
}
