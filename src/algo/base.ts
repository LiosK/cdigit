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
export function sanitizeDigits(input: string): string {
  return String(input).replace(/[^0-9]/g, "");
}

/**
 * Converts a digit string to an array of numerical values.
 * Used by numeric check digit algorithms (Luhn, Verhoeff, Damm, GTIN).
 */
export function digitStringToNumVals(digitString: string): number[] {
  return [...digitString].map(Number);
}

/**
 * Parses a protected string with a single numeric check character at the end.
 * Returns [bareString, checkCharacter] tuple.
 * Used by Luhn, Verhoeff, Damm, and GTIN algorithms.
 */
export function parseSingleNumericCheckChar(
  protectedString: string
): [string, string] {
  const match = String(protectedString).match(/^(.*)([0-9])$/s);
  if (match != null) {
    return [match[1], match[2]];
  } else {
    throw new SyntaxError("could not find check character(s)");
  }
}

/**
 * Validates that an array contains only valid decimal digit values (0-9).
 * Throws SyntaxError if the array is empty or contains invalid values.
 */
export function validateDecimalNumVals(numVals: number[]): void {
  if (numVals.length === 0) {
    throw new SyntaxError("string to be protected is empty");
  } else if (numVals.some((e) => e < 0 || e > 9 || !Number.isInteger(e))) {
    throw new SyntaxError("invalid numerical value detected");
  }
}

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
export abstract class NumericCheckDigitAlgo implements CdigitAlgo {
  constructor(
    readonly name: string,
    readonly longName: string
  ) {}

  /** Core computation — subclasses must implement this. */
  abstract computeFromNumVals(numVals: number[]): number[];

  compute(input: string): string {
    const digitString = sanitizeDigits(input);
    const digitValues = digitStringToNumVals(digitString);
    return String(this.computeFromNumVals(digitValues)[0]);
  }

  parse(protectedString: string): [string, string] {
    return parseSingleNumericCheckChar(protectedString);
  }

  generate(input: string): string {
    return `${input}${this.compute(input)}`;
  }

  validate(protectedString: string): boolean {
    const [bareString, checkChar] = this.parse(protectedString);
    return this.compute(bareString) === checkChar;
  }
}
