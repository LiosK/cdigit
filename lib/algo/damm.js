/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */
class Damm {
    constructor(name, longName) {
        this.name = name;
        this.longName = longName;
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
    computeFromNumVals(ns) {
        if (ns.length === 0) {
            throw new SyntaxError("string to be protected is empty");
        }
        else if (ns.some((e) => e < 0 || e > 9 || !Number.isInteger(e))) {
            throw new SyntaxError("invalid numerical value detected");
        }
        return [ns.reduce((c, e) => this.opTable[c][e], 0)];
    }
    compute(s) {
        const ds = String(s).replace(/[^0-9]/g, "");
        const ns = [...ds].map(Number);
        return String(this.computeFromNumVals(ns)[0]);
    }
    parse(s) {
        const m = String(s).match(/^(.*)([0-9])$/s);
        if (m != null) {
            return [m[1], m[2]];
        }
        else {
            throw new SyntaxError("could not find check character(s)");
        }
    }
    generate(s) {
        return `${s}${this.compute(s)}`;
    }
    validate(s) {
        const [bare, cc] = this.parse(s);
        return this.compute(bare) === cc;
    }
}
/** Damm algorithm implementation */
export const damm = new Damm("damm", "Damm Algorithm");
