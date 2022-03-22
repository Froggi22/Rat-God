/**
 * Capitalizes each words first letter in a string.
 * @param {string} string Any string
 * @returns {string} String with first letters in each word capitalized
 */
export function capitalizeWords (string) {
	return string
		.split(" ")
		.map(word => word.match(/[a-z]/i) ? word.replace(word.match(/[a-z]/i)[0], word.match(/[a-z]/i)[0].toUpperCase()) : word)
		.join(" ")
}
