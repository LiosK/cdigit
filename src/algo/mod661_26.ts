/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type";
import { computePure } from "./iso7064";

class Mod661_26 implements CdigitAlgo {
  name = "mod661_26";
  longName = "ISO/IEC 7064, MOD 661-26";

  private readonly alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  compute(num: string): string {
    const ds = String(num).replace(/[^A-Z]/g, "");
    return computePure(ds, 661, 26, true, this.alphabet);
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
    return [ds.slice(0, -2), ds.slice(-2)];
  }
}

/** ISO/IEC 7064, MOD 661-26 implementation */
export const mod661_26: CdigitAlgo = new Mod661_26();
