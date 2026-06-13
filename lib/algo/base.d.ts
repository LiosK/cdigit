/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */
import type { CdigitAlgo } from "../type.js";
/**
 * Sanitizes a string by removing all non-digit characters.
 * This pattern is used across Luhn, Verhoeff, Damm, and GTIN algorithms
 * to strip non-numeric input before processing.
 */
export declare function sanitizeDigits(input: string): string;
/**
 * Converts a digit string to an array of numerical values.
 * Used by numeric check digit algorithms (Luhn, Verhoeff, Damm, GTIN).
 */
export declare function digitStringToNumVals(digitString: string): number[];
/**
 * Parses a protected string with a single numeric check character at the end.
 * Returns [bareString, checkCharacter] tuple.
 * Used by Luhn, Verhoeff, Damm, and GTIN algorithms.
 */
export declare function parseSingleNumericCheckChar(protectedString: string): [string, string];
/**
 * Validates that an array contains only valid decimal digit values (0-9).
 * Throws SyntaxError if the array is empty or contains invalid values.
 */
export declare function validateDecimalNumVals(numVals: number[]): void;
/**
 * Base class for numeric check digit algorithms that follow the pattern:
 * - sanitize → computeFromNumVals → stringify result
 * - parse single trailing check character
 * - generate by appending check character
 * - validate by recomputing and comparing
 *
 * This eliminates the duplicated compute/parse/generate/validate boilerplate
 * found in Luhn, Verhoeff, Damm, and GTIN implementations.
 */
export declare abstract class NumericCheckDigitAlgo implements CdigitAlgo {
    readonly name: string;
    readonly longName: string;
    constructor(name: string, longName: string);
    /** Core computation — subclasses must implement this. */
    abstract computeFromNumVals(numVals: number[]): number[];
    compute(input: string): string;
    parse(protectedString: string): [string, string];
    generate(input: string): string;
    validate(protectedString: string): boolean;
}
