/**
 *
 * @param {string} string
 * @returns A string with the first word capitalized
 */
export function capitalizeFirstWord (word) {
	return `${word[0].toUpperCase()}${word.slice(1)}`
}

/**
 *
 * @param {string} string
 * @returns A string with capitalized words
 */
export function capitalizeString (string) {
	return string.replace(/\w\S*/g, word => word.match(/[a-z]/i) ? word.replace(word.match(/[a-z]/i)[0], word.match(/[a-z]/i)[0].toUpperCase()) : word)
}
