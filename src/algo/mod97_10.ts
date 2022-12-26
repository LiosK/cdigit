/**
 * cdigit
 *
 * @copyright 2018-2022 LiosK
 * @license (MIT OR Apache-2.0)
 */

import { CdigitAlgo, helper } from "./common";

class Mod97_10 implements CdigitAlgo {
  name = "mod97_10";
  longName = "ISO/IEC 7064, MOD 97-10";

  compute(num: string): string {
    const ds = `${String(num).replace(/[^0-9]/g, "")}00`;

    // Simplified procedure as described in ISO/IEC 7064
    let c = Number(ds.slice(0, 14)) % 97; // 10^14 < 2^48
    for (let i = 14, len = ds.length; i < len; i += 12) {
      c = Number(String(c) + ds.slice(i, i + 12)) % 97;
    }

    return `0${(98 - c) % 97}`.slice(-2);
  }

  generate(num: string): string {
    return `${num}${this.compute(num)}`;
  }

  validate(num: string): boolean {
    const [src, cc] = this.parse(num);
    return this.compute(src) === cc;
  }

  parse(num: string): [string, string] {
    return helper.parseTail(num, 2);
  }
}

/** ISO/IEC 7064, MOD 97-10 implementation */
export const mod97_10: CdigitAlgo = new Mod97_10();
