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
 * GTIN check digit algorithm implementation.
 *
 * The Global Trade Item Number (GTIN) check digit algorithm is used across
 * GS1 data structures including GTIN-8, GTIN-12 (UPC-A), GTIN-13 (EAN-13/JAN),
 * and GTIN-14. It uses a weighted sum where digits in odd positions (from right)
 * are multiplied by 3 and even positions by 1 — the reverse weighting pattern
 * compared to the Luhn algorithm.
 *
 * Note: This implementation does not check the length of a number; however, it
 * is not recommended to use numbers longer than 18 digits because GS1 General
 * Specifications do not explicitly specify an algorithm for them.
 */
class GTIN extends NumericCheckDigitAlgo {
  /** Weight pattern for GTIN: odd positions (from right) get weight 3,
   *  even positions get weight 1. Stored as array for clarity. */
  private static readonly POSITION_WEIGHTS = [3, 1] as const;

  computeFromNumVals(digitValues: number[]): number[] {
    validateDecimalNumVals(digitValues);

    let weightedSum = 0;
    let weightIndex = 0; // Start with weight 3 for rightmost digit (odd position from right)
    for (let i = digitValues.length - 1; i >= 0; i -= 1) {
      if (weightedSum > 0xffff_ffff_ffff) {
        // Prevent overflow: reduce modulo 10 when approaching ~2^48
        weightedSum %= 10;
      }
      weightedSum += digitValues[i] * GTIN.POSITION_WEIGHTS[weightIndex];
      weightIndex ^= 1; // Toggle between 0 (weight=3) and 1 (weight=1)
    }
    return [(10 - (weightedSum % 10)) % 10];
  }
}

/** The standard check digit algorithm for GS1 data structures (including GTIN). */
export const gtin: import("../type.js").CdigitAlgo = new GTIN(
  "gtin",
  "GTINs (including UPC, EAN, ISBN-13, etc.)"
);
