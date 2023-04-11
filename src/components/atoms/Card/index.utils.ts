/**
 * Checks if the provided text has more than a specified number of characters.
 *
 * @param {string} text - The text to check.
 * @param {number} maxLength - The maximum allowed number of characters.
 * @returns {boolean} True if the text has more characters than maxLength, false otherwise.
 */
export const hasExceededCharLimit = (text:string, maxLength:number) => {
    return text.length > maxLength;
}


/**
 * Truncate the description text if it's longer than 100 characters and append "..." at the end.
 *
 * @param {string} text - The description text.
 * @param {number} maxLength - The maximum allowed number of characters.
 * @returns {string} The truncated description text.
 */
export const truncateDescription = (text: string, maxLength: number): string => {
    return hasExceededCharLimit(text, maxLength) ? text.substring(0, maxLength) + '...' : text;
};