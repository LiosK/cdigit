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

  compute(s: string): string {
    const ds = String(s).replace(/[^0-9A-Z]/g, "");
    return computeHybrid(ds, this.alphabet);
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

/** ISO/IEC 7064, MOD 37-36 implementation */
export const mod37_36: CdigitAlgo = new Mod37_36();
