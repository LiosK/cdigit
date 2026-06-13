/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type.js";
import { getCharMap } from "./iso7064-helpers.js";

/**
 * ISO 7064 pure system algorithm implementation.
 *
 * The pure system uses a recursive method where each digit is incorporated
 * into a running computation using modular arithmetic. The check character(s)
 * are computed so that the complete string (data + check) satisfies a
 * specific modular condition.
 *
 * Pure systems are classified into two flavors:
 *
 * - "EXTRA_CHAR": Those that use a supplementary check character outside the
 *   character set of the original bare string. For example, MOD 11-2 uses 'X'
 *   as a possible check character (value 10), and MOD 37-2 uses '*' (value 36).
 *   These produce a single check character.
 *
 * - "TWO_CCS": Those that use two check characters to cover the full range
 *   of possible remainder values. For example, MOD 97-10 produces two decimal
 *   check digits. This avoids needing an extra character outside the alphabet.
 */
class Pure implements CdigitAlgo {
  constructor(
    readonly name: string,
    readonly longName: string,
    private readonly modulus: number,
    private readonly radix: number,
    private readonly alphabet: string,
    private readonly flavor: "EXTRA_CHAR" | "TWO_CCS"
  ) {}

  computeFromNumVals(numVals: number[]): number[] {
    const maxValue =
      this.flavor === "EXTRA_CHAR"
        ? this.alphabet.length - 1
        : this.alphabet.length;
    if (numVals.length === 0) {
      throw new SyntaxError("string to be protected is empty");
    } else if (
      numVals.some((e) => e < 0 || e >= maxValue || !Number.isInteger(e))
    ) {
      throw new SyntaxError("invalid numerical value detected");
    }

    let accumulator = 0;
    const extendedVals =
      this.flavor === "TWO_CCS"
        ? [...numVals, 0, 0]
        : [...numVals, 0];
    for (const digitValue of extendedVals) {
      if (accumulator > 0xfff_ffff_ffff) {
        // Prevent overflow: reduce modulo when approaching ~2^44
        accumulator %= this.modulus;
      }
      accumulator = accumulator * this.radix + digitValue;
    }
    accumulator =
      (this.modulus + 1 - (accumulator % this.modulus)) % this.modulus;

    return this.flavor === "TWO_CCS"
      ? [
          Math.floor(accumulator / this.radix),
          accumulator % this.radix,
        ]
      : [accumulator];
  }

  compute(input: string): string {
    const charMap =
      this.flavor === "EXTRA_CHAR"
        ? getCharMap(this.alphabet.slice(0, -1))
        : getCharMap(this.alphabet);
    const numVals: number[] = [];
    for (const char of String(input)) {
      if (charMap[char] != null) {
        numVals.push(charMap[char]);
      }
    }

    const checkChars = this.computeFromNumVals(numVals);
    return this.flavor === "TWO_CCS"
      ? this.alphabet[checkChars[0]] + this.alphabet[checkChars[1]]
      : this.alphabet[checkChars[0]];
  }

  parse(protectedString: string): [string, string] {
    const charMap = getCharMap(this.alphabet);
    const checkCharCount = this.flavor === "TWO_CCS" ? 2 : 1;
    const checkChars = protectedString.slice(-checkCharCount);
    if (
      checkChars.length === checkCharCount &&
      [...checkChars].every((char) => charMap[char] != null)
    ) {
      return [protectedString.slice(0, -checkCharCount), checkChars];
    } else {
      throw new SyntaxError("could not find check character(s)");
    }
  }

  generate(input: string): string {
    return `${input}${this.compute(input)}`;
  }

  validate(protectedString: string): boolean {
    const [bareString, checkChars] = this.parse(protectedString);
    return this.compute(bareString) === checkChars;
  }
}

/** The ISO/IEC 7064, MOD 11-2 implementation. */
export const mod11_2: CdigitAlgo = new Pure(
  "mod11_2",
  "ISO/IEC 7064, MOD 11-2",
  11,
  2,
  "0123456789X",
  "EXTRA_CHAR"
);

/** The ISO/IEC 7064, MOD 37-2 implementation. */
export const mod37_2: CdigitAlgo = new Pure(
  "mod37_2",
  "ISO/IEC 7064, MOD 37-2",
  37,
  2,
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*",
  "EXTRA_CHAR"
);

/** The ISO/IEC 7064, MOD 97-10 implementation. */
export const mod97_10: CdigitAlgo = new Pure(
  "mod97_10",
  "ISO/IEC 7064, MOD 97-10",
  97,
  10,
  "0123456789",
  "TWO_CCS"
);

/** The ISO/IEC 7064, MOD 661-26 implementation. */
export const mod661_26: CdigitAlgo = new Pure(
  "mod661_26",
  "ISO/IEC 7064, MOD 661-26",
  661,
  26,
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "TWO_CCS"
);

/** The ISO/IEC 7064, MOD 1271-36 implementation. */
export const mod1271_36: CdigitAlgo = new Pure(
  "mod1271_36",
  "ISO/IEC 7064, MOD 1271-36",
  1271,
  36,
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "TWO_CCS"
);
