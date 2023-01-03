/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type.js";

class Luhn implements CdigitAlgo {
  name = "luhn";
  longName = "Luhn Algorithm";

  compute(s: string): string {
    const ds = String(s).replace(/[^0-9]/g, "");
    const lookup: { [digit: string]: number } = {
      0: 0,
      1: 2,
      2: 4,
      3: 6,
      4: 8,
      5: 1,
      6: 3,
      7: 5,
      8: 7,
      9: 9,
    };

    let sum = 0;
    let odd = 1;
    for (let i = ds.length - 1; i > -1; i -= 1) {
      sum += odd ? lookup[ds[i]] : Number(ds[i]);
      odd ^= 1;
      if (sum > 0xffffffffffff) {
        // ~2^48 at max
        sum %= 10;
      }
    }

    return String(10 - (sum % 10)).slice(-1);
  }

  generate(s: string): string {
    return `${s}${this.compute(s)}`;
  }

  validate(s: string): boolean {
    const [src, cc] = this.parse(s);
    return this.compute(src) === cc;
  }

  parse(s: string): [string, string] {
    const ds = String(s);
    return [ds.slice(0, -1), ds.slice(-1)];
  }
}

/** Luhn algorithm implementation */
export const luhn: CdigitAlgo = new Luhn();
