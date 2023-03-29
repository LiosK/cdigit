/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */
class Luhn {
    constructor(name, longName) {
        this.name = name;
        this.longName = longName;
        /** The Luhn lookup table. */
        this.lookup = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
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
            sum += odd ? this.lookup[ns[i]] : ns[i];
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
/** The Luhn algorithm implementation. */
export const luhn = new Luhn("luhn", "Luhn Algorithm");
