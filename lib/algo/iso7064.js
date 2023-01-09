/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */
const charMapMemo = {};
const getCharMap = (alphabet) => {
    if (charMapMemo[alphabet] == null) {
        charMapMemo[alphabet] = {};
        for (let i = 0; i < alphabet.length; i += 1) {
            const c = alphabet[i];
            if (charMapMemo[alphabet][c] == null) {
                charMapMemo[alphabet][c] = i;
            }
            else {
                throw new Error("assertion error: chars must be unique");
            }
        }
    }
    return charMapMemo[alphabet];
};
/**
 * Implements ISO 7064 pure system recursive method.
 *
 * This implementation classifies the pure systems into two flavors:
 *
 * - "EXTRA_CHAR": those that use a supplementary check character (i.e., 'X' and
 *   '*') outside the character set of the original bare string (MOD 11-2, 37-2)
 * - "TWO_CCS": those that use two check characters (MOD 97-10, 661-26, 1271-36)
 */
class Pure {
    constructor(name, longName, mod, radix, alphabet, flavor) {
        this.name = name;
        this.longName = longName;
        this.mod = mod;
        this.radix = radix;
        this.alphabet = alphabet;
        this.flavor = flavor;
    }
    computeFromNumVals(ns) {
        const maxNumVal = this.flavor === "EXTRA_CHAR"
            ? this.alphabet.length - 1
            : this.alphabet.length;
        if (ns.length === 0) {
            throw new SyntaxError("string to be protected is empty");
        }
        else if (ns.some((e) => e < 0 || e >= maxNumVal || !Number.isInteger(e))) {
            throw new SyntaxError("invalid numerical value detected");
        }
        let c = 0;
        for (const e of this.flavor === "TWO_CCS" ? [...ns, 0, 0] : [...ns, 0]) {
            if (c > 17592186044415) {
                // ~2^44 at max
                c %= this.mod;
            }
            c = c * this.radix + e;
        }
        c = (this.mod + 1 - (c % this.mod)) % this.mod;
        return this.flavor === "TWO_CCS"
            ? [Math.floor(c / this.radix), c % this.radix]
            : [c];
    }
    compute(s) {
        const charMap = this.flavor === "EXTRA_CHAR"
            ? getCharMap(this.alphabet.slice(0, -1))
            : getCharMap(this.alphabet);
        const ns = [];
        for (const c of String(s)) {
            if (charMap[c] != null) {
                ns.push(charMap[c]);
            }
        }
        const cc = this.computeFromNumVals(ns);
        return this.flavor === "TWO_CCS"
            ? this.alphabet[cc[0]] + this.alphabet[cc[1]]
            : this.alphabet[cc[0]];
    }
    parse(s) {
        const charMap = getCharMap(this.alphabet);
        const n = this.flavor === "TWO_CCS" ? 2 : 1;
        const cc = s.slice(-n);
        if (cc.length === n && [...cc].every((c) => charMap[c] != null)) {
            return [s.slice(0, -n), cc];
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
/** Implements ISO 7064 hybrid system recursive method. */
class Hybrid {
    constructor(name, longName, alphabet) {
        this.name = name;
        this.longName = longName;
        this.alphabet = alphabet;
    }
    computeFromNumVals(ns) {
        const mod = this.alphabet.length;
        if (ns.length === 0) {
            throw new SyntaxError("string to be protected is empty");
        }
        else if (ns.some((e) => e < 0 || e >= mod || !Number.isInteger(e))) {
            throw new SyntaxError("invalid numerical value detected");
        }
        let c = mod;
        for (const e of ns) {
            c = (c % (mod + 1)) + e;
            c = (c % mod || mod) * 2;
        }
        c %= mod + 1;
        return [(mod + 1 - c) % mod];
    }
    compute(s) {
        const charMap = getCharMap(this.alphabet);
        const ns = [];
        for (const c of String(s)) {
            if (charMap[c] != null) {
                ns.push(charMap[c]);
            }
        }
        const cc = this.computeFromNumVals(ns);
        return this.alphabet[cc[0]];
    }
    parse(s) {
        const charMap = getCharMap(this.alphabet);
        const cc = s.slice(-1);
        if (cc.length === 1 && charMap[cc] != null) {
            return [s.slice(0, -1), cc];
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
/** ISO/IEC 7064, MOD 11-2 implementation */
export const mod11_2 = new Pure("mod11_2", "ISO/IEC 7064, MOD 11-2", 11, 2, "0123456789X", "EXTRA_CHAR");
/** ISO/IEC 7064, MOD 37-2 implementation */
export const mod37_2 = new Pure("mod37_2", "ISO/IEC 7064, MOD 37-2", 37, 2, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*", "EXTRA_CHAR");
/** ISO/IEC 7064, MOD 97-10 implementation */
export const mod97_10 = new Pure("mod97_10", "ISO/IEC 7064, MOD 97-10", 97, 10, "0123456789", "TWO_CCS");
/** ISO/IEC 7064, MOD 661-26 implementation */
export const mod661_26 = new Pure("mod661_26", "ISO/IEC 7064, MOD 661-26", 661, 26, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "TWO_CCS");
/** ISO/IEC 7064, MOD 1271-36 implementation */
export const mod1271_36 = new Pure("mod1271_36", "ISO/IEC 7064, MOD 1271-36", 1271, 36, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", "TWO_CCS");
/** ISO/IEC 7064, MOD 11,10 implementation */
export const mod11_10 = new Hybrid("mod11_10", "ISO/IEC 7064, MOD 11,10", "0123456789");
/** ISO/IEC 7064, MOD 27,26 implementation */
export const mod27_26 = new Hybrid("mod27_26", "ISO/IEC 7064, MOD 27,26", "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
/** ISO/IEC 7064, MOD 37,36 implementation */
export const mod37_36 = new Hybrid("mod37_36", "ISO/IEC 7064, MOD 37,36", "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ");
