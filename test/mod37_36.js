const common = require("./common");
const algo = require("..").mod37_36;

describe(`${algo.longName} (${algo.name})`, () => {
  // {{{ List sample strings
  const valid = [
    ["B7Q3SFTUSH2QN7BIXBPMNZAMI", "B7Q3SFTUSH2QN7BIXBPMNZAM", "I"],
    [
      "UFSYYJO9FCID766EJYAEINTG43UZDD84MT6ZUDH08OM4N1KN",
      "UFSYYJO9FCID766EJYAEINTG43UZDD84MT6ZUDH08OM4N1K",
      "N",
    ],
    [
      "ROYL38YZ9TDGPNB5MT40CEWGURAOKF07XEYTV3M6",
      "ROYL38YZ9TDGPNB5MT40CEWGURAOKF07XEYTV3M",
      "6",
    ],
    ["TBR1", "TBR", "1"],
    ["EFWW032G2TIU", "EFWW032G2TI", "U"],
    ["9J", "9", "J"],
    ["B3739U6CRK", "B3739U6CR", "K"],
    ["H0DJFUS8HHGZNEE9H6ZWWO", "H0DJFUS8HHGZNEE9H6ZWW", "O"],
    [
      "C8AWF5G0CE8U9VTKSPPS2JAP09ZFEGFEAVL",
      "C8AWF5G0CE8U9VTKSPPS2JAP09ZFEGFEAV",
      "L",
    ],
    ["OWN", "OW", "N"],
    ["TROD", "TRO", "D"],
    ["1MQ", "1M", "Q"],
    ["FLFOWRIBFCNWNMNFVKAJVS7REUS2L2", "FLFOWRIBFCNWNMNFVKAJVS7REUS2L", "2"],
    ["7LI6P5WTF2JHUU", "7LI6P5WTF2JHU", "U"],
    ["KUHNOF8OA1NXCWA", "KUHNOF8OA1NXCW", "A"],
    ["KV0MFQXMAL4W5ICNHP", "KV0MFQXMAL4W5ICNH", "P"],
    ["MM61BF7H6C2O86NNMW8ZY8V8", "MM61BF7H6C2O86NNMW8ZY8V", "8"],
    ["WP8Z09", "WP8Z0", "9"],
    [
      "ULIB3P8MH6VE4ISG8TK993HFK5SCLNX0W6QBJBC",
      "ULIB3P8MH6VE4ISG8TK993HFK5SCLNX0W6QBJB",
      "C",
    ],
    ["OT9A7XKWIIGN0BX4ID7", "OT9A7XKWIIGN0BX4ID", "7"],
    ["RABDA", "RABD", "A"],
    ["5UDG1OOZDY4KCESO8GDR5I3OE8", "5UDG1OOZDY4KCESO8GDR5I3OE", "8"],
    ["NAOAEL05T8BN35", "NAOAEL05T8BN3", "5"],
    [
      "I5B8C2HWSZ8GYVV5P9LRYCNT8ZZKNWGYP7K6BKY9NTP",
      "I5B8C2HWSZ8GYVV5P9LRYCNT8ZZKNWGYP7K6BKY9NT",
      "P",
    ],
    ["0R2XVE3K7R0N6F37TATH46", "0R2XVE3K7R0N6F37TATH4", "6"],
    ["H0FCZ8IK", "H0FCZ8I", "K"],
    [
      "JDRSI1DZ8WE1CPK7S7DCAJR4F8TI95PPEK733022VOG8LI",
      "JDRSI1DZ8WE1CPK7S7DCAJR4F8TI95PPEK733022VOG8L",
      "I",
    ],
    ["4RRNKBFSALYMSEC1ISSOEVUG9M", "4RRNKBFSALYMSEC1ISSOEVUG9", "M"],
    [
      "0M7MVA09X7F8SA8IRLHP6GQLBJF4BXDZ41SV8",
      "0M7MVA09X7F8SA8IRLHP6GQLBJF4BXDZ41SV",
      "8",
    ],
    ["M4AAJI3RRN7Z66QNTR", "M4AAJI3RRN7Z66QNT", "R"],
    ["597OFS", "597OF", "S"],
    ["KH67Q2L", "KH67Q2", "L"],
    ["X0HX", "X0H", "X"],
    ["N6JMFVDVW1O6NHYMTFMNUE", "N6JMFVDVW1O6NHYMTFMNU", "E"],
    ["ZUVX9JSL9VWIN9SO2G28", "ZUVX9JSL9VWIN9SO2G2", "8"],
    ["JOAYNP0JMUOPSEDHVF6", "JOAYNP0JMUOPSEDHVF", "6"],
    ["A71NQUW9EKEDKAUU8M", "A71NQUW9EKEDKAUU8", "M"],
    ["VBMLPK75D2QQDVVFEHN2DQZAWIWR6C9", "VBMLPK75D2QQDVVFEHN2DQZAWIWR6C", "9"],
    [
      "F3XDN7WKS3I0R54SLM50C6A00C6GKPCS54ID6HIP1ZB0",
      "F3XDN7WKS3I0R54SLM50C6A00C6GKPCS54ID6HIP1ZB",
      "0",
    ],
    [
      "PYP4JNSG2UL21TCSYY90MTS15V24TG74BTIVMPJMVFG",
      "PYP4JNSG2UL21TCSYY90MTS15V24TG74BTIVMPJMVF",
      "G",
    ],
    [
      "9WBFKT5CCCSOUEQFLOYJGSOS4W74E6XFW",
      "9WBFKT5CCCSOUEQFLOYJGSOS4W74E6XF",
      "W",
    ],
    ["D11CCVR5AALYTW627L2631SH", "D11CCVR5AALYTW627L2631S", "H"],
    [
      "M6G0IKDHEHONXXEDVB5UFPIZ9JYS4OXL60VA",
      "M6G0IKDHEHONXXEDVB5UFPIZ9JYS4OXL60V",
      "A",
    ],
    ["ZE9QPNFI13C4P8G3B", "ZE9QPNFI13C4P8G3", "B"],
    ["I1", "I", "1"],
    ["LQJ86XSM7GK2GYOF0VTZZW1UTSSMP", "LQJ86XSM7GK2GYOF0VTZZW1UTSSM", "P"],
    [
      "1513TD6RNBS5DHT768F3JDIBD868VX3ML08BOKEIFOHV",
      "1513TD6RNBS5DHT768F3JDIBD868VX3ML08BOKEIFOH",
      "V",
    ],
    ["B6OZT1NTRANKA6MB1G1I", "B6OZT1NTRANKA6MB1G1", "I"],
    ["O2WGMLXEWKUQL099NF", "O2WGMLXEWKUQL099N", "F"],
    ["2FUG4FGRW6EEI1HSFD7EX2CX2HF", "2FUG4FGRW6EEI1HSFD7EX2CX2H", "F"],
    [
      "LZ5IXXMOC4LPEE1UKEVSPNM9GKAQPSN8G5XR8M",
      "LZ5IXXMOC4LPEE1UKEVSPNM9GKAQPSN8G5XR8",
      "M",
    ],
    ["MXN3DCA7K5YSO9P7P2K6Q5O", "MXN3DCA7K5YSO9P7P2K6Q5", "O"],
    ["LW1LL4A4IAF", "LW1LL4A4IA", "F"],
    ["S45TWPRNDIGM257", "S45TWPRNDIGM25", "7"],
    [
      "U9PI49JB7H30ZJZV8KBQ1IF8GUIBEAW0RHX05TJM3XNGOV",
      "U9PI49JB7H30ZJZV8KBQ1IF8GUIBEAW0RHX05TJM3XNGO",
      "V",
    ],
    ["NH26EU", "NH26E", "U"],
    ["55H65UL659NHK1OHTTM2431FJG", "55H65UL659NHK1OHTTM2431FJ", "G"],
    [
      "Z748MFH1AYO8Y6LBMKE4Y8B5B0BWIPCB",
      "Z748MFH1AYO8Y6LBMKE4Y8B5B0BWIPC",
      "B",
    ],
    ["8ZVX6LXBH5L46555SM4F", "8ZVX6LXBH5L46555SM4", "F"],
    [
      "AFXHRH3K0W7HSCKTOIO0Q9M16OUQNUKA8XE35TO9CRG",
      "AFXHRH3K0W7HSCKTOIO0Q9M16OUQNUKA8XE35TO9CR",
      "G",
    ],
    ["D2I", "D2", "I"],
    ["8IP75O", "8IP75", "O"],
    ["8WRNRXZ144ZUW9MRL1DGFLUOFX2Q", "8WRNRXZ144ZUW9MRL1DGFLUOFX2", "Q"],
    ["6CI11L", "6CI11", "L"],
    [
      "VWX30FXF4XWVEMW8QY8ZQME9ARXRKJ8NXLAWDBD",
      "VWX30FXF4XWVEMW8QY8ZQME9ARXRKJ8NXLAWDB",
      "D",
    ],
    ["AYJHL6X1JEORV91S67U", "AYJHL6X1JEORV91S67", "U"],
    ["P1GABGA91SN45OWU", "P1GABGA91SN45OW", "U"],
    ["ZE0LY3B5Y5HYUAUSFFA", "ZE0LY3B5Y5HYUAUSFF", "A"],
    ["Z4", "Z", "4"],
    [
      "MJ3D275B5KQJIWK3PASDX0OLAZYQJWURWRFFSKC3CRFZ",
      "MJ3D275B5KQJIWK3PASDX0OLAZYQJWURWRFFSKC3CRF",
      "Z",
    ],
    ["7N", "7", "N"],
    ["80YOH6UZ4", "80YOH6UZ", "4"],
    ["XNKK39E0LBLHK9P2UZQIBYOE", "XNKK39E0LBLHK9P2UZQIBYO", "E"],
    ["9JQ2DJQFT6I78MEXT78A", "9JQ2DJQFT6I78MEXT78", "A"],
    [
      "ZQ0M4XQWOJD36QYW8RW2M7KEBB9O6BRWTLVSG0CJ",
      "ZQ0M4XQWOJD36QYW8RW2M7KEBB9O6BRWTLVSG0C",
      "J",
    ],
    ["96Q", "96", "Q"],
    [
      "WM4EE1F95DWFDM1DLM9DNGR06W70SWQVI1FVX3JX9Q8KS90MO",
      "WM4EE1F95DWFDM1DLM9DNGR06W70SWQVI1FVX3JX9Q8KS90M",
      "O",
    ],
    ["KKVALUFTLWPBF", "KKVALUFTLWPB", "F"],
    ["16KDGW6Y5NBIRVWCPTHF8G", "16KDGW6Y5NBIRVWCPTHF8", "G"],
    ["6Z6KB78RB8CF7BJ46TS", "6Z6KB78RB8CF7BJ46T", "S"],
    [
      "OSJ3MJPX7FL31SMYG7O855H5SNP0YID2NQS",
      "OSJ3MJPX7FL31SMYG7O855H5SNP0YID2NQ",
      "S",
    ],
    ["0P3Q6P", "0P3Q6", "P"],
    [
      "DMDRXCIDS3QT3P6EL7WH7VJ20T86M7IT8O",
      "DMDRXCIDS3QT3P6EL7WH7VJ20T86M7IT8",
      "O",
    ],
    ["1QPL", "1QP", "L"],
    ["GSUUS2", "GSUUS", "2"],
    [
      "9U15AU2D8AFRILZSTVWY5AGVT3ND3OV8QDBL8JA521CJCVL",
      "9U15AU2D8AFRILZSTVWY5AGVT3ND3OV8QDBL8JA521CJCV",
      "L",
    ],
    [
      "HK2W1Q7RC18MUIIT7OU7WDTCNSDXPIP0L7",
      "HK2W1Q7RC18MUIIT7OU7WDTCNSDXPIP0L",
      "7",
    ],
    ["SQQ079C5RZ4OO3CZPCMAU", "SQQ079C5RZ4OO3CZPCMA", "U"],
    ["JV2G", "JV2", "G"],
    ["H63QJ2I2UVPCP5", "H63QJ2I2UVPCP", "5"],
    [
      "RGDYC9RTMGUYPRAGIRN047EOBADDBG6PHE5HYZ",
      "RGDYC9RTMGUYPRAGIRN047EOBADDBG6PHE5HY",
      "Z",
    ],
    ["96Z8XTT595BIJDMQIY3", "96Z8XTT595BIJDMQIY", "3"],
    [
      "2S08SPX3MI2HUQBTLYFBW029CFLWQG4YHFTT0DTNHXGE",
      "2S08SPX3MI2HUQBTLYFBW029CFLWQG4YHFTT0DTNHXG",
      "E",
    ],
    ["PAR2TUGKUMQS91749Z15J78JHOAI91", "PAR2TUGKUMQS91749Z15J78JHOAI9", "1"],
    ["3U9BNSSQOH1DDM", "3U9BNSSQOH1DD", "M"],
    [
      "HIKBIQQ1767G5RID33WU2V9VX52Q106OY",
      "HIKBIQQ1767G5RID33WU2V9VX52Q106O",
      "Y",
    ],
    [
      "HSZMO4ZU7497IXQJBOQPTD1RSGYLUIMV4X9AEM",
      "HSZMO4ZU7497IXQJBOQPTD1RSGYLUIMV4X9AE",
      "M",
    ],
    ["362EWROF7II", "362EWROF7I", "I"],
    ["RNR4BQ0TJH534", "RNR4BQ0TJH53", "4"],
    ["9UCM15U6RZ96FLZI2W23F", "9UCM15U6RZ96FLZI2W23", "F"],
    ["9SNSGBV0UJIYBIDYANWL25AS", "9SNSGBV0UJIYBIDYANWL25A", "S"],
    [
      "EYSARW8MUXKPDQQ5VQPR67PEA064QSBY2NR4HB",
      "EYSARW8MUXKPDQQ5VQPR67PEA064QSBY2NR4H",
      "B",
    ],
    [
      "UW1841E5M0NEJP26ORY85QL641HVMFWX7PI2KDAFV28GO14",
      "UW1841E5M0NEJP26ORY85QL641HVMFWX7PI2KDAFV28GO1",
      "4",
    ],
    ["5B3M88P93GARE93Y", "5B3M88P93GARE93", "Y"],
    ["UGVY3RCH2ESC", "UGVY3RCH2ES", "C"],
    ["FJ9ELBVDRKYGK8TGHFLJ8GYWG", "FJ9ELBVDRKYGK8TGHFLJ8GYW", "G"],
    ["86U", "86", "U"],
    ["1NVSECWJGSNV5", "1NVSECWJGSNV", "5"],
    ["YI9X4G4YV0Q", "YI9X4G4YV0", "Q"],
    ["XIAYY0DIIZ6B99HZXY", "XIAYY0DIIZ6B99HZX", "Y"],
    [
      "WUGHCCKASIN7W4567H69P60139LFUVDFZTLD4",
      "WUGHCCKASIN7W4567H69P60139LFUVDFZTLD",
      "4",
    ],
    [
      "3HN4ORKT1ZFG65QF6KGZLNQO0ZJ3Z82L79ETJADF0JLF9",
      "3HN4ORKT1ZFG65QF6KGZLNQO0ZJ3Z82L79ETJADF0JLF",
      "9",
    ],
    [
      "5YYV1E5VEN155JVUS3XCQZ6LC5QL3DEODEN",
      "5YYV1E5VEN155JVUS3XCQZ6LC5QL3DEODE",
      "N",
    ],
    ["DZQZMZ3FPQ0X7SX2KDV", "DZQZMZ3FPQ0X7SX2KD", "V"],
    ["QB3U4S3HKT71JYYPCIHF37", "QB3U4S3HKT71JYYPCIHF3", "7"],
    [
      "U0ORC0U9AGNKDOILQWHMZVO4DG4X435I7PYH7T4",
      "U0ORC0U9AGNKDOILQWHMZVO4DG4X435I7PYH7T",
      "4",
    ],
    ["4V4MRGJAOXZYAHTXDISN0ETBL0FTBW", "4V4MRGJAOXZYAHTXDISN0ETBL0FTB", "W"],
    ["9O3QF1", "9O3QF", "1"],
    [
      "PUDJ3EXJE1MSF38HF9W4B56B6LF3A9JH82",
      "PUDJ3EXJE1MSF38HF9W4B56B6LF3A9JH8",
      "2",
    ],
    [
      "2HYHFLDH2K54X3QFY8X8BVVW1UD6Y67YDL0PKXJ1GOEIY8",
      "2HYHFLDH2K54X3QFY8X8BVVW1UD6Y67YDL0PKXJ1GOEIY",
      "8",
    ],
    [
      "D012K9FNAY1N6SAS4VSDCBS9461MLVWU73WBA3",
      "D012K9FNAY1N6SAS4VSDCBS9461MLVWU73WBA",
      "3",
    ],
    ["HVZB8IBV1MO0JSGAEQOV9", "HVZB8IBV1MO0JSGAEQOV", "9"],
    ["U361CDMWO", "U361CDMW", "O"],
    ["UVLVDYYGGRT33RDL7FDCMIZ3DJXXMQW", "UVLVDYYGGRT33RDL7FDCMIZ3DJXXMQ", "W"],
    ["F683C7TN89IIKSI63H48JSH8JK12OAT", "F683C7TN89IIKSI63H48JSH8JK12OA", "T"],
    ["D1ICY3ZZB9CIECZX3R4GCLF68Q9O", "D1ICY3ZZB9CIECZX3R4GCLF68Q9", "O"],
    [
      "ZWHCPMMU7AAJQCUME8429WQ0WWW2UMQN492UKWIPAVCI89CB",
      "ZWHCPMMU7AAJQCUME8429WQ0WWW2UMQN492UKWIPAVCI89C",
      "B",
    ],
    [
      "2D2B64A664P3XT56EZD6OAZF1829WGJH1P3LJTZ3",
      "2D2B64A664P3XT56EZD6OAZF1829WGJH1P3LJTZ",
      "3",
    ],
    [
      "HBQLH3BTDAMRTL9NXNT1X5MBV4FOBJDRD61A",
      "HBQLH3BTDAMRTL9NXNT1X5MBV4FOBJDRD61",
      "A",
    ],
    ["83YPS9D8Z3KP", "83YPS9D8Z3K", "P"],
    ["ZN25DCMRG86T3INDRDMTA0V3HVHNI3V", "ZN25DCMRG86T3INDRDMTA0V3HVHNI3", "V"],
    [
      "DAE9R8MOZ7W5QUFTXX46ELP3BJQOFTQ2Q0LR1DD2",
      "DAE9R8MOZ7W5QUFTXX46ELP3BJQOFTQ2Q0LR1DD",
      "2",
    ],
    ["OQREINA3KLUEZ929UG3A", "OQREINA3KLUEZ929UG3", "A"],
    ["36NHWV1GP0D8KYLTPXNCSZFZZ672ZV", "36NHWV1GP0D8KYLTPXNCSZFZZ672Z", "V"],
    ["F3RSC", "F3RS", "C"],
    ["PP3XL2VZBV3BZVE4HXYXVWVC5GGO3", "PP3XL2VZBV3BZVE4HXYXVWVC5GGO", "3"],
    ["GFHDR9MGIIG3SCM26D2DVHFVV5YYL8", "GFHDR9MGIIG3SCM26D2DVHFVV5YYL", "8"],
    ["BA9SZDJ", "BA9SZD", "J"],
    [
      "51CFK9ZNJL7AJNEDOCBGSP3VMH8MCWIL",
      "51CFK9ZNJL7AJNEDOCBGSP3VMH8MCWI",
      "L",
    ],
    ["EG5Y3PGE", "EG5Y3PG", "E"],
    [
      "ING7PT21EXUUFRCM1WL5I5R40OIHQ7P55F812EQ9EI",
      "ING7PT21EXUUFRCM1WL5I5R40OIHQ7P55F812EQ9E",
      "I",
    ],
    [
      "X8W4Z31UDQ5JHFVEFZM5XPJKA3E8MKL7ZBOWMOR",
      "X8W4Z31UDQ5JHFVEFZM5XPJKA3E8MKL7ZBOWMO",
      "R",
    ],
    ["5RVI3HWRZ9NR", "5RVI3HWRZ9N", "R"],
    [
      "ABQAS651C0T6H1WE9E4JMTYO4JCSXB8N",
      "ABQAS651C0T6H1WE9E4JMTYO4JCSXB8",
      "N",
    ],
    ["AGPARRWPBYZH3GB10UH4OBMH", "AGPARRWPBYZH3GB10UH4OBM", "H"],
    ["JFNETPK4ODWCMTKFF7", "JFNETPK4ODWCMTKFF", "7"],
    [
      "NN3LTC6WK7TTTCQZEMY3AXJ7ADBGD8TGN",
      "NN3LTC6WK7TTTCQZEMY3AXJ7ADBGD8TG",
      "N",
    ],
    [
      "DZRCH0TUAENYI2LNPQUYNDXUD9Q88LDNCD1LVZ9P0KUAXCE",
      "DZRCH0TUAENYI2LNPQUYNDXUD9Q88LDNCD1LVZ9P0KUAXC",
      "E",
    ],
    ["PC35", "PC3", "5"],
    ["6MIDOJPAHMSLA5E5AM", "6MIDOJPAHMSLA5E5A", "M"],
    [
      "J7HD7O87CJOBGT2FPQAOE3ET16BRT4W5",
      "J7HD7O87CJOBGT2FPQAOE3ET16BRT4W",
      "5",
    ],
    ["CA99KCJ4DFMG6Y", "CA99KCJ4DFMG6", "Y"],
    [
      "VYDRHMZJNELWX586D4KXS3VU8MNVDJCP4G3SKOCNKCH95VB",
      "VYDRHMZJNELWX586D4KXS3VU8MNVDJCP4G3SKOCNKCH95V",
      "B",
    ],
    [
      "U31N4XP1P06726WDG80CDJ6MI0L0Q32YGROD1VMAPP3ET4O",
      "U31N4XP1P06726WDG80CDJ6MI0L0Q32YGROD1VMAPP3ET4",
      "O",
    ],
    ["3FKXH", "3FKX", "H"],
    ["VD7IY0YJLBH", "VD7IY0YJLB", "H"],
    ["FL5AN", "FL5A", "N"],
    ["KMO", "KM", "O"],
    [
      "PAHO5G9D2YR88BP8YYSR9WHU1OAGY3D418IFBD40DC8SG8AJ",
      "PAHO5G9D2YR88BP8YYSR9WHU1OAGY3D418IFBD40DC8SG8A",
      "J",
    ],
    [
      "9C66FA0PZDUJ0HMHMTTCLQA7E41PSPKE8B",
      "9C66FA0PZDUJ0HMHMTTCLQA7E41PSPKE8",
      "B",
    ],
    [
      "FHQ2AB9EJQ6F84W57FN5MB80SRSF10YOVGDIZ2",
      "FHQ2AB9EJQ6F84W57FN5MB80SRSF10YOVGDIZ",
      "2",
    ],
    ["0EB", "0E", "B"],
    [
      "ZY7OL4IHE25SQSZMTS8YRB2OOQCLFPTUBFWED9NDX",
      "ZY7OL4IHE25SQSZMTS8YRB2OOQCLFPTUBFWED9ND",
      "X",
    ],
    [
      "RIVAGLNZIVJ4LEX7FWJQHJDPYYO4OQN5WMYFC5LF",
      "RIVAGLNZIVJ4LEX7FWJQHJDPYYO4OQN5WMYFC5L",
      "F",
    ],
    ["1I2WM5Z0XSIIYU", "1I2WM5Z0XSIIY", "U"],
    ["UC4", "UC", "4"],
    ["FLJNZ10LQSNA", "FLJNZ10LQSN", "A"],
    [
      "5L9Q0UMQZL4ZKF00CFWW198PIB3T8U1KYYISOPBKEDVV",
      "5L9Q0UMQZL4ZKF00CFWW198PIB3T8U1KYYISOPBKEDV",
      "V",
    ],
    ["1UE5RGEDIM5D15NNARL32", "1UE5RGEDIM5D15NNARL3", "2"],
    ["DB", "D", "B"],
    ["FVXF9XUCDZV52LHQDCB", "FVXF9XUCDZV52LHQDC", "B"],
    ["A908ZEIAWO3UKH7Y5MXF9ZDJYJYIS", "A908ZEIAWO3UKH7Y5MXF9ZDJYJYI", "S"],
    ["S91JNF149", "S91JNF14", "9"],
    ["TOAH0CFKAKWKGMU7EBLEOA559P0D6V1", "TOAH0CFKAKWKGMU7EBLEOA559P0D6V", "1"],
    [
      "F3RYDIQYH5TCYTHRO2IATKO9PR5XTKAACO0ZR8DK231E",
      "F3RYDIQYH5TCYTHRO2IATKO9PR5XTKAACO0ZR8DK231",
      "E",
    ],
    ["T04SH", "T04S", "H"],
    [
      "KUWVTTI1MKF6ZTVV3ZUUGQFHTUR6SPU1KH6NPEPI",
      "KUWVTTI1MKF6ZTVV3ZUUGQFHTUR6SPU1KH6NPEP",
      "I",
    ],
    ["TVWI", "TVW", "I"],
    ["DZ52JYPV", "DZ52JYP", "V"],
    ["ZSSKDACQSZ0GRA3CE8L7TUC7RF348Y", "ZSSKDACQSZ0GRA3CE8L7TUC7RF348", "Y"],
    ["KK96SHVFJZC9EOFQ7TDAHGKJ662562A", "KK96SHVFJZC9EOFQ7TDAHGKJ662562", "A"],
    ["M10858KIEJ4CUXWRNSWUYX3LZFPRD6", "M10858KIEJ4CUXWRNSWUYX3LZFPRD", "6"],
    ["C7K7ZG32CLZ4NJ", "C7K7ZG32CLZ4N", "J"],
    ["643268H1VRS2NVZDOVBJ", "643268H1VRS2NVZDOVB", "J"],
    ["0WJK2", "0WJK", "2"],
    ["MAKKYWS8XYE8L9UIH", "MAKKYWS8XYE8L9UI", "H"],
    [
      "GI3RUYC1ABYA7UBKY5V1W73J8EQC44WSMQ2Y3NIONBNHUTETL",
      "GI3RUYC1ABYA7UBKY5V1W73J8EQC44WSMQ2Y3NIONBNHUTET",
      "L",
    ],
    [
      "A14UG4T63KQ259O4J4470CISHOX7JYW48OVKVE19HDYP",
      "A14UG4T63KQ259O4J4470CISHOX7JYW48OVKVE19HDY",
      "P",
    ],
    [
      "J2YTM8KFL3PNGAQ5GSF8BPZBDLN0T70B6PI0YT",
      "J2YTM8KFL3PNGAQ5GSF8BPZBDLN0T70B6PI0Y",
      "T",
    ],
    ["AMPH9ZDZI8J8W696L2P85BITWM", "AMPH9ZDZI8J8W696L2P85BITW", "M"],
    ["IZR2679SLY", "IZR2679SL", "Y"],
    [
      "BFKY7I2IDB0TFCA01W953AUP9QROU7A27ZUFJ7G7GW",
      "BFKY7I2IDB0TFCA01W953AUP9QROU7A27ZUFJ7G7G",
      "W",
    ],
    ["KS6IING38P3IH0K2V9I6S49KBKZ", "KS6IING38P3IH0K2V9I6S49KBK", "Z"],
    ["PA08YB", "PA08Y", "B"],
    [
      "GV62OZK68637MAR8DZSUDMS8OBHLJA6RR0A72P4PW",
      "GV62OZK68637MAR8DZSUDMS8OBHLJA6RR0A72P4P",
      "W",
    ],
    ["E3HVN", "E3HV", "N"],
    [
      "LALQKNWUZV9ME5PZZIMQVV4MFRW24AA4I0Y6VECR7",
      "LALQKNWUZV9ME5PZZIMQVV4MFRW24AA4I0Y6VECR",
      "7",
    ],
    ["UIN23MGV44FGEQYYIUPFDQH02", "UIN23MGV44FGEQYYIUPFDQH0", "2"],
    ["X5AIIHYQ9VGS0TOIUDN1Q9B2TG6YC5", "X5AIIHYQ9VGS0TOIUDN1Q9B2TG6YC", "5"],
    [
      "XYU4WVYFFF9ULYBFUAMZTA3FYHK23APAQO0IWS43UN",
      "XYU4WVYFFF9ULYBFUAMZTA3FYHK23APAQO0IWS43U",
      "N",
    ],
    ["MWR7LYBYWBNTAFVTBN", "MWR7LYBYWBNTAFVTB", "N"],
    ["D0E7KM8ZKPC8P", "D0E7KM8ZKPC8", "P"],
    ["PCSFR1OX4CLCC29YH38", "PCSFR1OX4CLCC29YH3", "8"],
    ["TWGBSE0P6L6FR", "TWGBSE0P6L6F", "R"],
    [
      "WDCIXQATY9XC82B8CARC76GBR13L10SWG59Z1V7IRE",
      "WDCIXQATY9XC82B8CARC76GBR13L10SWG59Z1V7IR",
      "E",
    ],
    ["YL25FK1O", "YL25FK1", "O"],
    ["S6NJIEZ5DNHCEHPE91DO2ON0J4145X", "S6NJIEZ5DNHCEHPE91DO2ON0J4145", "X"],
    [
      "AIW2SYOVEIT8HNK2VAGZTLIJ7NT5K0KPP7W7X1EDC",
      "AIW2SYOVEIT8HNK2VAGZTLIJ7NT5K0KPP7W7X1ED",
      "C",
    ],
    ["IYB4JVRKT3Q8U4EDU1X9", "IYB4JVRKT3Q8U4EDU1X", "9"],
    [
      "OQ6BUMEGJ5DB12VSTPWFC4VLOD3MPDPI6",
      "OQ6BUMEGJ5DB12VSTPWFC4VLOD3MPDPI",
      "6",
    ],
    [
      "H5MK7YLDRPQTBQYCGTE9WUP7Z284XJD2J806IVP9",
      "H5MK7YLDRPQTBQYCGTE9WUP7Z284XJD2J806IVP",
      "9",
    ],
    [
      "APJH7P7K2YH6TJ5AX1LXPU2IMRV659Y3LME7QHXIV4Y8",
      "APJH7P7K2YH6TJ5AX1LXPU2IMRV659Y3LME7QHXIV4Y",
      "8",
    ],
    [
      "UV544KDZR744B9B49PF0XBGBKI861DZ9G",
      "UV544KDZR744B9B49PF0XBGBKI861DZ9",
      "G",
    ],
    ["RXWNV7SB5SEZIZV20UPS", "RXWNV7SB5SEZIZV20UP", "S"],
    [
      "W4OXPS9P23ANY2IWJTMMV6FI6ZFSFSC812",
      "W4OXPS9P23ANY2IWJTMMV6FI6ZFSFSC81",
      "2",
    ],
    ["BZOBW3WW9NOQI4D3XZ7T", "BZOBW3WW9NOQI4D3XZ7", "T"],
    ["F278X2328FBF30BXXUAGD3XTZWM", "F278X2328FBF30BXXUAGD3XTZW", "M"],
    [
      "00HSPOJY40B96ZGRKKEKOW7IVHRWV9LM1PE09YB3YCHJ5C",
      "00HSPOJY40B96ZGRKKEKOW7IVHRWV9LM1PE09YB3YCHJ5",
      "C",
    ],
    [
      "WKRG4CK0V8MUAHVM2U1FAWE3KIZZ4QJD6EWNMLS6Z",
      "WKRG4CK0V8MUAHVM2U1FAWE3KIZZ4QJD6EWNMLS6",
      "Z",
    ],
    ["DX4T3NI7W", "DX4T3NI7", "W"],
    [
      "56IWZ0X3D88C808MUHC86W23KX681E4LCVVSJ5I6QOTYC42",
      "56IWZ0X3D88C808MUHC86W23KX681E4LCVVSJ5I6QOTYC4",
      "2",
    ],
    [
      "ZWQ08EYXG6YPTN4SB5U3TJWOB1CX7SDLR0S7R",
      "ZWQ08EYXG6YPTN4SB5U3TJWOB1CX7SDLR0S7",
      "R",
    ],
    [
      "DIA9BRECLV8V4MXAVT9NB4QJFSM999LWYOY3105DJ",
      "DIA9BRECLV8V4MXAVT9NB4QJFSM999LWYOY3105D",
      "J",
    ],
    ["QCMOHME", "QCMOHM", "E"],
    ["KYF4LS7OPOQ9WTV370EYQALORTB2", "KYF4LS7OPOQ9WTV370EYQALORTB", "2"],
    ["7GFYEC29Q", "7GFYEC29", "Q"],
    ["1VM6EKB7Y5OYFEQ0F4G", "1VM6EKB7Y5OYFEQ0F4", "G"],
    ["QE36UYOCC5C", "QE36UYOCC5", "C"],
    [
      "K2P79BMKST31H0CKA60TH2WNFAC6H6PCIPJI",
      "K2P79BMKST31H0CKA60TH2WNFAC6H6PCIPJ",
      "I",
    ],
    ["6NOYL22K33LBI52KVM7L6P55ICBN", "6NOYL22K33LBI52KVM7L6P55ICB", "N"],
    [
      "BCB9WP7AZIEFYRMZ0I3NWBEDMZ3XUN9J0",
      "BCB9WP7AZIEFYRMZ0I3NWBEDMZ3XUN9J",
      "0",
    ],
    [
      "RI20PM00ST6NY17R8KRJWYBYVB41Y0X31J7BNWQ0OIXPPXUP",
      "RI20PM00ST6NY17R8KRJWYBYVB41Y0X31J7BNWQ0OIXPPXU",
      "P",
    ],
    ["AJ7K51ZMDF8OS9PD9QK2AUMHM97WF83", "AJ7K51ZMDF8OS9PD9QK2AUMHM97WF8", "3"],
    [
      "4TZ0ZJQ16PS34AXVC3JDARFQY0EYWT4IV2MF",
      "4TZ0ZJQ16PS34AXVC3JDARFQY0EYWT4IV2M",
      "F",
    ],
    ["Q9Q", "Q9", "Q"],
    ["XRM8WIU40URZT", "XRM8WIU40URZ", "T"],
    [
      "PVQKDQNGKA5H1R567GTRTMC13RMFDF3Y",
      "PVQKDQNGKA5H1R567GTRTMC13RMFDF3",
      "Y",
    ],
    ["HGYF2O", "HGYF2", "O"],
    [
      "1TFC4V4OB3D0HKQI4G0M55RESVGKA9HAWLK2JUF5Q",
      "1TFC4V4OB3D0HKQI4G0M55RESVGKA9HAWLK2JUF5",
      "Q",
    ],
    ["8K0XBHLEH750WCKEHK", "8K0XBHLEH750WCKEH", "K"],
    [
      "1N4KVKP1KN3OSKHRXGECRBZUJYKHL56H321Z",
      "1N4KVKP1KN3OSKHRXGECRBZUJYKHL56H321",
      "Z",
    ],
    [
      "8ZCR1FTAJU7LFUZMALAEK2OL2K0VTM7LT4KKIK",
      "8ZCR1FTAJU7LFUZMALAEK2OL2K0VTM7LT4KKI",
      "K",
    ],
    ["3YFN62ER2FEM8LVCRRI3JKTY1Y4C", "3YFN62ER2FEM8LVCRRI3JKTY1Y4", "C"],
    ["E9WY2S1OOHJO07Y47MM7B", "E9WY2S1OOHJO07Y47MM7", "B"],
    [
      "8QE2XVWIRFDXJKRAR7TI8OZIYK8HO8YYH4LK1XZATEHZU7P",
      "8QE2XVWIRFDXJKRAR7TI8OZIYK8HO8YYH4LK1XZATEHZU7",
      "P",
    ],
    ["RNNQOGW1UCEJ0X85ME79HXQKRN3", "RNNQOGW1UCEJ0X85ME79HXQKRN", "3"],
    ["CB4", "CB", "4"],
    ["09QDV7MO4TOAALZ54U", "09QDV7MO4TOAALZ54", "U"],
    ["Y3IHAEDSHITK8E6LRH4CL3J1EKHT", "Y3IHAEDSHITK8E6LRH4CL3J1EKH", "T"],
    [
      "39YI6QFMMS59TGAOI3LVXVOHU9UV7WOV8C8",
      "39YI6QFMMS59TGAOI3LVXVOHU9UV7WOV8C",
      "8",
    ],
    ["Q9W5GZY63FFIN4007FA23", "Q9W5GZY63FFIN4007FA2", "3"],
    [
      "BD8UQHXBEGYSG15XDLVITL5BBSSD4BDHSJS7LSZP1W",
      "BD8UQHXBEGYSG15XDLVITL5BBSSD4BDHSJS7LSZP1",
      "W",
    ],
    ["E12PQKTH3NUPIC0", "E12PQKTH3NUPIC", "0"],
    [
      "Z54FGO9GP42SWESI5659A6A4XDK5BRJJWJBL37K6Y9ME",
      "Z54FGO9GP42SWESI5659A6A4XDK5BRJJWJBL37K6Y9M",
      "E",
    ],
    ["Y6MOP3MTSQE", "Y6MOP3MTSQ", "E"],
    [
      "9BYABI0AYAPNKLOD0J3523DD0TC69EIXUHYRRU32YBJ7F7",
      "9BYABI0AYAPNKLOD0J3523DD0TC69EIXUHYRRU32YBJ7F",
      "7",
    ],
  ];

  const invalid = [
    "4KWL6BPNH",
    "B6S0TE8XGAEZ28",
    "VEY76W7D8KEX24QFHXOLS5",
    "T2SE8RCB0V07HKSEAR5DD6EYD7BRN12",
    "APAPLP3PBGHZRAXXPKPG223MJ24H7IAI73Q8EUG6VT6",
    "DE9V4O4PT7KS3PO31JBEY8E30SOJEDLSGW4OKK0MKP75ZBS1",
    "7XA35E9N7KM8SCXICBTUL",
    "OTLQ9L27",
    "9SVOYWC5Z71O15",
    "H2M5AUO4YZ1LQV0B0GO0HYFFS",
    "EHMFDCA1N",
    "N3ZUXEODFMSBOXKQUTP8235EX",
    "0B7HVUBXRZ6ZAUR9BP5P49M7N2EKMKYHMEIEF5S86TGJ",
    "YBQ7V2LVZEA4JVC8YI7FVHKETR87SF2B",
    "E6A7ERPEO4IPQG4KRFE0SGUYDZW9P",
    "64LFVYO7IS0B5GK6K",
    "JA590ST0Y2OZI51RX059TBRWLOPW1J0VPL67I8E95HWCK",
    "51",
    "HK7T05H435M4E24JB",
    "UGGPBOG1GRUBL77YDLCU8FGB",
    "49P0LVLTCCOGVF",
    "M7XXJATEQLMYBDMM8I0BYUTOQH4I",
    "6KR7A3HTVEO6XGS",
    "UBTW84AVXA4KEOFPLHZM",
    "PD32G6KDBPX0MG2YPO7TLHF",
    "F0FVA03DRBATXNXQ69M3DPZGJ5HD6YQEADAOIRFB2",
    "RLQ3",
    "9CLWOKELLTQ0S4R07HS3NDI4C",
    "MRZ",
    "F73T5YJU0P3DIZNC41TZ0EW5TXA281",
    "GP",
    "AZSAMCAXJLW7",
    "52EYS294GOEA51GBSRXEGB373OP7",
    "HC2X7RPC3ABMNRPWDU4YH2CG1S2SGX19EETDYOXYDQU2H44GE",
    "2K7C19KR1IAB975HN0L1KHW5MJLF8XLGTADB107RP",
    "A6EXXBH0DP0Y7I3DS",
    "76LLQM12O96QGIOUZVEX5SUXGME0WCVM4L1NVP66VE5M",
    "WAFOE9WQ3CLUSCDQ0NF9A0V2NM34LRG1ETQOWMFT9UBF375N",
    "R5MEHG7C7G84CJM8JXZZF4B8EZVCAHN5JWW",
    "DUHCXEYBNC9PKQTWF3244JJFDJA",
    "5NVDSYMMXEJWL2OHTEF3TFRF3G5IPUTY13N",
    "9IIGDPS",
    "FMIK6BO6G",
    "N2OQQZI6",
    "IKXH7RQL6PK6K6QHOT1A0WI5LN6G9Z3QWEMY0",
    "3DRT8LJACG3Z0CHLDIAJJZH",
    "YM0Q7X95V2KWS8B09DYC3H0V869JKEVZSUJ7TCOKSXK",
    "1CAFHSN03RXGZBK8W6GZI4C1EZI59E",
    "ULFUQ8LVAG9HGFGL1I3QH",
    "DSSA3LP1C5QSIQJ0KB8W757WDYZJQOUN",
    "UBM1ZXVILFTCOP96OPVU92XJ1MU53WS",
    "CDICTVVG1ZYBJVYFEABQ7C94NZ04",
    "7X46OHISTZXNZD",
    "CJ0WYUKAZ01DBJVZZN54SF3DP4BARA8MY7C",
    "S9Y",
    "2J5JFIJQ1YR6WUUPY9XHEUF",
    "OTB03IAH544SI2S2J4GHHNLTZ03N56UO5LPJE3NZ",
    "3CM3NDTN758J00B78FZ",
    "ZT0OAZ3ZSZLF8Y2UG8YF9TDVZKJL",
    "FHYEMS12PYIZA0GR",
    "S428JWL4VLNWR1VJU4DRC5GFTY",
    "NV",
    "75Q65LDD2FZ5Z62QF0I0XWP3CQT8QE3OE",
    "YH1JINWUD8",
    "EVEANOSDLQHP7T5UXQLR8KSQF1",
    "IK622HD24P2KRTC9QTG8PR8GK0PZ5L",
    "XCYIP6U6",
    "1OYA70IWWPPFONMIOKEXX28S5JBPDS16NBIXNSUEI50X74",
    "P0EC58P1PL6HY8NGTN9XOE9H0OJYM9D51KXL3SD71",
    "SGL2QLO7UL1W76",
    "LZFDZ0KUKCSYA566HO377D4JSDZM3QS16MA714K",
    "VGFI1FRUFOJKU1JP",
    "J0GD9VRO4L5WBC55XLH9CLO6IGMSK9JGH846E",
    "BTIMIN5UV2TWC",
    "U2HZKA2GJ51B2TKXZ5MW0RNMHBNKTN975NB",
    "NEZP4HD52EHTW7NO3H4ZX8NB4GH88XMDMFW22MSM",
    "71AJ6HC1NMN0RZ1FCSD9BFYIZTHJCP5Q4IF0373AUNF",
    "9DMLT70EQ0U5",
    "FBMWMQFDNNZB9M48",
    "CS0VDRDUDOF5OKX3T3EXQ7M4L98KAM3RDADHDM",
    "XLVNBVTRFCF5MN05UDHPQW9L77CN7J2S32D9H1W57OI2YMTT",
    "K12F2UXQONM1J4",
    "02UNV6B548NPSE91KFHLP0SH8BZFVBMKWEMDUZIZYOK6C4",
    "2YX61ZXSTTMIZMJDIZOLAG14SWPUDOI3IAY95929M3LAHH",
    "PEGOTM6QC024CE0V",
    "DD0L",
    "KD3WA3N50WRUNYY9H0I8BUET9JY7GBKO1XP0B00J3",
    "0KZAVPP12HBJ7SK",
    "ZCN3UIEIFE3U0ZM2BZOSI8AFO",
    "522B5JIG",
    "VJZMM0KZP2QNE7FZOPRCD8RLZUN0XDZW01",
    "EP5F7JN5QNM5AN0H1R8K8XW264E6SDZ5DAJ6DI",
    "HQNWNEPTRPO17EJHFI6LY8IC00RPLZNQ",
    "99IMO4EMO",
    "QPPI753UU3EWGC89P6TBMBKXGNJ8U",
    "TK22I161VKN6ICZOQ5BKRTE5YIZ3ADE8ADQ3GGRKHVJ0FS7U",
    "DAF43GWYNB3F0THX73LZOZ65ACPGGSGVZNQYQD7D",
    "S1UOOCH030CFI1UKVCIE7SS3H7P3URTU5CZP3SUDOQRTJI",
    "NVSN8H0AE1TWXFZCQY9E8KW2EPBDOOH74N",
    "NM4S23DJEAHQKKWGBE506GJIKK2S0M",
    "3PFPZUJU68YXTDW1H42M3FF3HY55BNLYMBIZFTDDX4DXFXV4U",
    "1ZOQHBVEF48CJWJOMJ5ESXH6QTSH6N38S7G",
    "N4VBUREFX",
    "9S5C2CBI3VQ3LH9L5RN93NJ4AZAR78W",
    "WH",
    "BL4Q",
    "QSL583INYIMQICHOFB",
    "W9Q",
    "SM9JO1EK0V9PPUMH4JZO668126S456ELF7FVM5BVWU9ION",
    "8GLR0ZTNG52W6J6GABS6KTHKHWFLHEZ14EBMG6V9HV5IC",
    "10SSJU1IDV",
    "A2K9U0GG20J",
    "NHLDMSQW48IJ9FZTFCG",
    "Y5X0YZT6KU4TWC3VV82PDQBK",
    "RQYLY8NH351UY41WEEEPGKHGDIQU5TCV5N",
    "14I6",
    "OU7HD09PJUKGZ73K2UW60YS",
    "IHTGM5SXYQEL9RPB4ZHYSKD0UOVF8RG8APS3FI8",
    "5V5FXCKR1Z58BSW0ISAB242GKZIQ432ROYGMMI6",
    "EYMW3Q7BAAGNMQS7AYO2EIR2FM",
    "6II457DZAQROOUEE3",
    "OEDB755J0YH9GHKTU2D6WM",
    "P47HPNEB3P5QJO422C8OY4FR12FVHYUES551SAFZ5PSVHBCRA",
    "I5RWCTFMGF4A811ODVZEWUWYRM",
    "HR4VGYOJ0A6SDI184Q2V4I9XRU8USU",
    "5CP6A9CJI",
    "TZ",
    "9Q169NNFO450T88F0BATS87C3CEE",
    "DSGJY3",
    "H8V6Y5B5W0XF1L6XLW49YJJDDK20WK38K58",
    "GRUYZHLP6Q5B",
    "Z4S1UL70DH6RDBB4RLHFB",
    "DITAJZKDGRXHJOG2VCVB5EFG6D2DYHL7",
    "42MB17",
    "HQZZUZUUYER084FB1JWZNLNR4",
    "TUB29K3LH4V0N3QEQIF70FGDSNFWQDCSX2IM2T2W5I80DTJDI",
    "AJGMUGHE7",
    "1408WEB3BIDE7ETG839V8G5S8YU1SANMZ58HQAGUEV1DLVXA",
    "X7QJFBBZMFQHOIZEDL2V6QU",
    "Q4M6NR2V6I999AZCMKSCRJBKQ7O9XOMY3GE0ERU70DC137OQ7",
    "G0VLBFRPSRDFMUV69M2",
    "4TPD2P7CMC1N",
    "WTV8I1WEMQP6VGEM7X0SM09WQA7VPVRDB0DC5EOABX3",
    "OIIV1CJIBZXYVCKYI2SYQJCDBGFU8HOD",
    "NLFJR6T5WZ1",
    "54EA2V6078CXAZTRV3",
    "LE11PX6KMTUG9UX8P2ACRHDEQP",
    "XBSUKNU",
    "AB55JDPMS",
    "PZIRFVG2GD2Y8IT344ES037P0H0SHLP",
    "PFZMCDY",
    "H6CQ9DTLE766X3GH0YG7KQUSV3PWJDFM07C2VVP",
    "HYPXKFHGO346PU4OOK34",
    "ETC",
    "DTRKNN4RKX80SBSFBE7PMBFYRCY9ONU2JO0E6",
    "M2Y",
    "VI",
    "J0FTKR7KSBG1CHKODM8CS3JATUA21V2237I",
    "VBTSZ24Q3PCTFKYM0HCZVTGY855PM69L",
    "BUZMB8MRN2X1LG5II20H070CMIEHNXGFGQVNLRBE17SGQ",
    "BNQ",
    "TX3F5Q2TIYOBRSGFG5NZAMAK41AZNY0LYMJ58AP4",
    "AWYPPLWO",
    "8WV",
    "C6F8EJ5HJHAUNPRMG6ZOONGUSATXIT1R46G",
    "QIKJ5G2DN38YVFU2HAY8W6R",
    "YLH9DCUTY0C9BO843UCPT11W72O",
    "GMMGT43BJDLG2DCWEM3ERHNV6JU0ZEMXP4PK",
    "CZJ6YRFAQYZYJ47199DJCI7O8AE36946TPU0M",
    "9MZWS4SYBP99TOWDPF24T",
    "VLW9929AMJVA50BBAPC0ZOA",
    "DI107KLR9LV4MT",
    "7IXOJFTVMDCCPKGV5A3K7TDP",
    "T1BG",
    "5JV4OPF",
    "IDRW1ASO9UKY76G52XGABL57SPI2VV51KQWRLUXLXP",
    "BB10BPPE6CARGJXESKCY0Y7O2QOI25SO",
    "RH99L0Z18I22A0DYMK8LSR",
    "Y4FJC4ME71GVK9MUZOBRYNMME784GH2ACAKTFPR",
    "N5CHQMKQB4BUVAQSLWYUZK25G4UDWACS0QOR3PMDOSKEH4PSB",
    "PB1PV7OKE5DZF2WAW1L6530KABP46D8HVSMBKD59N6D1",
    "9EP34HF3I9C74GEFK04TB61O0M2FJKX5IXIHT0VDSINEOCSR",
    "5FXJ81",
    "QIBMQ7GSGS",
    "CIEXZMZ2I2AS16NP35XOJY",
    "OFLZ0YB38ZC5HKUAGTZBG",
    "VZ4FJNDQ1XVWB6XSG04YMMAFOOH8R41F53A",
    "GZRMZ62P703954RSG7",
    "L4QOFIS9Y2QB2WXUWU4BIGNQWJGCEDHZ2B1S4",
    "BPCT8EPG3V819AY62MZCW",
    "XMTKKWIAIGJWR06KQ4TNROR1MA8FOXHWFF",
    "N8HMQI5WF36",
    "5TK09B1EB7PQ03WZVGPB2UHRZWCPNY0LU37YDPKXF",
    "4MZHRKZLH1SQCN4YCYIIDJSDIOPEB",
    "2MVXC3APB0RZE5T42IDE0BFFS9646AG7U6CUUBQB14ZM",
    "17GRA211NY8D3NYFNEBH14USDN",
    "6NLLM50PBYTAI6CHZH",
    "BIY6V4ZRQIXVFA8",
    "NB1FUNQC8HD1QCB663NOGROPTEXZ2A4O4HIED",
    "VZOGJSRFDOBUVQPF37HBU95Y30RH1Y1LVJ6VGMNR",
    "RMY8G1D5M3",
    "B23W5KO2FHLCFO6ZI8F403OG67TK3JF0NRHT55S7CNF0766M",
    "ZBP0ID0856W9",
    "SOHTID43SQ4G8R5FDS5ET",
    "XNJBY9FNIGUCFA7",
    "RJRQM15Z0L70A9VTMKOEUNDMW38",
    "GXUIJBA9GGH0DMQBX0MTRLGLZ64SIEHI2VC",
    "YSU5X3GB53JOLE4PYQYX61DWUDHRIQX",
    "993RG3ZGRFXNT6LKA6",
    "8LCXSL80O8A7KPYMDCYE8AQBUSVYMKFYYYA7AAJ",
    "JY5LR8N3RAZOLL8",
    "9S8YNQDO84WNQ4G86BMBCPECYF",
    "ADFANDWLN8LBQ8QBOUDI2ZWSSFG3QYZTETD",
    "HJIR8WUIV62CZRTX7RBUEK4MRYWIFSIHJTCY0Y1YZEY",
    "B2DL",
    "ALNQO4F6BTC9DAILAG4RHZ9NPWRZBCCHUR9J9HM",
    "K9KW6WWIN1FERTJ",
    "A94LCK4XGBI4M82SRITTKB0",
    "3N6KPBVQD6P6RYRP0YXNK2JE6PLROOHGASSAMQB84770006RJ",
    "ZI7QQHHLGQHRDXK8ETNVUACLO",
    "YL37TQZKV207UP192VQH6XEJG",
    "DBGS6HVEGT8L0980YW1UK3SB",
    "XXOO1OVHOU07F5BKD474SDNMOEG6YB0THCVRN9G",
    "2KR84F7YBI11KHS",
    "8PN6PHMSV2HRMCEYI60H",
    "12563RE22T2WVE168MUFJE51XBRA6MXSX2YSCK4UMG2",
    "P0CTCOWK0NQUD55",
    "IS07QKQV1",
    "1UWOIHLMZ2GGREQO80NF2XJK66G4AW",
    "GJC4116U678TL6DN55AXSC73BLLI994HS",
    "CHOWVXT3HNF9D5RSBO4SZ2FPWOPLKYI28WPU1",
    "25HQUI6H7VO20RW7TIDAY91QM3ED94O0CFT",
    "P8KWANOUJUVVWZ4MBHSEQ70KCVG37QKV0QE8TJKDKLD8",
    "2X9TQGMD08PG0INGBGEJ9L3",
    "OMLZ761UGL6T6JNN8RAN2FEMHHXJXZU51",
    "2UFXUF5T4ZN9NL9DC2WOMU1QR8YGPGH1BG33",
    "1P43UBWCGMC34MGZFX5GPX6527SYJRQE1TSFC7C294K",
    "90PZSOLXC9I62CQBI9A7A4MAWPWUV2MHY9PW1N64D0G8Q",
    "2ODB50AGN9GP9HN3KAY4AEG969FTOUM3YHTD11P",
    "NX5NJY367O2YR8P07V9TBV1D3OHNIF35LNZEM8",
    "9U0FYAS0EU7XBU8R49XWLDM8WPSJURB8Y",
    "JVC6GSN3PWF49JL7VTDQKK0Y6JXTDXZX780C6D2HN51VFU2A",
    "LA12XIY8RJEHXUWMR6L96F76K4C9T6D7T7BXK",
    "OZXOCA51",
    "SVJKR8",
    "3QW604REVK3UTCJ1A1SM7PGELE9Y4O0K9VQ5AJM6LV1GH",
    "AF7063CTB7F87L9ZGEG47FXU2CWX3128WFAPS9MSYGTURBVTI",
    "DBP2FJCZWR0AWDXSZ4GEE1X5AAFVYO6Q",
    "TY9LY2YMY3I8RTA4FGKH50VTDIS61MQ2IGKQS",
    "0ANZQNTYIJ893J3EQWUTO1R0EB34DVRXXMIMQ2PLES",
    "SGJN0AE5PGCIAIHMZ",
    "KEIFFSWSCUKI2TQMEGPHC05Z5XIPC4I7F47X5BN3IO",
  ];
  // }}}

  const charMap = Object.fromEntries(
    [..."0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((c, i) => [c, i])
  );
  const numVals = valid.map(([, src, cc]) => {
    return [
      [...src.replace(/[^0-9A-Z]/g, "")].map((c) => charMap[c]),
      [...cc].map((c) => charMap[c]),
    ];
  });

  common.testAlgo(algo, valid, invalid, numVals);
});

// vim: fdm=marker fmr&
