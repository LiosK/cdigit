"use strict";
/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.helper = void 0;
exports.helper = {
    parseTail: (num, n) => {
        const ds = String(num);
        return [ds.slice(0, -n), ds.slice(-n)];
    },
    _invCharListMemo: {},
    invertCharList: (alphabet) => {
        if (exports.helper._invCharListMemo[alphabet] == null) {
            exports.helper._invCharListMemo[alphabet] = {};
            const len = alphabet.length;
            for (let i = 0; i < len; i += 1) {
                exports.helper._invCharListMemo[alphabet][alphabet[i]] = i;
            }
            if (len !== Object.keys(exports.helper._invCharListMemo[alphabet]).length) {
                throw new Error("assertion error: chars must be unique");
            }
        }
        return exports.helper._invCharListMemo[alphabet];
    },
    iso7064: {
        numeric: "0123456789X",
        alphabetic: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        alphanumeric: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*",
        /** Implement ISO 7064 pure system recursive method. */
        computePure: (num, mod, radix, hasTwoCCs, alphabet) => {
            const ds = `${num}${alphabet[0]}${hasTwoCCs ? alphabet[0] : ""}`;
            const overflowProtection = Math.floor(0xffffffffffff / radix);
            const charmap = exports.helper.invertCharList(alphabet);
            let c = 0;
            for (let i = 0, len = ds.length; i < len; i += 1) {
                c = c * radix + charmap[ds[i]];
                if (c > overflowProtection) {
                    c %= mod;
                }
            }
            c = (mod + 1 - (c % mod)) % mod;
            if (hasTwoCCs) {
                return `${alphabet[Math.floor(c / radix)]}${alphabet[c % radix]}`;
            }
            return alphabet[c];
        },
        /** Implement ISO 7064 hybrid system recursive method. */
        computeHybrid: (ds, alphabet) => {
            const mod = alphabet.length;
            const charmap = exports.helper.invertCharList(alphabet);
            let c = mod;
            for (let i = 0, len = ds.length; i < len; i += 1) {
                c = (c % (mod + 1)) + charmap[ds[i]];
                c = (c % mod || mod) * 2;
            }
            c %= mod + 1;
            return alphabet[(mod + 1 - c) % mod];
        },
    },
};
