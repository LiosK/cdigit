/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */
/**
 * Builds a character-to-value mapping for a given alphabet string.
 * Each character in the alphabet maps to its index position.
 * Results are cached to avoid recomputation.
 *
 * @param alphabet - The alphabet string where character at index i maps to value i
 * @returns Object mapping each character to its numerical value
 * @throws Error if the alphabet contains duplicate characters
 */
export declare function getCharMap(alphabet: string): {
    [character: string]: number;
};
