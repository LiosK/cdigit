"use strict";
/**
 * cdigit
 *
 * @copyright 2018-2022 LiosK
 * @license (MIT OR Apache-2.0)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod97_10 = void 0;
const common_1 = require("./common");
class Mod97_10 {
    constructor() {
        this.name = "mod97_10";
        this.longName = "ISO/IEC 7064, MOD 97-10";
    }
    compute(num) {
        const ds = `${String(num).replace(/[^0-9]/g, "")}00`;
        // Simplified procedure as described in ISO/IEC 7064
        let c = Number(ds.slice(0, 14)) % 97; // 10^14 < 2^48
        for (let i = 14, len = ds.length; i < len; i += 12) {
            c = Number(String(c) + ds.slice(i, i + 12)) % 97;
        }
        return `0${(98 - c) % 97}`.slice(-2);
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
/** ISO/IEC 7064, MOD 97-10 implementation */
exports.mod97_10 = new Mod97_10();
