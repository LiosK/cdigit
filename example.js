const cdigit = require('cdigit');

// Generate and validate check digits using Luhn algorithm
console.log(cdigit.luhn.generate('1234'));  // '4'
console.log(cdigit.luhn.encode('1234'));    // '12344'
console.log(cdigit.luhn.validate('12344')); // true
console.log(cdigit.luhn.validate('12345')); // false
