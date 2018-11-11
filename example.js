const cdigit = require('cdigit');

// Generate and validate check digits using Luhn algorithm
console.log(cdigit.luhn.generate('1234'));  // '4'
console.log(cdigit.luhn.encode('1234'));    // '12344'
console.log(cdigit.luhn.validate('12344')); // true
console.log(cdigit.luhn.validate('12345')); // false

// Generate and validate check digits using Verhoeff algorithm
console.log(cdigit.verhoeff.generate('1234'));  // '0'
console.log(cdigit.verhoeff.encode('1234'));    // '12340'
console.log(cdigit.verhoeff.validate('12340')); // true
console.log(cdigit.verhoeff.validate('12345')); // false
