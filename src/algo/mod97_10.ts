/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type";

class Mod97_10 implements CdigitAlgo {
  name = "mod97_10";
  longName = "ISO/IEC 7064, MOD 97-10";

  compute(s: string): string {
    const ds = `${String(s).replace(/[^0-9]/g, "")}00`;

    // Simplified procedure as described in ISO/IEC 7064
    let c = Number(ds.slice(0, 14)) % 97; // 10^14 < 2^48
    for (let i = 14, len = ds.length; i < len; i += 12) {
      c = Number(String(c) + ds.slice(i, i + 12)) % 97;
    }

    return `0${(98 - c) % 97}`.slice(-2);
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
    return [ds.slice(0, -2), ds.slice(-2)];
  }
}

/** ISO/IEC 7064, MOD 97-10 implementation */
export const mod97_10: CdigitAlgo = new Mod97_10();
