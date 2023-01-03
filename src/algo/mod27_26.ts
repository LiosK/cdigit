/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type.js";
import { computeHybrid } from "./iso7064.js";

class Mod27_26 implements CdigitAlgo {
  name = "mod27_26";
  longName = "ISO/IEC 7064, MOD 27-26";

  private readonly alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  compute(num: string): string {
    const ds = String(num).replace(/[^A-Z]/g, "");
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

/** ISO/IEC 7064, MOD 27-26 implementation */
export const mod27_26: CdigitAlgo = new Mod27_26();
