/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type.js";
import { computePure } from "./iso7064.js";

class Mod37_2 implements CdigitAlgo {
  name = "mod37_2";
  longName = "ISO/IEC 7064, MOD 37-2";

  private readonly alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*";

  compute(s: string): string {
    const ds = String(s).replace(/[^0-9A-Z]/g, "");
    return computePure(ds, 37, 2, false, this.alphabet);
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

/** ISO/IEC 7064, MOD 37-2 implementation */
export const mod37_2: CdigitAlgo = new Mod37_2();
