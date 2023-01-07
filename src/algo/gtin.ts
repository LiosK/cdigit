/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type.js";

class GTIN implements CdigitAlgo {
  constructor(readonly name: string, readonly longName: string) {}

  computeFromNumVals(ns: number[]): number[] {
    if (ns.some((e) => e < 0 || e > 9 || !Number.isInteger(e))) {
      throw new SyntaxError("invalid numerical value detected");
    }

    let sum = 0;
    let odd = 1;
    for (let i = ns.length - 1; i >= 0; i -= 1) {
      if (sum > 0xffff_ffff_ffff) {
        // ~2^48 at max
        sum %= 10;
      }
      sum += ns[i] * (odd ? 3 : 1);
      odd ^= 1;
    }
    return [(10 - (sum % 10)) % 10];
  }

  compute(s: string): string {
    const ds = String(s).replace(/[^0-9]/g, "");
    const ns = [...ds].map(Number);
    return String(this.computeFromNumVals(ns)[0]);
  }

  parse(s: string): [string, string] {
    const ds = String(s);
    return [ds.slice(0, -1), ds.slice(-1)];
  }

  generate(s: string): string {
    return `${s}${this.compute(s)}`;
  }

  validate(s: string): boolean {
    const [bare, cc] = this.parse(s);
    return this.compute(bare) === cc;
  }
}

/**
 * Standard check digit algorithm for GS1 data structures (including GTIN)
 *
 * Note: This implementation does not check the length of a number; however, it
 * is not recommended to use numbers longer than 18 digits because GS1 General
 * Specifications do not explicitly specify an algorithm for them.
 */
export const gtin: CdigitAlgo = new GTIN(
  "gtin",
  "GTINs (including UPC, EAN, ISBN-13, etc.)"
);
