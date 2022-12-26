/**
 * cdigit
 *
 * @copyright 2018-2022 LiosK
 * @license (MIT OR Apache-2.0)
 */
import { helper } from "./common.js";
class Mod37_36 {
    constructor() {
        this.name = "mod37_36";
        this.longName = "ISO/IEC 7064, MOD 37-36";
        this.alphabet = helper.iso7064.alphanumeric.slice(0, -1);
    }
    compute(num) {
        const ds = String(num).replace(/[^0-9A-Z]/g, "");
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
/** ISO/IEC 7064, MOD 37-36 implementation */
export const mod37_36 = new Mod37_36();
