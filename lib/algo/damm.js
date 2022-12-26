"use strict";
/**
 * cdigit
 *
 * @copyright 2018-2022 LiosK
 * @license (MIT OR Apache-2.0)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.damm = void 0;
const common_1 = require("./common");
class Damm {
    constructor() {
        this.name = "damm";
        this.longName = "Damm Algorithm";
        /** Damm operation table */
        this.opTable = [
            [0, 3, 1, 7, 5, 9, 8, 6, 4, 2],
            [7, 0, 9, 2, 1, 5, 4, 8, 6, 3],
            [4, 2, 0, 6, 8, 7, 1, 3, 5, 9],
            [1, 7, 5, 0, 9, 8, 3, 4, 2, 6],
            [6, 1, 2, 3, 0, 4, 5, 9, 7, 8],
            [3, 6, 7, 4, 2, 0, 9, 5, 8, 1],
            [5, 8, 6, 9, 7, 2, 0, 1, 3, 4],
            [8, 9, 4, 5, 3, 6, 2, 0, 1, 7],
            [9, 4, 3, 8, 6, 1, 7, 2, 0, 5],
            [2, 5, 8, 1, 4, 3, 6, 7, 9, 0],
        ];
    }
    compute(num) {
        const ds = `${String(num).replace(/[^0-9]/g, "")}`;
        let c = 0;
        for (let i = 0, len = ds.length; i < len; i += 1) {
            c = this.opTable[c][Number(ds[i])];
        }
        return String(c);
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
/** Damm algorithm implementation */
exports.damm = new Damm();
