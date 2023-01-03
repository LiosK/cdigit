/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type.js";
import { computePure } from "./iso7064.js";

class Mod11_2 implements CdigitAlgo {
  name = "mod11_2";
  longName = "ISO/IEC 7064, MOD 11-2";

  private readonly alphabet = "0123456789X";

  compute(num: string): string {
    const ds = String(num).replace(/[^0-9]/g, "");
    return computePure(ds, 11, 2, false, this.alphabet);
  }

  generate(num: string): string {
    return `${num}${this.compute(num)}`;
  }

  validate(num: string): boolean {
    const [src, cc] = this.parse(num);
    return this.compute(src) === cc;
  }

  parse(num: string): [string, string] {
    const ds = String(num);
    return [ds.slice(0, -1), ds.slice(-1)];
  }
}

/** ISO/IEC 7064, MOD 11-2 implementation */
export const mod11_2: CdigitAlgo = new Mod11_2();
