const {
  luhn,
  verhoeff,
  damm,
  mod11_2,
  mod37_2,
  mod97_10,
  mod661_26,
  mod1271_36,
  mod11_10,
  mod27_26,
  mod37_36,
  gtin,
} = require("cdigit");

// Luhn algorithm
console.log(luhn.compute("1234")); // "4"
console.log(luhn.generate("1234")); // "12344"
console.log(luhn.validate("12344")); // true
console.log(luhn.validate("12345")); // false

// Verhoeff algorithm
console.log(verhoeff.compute("1234")); // "0"
console.log(verhoeff.generate("1234")); // "12340"
console.log(verhoeff.validate("12340")); // true
console.log(verhoeff.validate("12345")); // false

// Damm algorithm
console.log(damm.compute("1234")); // "0"
console.log(damm.generate("1234")); // "12340"
console.log(damm.validate("12340")); // true
console.log(damm.validate("12345")); // false

// ISO/IEC 7064, MOD 11-2 algorithm
console.log(mod11_2.compute("1234")); // "4"
console.log(mod11_2.generate("1234")); // "12344"
console.log(mod11_2.validate("12344")); // true
console.log(mod11_2.validate("12345")); // false

// ISO/IEC 7064, MOD 37-2 algorithm
console.log(mod37_2.compute("12CD")); // "6"
console.log(mod37_2.generate("12CD")); // "12CD6"
console.log(mod37_2.validate("12CD6")); // true
console.log(mod37_2.validate("12CD5")); // false

// ISO/IEC 7064, MOD 97-10 algorithm
console.log(mod97_10.compute("1234")); // "82"
console.log(mod97_10.generate("1234")); // "123482"
console.log(mod97_10.validate("123482")); // true
console.log(mod97_10.validate("123456")); // false

// ISO/IEC 7064, MOD 661-26 algorithm
console.log(mod661_26.compute("ABCD")); // "KN"
console.log(mod661_26.generate("ABCD")); // "ABCDKN"
console.log(mod661_26.validate("ABCDKN")); // true
console.log(mod661_26.validate("ABCDEF")); // false

// ISO/IEC 7064, MOD 1271-36 algorithm
console.log(mod1271_36.compute("12CD")); // "JU"
console.log(mod1271_36.generate("12CD")); // "12CDJU"
console.log(mod1271_36.validate("12CDJU")); // true
console.log(mod1271_36.validate("12CD56")); // false

// ISO/IEC 7064, MOD 11,10 algorithm
console.log(mod11_10.compute("1234")); // "0"
console.log(mod11_10.generate("1234")); // "12340"
console.log(mod11_10.validate("12340")); // true
console.log(mod11_10.validate("12345")); // false

// ISO/IEC 7064, MOD 27,26 algorithm
console.log(mod27_26.compute("ABCD")); // "R"
console.log(mod27_26.generate("ABCD")); // "ABCDR"
console.log(mod27_26.validate("ABCDR")); // true
console.log(mod27_26.validate("ABCDE")); // false

// ISO/IEC 7064, MOD 37,36 algorithm
console.log(mod37_36.compute("12CD")); // "5"
console.log(mod37_36.generate("12CD")); // "12CD5"
console.log(mod37_36.validate("12CD5")); // true
console.log(mod37_36.validate("12CDE")); // false

// GTINs (including UPC, EAN, ISBN-13, etc.)
console.log(gtin.compute("01234567890")); // "5"
console.log(gtin.generate("01234567890")); // "012345678905"
console.log(gtin.validate("012345678905")); // true
console.log(gtin.validate("012345678901")); // false
