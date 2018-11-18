# NAME

cdigit - Collection of check digit algorithms implemented in JavaScript


# SYNOPSIS

```javascript
const cdigit = require('cdigit');

// Luhn (a.k.a. Mod 10) algorithm
console.log(cdigit.luhn.compute('1234'));   // '4'
console.log(cdigit.luhn.generate('1234'));  // '12344'
console.log(cdigit.luhn.validate('12344')); // true
```


# SUPPORTED ALGORITHMS

## Generic Algorithms

| Algorithm                   | cdigit name | Input string          | Check character(s)                  |
|-----------------------------|-------------|-----------------------|-------------------------------------|
| [Luhn]                      | luhn        | Numeric (0-9)         | 1 digit (0-9)                       |
| [Verhoeff]                  | verhoeff    | Numeric (0-9)         | 1 digit (0-9)                       |
| [Damm]                      | damm        | Numeric (0-9)         | 1 digit (0-9)                       |
| [ISO/IEC 7064], MOD 11-2    | mod11_2     | Numeric (0-9)         | 1 digit or 'X' (0-9X)               |
| [ISO/IEC 7064], MOD 37-2    | mod37_2     | Alphanumeric (0-9A-Z) | 1 digit, letter, or '\*' (0-9A-Z\*) |
| [ISO/IEC 7064], MOD 97-10   | mod97_10    | Numeric (0-9)         | 2 digits (0-9)                      |
| [ISO/IEC 7064], MOD 661-26  | mod661_26   | Alphabetic (A-Z)      | 2 letters (A-Z)                     |
| [ISO/IEC 7064], MOD 1271-36 | mod1271_36  | Alphanumeric (0-9A-Z) | 2 digits or letters (0-9A-Z)        |
| [ISO/IEC 7064], MOD 11-10   | mod11_10    | Numeric (0-9)         | 1 digit (0-9)                       |
| [ISO/IEC 7064], MOD 27-26   | mod27_26    | Alphabetic (A-Z)      | 1 letter (A-Z)                      |
| [ISO/IEC 7064], MOD 37-36   | mod37_36    | Alphanumeric (0-9A-Z) | 1 digit or letter (0-9A-Z)          |

[Luhn]: https://en.wikipedia.org/wiki/Luhn_algorithm
[Verhoeff]: https://en.wikipedia.org/wiki/Verhoeff_algorithm
[Damm]: https://en.wikipedia.org/wiki/Damm_algorithm
[ISO/IEC 7064]: https://www.iso.org/standard/31531.html


# USAGE

Load `cdigit` and access to an algorithm object by cdigit.*name* as listed in
[SUPPORTED ALGORITHMS section](#supported-algorithms).

```javascript
const cdigit = require('cdigit');
const algo = cdigit.mod97_10;
```

Algorithm objects implement the following methods.

## validate(num: string): boolean

Check if a given string is valid in accordance with the algorithm. The argument
must include check digit(s) as well as the source number.

```javascript
console.log(cdigit.mod97_10.validate('123482'));  // true
```

## generate(num: string): string

Generate a valid number string from a given source number. The generated string
includes the check digit(s) computed and placed in accordance with the
algorithm.

```javascript
console.log(cdigit.mod97_10.generate('1234'));  // '123482'
```

## compute(num: string): string

Generate check digit(s) from a given source number. This returns the check
digit(s) only.

```javascript
console.log(cdigit.mod97_10.compute('1234')); // '82'
```

See [example.js](example.js) for usage examples.


# LICENSE

Copyright (c) 2018 LiosK

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


# SEE ALSO

* [GitHub repository](https://github.com/LiosK/cdigit)
* [npm package](https://www.npmjs.com/package/cdigit)
* [typedoc-generated documentation (experimental)](https://liosk.github.io/cdigit/)
