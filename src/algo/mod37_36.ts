/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type.js";
import { computeHybrid } from "./iso7064.js";

class Mod37_36 implements CdigitAlgo {
  constructor(readonly name: string, readonly longName: string) {}

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

/** ISO/IEC 7064, MOD 37,36 implementation */
export const mod37_36: CdigitAlgo = new Mod37_36(
  "mod37_36",
  "ISO/IEC 7064, MOD 37,36"
);
