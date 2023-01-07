/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type";
import { decodeString, computePure } from "./iso7064";

class Mod661_26 implements CdigitAlgo {
  constructor(readonly name: string, readonly longName: string) {}

  private readonly alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  computeFromNumVals(ns: number[]): number[] {
    if (ns.some((e) => e < 0 || e > 25 || !Number.isInteger(e))) {
      throw new SyntaxError("invalid numerical value detected");
    }

    return computePure(ns, 661, 26, true);
  }

  compute(s: string): string {
    const ds = String(s).replace(/[^A-Z]/g, "");
    const ns = decodeString(ds, this.alphabet);
    const cc = this.computeFromNumVals(ns);
    return `${this.alphabet[cc[0]]}${this.alphabet[cc[1]]}`;
  }

  parse(s: string): [string, string] {
    const ds = String(s);
    return [ds.slice(0, -2), ds.slice(-2)];
  }

  generate(s: string): string {
    return `${s}${this.compute(s)}`;
  }

  validate(s: string): boolean {
    const [bare, cc] = this.parse(s);
    return this.compute(bare) === cc;
  }
}

/** ISO/IEC 7064, MOD 661-26 implementation */
export const mod661_26: CdigitAlgo = new Mod661_26(
  "mod661_26",
  "ISO/IEC 7064, MOD 661-26"
);
