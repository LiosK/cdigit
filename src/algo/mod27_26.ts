/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type";
import { computeHybrid } from "./iso7064";

class Mod27_26 implements CdigitAlgo {
  name = "mod27_26";
  longName = "ISO/IEC 7064, MOD 27-26";

  private readonly alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  compute(s: string): string {
    const ds = String(s).replace(/[^A-Z]/g, "");
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

/** ISO/IEC 7064, MOD 27-26 implementation */
export const mod27_26: CdigitAlgo = new Mod27_26();
