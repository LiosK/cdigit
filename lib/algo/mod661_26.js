/**
 * cdigit
 *
 * @copyright 2018-2022 LiosK
 * @license (MIT OR Apache-2.0)
 */
import { helper } from "./common.js";
class Mod661_26 {
    constructor() {
        this.name = "mod661_26";
        this.longName = "ISO/IEC 7064, MOD 661-26";
        this.alphabet = helper.iso7064.alphabetic;
    }
    compute(num) {
        const ds = String(num).replace(/[^A-Z]/g, "");
        return helper.iso7064.computePure(ds, 661, 26, true, this.alphabet);
    }
    generate(num) {
        return `${num}${this.compute(num)}`;
    }
    validate(num) {
        const [src, cc] = this.parse(num);
        return this.compute(src) === cc;
    }
    parse(num) {
        return helper.parseTail(num, 2);
    }
}
/** ISO/IEC 7064, MOD 661-26 implementation */
export const mod661_26 = new Mod661_26();
