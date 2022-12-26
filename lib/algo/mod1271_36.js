/**
 * cdigit
 *
 * @copyright 2018-2022 LiosK
 * @license (MIT OR Apache-2.0)
 */
import { helper } from "./common.js";
class Mod1271_36 {
    constructor() {
        this.name = "mod1271_36";
        this.longName = "ISO/IEC 7064, MOD 1271-36";
        this.alphabet = helper.iso7064.alphanumeric;
    }
    compute(num) {
        const ds = String(num).replace(/[^0-9A-Z]/g, "");
        return helper.iso7064.computePure(ds, 1271, 36, true, this.alphabet);
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
/** ISO/IEC 7064, MOD 1271-36 implementation */
export const mod1271_36 = new Mod1271_36();
