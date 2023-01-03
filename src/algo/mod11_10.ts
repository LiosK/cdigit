/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type";
import { computeHybrid } from "./iso7064";

class Mod11_10 implements CdigitAlgo {
  name = "mod11_10";
  longName = "ISO/IEC 7064, MOD 11-10";

  private readonly alphabet = "0123456789";

  compute(num: string): string {
    const ds = String(num).replace(/[^0-9]/g, "");
    return computeHybrid(ds, this.alphabet);
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

/** ISO/IEC 7064, MOD 11-10 implementation */
export const mod11_10: CdigitAlgo = new Mod11_10();
