"use strict";
/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.luhn = void 0;
const common_1 = require("./common");
/** Luhn algorithm implementation */
class Luhn {
    constructor() {
        this.name = "luhn";
        this.longName = "Luhn Algorithm";
    }
    compute(num) {
        const ds = String(num).replace(/[^0-9]/g, "");
        const lookup = {
            0: 0,
            1: 2,
            2: 4,
            3: 6,
            4: 8,
            5: 1,
            6: 3,
            7: 5,
            8: 7,
            9: 9,
        };
        let sum = 0;
        let odd = 1;
        for (let i = ds.length - 1; i > -1; i -= 1) {
            sum += odd ? lookup[ds[i]] : Number(ds[i]);
            odd ^= 1;
            if (sum > 0xffffffffffff) {
                // ~2^48 at max
                sum %= 10;
            }
        }
        return String(10 - (sum % 10)).slice(-1);
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
exports.luhn = new Luhn();
