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
 * Verhoeff algorithm implementation.
 *
 * The Verhoeff algorithm is a check digit algorithm based on the dihedral
 * group D₅ (the symmetry group of a regular pentagon). It was developed by
 * Dutch mathematician Jacobus Verhoeff and published in 1969. Unlike the
 * Luhn algorithm, Verhoeff detects all single-digit errors AND all
 * transposition errors (including adjacent transpositions that Luhn misses).
 *
 * The algorithm uses three mathematical structures:
 * - A multiplication table for the dihedral group D₅
 * - A permutation table that varies the substitution based on position
 * - An inverse table to find the check digit that makes the total valid
 *
 * Note: There is not a firm consensus on the direction (left to right or right
 * to left) in which a Verhoeff calculator scans numeric text to construct an
 * input digit sequence. This implementation is hard coded to read a string from
 * right to left and append the check digit at the rightmost position, which is
 * a consistent behavior with other popular implementations. Reverse the input
 * string before calling this class' methods if you need to interpret a string
 * from left to right.
 */
class Verhoeff extends NumericCheckDigitAlgo {
  /**
   * The Verhoeff multiplication table for the dihedral group D₅.
   * Each entry d[i][j] represents the product i * j in D₅.
   * The upper-left 5×5 block is the cyclic group Z₅ (rotations),
   * and the lower-right block uses reflections.
   */
  private readonly MULTIPLICATION_TABLE = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  ];

  /**
   * The Verhoeff permutation table.
   * Position-dependent permutation: the i-th position uses permutation
   * table index (i mod 8). This ensures that transposition errors
   * (swapping adjacent digits) produce different intermediate values
   * and are therefore detectable.
   */
  private readonly PERMUTATION_TABLE = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
    [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
    [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
    [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
  ];

  /**
   * The Verhoeff inverse table.
   * Maps each element of D₅ to its inverse, so that
   * MULTIPLICATION_TABLE[x][INVERSE_TABLE[x]] === 0 for all x.
   * Used to find the check digit that makes the total product zero.
   */
  private readonly INVERSE_TABLE = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

  computeFromNumVals(digitValues: number[]): number[] {
    validateDecimalNumVals(digitValues);

    // Compute running product in D₅, scanning right to left
    // Start as if we've already processed a trailing zero digit
    // (i.e., the check digit placeholder with value 0 at position 0)
    let checksum = this.MULTIPLICATION_TABLE[0][this.PERMUTATION_TABLE[0][0]];
    for (let position = 1, length = digitValues.length; position <= length; position += 1) {
      const permIndex = position & 7; // position mod 8
      const digitIndex = digitValues[length - position];
      checksum = this.MULTIPLICATION_TABLE[checksum][this.PERMUTATION_TABLE[permIndex][digitIndex]];
    }
    return [this.INVERSE_TABLE[checksum]];
  }
}

/**
 * The Verhoeff algorithm implementation.
 */
export const verhoeff: import("../type.js").CdigitAlgo = new Verhoeff(
  "verhoeff",
  "Verhoeff Algorithm"
);
