/**
 * Capitalizes a strings first character.
 * @param {string} string Any string
 * @returns {string} String with first character capitalized
 */
export function capitalizeFirstChar (word) {
	return `${word[0].toUpperCase()}${word.slice(1)}`
}

/**
 * Capitalizes each words first letter in a string.
 * @param {string} string Any string
 * @returns {string} String with first latters in each word capitalized
 */
export function capitalizeString (string) {
	return string.replace(/\w\S*/g, word => word.match(/[a-z]/i) ? word.replace(word.match(/[a-z]/i)[0], word.match(/[a-z]/i)[0].toUpperCase()) : word)
}
