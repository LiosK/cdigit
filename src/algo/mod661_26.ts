/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type.js";
import { computePure } from "./iso7064.js";

class Mod661_26 implements CdigitAlgo {
  constructor(readonly name: string, readonly longName: string) {}

  private readonly alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  compute(s: string): string {
    const ds = String(s).replace(/[^A-Z]/g, "");
    return computePure(ds, 661, 26, true, this.alphabet);
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

/** ISO/IEC 7064, MOD 661-26 implementation */
export const mod661_26: CdigitAlgo = new Mod661_26(
  "mod661_26",
  "ISO/IEC 7064, MOD 661-26"
);
