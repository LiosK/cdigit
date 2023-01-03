/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type";
import { computeHybrid } from "./iso7064";

class Mod37_36 implements CdigitAlgo {
  name = "mod37_36";
  longName = "ISO/IEC 7064, MOD 37-36";

  private readonly alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  compute(num: string): string {
    const ds = String(num).replace(/[^0-9A-Z]/g, "");
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

/** ISO/IEC 7064, MOD 37-36 implementation */
export const mod37_36: CdigitAlgo = new Mod37_36();
