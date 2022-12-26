/**
 * cdigit
 *
 * @copyright 2018-2022 LiosK
 * @license (MIT OR Apache-2.0)
 */

import { CdigitAlgo, helper } from "./common";

class Mod1271_36 implements CdigitAlgo {
  name = "mod1271_36";
  longName = "ISO/IEC 7064, MOD 1271-36";

  private alphabet: string = helper.iso7064.alphanumeric;

  compute(num: string): string {
    const ds = String(num).replace(/[^0-9A-Z]/g, "");
    return helper.iso7064.computePure(ds, 1271, 36, true, this.alphabet);
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

/** ISO/IEC 7064, MOD 1271-36 implementation */
export const mod1271_36: CdigitAlgo = new Mod1271_36();
