/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type";
import { decodeString, computeHybrid } from "./iso7064";

class Mod11_10 implements CdigitAlgo {
  constructor(readonly name: string, readonly longName: string) {}

  private readonly alphabet = "0123456789";

  computeFromNumVals(ns: number[]): number[] {
    if (ns.some((e) => e < 0 || e > 9 || !Number.isInteger(e))) {
      throw new SyntaxError("invalid numerical value detected");
    }

    return computeHybrid(ns, this.alphabet.length);
  }

  compute(s: string): string {
    const ds = String(s).replace(/[^0-9]/g, "");
    const ns = decodeString(ds, this.alphabet);
    const cc = this.computeFromNumVals(ns);
    return this.alphabet[cc[0]];
  }

  parse(s: string): [string, string] {
    const ds = String(s);
    return [ds.slice(0, -1), ds.slice(-1)];
  }

  generate(s: string): string {
    return `${s}${this.compute(s)}`;
  }

  validate(s: string): boolean {
    const [bare, cc] = this.parse(s);
    return this.compute(bare) === cc;
  }
}

/** ISO/IEC 7064, MOD 11,10 implementation */
export const mod11_10: CdigitAlgo = new Mod11_10(
  "mod11_10",
  "ISO/IEC 7064, MOD 11,10"
);
