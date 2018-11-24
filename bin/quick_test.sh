#!/bin/bash -x

cmd="$(dirname "$0")/cli.js"

$cmd compute 1234
$cmd generate 1234
$cmd validate 12344
$cmd validate 12345

CDIGIT_CLI_DEFAULT_ALGO=damm $cmd compute 1234
CDIGIT_CLI_DEFAULT_ALGO=damm $cmd generate 1234
CDIGIT_CLI_DEFAULT_ALGO=damm $cmd validate 12340
CDIGIT_CLI_DEFAULT_ALGO=damm $cmd validate 12345

$cmd --algo luhn compute 1234
$cmd --algo luhn generate 1234
$cmd --algo luhn validate 12344
$cmd --algo luhn validate 12345
$cmd --algo verhoeff compute 1234
$cmd --algo verhoeff generate 1234
$cmd --algo verhoeff validate 12340
$cmd --algo verhoeff validate 12345
$cmd --algo damm compute 1234
$cmd --algo damm generate 1234
$cmd --algo damm validate 12340
$cmd --algo damm validate 12345
$cmd --algo mod11_2 compute 1234
$cmd --algo mod11_2 generate 1234
$cmd --algo mod11_2 validate 12344
$cmd --algo mod11_2 validate 12345
$cmd --algo mod37_2 compute 12CD
$cmd --algo mod37_2 generate 12CD
$cmd --algo mod37_2 validate 12CD6
$cmd --algo mod37_2 validate 12CD5
$cmd --algo mod97_10 compute 1234
$cmd --algo mod97_10 generate 1234
$cmd --algo mod97_10 validate 123482
$cmd --algo mod97_10 validate 123456
$cmd --algo mod661_26 compute ABCD
$cmd --algo mod661_26 generate ABCD
$cmd --algo mod661_26 validate ABCDKN
$cmd --algo mod661_26 validate ABCDEF
$cmd --algo mod1271_36 compute 12CD
$cmd --algo mod1271_36 generate 12CD
$cmd --algo mod1271_36 validate 12CDJU
$cmd --algo mod1271_36 validate 12CD56
$cmd --algo mod11_10 compute 1234
$cmd --algo mod11_10 generate 1234
$cmd --algo mod11_10 validate 12340
$cmd --algo mod11_10 validate 12345
$cmd --algo mod27_26 compute ABCD
$cmd --algo mod27_26 generate ABCD
$cmd --algo mod27_26 validate ABCDR
$cmd --algo mod27_26 validate ABCDE
$cmd --algo mod37_36 compute 12CD
$cmd --algo mod37_36 generate 12CD
$cmd --algo mod37_36 validate 12CD5
$cmd --algo mod37_36 validate 12CDE
$cmd --algo gtin compute 01234567890
$cmd --algo gtin generate 01234567890
$cmd --algo gtin validate 012345678905
$cmd --algo gtin validate 012345678901
