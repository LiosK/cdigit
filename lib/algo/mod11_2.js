"use strict";
/**
 * cdigit
 *
 * @copyright 2018-2022 LiosK
 * @license (MIT OR Apache-2.0)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod11_2 = void 0;
const common_1 = require("./common");
class Mod11_2 {
    constructor() {
        this.name = "mod11_2";
        this.longName = "ISO/IEC 7064, MOD 11-2";
        this.alphabet = common_1.helper.iso7064.numeric;
    }
    compute(num) {
        const ds = String(num).replace(/[^0-9]/g, "");
        return common_1.helper.iso7064.computePure(ds, 11, 2, false, this.alphabet);
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
/** ISO/IEC 7064, MOD 11-2 implementation */
exports.mod11_2 = new Mod11_2();
