# cdigit: Check Digit Algorithms in JS

cdigit - Collection of check digit algorithms implemented in JavaScript

## Synopsis

Node.js:

```javascript
const cdigit = require("cdigit");

// Luhn (a.k.a. Mod 10) algorithm
console.log(cdigit.luhn.compute("1234"));   // "4"
console.log(cdigit.luhn.generate("1234"));  // "12344"
console.log(cdigit.luhn.validate("12344")); // true
```

Command-line:

```bash
# Damm algorithm
npx cdigit --algo damm compute 1234
npx cdigit --algo damm generate 1234
npx cdigit --algo damm validate 12340
```

## Supported Algorithms

### Generic Algorithms

| Algorithm  | cdigit name | Input string  | Check character(s) |
| ---------- | ----------- | ------------- | ------------------ |
| [Luhn]     | luhn        | Numeric (0-9) | 1 digit (0-9)      |
| [Verhoeff] | verhoeff    | Numeric (0-9) | 1 digit (0-9)      |
| [Damm]     | damm        | Numeric (0-9) | 1 digit (0-9)      |

[Luhn]: https://en.wikipedia.org/wiki/Luhn_algorithm
[Verhoeff]: https://en.wikipedia.org/wiki/Verhoeff_algorithm
[Damm]: https://en.wikipedia.org/wiki/Damm_algorithm

### [ISO/IEC 7064] Family

ISO/IEC 7064 describes eight generic check digit (character) systems for
numeric, alphabetic, and alphanumeric strings. ISO/IEC 7064 specifies two types
of systems that use the same algorithm with different parameters: Pure systems
(MOD 11-2, MOD 37-2, MOD 97-10, MOD 661-26, and MOD 1271-36) and Hybrid systems
(MOD 11-10, MOD 27-26, and MOD 37-36).

| Algorithm                 | cdigit name | Input string          | Check character(s)                  |
| ------------------------- | ----------- | --------------------- | ----------------------------------- |
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

GTINs are internationally unified product identification numbers that are often
(or historically) referred to as [UPC], [EAN], [ISBN]-13, etc. GTINs have
several variations in length but share the identical check digit algorithm;
therefore, `cdigit` currently provides only one generic `gtin` object for GTINs
and other [GS1 data structures]. Note that `cdigit.gtin` does not check the
length or semantic validity of a given GTIN string.

| Algorithm | cdigit name | Input string  | Check character(s) | Also known as             |
| --------- | ----------- | ------------- | ------------------ | ------------------------- |
| GTIN-8    | gtin        | Numeric (0-9) | 1 digit (0-9)      | EAN-8                     |
| GTIN-12   | gtin        | Numeric (0-9) | 1 digit (0-9)      | UPC, UPC-A                |
| GTIN-13   | gtin        | Numeric (0-9) | 1 digit (0-9)      | EAN, [JAN], ISBN-13, etc. |
| GTIN-14   | gtin        | Numeric (0-9) | 1 digit (0-9)      | EAN, UCC-14               |

[GTIN]: https://www.gs1.org/standards/id-keys/gtin
[UPC]: https://en.wikipedia.org/wiki/Universal_Product_Code
[EAN]: https://en.wikipedia.org/wiki/International_Article_Number
[ISBN]: https://en.wikipedia.org/wiki/International_Standard_Book_Number
[GS1 data structures]: https://www.gs1.org/standards/id-keys
[JAN]: https://en.wikipedia.org/wiki/International_Article_Number#Japanese_Article_Number

## Usage - Node.js

Load `cdigit` and access to algorithm objects by cdigit._name_ listed in
[Supported Algorithms section](#supported-algorithms).

```javascript
const cdigit = require("cdigit");
const algo = cdigit.mod97_10;
```

Algorithm objects implement the following methods:

### validate(numWithCC: string): boolean

Check if a given string is valid according to the algorithm. The argument must
be a combined string of check digit(s) and their original number.

```javascript
console.log(cdigit.mod97_10.validate("123482")); // true
```

### generate(numWithoutCC: string): string

Generate a valid number string from a given string in accordance with the
algorithm. The generated string includes the original string and computed check
digit(s) that are combined in the manner specified by the algorithm.

```javascript
console.log(cdigit.mod97_10.generate("1234")); // "123482"
```

### compute(numWithoutCC: string): string

Generate check digit(s) from a given number. Unlike `generate()`, this method
returns the check digit(s) only.

```javascript
console.log(cdigit.mod97_10.compute("1234")); // "82"
```

See [example.js](https://npm.runkit.com/cdigit) for usage examples.

## Usage - Command-line

```
Usage: cdigit [options] [command]

Options:
  -a, --algo <name>  specify check digit algorithm by name
  -h, --help         output usage information

Commands:
  validate <string>  check if string is valid
  generate <string>  generate valid number from string
  compute <string>   compute check digit from string
```

`-a, --algo <name>` option accepts the names listed in [Supported Algorithms
section](#supported-algorithms) and defaults to `luhn` or the value of
`CDIGIT_CLI_DEFAULT_ALGO` environment variable (if set).

## License

Copyright (c) 2018-2020 LiosK

Licensed under either of

- [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
- [MIT license](http://opensource.org/licenses/MIT)

at your option.

## Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the Apache-2.0 license, shall be
dual licensed as above, without any additional terms or conditions.

## See Also

- [GitHub repository](https://github.com/LiosK/cdigit)
- [npm package](https://www.npmjs.com/package/cdigit)
- [typedoc-generated documentation (experimental)](https://liosk.github.io/cdigit/)
