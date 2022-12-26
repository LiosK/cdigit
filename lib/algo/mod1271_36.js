"use strict";
/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod1271_36 = void 0;
const common_1 = require("./common");
/** ISO/IEC 7064, MOD 1271-36 implementation */
class Mod1271_36 {
    constructor() {
        this.name = "mod1271_36";
        this.longName = "ISO/IEC 7064, MOD 1271-36";
        this.alphabet = common_1.helper.iso7064.alphanumeric;
    }
    compute(num) {
        const ds = String(num).replace(/[^0-9A-Z]/g, "");
        return common_1.helper.iso7064.computePure(ds, 1271, 36, true, this.alphabet);
    }
    generate(num) {
        return `${num}${this.compute(num)}`;
    }
    validate(num) {
        const [src, cc] = this.parse(num);
        return this.compute(src) === cc;
    }
    parse(num) {
        return common_1.helper.parseTail(num, 2);
    }
}
exports.mod1271_36 = new Mod1271_36();
