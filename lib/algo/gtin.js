/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */
class GTIN {
    constructor(name, longName) {
        this.name = name;
        this.longName = longName;
    }
    computeFromNumVals(ns) {
        if (ns.length === 0) {
            throw new SyntaxError("string to be protected is empty");
        }
        else if (ns.some((e) => e < 0 || e > 9 || !Number.isInteger(e))) {
            throw new SyntaxError("invalid numerical value detected");
        }
        let sum = 0;
        let odd = 1;
        for (let i = ns.length - 1; i >= 0; i -= 1) {
            if (sum > 281474976710655) {
                // ~2^48 at max
                sum %= 10;
            }
            sum += ns[i] * (odd ? 3 : 1);
            odd ^= 1;
        }
        return [(10 - (sum % 10)) % 10];
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
/**
 * The standard check digit algorithm for GS1 data structures (including GTIN).
 *
 * Note: This implementation does not check the length of a number; however, it
 * is not recommended to use numbers longer than 18 digits because GS1 General
 * Specifications do not explicitly specify an algorithm for them.
 */
export const gtin = new GTIN("gtin", "GTINs (including UPC, EAN, ISBN-13, etc.)");
