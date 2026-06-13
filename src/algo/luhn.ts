/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import {
  NumericCheckDigitAlgo,
  validateDecimalNumVals,
} from "./base.js";

/**
 * Luhn algorithm implementation.
 *
 * The Luhn algorithm (also known as the "modulus 10" or "mod 10" algorithm)
 * is a simple checksum formula used to validate a variety of identification
 * numbers, such as credit card numbers, IMEI numbers, and National Provider
 * Identifier numbers in the United States.
 */
class Luhn extends NumericCheckDigitAlgo {
  /** Lookup table for doubling digits: even-indexed values are doubled
   *  with wrap-around for results > 9 (e.g., 7*2=14 → 1+4=5 → lookup[7]=5). */
  private readonly DOUBLE_LOOKUP = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];

  computeFromNumVals(digitValues: number[]): number[] {
    validateDecimalNumVals(digitValues);

    let checksum = 0;
    let isOddPosition = 1;
    for (let i = digitValues.length - 1; i >= 0; i -= 1) {
      if (checksum > 0xffff_ffff_ffff) {
        // Prevent overflow: reduce modulo 10 when approaching ~2^48
        checksum %= 10;
      }
      checksum += isOddPosition
        ? this.DOUBLE_LOOKUP[digitValues[i]]
        : digitValues[i];
      isOddPosition ^= 1;
    }
    return [(10 - (checksum % 10)) % 10];
  }
}

/** The Luhn algorithm implementation. */
export const luhn: import("../type.js").CdigitAlgo = new Luhn(
  "luhn",
  "Luhn Algorithm"
);
