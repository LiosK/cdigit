"use strict";
/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod11_10 = void 0;
const common_1 = require("./common");
/** ISO/IEC 7064, MOD 11-10 implementation */
class Mod11_10 {
    constructor() {
        this.name = "mod11_10";
        this.longName = "ISO/IEC 7064, MOD 11-10";
        this.alphabet = common_1.helper.iso7064.numeric.slice(0, -1);
    }
    compute(num) {
        const ds = String(num).replace(/[^0-9]/g, "");
        return common_1.helper.iso7064.computeHybrid(ds, this.alphabet);
    }
    generate(num) {
        return `${num}${this.compute(num)}`;
    }
    validate(num) {
        const [src, cc] = this.parse(num);
        return this.compute(src) === cc;
    }
    parse(num) {
        return common_1.helper.parseTail(num, 1);
    }
}
exports.mod11_10 = new Mod11_10();
