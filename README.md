# cdigit: Check Digit Algorithms in JS

cdigit - Collection of check digit algorithms implemented in JavaScript


## Synopsis

Node.js:

```javascript
const cdigit = require('cdigit');

// Luhn (a.k.a. Mod 10) algorithm
console.log(cdigit.luhn.compute('1234'));   // '4'
console.log(cdigit.luhn.generate('1234'));  // '12344'
console.log(cdigit.luhn.validate('12344')); // true
```

Command line:

```bash
npx cdigit --algo damm compute 1234
npx cdigit --algo damm generate 1234
npx cdigit --algo damm validate 12340
```


## Supported Algorithms

### Generic Algorithms

| Algorithm  | cdigit name | Input string  | Check character(s) |
|------------|-------------|---------------|--------------------|
| [Luhn]     | luhn        | Numeric (0-9) | 1 digit (0-9)      |
| [Verhoeff] | verhoeff    | Numeric (0-9) | 1 digit (0-9)      |
| [Damm]     | damm        | Numeric (0-9) | 1 digit (0-9)      |

[Luhn]: https://en.wikipedia.org/wiki/Luhn_algorithm
[Verhoeff]: https://en.wikipedia.org/wiki/Verhoeff_algorithm
[Damm]: https://en.wikipedia.org/wiki/Damm_algorithm

### [ISO/IEC 7064] Family

ISO/IEC 7064 describes eight check digit (character) systems for numeric,
alphabetic, or alphanumeric strings.

| Algorithm                 | cdigit name | Input string          | Check character(s)                  |
|---------------------------|-------------|-----------------------|-------------------------------------|
| ISO/IEC 7064, MOD 11-2    | mod11_2     | Numeric (0-9)         | 1 digit or 'X' (0-9X)               |
| ISO/IEC 7064, MOD 37-2    | mod37_2     | Alphanumeric (0-9A-Z) | 1 digit, letter, or '\*' (0-9A-Z\*) |
| ISO/IEC 7064, MOD 97-10   | mod97_10    | Numeric (0-9)         | 2 digits (0-9)                      |
| ISO/IEC 7064, MOD 661-26  | mod661_26   | Alphabetic (A-Z)      | 2 letters (A-Z)                     |
| ISO/IEC 7064, MOD 1271-36 | mod1271_36  | Alphanumeric (0-9A-Z) | 2 digits or letters (0-9A-Z)        |
| ISO/IEC 7064, MOD 11-10   | mod11_10    | Numeric (0-9)         | 1 digit (0-9)                       |
| ISO/IEC 7064, MOD 27-26   | mod27_26    | Alphabetic (A-Z)      | 1 letter (A-Z)                      |
| ISO/IEC 7064, MOD 37-36   | mod37_36    | Alphanumeric (0-9A-Z) | 1 digit or letter (0-9A-Z)          |

[ISO/IEC 7064]: https://www.iso.org/standard/31531.html

### [GTIN] (Global Trade Item Number) Family

| Algorithm | cdigit name | Input string  | Check character(s) | Also referred to as         |
|-----------|-------------|---------------|--------------------|-----------------------------|
| GTIN-8    | gtin        | Numeric (0-9) | 1 digit (0-9)      | [EAN]-8                     |
| GTIN-12   | gtin        | Numeric (0-9) | 1 digit (0-9)      | [UPC], UPC-A                |
| GTIN-13   | gtin        | Numeric (0-9) | 1 digit (0-9)      | EAN, [JAN], [ISBN]-13, etc. |
| GTIN-14   | gtin        | Numeric (0-9) | 1 digit (0-9)      | EAN, UCC-14                 |

`cdigit` currently provides only one generic `gtin` object for GTINs and other
[GS1 data structures] as they share the same algorithm. Note that `cdigit.gtin`
does not validate the length of a given GTIN string.

[GTIN]: https://www.gs1.org/standards/id-keys/gtin
[EAN]: https://en.wikipedia.org/wiki/International_Article_Number
[UPC]: https://en.wikipedia.org/wiki/Universal_Product_Code
[JAN]: https://en.wikipedia.org/wiki/International_Article_Number#Japanese_Article_Number
[ISBN]: https://en.wikipedia.org/wiki/International_Standard_Book_Number
[GS1 data structures]: https://www.gs1.org/standards/id-keys


## Usage - Node.js

Load `cdigit` and access to an algorithm object by cdigit.*name* as listed in
[Supported Algorithms section](#supported-algorithms).

```javascript
const cdigit = require('cdigit');
const algo = cdigit.mod97_10;
```

Algorithm objects implement the following methods.

### validate(num: string): boolean

Check if a given string is valid in accordance with the algorithm. The argument
must include check digit(s) as well as the source number.

```javascript
console.log(cdigit.mod97_10.validate('123482'));  // true
```

### generate(num: string): string

Generate a valid number string from a given source number. The generated string
includes the check digit(s) computed and placed in accordance with the
algorithm.

```javascript
console.log(cdigit.mod97_10.generate('1234'));  // '123482'
```

### compute(num: string): string

Generate check digit(s) from a given source number. This returns the check
digit(s) only.

```javascript
console.log(cdigit.mod97_10.compute('1234')); // '82'
```

See [example.js](example.js) for usage examples.


## Usage - Command Line

```
Usage: cdigit [options] [command]

Options:
  -a, --algo <name>  specify check digit algorithm (see below)
  -h, --help         output usage information

Commands:
  validate <string>  check if string is valid
  generate <string>  generate valid number from string
  compute <string>   compute check digit from string

Supported Algorithms:
  luhn        Luhn Algorithm
  verhoeff    Verhoeff Algorithm
  damm        Damm Algorithm
  mod11_2     ISO/IEC 7064, MOD 11-2
  mod37_2     ISO/IEC 7064, MOD 37-2
  mod97_10    ISO/IEC 7064, MOD 97-10
  mod661_26   ISO/IEC 7064, MOD 661-26
  mod1271_36  ISO/IEC 7064, MOD 1271-36
  mod11_10    ISO/IEC 7064, MOD 11-10
  mod27_26    ISO/IEC 7064, MOD 27-26
  mod37_36    ISO/IEC 7064, MOD 37-36
  gtin        GTINs (including UPC, EAN, ISBN-13, etc.)
  (--algo defaults to `luhn' or CDIGIT_CLI_DEFAULT_ALGO env var if set)
```


## License

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


## See Also

* [GitHub repository](https://github.com/LiosK/cdigit)
* [npm package](https://www.npmjs.com/package/cdigit)
* [typedoc-generated documentation (experimental)](https://liosk.github.io/cdigit/)
