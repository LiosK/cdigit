/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type.js";
import { computePure } from "./iso7064.js";

class Mod1271_36 implements CdigitAlgo {
  constructor(readonly name: string, readonly longName: string) {}

  private readonly alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  compute(s: string): string {
    const ds = String(s).replace(/[^0-9A-Z]/g, "");
    return computePure(ds, 1271, 36, true, this.alphabet);
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

/** ISO/IEC 7064, MOD 1271-36 implementation */
export const mod1271_36: CdigitAlgo = new Mod1271_36(
  "mod1271_36",
  "ISO/IEC 7064, MOD 1271-36"
);
