"use strict";
/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod27_26 = void 0;
const common_1 = require("./common");
/** ISO/IEC 7064, MOD 27-26 implementation */
class Mod27_26 {
    constructor() {
        this.name = "mod27_26";
        this.longName = "ISO/IEC 7064, MOD 27-26";
        this.alphabet = common_1.helper.iso7064.alphabetic;
    }
    compute(num) {
        const ds = String(num).replace(/[^A-Z]/g, "");
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
exports.mod27_26 = new Mod27_26();
