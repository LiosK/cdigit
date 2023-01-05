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

  compute(s: string): string {
    const ds = String(s).replace(/[^0-9]/g, "");
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

/** ISO/IEC 7064, MOD 11-10 implementation */
export const mod11_10: CdigitAlgo = new Mod11_10();
