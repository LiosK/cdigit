/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

/**
 * Memoized character-to-value mapping for alphabets used in ISO 7064.
 * Caching avoids recomputing the mapping on every call to compute/parse.
 */
const charMapCache: {
  [alphabet: string]: { [character: string]: number };
} = {};

/**
 * Builds a character-to-value mapping for a given alphabet string.
 * Each character in the alphabet maps to its index position.
 * Results are cached to avoid recomputation.
 *
 * @param alphabet - The alphabet string where character at index i maps to value i
 * @returns Object mapping each character to its numerical value
 * @throws Error if the alphabet contains duplicate characters
 */
export function getCharMap(alphabet: string): { [character: string]: number } {
  if (charMapCache[alphabet] == null) {
    charMapCache[alphabet] = {};
    for (let i = 0; i < alphabet.length; i += 1) {
      const character = alphabet[i];
      if (charMapCache[alphabet][character] == null) {
        charMapCache[alphabet][character] = i;
      } else {
        throw new Error("assertion error: chars must be unique");
      }
    }
  }
  return charMapCache[alphabet];
}
