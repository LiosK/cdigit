/**
 * cdigit
 *
 * @copyright 2018-2022 LiosK
 * @license (MIT OR Apache-2.0)
 */

import { CdigitAlgo, helper } from "./common";

class Mod661_26 implements CdigitAlgo {
  name = "mod661_26";
  longName = "ISO/IEC 7064, MOD 661-26";

  private alphabet: string = helper.iso7064.alphabetic;

  compute(num: string): string {
    const ds = String(num).replace(/[^A-Z]/g, "");
    return helper.iso7064.computePure(ds, 661, 26, true, this.alphabet);
  }

  generate(num: string): string {
    return `${num}${this.compute(num)}`;
  }

  validate(num: string): boolean {
    const [src, cc] = this.parse(num);
    return this.compute(src) === cc;
  }

  parse(num: string): [string, string] {
    return helper.parseTail(num, 2);
  }
}

/** ISO/IEC 7064, MOD 661-26 implementation */
export const mod661_26: CdigitAlgo = new Mod661_26();
