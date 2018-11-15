const cdigit = require('cdigit');

// Luhn algorithm
console.log(cdigit.luhn.compute('1234'));   // '4'
console.log(cdigit.luhn.generate('1234'));  // '12344'
console.log(cdigit.luhn.validate('12344')); // true
console.log(cdigit.luhn.validate('12345')); // false

// Verhoeff algorithm
console.log(cdigit.verhoeff.compute('1234'));   // '0'
console.log(cdigit.verhoeff.generate('1234'));  // '12340'
console.log(cdigit.verhoeff.validate('12340')); // true
console.log(cdigit.verhoeff.validate('12345')); // false

// ISO/IEC 7064, MOD 11-2 algorithm
console.log(cdigit.mod11_2.compute('1234'));    // '4'
console.log(cdigit.mod11_2.generate('1234'));   // '12344'
console.log(cdigit.mod11_2.validate('12344'));  // true
console.log(cdigit.mod11_2.validate('12345'));  // false

// ISO/IEC 7064, MOD 97-10 algorithm
console.log(cdigit.mod97_10.compute('1234'));     // '82'
console.log(cdigit.mod97_10.generate('1234'));    // '123482'
console.log(cdigit.mod97_10.validate('123482'));  // true
console.log(cdigit.mod97_10.validate('123456'));  // false
