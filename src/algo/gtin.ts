/**
 * cdigit
 *
 * @copyright 2018-2020 LiosK
 * @license Apache-2.0
 */

import { Algo, helper } from "./common";

/**
 * Standard check digit algorithm for GS1 data structures (including GTIN)
 *
 * Note: This implementation does not check the length of a number; however, it
 * is not recommended to use numbers longer than 18 digits because GS1 General
 * Specifications do not explicitly specify an algorithm for them.
 */
class GTIN implements Algo {
  name = "gtin";
  longName = "GTINs (including UPC, EAN, ISBN-13, etc.)";

  compute(num: string): string {
    const ds = String(num).replace(/[^0-9]/g, "");

    let sum = 0;
    let odd = 1;
    for (let i = ds.length - 1; i > -1; i -= 1) {
      sum += Number(ds[i]) * (odd ? 3 : 1);
      odd ^= 1;
      if (sum > 0xffffffffffff) {
        // ~2^48 at max
        sum %= 10;
      }
    }

    return String(10 - (sum % 10)).slice(-1);
  }

  generate(num: string): string {
    return `${num}${this.compute(num)}`;
  }

  validate(num: string): boolean {
    const [src, cc] = this.parse(num);
    return this.compute(src) === cc;
  }

  parse(num: string): [string, string] {
    return helper.parseTail(num, 1);
  }
}

export const gtin = new GTIN();
