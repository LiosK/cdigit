/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */
import { getCharMap } from "./iso7064-helpers.js";
/**
 * ISO 7064 hybrid system algorithm implementation.
 *
 * The hybrid system combines two modular operations in a single recursive
 * step. Unlike the pure system, which uses a fixed modulus and radix
 * independently, the hybrid system uses the alphabet size as both the
 * modulus for the check computation and the basis for the recursive step.
 *
 * This produces a single check character (never two), and all check
 * characters are within the alphabet — no supplementary characters
 * like 'X' or '*' are needed.
 */
class Hybrid {
    constructor(name, longName, alphabet) {
        this.name = name;
        this.longName = longName;
        this.alphabet = alphabet;
    }
    computeFromNumVals(numVals) {
        const modulus = this.alphabet.length;
        if (numVals.length === 0) {
            throw new SyntaxError("string to be protected is empty");
        }
        else if (numVals.some((e) => e < 0 || e >= modulus || !Number.isInteger(e))) {
            throw new SyntaxError("invalid numerical value detected");
        }
        let accumulator = modulus;
        for (const digitValue of numVals) {
            accumulator = (accumulator % (modulus + 1)) + digitValue;
            accumulator = (accumulator % modulus || modulus) * 2;
        }
        accumulator %= modulus + 1;
        return [(modulus + 1 - accumulator) % modulus];
    }
    compute(input) {
        const charMap = getCharMap(this.alphabet);
        const numVals = [];
        for (const char of String(input)) {
            if (charMap[char] != null) {
                numVals.push(charMap[char]);
            }
        }
        const checkChars = this.computeFromNumVals(numVals);
        return this.alphabet[checkChars[0]];
    }
    parse(protectedString) {
        const charMap = getCharMap(this.alphabet);
        const checkChar = protectedString.slice(-1);
        if (checkChar.length === 1 && charMap[checkChar] != null) {
            return [protectedString.slice(0, -1), checkChar];
        }
        else {
            throw new SyntaxError("could not find check character(s)");
        }
    }
    generate(input) {
        return `${input}${this.compute(input)}`;
    }
    validate(protectedString) {
        const [bareString, checkChar] = this.parse(protectedString);
        return this.compute(bareString) === checkChar;
    }
}
/** The ISO/IEC 7064, MOD 11,10 implementation. */
export const mod11_10 = new Hybrid("mod11_10", "ISO/IEC 7064, MOD 11,10", "0123456789");
/** The ISO/IEC 7064, MOD 27,26 implementation. */
export const mod27_26 = new Hybrid("mod27_26", "ISO/IEC 7064, MOD 27,26", "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
/** The ISO/IEC 7064, MOD 37,36 implementation. */
export const mod37_36 = new Hybrid("mod37_36", "ISO/IEC 7064, MOD 37,36", "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ");
