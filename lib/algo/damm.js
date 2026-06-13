/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */
import { NumericCheckDigitAlgo, validateDecimalNumVals, } from "./base.js";
/**
 * Damm algorithm implementation.
 *
 * The Damm algorithm is a check digit algorithm that uses a quasigroup
 * (specifically, a Latin square) to detect all single-digit errors and
 * all adjacent transposition errors. It was developed by H. Michael Damm
 * and published in 2004. Unlike Verhoeff, it requires no multiplication
 * or permutation tables — only a single 10×10 operation table.
 */
class Damm extends NumericCheckDigitAlgo {
    constructor() {
        super(...arguments);
        /**
         * The Damm operation table (quasigroup/Cayley table).
         * This particular table is one of the few that detects all
         * single-digit errors and all adjacent transposition errors.
         * The interim digit starts at 0 and is updated by table[row][col]
         * for each digit, resulting in the check digit after processing all digits.
         */
        this.OPERATION_TABLE = [
            [0, 3, 1, 7, 5, 9, 8, 6, 4, 2],
            [7, 0, 9, 2, 1, 5, 4, 8, 6, 3],
            [4, 2, 0, 6, 8, 7, 1, 3, 5, 9],
            [1, 7, 5, 0, 9, 8, 3, 4, 2, 6],
            [6, 1, 2, 3, 0, 4, 5, 9, 7, 8],
            [3, 6, 7, 4, 2, 0, 9, 5, 8, 1],
            [5, 8, 6, 9, 7, 2, 0, 1, 3, 4],
            [8, 9, 4, 5, 3, 6, 2, 0, 1, 7],
            [9, 4, 3, 8, 6, 1, 7, 2, 0, 5],
            [2, 5, 8, 1, 4, 3, 6, 7, 9, 0],
        ];
    }
    computeFromNumVals(digitValues) {
        validateDecimalNumVals(digitValues);
        const checkDigit = digitValues.reduce((interimDigit, currentDigit) => this.OPERATION_TABLE[interimDigit][currentDigit], 0);
        return [checkDigit];
    }
}
/** The Damm algorithm implementation. */
export const damm = new Damm("damm", "Damm Algorithm");
