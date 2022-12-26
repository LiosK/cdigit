/**
 * cdigit
 *
 * @copyright 2018-2022 LiosK
 * @license (MIT OR Apache-2.0)
 */
import { helper } from "./common.js";
class Mod27_26 {
    constructor() {
        this.name = "mod27_26";
        this.longName = "ISO/IEC 7064, MOD 27-26";
        this.alphabet = helper.iso7064.alphabetic;
    }
    compute(num) {
        const ds = String(num).replace(/[^A-Z]/g, "");
        return helper.iso7064.computeHybrid(ds, this.alphabet);
    }
    generate(num) {
        return `${num}${this.compute(num)}`;
    }
    validate(num) {
        const [src, cc] = this.parse(num);
        return this.compute(src) === cc;
    }
    parse(num) {
        return helper.parseTail(num, 1);
    }
}
/** ISO/IEC 7064, MOD 27-26 implementation */
export const mod27_26 = new Mod27_26();
