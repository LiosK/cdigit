const common = require("./common");
const algo = require("..").mod37_2;

describe(`${algo.longName} (${algo.name})`, () => {
  // {{{ List sample strings
  const valid = [
    [
      "78Y7HAWG3XW9FHLP2LW565EQCT1D50V82ZXHYK3N5QBIWFI",
      "78Y7HAWG3XW9FHLP2LW565EQCT1D50V82ZXHYK3N5QBIWF",
      "I",
    ],
    [
      "LMOSBYFCTRSSJCB3X6U9DUBLKNIH03FO6X963TGXYAHG*",
      "LMOSBYFCTRSSJCB3X6U9DUBLKNIH03FO6X963TGXYAHG",
      "*",
    ],
    [
      "UZULBUMTPIEWEQ650YT8TD98IWXWD5738FD7HELIGAX",
      "UZULBUMTPIEWEQ650YT8TD98IWXWD5738FD7HELIGA",
      "X",
    ],
    [
      "YJIHO87UYADPFPN6NO01PHTPNPL6H5671RXM40MW",
      "YJIHO87UYADPFPN6NO01PHTPNPL6H5671RXM40M",
      "W",
    ],
    ["J0HO3MGX3F8LKILHHH7O", "J0HO3MGX3F8LKILHHH7", "O"],
    [
      "LRYNNGWBUV0U5UB5S2FYX07912ELRRW3XT055PPA",
      "LRYNNGWBUV0U5UB5S2FYX07912ELRRW3XT055PP",
      "A",
    ],
    [
      "AO8EW0SA7S2S880SEKKVTSIDI5HOHLR16971NO",
      "AO8EW0SA7S2S880SEKKVTSIDI5HOHLR16971N",
      "O",
    ],
    ["IQP", "IQ", "P"],
    [
      "G7N286AL39FFQNU6BH8SMJB5VGMBCB6WPGMWJK800VU7KP",
      "G7N286AL39FFQNU6BH8SMJB5VGMBCB6WPGMWJK800VU7K",
      "P",
    ],
    ["JTBE719QKCHCBYHG66H8U5J", "JTBE719QKCHCBYHG66H8U5", "J"],
    [
      "5P4FRX51F9KNVU63U1W2E21W3SSGRBZMH8AQEKZ*",
      "5P4FRX51F9KNVU63U1W2E21W3SSGRBZMH8AQEKZ",
      "*",
    ],
    ["4MGWD1ZZ1QZ0YOPWCUF4", "4MGWD1ZZ1QZ0YOPWCUF", "4"],
    ["IGM4JAUJXFS2KYBNC9G6TC", "IGM4JAUJXFS2KYBNC9G6T", "C"],
    ["G1AXN92", "G1AXN9", "2"],
    [
      "LZ79CJLRH23M3LC7MBV0664XLWK0XMFGSJB505MC0IR9RD2S7",
      "LZ79CJLRH23M3LC7MBV0664XLWK0XMFGSJB505MC0IR9RD2S",
      "7",
    ],
    [
      "PO82N6PH8Q9Y23ZK4Q8GOF1FOAS9EGJ1P1E818MMK90M",
      "PO82N6PH8Q9Y23ZK4Q8GOF1FOAS9EGJ1P1E818MMK90",
      "M",
    ],
    ["U7OHQ0OGZOT4JPV52PFMZ7TE1", "U7OHQ0OGZOT4JPV52PFMZ7TE", "1"],
    ["JH6YVVXA93U0QR6S5G5BNIYSJRO", "JH6YVVXA93U0QR6S5G5BNIYSJR", "O"],
    ["1CPKPVGRYEOJG2TMEFC8QUAHHB7", "1CPKPVGRYEOJG2TMEFC8QUAHHB", "7"],
    ["8PPHKMF3QRHJ17BMWQQW717VW66QD8", "8PPHKMF3QRHJ17BMWQQW717VW66QD", "8"],
    ["VWA86VX330*", "VWA86VX330", "*"],
    [
      "HSCFZC3DCWU8D3JSQCOLFKGZ3JP9DJGYX16VGRJ9",
      "HSCFZC3DCWU8D3JSQCOLFKGZ3JP9DJGYX16VGRJ",
      "9",
    ],
    ["KQ9FZH5RSQ9SKE4JH", "KQ9FZH5RSQ9SKE4J", "H"],
    ["ZT188EP4W7RWJZ3332UD78NM0WVCGU", "ZT188EP4W7RWJZ3332UD78NM0WVCG", "U"],
    [
      "LAQJV1REO95IXT9PDNZ8OLPCOMUMR5908FTOYIW4",
      "LAQJV1REO95IXT9PDNZ8OLPCOMUMR5908FTOYIW",
      "4",
    ],
    ["SGI8MZ5O1PFY1EQTBEDINM3Z0VFTUSW", "SGI8MZ5O1PFY1EQTBEDINM3Z0VFTUS", "W"],
    [
      "GW3VFJBSRQCF35PPURX2KA7NC63YHSB94ZY1YRJNM3TPFP",
      "GW3VFJBSRQCF35PPURX2KA7NC63YHSB94ZY1YRJNM3TPF",
      "P",
    ],
    ["BOWQMQQL", "BOWQMQQ", "L"],
    ["FSFF2YW3E81ZG6X", "FSFF2YW3E81ZG6", "X"],
    ["H4QLEZ", "H4QLE", "Z"],
    [
      "FAGSY0J0RN968VG9JXJX1AA63RBACS702NJA4ER5OX",
      "FAGSY0J0RN968VG9JXJX1AA63RBACS702NJA4ER5O",
      "X",
    ],
    ["IY3FGFF04ZMP2YNN", "IY3FGFF04ZMP2YN", "N"],
    [
      "8OUEMYZVYS726NI726N94G5R30JKEW8U5",
      "8OUEMYZVYS726NI726N94G5R30JKEW8U",
      "5",
    ],
    [
      "KT25NGHI7LXQFAF6VHQVS2TP6RJ4Q6FO2435SJR0A6IOX8",
      "KT25NGHI7LXQFAF6VHQVS2TP6RJ4Q6FO2435SJR0A6IOX",
      "8",
    ],
    ["E22SNQJ3WTC4NS7I033", "E22SNQJ3WTC4NS7I03", "3"],
    [
      "QZ70QPMHMA0MEZZ4JGJVE8ETKBJMPSCA1Z2X",
      "QZ70QPMHMA0MEZZ4JGJVE8ETKBJMPSCA1Z2",
      "X",
    ],
    [
      "UIDDUOI48DY7Q9SQTRTAM8T9AMH93E0YGVBRRKB4DE2",
      "UIDDUOI48DY7Q9SQTRTAM8T9AMH93E0YGVBRRKB4DE",
      "2",
    ],
    [
      "SNW32NAX0MCXUKRPTDGPER5YTF2BG5F5",
      "SNW32NAX0MCXUKRPTDGPER5YTF2BG5F",
      "5",
    ],
    [
      "CPVKGJBMRT2ZCNJGXGL7ATGWCD847YR1IN",
      "CPVKGJBMRT2ZCNJGXGL7ATGWCD847YR1I",
      "N",
    ],
    ["E2WLNJNNW52T6ZOFH", "E2WLNJNNW52T6ZOF", "H"],
    [
      "CBF3A6PXNCXRISWFIMCT94QMWEU63C58",
      "CBF3A6PXNCXRISWFIMCT94QMWEU63C5",
      "8",
    ],
    [
      "Q6HVGNZAL2Y8TH2ZG05Y3KCWGVJU34568",
      "Q6HVGNZAL2Y8TH2ZG05Y3KCWGVJU3456",
      "8",
    ],
    ["VSPFIDU5E734YO3ANW", "VSPFIDU5E734YO3AN", "W"],
    [
      "YP3YS6644JMPUVCMHFZIVKTX9E0BTF2HFB",
      "YP3YS6644JMPUVCMHFZIVKTX9E0BTF2HF",
      "B",
    ],
    ["YIL06", "YIL0", "6"],
    ["SHY7WJEKWQ11OXDO6SS2ZIN5P", "SHY7WJEKWQ11OXDO6SS2ZIN5", "P"],
    ["QRE2MSVY5IZP7A", "QRE2MSVY5IZP7", "A"],
    [
      "HN7N1B5L6BBZ2JZACF4O6H4WTR2HZ522BV9UTVTRKX",
      "HN7N1B5L6BBZ2JZACF4O6H4WTR2HZ522BV9UTVTRK",
      "X",
    ],
    [
      "XMZKFQK2VJGP0YY9NTGU82MY2S9YDWSXXNNSXVGYEI05",
      "XMZKFQK2VJGP0YY9NTGU82MY2S9YDWSXXNNSXVGYEI0",
      "5",
    ],
    ["RL950D3B0KFDYNG8ZAOS67N9FCYBB", "RL950D3B0KFDYNG8ZAOS67N9FCYB", "B"],
    ["DEG6ZPSAHJZKVSSEJUV", "DEG6ZPSAHJZKVSSEJU", "V"],
    ["IRS2RLQNNSDZU40XEW41ZUEO", "IRS2RLQNNSDZU40XEW41ZUE", "O"],
    [
      "KQ9S8NL1F7TVLF2LFRE76TBY0WEBB8PY5",
      "KQ9S8NL1F7TVLF2LFRE76TBY0WEBB8PY",
      "5",
    ],
    ["DGHZCRE51095EL4KH", "DGHZCRE51095EL4K", "H"],
    [
      "C8VXZIG9DK8HWYNWLCDZHJS2TV85G2D1GKZF3R07SGWBT",
      "C8VXZIG9DK8HWYNWLCDZHJS2TV85G2D1GKZF3R07SGWB",
      "T",
    ],
    [
      "MBM7QTYFQGTUMZXZHX36QTYGK98KDOT570UWPS9QFUP6CGI",
      "MBM7QTYFQGTUMZXZHX36QTYGK98KDOT570UWPS9QFUP6CG",
      "I",
    ],
    ["8TLMHBCOGWLXGKF32651TC6UR0", "8TLMHBCOGWLXGKF32651TC6UR", "0"],
    ["6OH4Z8D8DOH2X2EOTBEL70S8AFKWS", "6OH4Z8D8DOH2X2EOTBEL70S8AFKW", "S"],
    [
      "XHS6NTJ9AQRL3B5UKZWZYD5SOJ0PGCV89OJW57",
      "XHS6NTJ9AQRL3B5UKZWZYD5SOJ0PGCV89OJW5",
      "7",
    ],
    ["6V7I1PN8V", "6V7I1PN8", "V"],
    [
      "IN06X25AJ8M3TWKSH1VP7UYQYVD1WT1M8933RFRPRAOC3NFBJ",
      "IN06X25AJ8M3TWKSH1VP7UYQYVD1WT1M8933RFRPRAOC3NFB",
      "J",
    ],
    ["EDSBUZJ1V33FLM2JZXDX6JAA55CU", "EDSBUZJ1V33FLM2JZXDX6JAA55C", "U"],
    ["X4B9BI2W2XDGVNEA", "X4B9BI2W2XDGVNE", "A"],
    ["WU41P5DG2URVWQJH2HHJ815BY85571D", "WU41P5DG2URVWQJH2HHJ815BY85571", "D"],
    [
      "0JWW5RRE9K2CXFNIMOUBH89HWJNKX2OWU907IH3G4ZWO",
      "0JWW5RRE9K2CXFNIMOUBH89HWJNKX2OWU907IH3G4ZW",
      "O",
    ],
    ["AM9CIBSNJMAF1XC5AM4R4HG3AG", "AM9CIBSNJMAF1XC5AM4R4HG3A", "G"],
    ["O5IGER", "O5IGE", "R"],
    [
      "5N9V9MBFBZZ6QX63NJL2ZE7BKHGSOMAHHW8KK2BAYD",
      "5N9V9MBFBZZ6QX63NJL2ZE7BKHGSOMAHHW8KK2BAY",
      "D",
    ],
    ["FRIIAUVXJG7PQUHWXYTTS92PE9KJG", "FRIIAUVXJG7PQUHWXYTTS92PE9KJ", "G"],
    [
      "VAY89HHXRETB379HNISHQSA8CXJCCDY4J3PZ45O4GF",
      "VAY89HHXRETB379HNISHQSA8CXJCCDY4J3PZ45O4G",
      "F",
    ],
    ["ZVWPEPRC92CX83D3VGH4ASYQ8Z", "ZVWPEPRC92CX83D3VGH4ASYQ8", "Z"],
    ["QY59SBLW3I0", "QY59SBLW3I", "0"],
    ["N93PMHH", "N93PMH", "H"],
    ["662", "66", "2"],
    [
      "11JF4LMCSM0C1BFK3LDESVZN062SAOXIV0",
      "11JF4LMCSM0C1BFK3LDESVZN062SAOXIV",
      "0",
    ],
    ["WSXLEF8G3DAQO3ZLVO1", "WSXLEF8G3DAQO3ZLVO", "1"],
    [
      "00MRV6LS1T4EZKTBVL41J6LJBXGY5IXFPJRJMD",
      "00MRV6LS1T4EZKTBVL41J6LJBXGY5IXFPJRJM",
      "D",
    ],
    [
      "OG4ZRH5N52M6E4L1FV7163B66LLZ7TBV0KV0IG",
      "OG4ZRH5N52M6E4L1FV7163B66LLZ7TBV0KV0I",
      "G",
    ],
    ["SJ", "S", "J"],
    [
      "4QHIEHQMGKFTUJ3O1TN25Z7YA1UZOVZ978F2G",
      "4QHIEHQMGKFTUJ3O1TN25Z7YA1UZOVZ978F2",
      "G",
    ],
    ["3SI5RUZRQRZDBAX", "3SI5RUZRQRZDBA", "X"],
    [
      "Y15TVNUWIHNRALZZMZJQ39GQ8214GOI0ZAWJIB2R9MLSPJZ",
      "Y15TVNUWIHNRALZZMZJQ39GQ8214GOI0ZAWJIB2R9MLSPJ",
      "Z",
    ],
    ["3Q7YMEEBBYGVGWXMU4SMJ", "3Q7YMEEBBYGVGWXMU4SM", "J"],
    [
      "7IBEIU53GLR5MX21X9AVINEKQO3XFIEW72",
      "7IBEIU53GLR5MX21X9AVINEKQO3XFIEW7",
      "2",
    ],
    [
      "20JZNSIXMLQXEW78AF6WVWVY8S13Q7RCIIYNMIGY",
      "20JZNSIXMLQXEW78AF6WVWVY8S13Q7RCIIYNMIG",
      "Y",
    ],
    [
      "36V0TSUOYO1Y91WT9PEDX4FPNLS4EOI56F07LTTZE",
      "36V0TSUOYO1Y91WT9PEDX4FPNLS4EOI56F07LTTZ",
      "E",
    ],
    [
      "3CUO8YJQM6L4GLNFTGWF7K4UPY07VVATBWTOUYCA7QQACJYPU",
      "3CUO8YJQM6L4GLNFTGWF7K4UPY07VVATBWTOUYCA7QQACJYP",
      "U",
    ],
    ["9WF7S7YY79XDSZNOHIM93OZYTG5Q", "9WF7S7YY79XDSZNOHIM93OZYTG5", "Q"],
    ["G51", "G5", "1"],
    ["7A88ZNMYNT0T5AU2WSK98", "7A88ZNMYNT0T5AU2WSK9", "8"],
    ["1T16RF3HBKK8HC8BCMDUVPLMSLS8HU8", "1T16RF3HBKK8HC8BCMDUVPLMSLS8HU", "8"],
    [
      "CEKD6KA2LC38F5SX9OTSQDVZ1ODKPD98ZRUT58IJU8BAVTF",
      "CEKD6KA2LC38F5SX9OTSQDVZ1ODKPD98ZRUT58IJU8BAVT",
      "F",
    ],
    [
      "UNVGWD0QB1INXO3V2CTJZO3YIJXPR1YLKN8",
      "UNVGWD0QB1INXO3V2CTJZO3YIJXPR1YLKN",
      "8",
    ],
    ["58MML", "58MM", "L"],
    ["C34JF8ZLG96JY2KX", "C34JF8ZLG96JY2K", "X"],
    ["DK01P8TMMGWPV7SITRG8P9VYVCARI", "DK01P8TMMGWPV7SITRG8P9VYVCAR", "I"],
    ["C4K2VW68G", "C4K2VW68", "G"],
    ["MQBCR7Y1HGGVS3T05MWTH58L5", "MQBCR7Y1HGGVS3T05MWTH58L", "5"],
    [
      "CBY0T81KETZLS29N6DGL9X7OA1KRDNAYPD6LR",
      "CBY0T81KETZLS29N6DGL9X7OA1KRDNAYPD6L",
      "R",
    ],
    ["PQVQZOX7BVCRZZITY2FE", "PQVQZOX7BVCRZZITY2F", "E"],
    ["HN5JA1HT3KS", "HN5JA1HT3K", "S"],
    [
      "8U6U5EP204NCA5SFY1RJ8AGSQ1CKI3HHEVM18L",
      "8U6U5EP204NCA5SFY1RJ8AGSQ1CKI3HHEVM18",
      "L",
    ],
    ["SFXBGGZZ6940UPVIM8HIO4HDPHFU", "SFXBGGZZ6940UPVIM8HIO4HDPHF", "U"],
    ["F8", "F", "8"],
    ["ANEVTDMLUKNZ", "ANEVTDMLUKN", "Z"],
    ["4A4NH", "4A4N", "H"],
    ["VW1U", "VW1", "U"],
    [
      "JDF35JECU4V2L1OYG6TNU44LHGH2NSP5ERH4",
      "JDF35JECU4V2L1OYG6TNU44LHGH2NSP5ERH",
      "4",
    ],
    ["OR*", "OR", "*"],
    ["36M8QA661RMLVALTT11LFL1NOMZ", "36M8QA661RMLVALTT11LFL1NOM", "Z"],
    ["C1XEX39O8LBOY71QBK06UOGXJPH0L0", "C1XEX39O8LBOY71QBK06UOGXJPH0L", "0"],
    [
      "KK3O8PNE1ZN1S3TXD500Y8CDUOPH0901MW9I7JI9FW",
      "KK3O8PNE1ZN1S3TXD500Y8CDUOPH0901MW9I7JI9F",
      "W",
    ],
    ["4Y1G", "4Y1", "G"],
    ["TP3Y6SJVMBTYK2XI7RA", "TP3Y6SJVMBTYK2XI7R", "A"],
    [
      "FWOWRVFH2NVDCYZJS0RB93NTL54ZMPISTXT",
      "FWOWRVFH2NVDCYZJS0RB93NTL54ZMPISTX",
      "T",
    ],
    ["EFPKBCDJIXBNARABFGQR9PLLVKIE51V", "EFPKBCDJIXBNARABFGQR9PLLVKIE51", "V"],
    ["T5043YPMYVIPW0RRLYD8KT5P9650", "T5043YPMYVIPW0RRLYD8KT5P965", "0"],
    [
      "GF96NH3DJT1XUPDKBKM011A6Q644CQQRVQPFVMBXOJKCCZ69A",
      "GF96NH3DJT1XUPDKBKM011A6Q644CQQRVQPFVMBXOJKCCZ69",
      "A",
    ],
    ["JX09D6UIW1A5", "JX09D6UIW1A", "5"],
    ["SAH538PZB3", "SAH538PZB", "3"],
    [
      "A3UTNMOISKG2BI8R3ZUGQ06IKRS8C8DT00",
      "A3UTNMOISKG2BI8R3ZUGQ06IKRS8C8DT0",
      "0",
    ],
    ["Y7M2Y2JTUICJ481TWE4JF1HP6J385U", "Y7M2Y2JTUICJ481TWE4JF1HP6J385", "U"],
    ["OR", "O", "R"],
    ["S9VA9N97X7DAP1LB12NYN", "S9VA9N97X7DAP1LB12NY", "N"],
    ["VXW6PTSUA8H0LUELZIW9740C8H4KUP1", "VXW6PTSUA8H0LUELZIW9740C8H4KUP", "1"],
    ["VDB2NXZ67C4H8Y5P", "VDB2NXZ67C4H8Y5", "P"],
    ["77QY4L5OCE105MEYVRG8YO970X", "77QY4L5OCE105MEYVRG8YO970", "X"],
    ["BF2C2RUBDXYC79Y4D75", "BF2C2RUBDXYC79Y4D7", "5"],
    [
      "29EKWMM9UNH0W503IW0MUL15BZIU6Z1RQU4F*",
      "29EKWMM9UNH0W503IW0MUL15BZIU6Z1RQU4F",
      "*",
    ],
    ["777RTKDV", "777RTKD", "V"],
    [
      "ANO3O3G54I053VQLZ6UMT2NN8WS61IJO4287IQEJ99",
      "ANO3O3G54I053VQLZ6UMT2NN8WS61IJO4287IQEJ9",
      "9",
    ],
    ["QOPJLWBNES081EDGR", "QOPJLWBNES081EDG", "R"],
    [
      "UGG0CAQ0SNJK3J5T5L6GJ0SB1RLDGOFD71PKVCFY1J4W5H",
      "UGG0CAQ0SNJK3J5T5L6GJ0SB1RLDGOFD71PKVCFY1J4W5",
      "H",
    ],
    [
      "DOU11BOALF4OQG77HHXAFL5Y75EPN36P0OGOK9ZGOVX659995",
      "DOU11BOALF4OQG77HHXAFL5Y75EPN36P0OGOK9ZGOVX65999",
      "5",
    ],
    [
      "NM9B9MB2HVNK0ZHZBBK4Y70PD51B7QQPAZOZQ3Q1JF",
      "NM9B9MB2HVNK0ZHZBBK4Y70PD51B7QQPAZOZQ3Q1J",
      "F",
    ],
    ["VI1BRTQWPB74XO63QHCIWC16YX2FD", "VI1BRTQWPB74XO63QHCIWC16YX2F", "D"],
    ["XB6KFTOK30GN", "XB6KFTOK30G", "N"],
    ["YPQ5QBJVUZJZ79KM2", "YPQ5QBJVUZJZ79KM", "2"],
    ["NPHI72KY9J3AEALKBO7JYZ", "NPHI72KY9J3AEALKBO7JY", "Z"],
    [
      "U62AK9J3YSTI5NAGGBWYC0DSTV5SFB3HSPRI5GD4E1",
      "U62AK9J3YSTI5NAGGBWYC0DSTV5SFB3HSPRI5GD4E",
      "1",
    ],
    ["2HB6", "2HB", "6"],
    [
      "RY96ESEGBOVDWEUMEF1YT2CYYLVAGZBI6V6UDXJVMMUEAELU",
      "RY96ESEGBOVDWEUMEF1YT2CYYLVAGZBI6V6UDXJVMMUEAEL",
      "U",
    ],
    [
      "NR7JN035HFSALWQUY2V7KXDGHFVOD00MX1FXDJV2BG",
      "NR7JN035HFSALWQUY2V7KXDGHFVOD00MX1FXDJV2B",
      "G",
    ],
    ["5QHC9VG0ML4M", "5QHC9VG0ML4", "M"],
    ["40QXLN9YBCXI73A9R45HPMKIU80472", "40QXLN9YBCXI73A9R45HPMKIU8047", "2"],
    ["R1CAR81WSGZY4NOCPTX", "R1CAR81WSGZY4NOCPT", "X"],
    ["Y7QYL19XUIAM7N9ER6KBGKH", "Y7QYL19XUIAM7N9ER6KBGK", "H"],
    ["AP8R8W3QFNT3Q", "AP8R8W3QFNT3", "Q"],
    [
      "WMZND31MIQDD8TG1FT1KPCGVPA8OQ9KU1",
      "WMZND31MIQDD8TG1FT1KPCGVPA8OQ9KU",
      "1",
    ],
    [
      "I18FSVLNXBBERWMYEK2DEB7DJ6JK1JAEHFO1EMX1T82W1Z",
      "I18FSVLNXBBERWMYEK2DEB7DJ6JK1JAEHFO1EMX1T82W1",
      "Z",
    ],
    [
      "YLJRR9ZC3F7YTGCJ4I9XC7DJF2OGDVQLNQU93U7K5WXV",
      "YLJRR9ZC3F7YTGCJ4I9XC7DJF2OGDVQLNQU93U7K5WX",
      "V",
    ],
    [
      "I836CKYANJFYOH3G8X7RDIMA8SSIFGV4BLENIVG7GSRKQM",
      "I836CKYANJFYOH3G8X7RDIMA8SSIFGV4BLENIVG7GSRKQ",
      "M",
    ],
    [
      "6T3BH9B7K1XCF42AZ5YBK6THKVXVTVSWZF",
      "6T3BH9B7K1XCF42AZ5YBK6THKVXVTVSWZ",
      "F",
    ],
    ["94EX", "94E", "X"],
    ["R4GLXNQK403I2", "R4GLXNQK403I", "2"],
    ["QEHOF3SSA30KUBQRFD5ZB", "QEHOF3SSA30KUBQRFD5Z", "B"],
    [
      "4AYC3FLISVL4U3937NTQF52J745TLOMMXP7TBKE0",
      "4AYC3FLISVL4U3937NTQF52J745TLOMMXP7TBKE",
      "0",
    ],
    ["6UJ6EXDF1I17DVK5UYT7O6FFVCTZ49D", "6UJ6EXDF1I17DVK5UYT7O6FFVCTZ49", "D"],
    [
      "KGR9MWS20W9XZVM6EVBU6PLK6S0TU1SHHX5P3G113LVFP3",
      "KGR9MWS20W9XZVM6EVBU6PLK6S0TU1SHHX5P3G113LVFP",
      "3",
    ],
    ["LJN08JYMZRK5L0R0ELT7QE7JMU", "LJN08JYMZRK5L0R0ELT7QE7JM", "U"],
    ["ELCEXJGW49CKJ", "ELCEXJGW49CK", "J"],
    ["92EPZ17ORSEASG5ZHINMXWQ9L", "92EPZ17ORSEASG5ZHINMXWQ9", "L"],
    ["XIPUO0N8G06S0LGHO9", "XIPUO0N8G06S0LGHO", "9"],
    ["YRY5YLNIRZDYJTFY7GR19EJWBI7E", "YRY5YLNIRZDYJTFY7GR19EJWBI7", "E"],
    [
      "4BTZJVSFXEFIZ94O7UG5Z6ATK1ARQDYX7H4Q0MXHB3NJE99T8",
      "4BTZJVSFXEFIZ94O7UG5Z6ATK1ARQDYX7H4Q0MXHB3NJE99T",
      "8",
    ],
    ["3ZU", "3Z", "U"],
    [
      "11J0II651RK22EE2RCJ23A9EA9ADFY0QYI5241ZFA2PLD",
      "11J0II651RK22EE2RCJ23A9EA9ADFY0QYI5241ZFA2PL",
      "D",
    ],
    ["UMYE8VYFXFX4VVJW65XBHZVC0F5M", "UMYE8VYFXFX4VVJW65XBHZVC0F5", "M"],
    [
      "SOFY8XFPWUFAQ8KSEMNB30KU4IZ92B0IHZW7EV32",
      "SOFY8XFPWUFAQ8KSEMNB30KU4IZ92B0IHZW7EV3",
      "2",
    ],
    [
      "RCIQW3U343DWIEKP9V987VQ9FK4T8CGBQM",
      "RCIQW3U343DWIEKP9V987VQ9FK4T8CGBQ",
      "M",
    ],
    ["C4LQWWWBFA5C9B", "C4LQWWWBFA5C9", "B"],
    [
      "CX8KR12XRFWJOWHVV9LPXWSAFXTZ1V3231F",
      "CX8KR12XRFWJOWHVV9LPXWSAFXTZ1V3231",
      "F",
    ],
    [
      "0PZB33YY1TZY49M3ARYXP91WF73PG6VU64JHX3VUNYZ5VB",
      "0PZB33YY1TZY49M3ARYXP91WF73PG6VU64JHX3VUNYZ5V",
      "B",
    ],
    ["DC", "D", "C"],
    ["RZAS8Q4A22NNA7UD7", "RZAS8Q4A22NNA7UD", "7"],
    ["3SXNO5GIY8EQL5IVKKET5Q65JBXEG5", "3SXNO5GIY8EQL5IVKKET5Q65JBXEG", "5"],
    [
      "WDB1P4Q6GKG10CSMNOYRI3D1PAWCM12VCBOLGRT98EM0",
      "WDB1P4Q6GKG10CSMNOYRI3D1PAWCM12VCBOLGRT98EM",
      "0",
    ],
    ["NOVG313B", "NOVG313", "B"],
    [
      "WQCYOPW9P4XX06138IZV24ICWPBOGO9NA7M055YLZGLB2H",
      "WQCYOPW9P4XX06138IZV24ICWPBOGO9NA7M055YLZGLB2",
      "H",
    ],
    [
      "E8BE5J2QXEKNVVFT24R4IKNLCMF1GY23JJMS1REHEVM8QU",
      "E8BE5J2QXEKNVVFT24R4IKNLCMF1GY23JJMS1REHEVM8Q",
      "U",
    ],
    ["S3V", "S3", "V"],
    ["WQ8SL2OPGRXJ9IVRO5EUQLY", "WQ8SL2OPGRXJ9IVRO5EUQL", "Y"],
    ["JRKWD2NRUAYNU", "JRKWD2NRUAYN", "U"],
    ["SVQ48UN2HYBVTKT90SPU", "SVQ48UN2HYBVTKT90SP", "U"],
    [
      "7VN16EYL4DGJNSIDJ76SHLI8B7LJM6MICKQR7ZELF2BU",
      "7VN16EYL4DGJNSIDJ76SHLI8B7LJM6MICKQR7ZELF2B",
      "U",
    ],
    ["7Z2GU0EWTX0", "7Z2GU0EWTX", "0"],
    ["UXIE6P63ORQQ9C1PIN1GVV0K0SSUG2N", "UXIE6P63ORQQ9C1PIN1GVV0K0SSUG2", "N"],
    [
      "WF62156NOJMIFFF2FF1KNN7Y2KKYSKD0U7",
      "WF62156NOJMIFFF2FF1KNN7Y2KKYSKD0U",
      "7",
    ],
    [
      "U54V0FTMERYRDBPVYADBSRKYN9K6UP8ZDNG78",
      "U54V0FTMERYRDBPVYADBSRKYN9K6UP8ZDNG7",
      "8",
    ],
    ["Z8OB", "Z8O", "B"],
    ["TXZYVVDTD34", "TXZYVVDTD3", "4"],
    ["VH66", "VH6", "6"],
    ["P4YD6UR7SHU89SYOWK87", "P4YD6UR7SHU89SYOWK8", "7"],
    [
      "ZRRK5Y7FGZMOJDDYJBPUZ43UKEC80MS86M3",
      "ZRRK5Y7FGZMOJDDYJBPUZ43UKEC80MS86M",
      "3",
    ],
    ["YQQXGNOYSHXPC7OH85WKX", "YQQXGNOYSHXPC7OH85WK", "X"],
    ["UF7HDEWU5W8MIKFQ2IKP0WO70E", "UF7HDEWU5W8MIKFQ2IKP0WO70", "E"],
    ["SQWRFVZKVQ7J308BOHF5PIMJPT", "SQWRFVZKVQ7J308BOHF5PIMJP", "T"],
    ["UF", "U", "F"],
    ["BVRITUKFNSAGLYKGAREV0", "BVRITUKFNSAGLYKGAREV", "0"],
    [
      "1NTVIBI85E794V8VZM1QWCDJ16OLNW56",
      "1NTVIBI85E794V8VZM1QWCDJ16OLNW5",
      "6",
    ],
    [
      "TYQD9UZSM7QVVRNUUGZIS7K3UUMDYUIMXAT5E8NECYJ1TFB",
      "TYQD9UZSM7QVVRNUUGZIS7K3UUMDYUIMXAT5E8NECYJ1TF",
      "B",
    ],
    [
      "J2NITVTK5YTZURYC8U2M7GD6MFL41D4MJ9A6T66IT27E",
      "J2NITVTK5YTZURYC8U2M7GD6MFL41D4MJ9A6T66IT27",
      "E",
    ],
    ["KZ", "K", "Z"],
    [
      "890KFFJ8F30WWO19MUOJ9ZT8EKZ9YZJWEHENJ5QOS1",
      "890KFFJ8F30WWO19MUOJ9ZT8EKZ9YZJWEHENJ5QOS",
      "1",
    ],
    ["KH1RN3Q45KBH3XTTLZ0FHTFA9D5QIV", "KH1RN3Q45KBH3XTTLZ0FHTFA9D5QI", "V"],
    ["9K2WBPQXJ4D", "9K2WBPQXJ4", "D"],
    [
      "KA6YM8C8SZXRTMPIEE4ERDIFMGMME0EXT3FMETOYX",
      "KA6YM8C8SZXRTMPIEE4ERDIFMGMME0EXT3FMETOY",
      "X",
    ],
    ["MQ3JVJXZJW7A89JEG93YANOMMLV", "MQ3JVJXZJW7A89JEG93YANOMML", "V"],
    ["P746OX4SV0LJ6CI7K", "P746OX4SV0LJ6CI7", "K"],
    ["VET8ATLHJN6YBIL2DYSP8B47CL3J", "VET8ATLHJN6YBIL2DYSP8B47CL3", "J"],
    ["NFM6D37IVO19790SY98E2X", "NFM6D37IVO19790SY98E2", "X"],
    [
      "2DJTZ2YP24UYBNMQIMJMIJVFKOGP00JGPGP2N9R0UAL",
      "2DJTZ2YP24UYBNMQIMJMIJVFKOGP00JGPGP2N9R0UA",
      "L",
    ],
    ["85UV0AVYC", "85UV0AVY", "C"],
    [
      "5U5GHGF1UAS6CYIJ7DP92VL1C496E2HU1ZX",
      "5U5GHGF1UAS6CYIJ7DP92VL1C496E2HU1Z",
      "X",
    ],
    ["YVZF6TWQN35CT22XM7AM8K41", "YVZF6TWQN35CT22XM7AM8K4", "1"],
    [
      "ZH4PELO47O0Y5LFHV6KJW4JPPTONQ36J5EK",
      "ZH4PELO47O0Y5LFHV6KJW4JPPTONQ36J5E",
      "K",
    ],
    [
      "70U3ANPEH5WBJ2YPTGRMOG2VY3ISW0Z385E5HPKVG6GQ1ISG4",
      "70U3ANPEH5WBJ2YPTGRMOG2VY3ISW0Z385E5HPKVG6GQ1ISG",
      "4",
    ],
    [
      "YX1XVJ6UUKU4ZXMSFZM2HXN9FKC9PDW4471Y5F11",
      "YX1XVJ6UUKU4ZXMSFZM2HXN9FKC9PDW4471Y5F1",
      "1",
    ],
    [
      "5D2QWK0FJQ66C1I7OHERERU48AGE3SGEWQ9LIQ7J",
      "5D2QWK0FJQ66C1I7OHERERU48AGE3SGEWQ9LIQ7",
      "J",
    ],
    ["2TYK5", "2TYK", "5"],
    ["MDOK6UXG5QY7LE4YQ33RYFA", "MDOK6UXG5QY7LE4YQ33RYF", "A"],
    [
      "4FD220MW5JKONVWZL23B35TULAOBXBG5",
      "4FD220MW5JKONVWZL23B35TULAOBXBG",
      "5",
    ],
    [
      "OKXEXCNHE9KISCCJ3YYHWWKJR79W0KJFF3PTLLBX",
      "OKXEXCNHE9KISCCJ3YYHWWKJR79W0KJFF3PTLLB",
      "X",
    ],
    ["K7D52U6BS3ISU", "K7D52U6BS3IS", "U"],
    ["L6J7LA", "L6J7L", "A"],
    ["FB94", "FB9", "4"],
    [
      "LM6OL1KO2AS2FSF5ZM09RFYUC71IO787HKG0V81UZ4OCH7Y",
      "LM6OL1KO2AS2FSF5ZM09RFYUC71IO787HKG0V81UZ4OCH7",
      "Y",
    ],
    ["X1PCQYS5S4N2XW5NL5M4ZDFB7899O39", "X1PCQYS5S4N2XW5NL5M4ZDFB7899O3", "9"],
    ["1*", "1", "*"],
    ["NPB4JIBZP9D3KA3R5", "NPB4JIBZP9D3KA3R", "5"],
    ["308ZYQCUJDMXQ2AWAH501ETD2HAF5BZ", "308ZYQCUJDMXQ2AWAH501ETD2HAF5B", "Z"],
    ["I2JX", "I2J", "X"],
    ["EP2Q37KD7ULG6MT2", "EP2Q37KD7ULG6MT", "2"],
    [
      "RGLTVVA8ON0UAYFUXTR1302UVCZDPKPXVN2XQ",
      "RGLTVVA8ON0UAYFUXTR1302UVCZDPKPXVN2X",
      "Q",
    ],
    ["B4Q9VJCNZIOBZZ2", "B4Q9VJCNZIOBZZ", "2"],
    ["BFXSQ4UKB", "BFXSQ4UK", "B"],
    [
      "KF4U0QFASRNNDY6D7CH6ZNNWJ1E87VYP8WZ",
      "KF4U0QFASRNNDY6D7CH6ZNNWJ1E87VYP8W",
      "Z",
    ],
    [
      "C8FV64WJPY2364OPFBU80XWZG2NDG8XOZ7GETDTPDA0MP8MG0",
      "C8FV64WJPY2364OPFBU80XWZG2NDG8XOZ7GETDTPDA0MP8MG",
      "0",
    ],
    [
      "RYBZFRRF74BJNZO1OREGCJJ8KQBZ23AQJSO7W2Q468KK",
      "RYBZFRRF74BJNZO1OREGCJJ8KQBZ23AQJSO7W2Q468K",
      "K",
    ],
    ["R6IKQFF", "R6IKQF", "F"],
    ["E3UP5VBXQ3JYNSGVIC5ONRU5DGAT", "E3UP5VBXQ3JYNSGVIC5ONRU5DGA", "T"],
    ["MU2DVNAIAZMJ2CB6Y384PXB79N", "MU2DVNAIAZMJ2CB6Y384PXB79", "N"],
    [
      "TJIVQW7VF84ON2VVWUHBMU6BCYLGOHA2",
      "TJIVQW7VF84ON2VVWUHBMU6BCYLGOHA",
      "2",
    ],
    [
      "KASE4LJISOBCFNDM1D6TJ7KO4UMTRFWMUAJ0FPU2DGU",
      "KASE4LJISOBCFNDM1D6TJ7KO4UMTRFWMUAJ0FPU2DG",
      "U",
    ],
    ["2166", "216", "6"],
    [
      "URFX2RFVSYL3L906DR83922DS34FFJ7ZPVXJGIRKK",
      "URFX2RFVSYL3L906DR83922DS34FFJ7ZPVXJGIRK",
      "K",
    ],
    [
      "67912TXIFZYRIV4AHF5GGGFY74GZ1CM183U08A5G8FL7E1",
      "67912TXIFZYRIV4AHF5GGGFY74GZ1CM183U08A5G8FL7E",
      "1",
    ],
    ["M8ZK2YRM", "M8ZK2YR", "M"],
    [
      "G5HV06GKDQJHCK7YIKOKZ4RR12U309JKZM2",
      "G5HV06GKDQJHCK7YIKOKZ4RR12U309JKZM",
      "2",
    ],
    ["6STXPIUNHUN0HF1T2N", "6STXPIUNHUN0HF1T2", "N"],
    ["4ELG5", "4ELG", "5"],
    ["AY6B18OHNI5RV8JARCA2L", "AY6B18OHNI5RV8JARCA2", "L"],
    [
      "5IO55FAUHULFP7JQQTYQVI0MEBJDQAGY1R8LF0SM9F",
      "5IO55FAUHULFP7JQQTYQVI0MEBJDQAGY1R8LF0SM9",
      "F",
    ],
    ["363WGSSR7", "363WGSSR", "7"],
    ["MITD9BS3ZHWD43FCS1S7E7XDA0JN", "MITD9BS3ZHWD43FCS1S7E7XDA0J", "N"],
    ["2SLWGULH53OMR2X894LW9QNNZFYM7", "2SLWGULH53OMR2X894LW9QNNZFYM", "7"],
  ];

  const invalid = [
    "TZ25NP5",
    "ZVU4KNL2ZLAGA6PN96ZBKM0UWZRS7BOWU4",
    "B0O6JUOY705MJJRFGR",
    "57V1Q2PXWKGKD0HAG",
    "JKGQ7AEEFGTGPBQA434NZMU1EEY4YGT09P",
    "T5631MPGZ94J4FSX",
    "QI0C59B4BCBPNML2PT8EWLGS7KV06NY8J5QYDPB5",
    "CXMBAW9DNU9JJUF4T211YKCEB4GAXJF3IJCS9O346703I6T",
    "R1WDRN9EQK",
    "XM7WLF4UIS",
    "5GD20470C5WZ4SG0HUZ8AS5R1DQB1VDW2XSJGK0H",
    "AS8T9D67R7",
    "VB20A5PNZVB79BFD54KT",
    "V9IIUR0JTCBQ9",
    "PW48A7XIUOS8WJHXXXHRD76T12YTI",
    "ZKBJFE11FIPZUFLCD8ED1YF2WUGDLJ",
    "CCUO3GH60RB2GEVYB4VS8XL5UW",
    "MN6V2L7QFK81L8FXSA2HGVGFTNQBS",
    "675ED9TT5WHXVHTWGNAWT9ZN9RKIUGAKYI5CZVX2BS2D2R",
    "94BMMLTKR9XKEXRPL9O29S2RHMZRA5GGCABH9MU1TEWB0C",
    "GN1AQ26RF6SXV9FV8EMUKZJFT6NLB0UU",
    "MW3VI2XK4Z0ZV4NBI",
    "LW6XQPW",
    "NAAD5MHJEKXF3WY8KQP4AZ472BLGZBMTDVPVU",
    "P6LKPDCEO4WJTUU5DYPN0G7XSTDOR291J2115B9UR5VX4S",
    "F4V6BWRDWGO22HBD5J9ONYM",
    "ZT0V8TZ31XKXCJ93M8PQVVFSUE",
    "LSGZPPA8QH6KU6W6YPSK24WJWMKSQIVLE7UFMPZ5MR99WAXIU",
    "VKWZ2QFW154BVHT9TRZ7S004YHLTN4P",
    "UG6LH1H2H5D",
    "08IIPMWYRI4FRPOZSZ",
    "1N85BZSTZMN1PG8F0L4HBYJMYHUEB151NUAF0M02I13S6AE5D",
    "V8D32XMP3RIM8UW6CUEE14PNXFTCW84AJ1I09J0KZU25U2J3",
    "8UJWYP0RLAQ40T42ZW6A2S17JFCFCXSHE5VQ",
    "03XDLZR7PEM51FPTUWWJO79ZDNF9Y6WF4IU",
    "IT3WMICDWOA9ENX7J3FG8QYY",
    "HPTCMTMIADQLR52YQ382283XDO8DFYKTSJ6S4",
    "EIVLHKMEZ5RDJAILGFKA8PPZBMVHSMLECLX0YSG",
    "QBQ6U8L0H",
    "UYHX3Y1N4JQST",
    "QSAZXTSSKQCZ3OVMUN8RW1YLOU3KG1VUQ3UMIRBVB9A4X8F",
    "WP38700AWQ7BKILXW4",
    "F0V4OPWKXK8O91KO9RU06O3Y9ZG9",
    "QYK6SRIROBFIU4UMKPLFU2",
    "KFAJDXKOT5NWOXDMKD2JMUFSOIEQI8SEJNAMP5Z3Y85RO",
    "C395O1P15K05QN",
    "ERA405XRK7U63NC1MG1C7N1JGPYTI4",
    "7QGKA5EKG2452JIC9N79ZF",
    "KLETF5BEXIVX27V5BDIN4U3NHNGYB",
    "G2CCVQDMK2OPEQKNKIPM1D0GSQXIVVZ",
    "QMKUAUSZH09B8DD3Y27D1I29SZNL1L8EOSZ7FRP",
    "401KCA6QHNM9B3UFJLEULAMGEP9CWF4ADB6",
    "DTO8MF4P5UURE9VYIY35L4AR9QAGEPEKL3Y6VBIX5QY7YY",
    "QPZINCS",
    "ILVV3PNU9WYSO794K8FHF6KX9HD",
    "3RFM6HY4",
    "78AKKTZSDQJ4CDIHW2QPW",
    "PUM",
    "VA2WOX4MTHRNUEOIJ9HZKI6KNQ34GBS0ZGFI",
    "TA",
    "UKQI",
    "D6WBNJCGNBHLQ1RBWEC3NX8FPH3XC1JF5FHD3B8YN5A5ZOUL",
    "3YEEFS4A0AP",
    "0DXTNZELCY61EC7D8SUM7LU",
    "9T07EWCOTMK69NG8OGWGS2CJT4SO",
    "0CU0HCU60B2YNWM7",
    "JQOYB8N9GBWEX733",
    "KP0L74LBI02917S3CZSAJC0AZJBHP79SYID5NQV5CI",
    "AP8LIWQTFIP686UQMX8HKSAJKRCEBB4K2QPBPVLF6",
    "O0ECQU11XYA2Z8YBDN6BA4NWL51VUHTCVL0L235N5CS",
    "6JC8PM5608QJWW5DQ6FDBJ9GXRZ1JO4TE2O7PI0EI03",
    "16FB9NUE2N6S4K3DVGO2UH7E7MEDWD",
    "JZUMD8Y99EF5XZRZD1E1",
    "2ZP8KJZY8GCY9YJLHK0GQC0YAYOZ",
    "8JO0N33EH6E926ZBD2A6KQ5OURKB0OTFD38PC8G7STV*",
    "Y76X8LD0B8W978FUKO5SE",
    "G3JID8DFHXOFP9PCKJYSKMV65U3Q9292T6D10PF4ENXH00EAG",
    "O9A1A776QQB5YIUSD4HRM03GFCE4G9",
    "HCVZ6MQQ2T7CY4E*",
    "IFGIHZDDVLN596CUUEB5Z",
    "IK49190B141312EHQMDXPOXZV3BI6MX82R7X",
    "R6I1G04XWDNFO",
    "WUT5NID3W9PJ77FHM",
    "RDS6EWMDZ7E82E7WDIFCOL01HVHK4JFP",
    "XB5X5Y79ZRNS1*",
    "8EORDWAC6QBLAMAYWRF2Q3BR179AMO085OKMPB7A",
    "9VIQTU2L0XCBOA",
    "FBPSWTOU0",
    "C8OBYB6AR7997C6V8GGB6W6F66",
    "TIZD6COHDML9V7KA1H",
    "4F6D2RO5NKOWN0LDVLKMKCR382CJDHR",
    "9AY4ZQ5IB2R4ZPDBSUX4NZSCY4Z4XL93FO6STVSSC14X",
    "LI7GO203XD804PG",
    "HUKSNQORJ13IEC4E2TBYV5HEVRZ745",
    "QU5JA927X54QN6BOJ7XXP5XJW047XZ8E50JB",
    "7SKRNN3T6DK1UG0VO0Q8NUB9WWF8ZTQXZZBZDH*",
    "FHULJM94ZECV4",
    "JK0NY22BG7HT4ATW3JJ",
    "1HOYRDDC9OLGJHV5BRTU4ONC9UDIEJQDTA50UT9XCLF",
    "F7RWDGQ0643HV",
    "XBEBT6I50QSO8",
    "T28WHX3CJCT731CGMLXUN3D",
    "7DIE0SQTEZROSA8Q8CCLTKES4BXDLNRN6ZRWTCL",
    "6G",
    "4VAJ9IT8OW86O9XSI3N3DJAVLBZ65N6CGAVUAKXKQSKBJN33P",
    "3F5AGLKFNARX8R1HO0GNFM1S1O50LOWEV6",
    "7F52X099YXM3GMJPSJNIY2UAR8P",
    "NQTIKUAUURT5ULHKRQYXLAW0AS1BFPZF*",
    "P2HB5U9IRLYA0SMA",
    "5SUP",
    "FZ1NC408LMSVWS07G88T0KGX5YXBFL34B5MLDKCSLYE41P",
    "RY135X44A9REMHTIZDZ4G69CT83SESX2OJ",
    "Q4FU4WRWE",
    "E7L19SRKQBMLKYOLSPMYFU",
    "6HD520LL8PKMZVNGP6LC",
    "7RBNZJSFXUOY2DIPHCT9MZVVB1SMK4VI6B2IN6DPLND",
    "ZGAG7RWNLON2SAO2SZKODXDYYM8U38DRN9A",
    "YSLG96",
    "I3QCNZWZDYX9DLPNB4IHIZD6ZPMQM",
    "ANCIHZO",
    "8PDUN337JHX0128XZRVWHYHFFM5MDSAM21081K",
    "L108RLTYZ9IGGEM4SGIRK00OZRDAXCHUUD4M796E",
    "AI1R",
    "0NB0V3S9XMT9AZY2LK2Q6OUB2JURQ1XZBKVQHL0J2PS3TARC",
    "1ZOS1WP2J5XJGY4ZB6L5YNTU1LA2O",
    "Q8J0CMV9P96BIGX9ZIKBGFP2QTSHNLH2KQJCO8JURP",
    "YSRB79O247RTKRRQYCPNW9DT8KSZJ6EKGV",
    "O49EDNWJM",
    "UEA",
    "WK2PNYH2NH3",
    "4HTQ",
    "8JOGYWHJ5Y3T73JP7GIWPW5WADDTOIMKF4MKS",
    "M492538M53U5N5F0FJYM4COP5EJJCR9KNI39R",
    "W9AAJO37K",
    "8R4FC981SHYAG09R96X1IL8ZCGZMOLWHJ*",
    "L4AFW7FJ868H9BDD35ZS",
    "HIKCKPC2YZWHUU",
    "GWWN616L6X6VN2KM3L",
    "D381W8T560FQAMGP2Q71KT4OU07U50AWGH278ND5FZRX0",
    "1RLAK2AH3SR1R688WVQ53DTERORE2OCJDM2ZEY*",
    "YH36OK58S66",
    "ON2QNH3TU80MX",
    "2VX4R7PYC8BT5UCRTCJKE84702TEXJSMIZ01ASBBCD1D22EAF",
    "ZIRHZYG3XX9",
    "CQ1QMV5PQI05TCZA59Q5LWFKFPCNAWJ",
    "AN7UA8K41",
    "G1DUB9FNM1",
    "V59GT6XWFRMME6FPIA9OS38FVZ7JYZ3OSJTRRD6",
    "M8QVJSX59HWXJIZ7OF5N",
    "9B1MVCCDD",
    "7V125B02",
    "H21NOU3EGTH9RK6V0QEODQ2J",
    "UBP1OS0SBOR97J00JWLKQC6T4R5V",
    "BLQJVSWRY2ZRF8K3MIBUN6Z3QE0GICBZRKXU",
    "6JBN3W5OSAHR70UDW1KKI3Q",
    "HSBG7O422BE1RZB16ZMFUQRN",
    "PSS5E8MPGQDNQ5Z7LSRJJSSY3YSN1ZLLDHS",
    "BL13NQT9R0GQ5HNY7FE8AN5X7YIE5B7GBT6A01HRHJ4IY",
    "RBVEPNLEISU7N9K6IUQXU0Z26",
    "AB8BCPNIUB2RTRXJ49N79",
    "U3GLXLUSCKTRSH97E1ZSBIO1PY7MUFA76735NE",
    "DOA2",
    "LLXQ93UNUU8OBJ5HLJMBP76FE3YERGM6TNXIO",
    "L8CG1385A7L040XFKOXOJ2G25M2TJ5NZWNWRC6SAAASGIX8S",
    "4B0LGAFIR9COEI3G0SYBBEGY9LCLMF2Q",
    "ALIUB3Y1QJRHVICP1WBJK",
    "T3MS5XP64NF3YZTXF41PN7GQEGSUZB2YQ7NAM9QUH0",
    "ZIAXCHO6WH39HX9D9KCWWXV7AS7UXOWWROOT4ZCK9XB",
    "Z64M33TCFUMGJ8B",
    "FQ8H4RNS7QS63VXDCCSYK6VW9TQ1DCV5J",
    "CZ5MGOJ3R8XGAKS58O1TXHO76V74NH6YDI9N9G02",
    "K2L3BU23YLHRRBBXVOD33BJP9AZ",
    "JAJAJ84R879O",
    "QIWENE7GPAJ5TFL0Y5SIUAZBFMWH",
    "L7E4WXPN34LY67Q6860Z83SL11P8AQX4GN9MXJ9YA3RP5",
    "19THM3WIKG",
    "UY",
    "MKVF6ABMFRYFKV1DIDKI3Z4N",
    "RAEXE4HJSJ6",
    "5XG9THG4YWZBGUP0UP44SRG8YALYDNIG3UN09ASQ4A4Q9XSK",
    "8TT4QHMKE598GKI8EEE9I807B4PQKCO5",
    "M10U49",
    "HUDKWCL5HW2ZP34PKYDU4ZWA35F5Y9DBM9JBO",
    "569EWI0BCJYHS0ED66",
    "YUPYC69LO",
    "W95CZCB3ZQPRXNLH",
    "KLK",
    "F2CZGJMREOSJ8CH2I7DXYV",
    "M39I5XPB131BLF00T0HWNXKDO",
    "I9MZXVZG2Z6T15S9DKB9U308CC",
    "UCZDQJ52S40YJELO0WDV3J",
    "0BXLW4JLDX8QNQ0XNFZ4KY303B6ERL4EJE0",
    "N9",
    "1XTEZQEYOMP3KZI7MJ02MDW8RQRJRN00",
    "TJ2I5Z",
    "XGKHO5",
    "WEVCEKQMGHBHBBSCBJQ5D1XYWG4S0NKC",
    "MMXOC1CCTCC7VI6",
    "F5Z0M19UE50XJ4GULUGNUV5WTU5IWPXSRVSP",
    "TV6YYWIK1878RKD3WFFTS9ZW9E18IO",
    "BOM6PSF3HWHMZ7BBT12JAPWT",
    "WSKD101QBE3US63KIFXOI282DNU7UG6H9KB",
    "7JRNJM4QQ",
    "5VTMZ36EIDZVWETDRQLFCJ901IL1QYG0ZV65G555",
    "9FSJG7BBNH22N0WLUFUALJB9G",
    "HKAGEKFVABUJHFTWS23A5",
    "Q4MMKYIEKK9EL*",
    "COUGTNQXVTEMZF",
    "N*",
    "49YES52V17SJTEM6PP1VB1LHHGERRS1SBK95P9YT1",
    "X79E1VIUVTTQPVY9A8VHXDSU0QAVD9H0CJ2F9ECAG",
    "N5GVKODKQRJYHOOZIBSDZ58M8ZSCGC3JJG1F9B01Y6",
    "O6HBH8WNIW1SC62XUBL11YR9IG4E75DPUPLZC5F9V",
    "9CB",
    "GIIJ1OD9CF2B0JB3BJCVFYTSYT7UN35J4V6E",
    "LD5G3Y",
    "ZFERMP4V5V94",
    "R6YDA1RYOZSXP196O0BTF09AUQZKD",
    "AWE3CM7",
    "BL4XJ9AKA9A5MBVQDL1I2IXKB6XP3M4YQR3T0WDQAA",
    "2X0YASUFV4MDROFB66DGKH",
    "NUSW6B",
    "4TVNGHAJER6MWACEJK85QSAA1ABFQIHEB5PODR",
    "SL5KRLGD0LHSJR05MODFOELB9LU1JC5",
    "8E2ODDHAM67U6L3",
    "PIBG6D0BQWTC0R7S",
    "C37LTCAIBE20RJXUINPPUFI8R9LTIUHM28N3B0DI63PMW3S5",
    "UE0SHIY0AV2ZWWLAC59ZAKB1",
    "9KRZ5ACCDQZDP3TWBNRMBCE9N",
    "IKDYTFPFU1RTUI9DGN6AS1IN4E4S0KEA6SK95",
    "K3",
    "4SEEXS9VCTJMJU7SL65TO2NXFIH4BFSETVDULEHV77VPJ",
    "G58KX4ZO02QKT4F250AXHR2R29R",
    "BYKPFFJ2SKU3NN4HUE2QFCSKUCD74OW13",
    "B7JUCDGZTUDCG29YDCDW",
    "3Z91YTRTZ6SWKAWCTJ5GRTZ27K7UN9E7D480INDJUGA",
    "5YW6C9HPKDD17Y68FZU",
    "R0YUR1PRSV4",
    "5RSMJ8QS2X1133DGU",
    "HY42FV31A",
    "Q7NALNDI39B2ZP2542KCN1RXVN4RZWI6A",
    "FHJNBWE9IMXLQQYNBBP8SPE6ML7F92YRFE",
    "6MTHQX5J6IPN91L7CWBONEZVQIN1IJ40D0MIRDWKFJ*",
    "366QV88LA4SLD0HFK73YH2NI8",
    "XOSFE79WR14S99",
    "UB4DPBBOL30CU9RIX23K437DHME8IAQGNRIL9RO6YFN0DP7ML",
    "VL35QOUMG4SXP5NQOX18DNHKYDQXGH",
    "2PONS7XAQV96GCAPCSRS4ECJ8",
  ];
  // }}}

  common.testAlgo(algo, valid, invalid);
});

// vim: fdm=marker fmr&
