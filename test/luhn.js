const assert = require("assert").strict;
const common = require("./common");
const algo = require("..").luhn;

describe(`${algo.longName} (${algo.name})`, () => {
  // {{{ List sample strings
  const valid = [
    // short cases
    ["6392838428", "639283842", "8"],
    ["6121688052", "612168805", "2"],
    ["9248001704", "924800170", "4"],
    ["4271763072", "427176307", "2"],
    ["9169125045", "916912504", "5"],
    ["3858339744", "385833974", "4"],
    ["6039761306", "603976130", "6"],
    ["7884147302", "788414730", "2"],

    // leading zeros
    ["006392838428", "00639283842", "8"],
    ["006121688052", "00612168805", "2"],
    ["009248001704", "00924800170", "4"],
    ["004271763072", "00427176307", "2"],
    ["00009169125045", "0000916912504", "5"],
    ["00003858339744", "0000385833974", "4"],
    ["00006039761306", "0000603976130", "6"],
    ["00007884147302", "0000788414730", "2"],

    // special characters
    ["6-39-28-38428", "6-39-28-3842", "8"],
    ["61 216 88 052", "61 216 88 05", "2"],
    ["X92-4800170ABC4", "X92-4800170ABC", "4"],
    ["  4271  7630 7 2", "  4271  7630 7 ", "2"],

    // large
    [
      "3376893546118112789115841911189412691086037650",
      "337689354611811278911584191118941269108603765",
      "0"
    ],
    [
      "4258184707858608072651591977459052874031809715",
      "425818470785860807265159197745905287403180971",
      "5"
    ],
    [
      "5641025207262236983056258592719326376834268565",
      "564102520726223698305625859271932637683426856",
      "5"
    ],
    [
      "5789797459025821354417756382533697166210040512",
      "578979745902582135441775638253369716621004051",
      "2"
    ],

    // bulk
    ["79927398713", "7992739871", "3"],
    ["49927398716", "4992739871", "6"],
    ["1234567812345670", "123456781234567", "0"],
    ["4024007199952671", "402400719995267", "1"],
    ["4968009448991185", "496800944899118", "5"],
    ["4485031936696447520", "448503193669644752", "0"],
    ["2720991026808100", "272099102680810", "0"],
    ["5313977435287891", "531397743528789", "1"],
    ["5144122279996944", "514412227999694", "4"],
    ["345624181492183", "34562418149218", "3"],
    ["379723913300158", "37972391330015", "8"],
    ["345999017580637", "34599901758063", "7"],
    ["6011232699595685", "601123269959568", "5"],
    ["6011491169622003", "601149116962200", "3"],
    ["6011285697355763491", "601128569735576349", "1"],
    ["3542720990091367", "354272099009136", "7"],
    ["3532233574622997", "353223357462299", "7"],
    ["3532788220114354666", "353278822011435466", "6"],
    ["5403399339551671", "540339933955167", "1"],
    ["5585760385211280", "558576038521128", "0"],
    ["5481899719102875", "548189971910287", "5"],
    ["30540557891578", "3054055789157", "8"],
    ["30071210433038", "3007121043303", "8"],
    ["30126773590440", "3012677359044", "0"],
    ["36300226927160", "3630022692716", "0"],
    ["36462605784370", "3646260578437", "0"],
    ["36705219593581", "3670521959358", "1"],
    ["6763637858365987", "676363785836598", "7"],
    ["6762136018635356", "676213601863535", "6"],
    ["6762285720444928", "676228572044492", "8"],
    ["4175003833113538", "417500383311353", "8"],
    ["4917845148786751", "491784514878675", "1"],
    ["4508189071154330", "450818907115433", "0"],
    ["6397642356831336", "639764235683133", "6"],
    ["6379177784930725", "637917778493072", "5"],
    ["6371983222326360", "637198322232636", "0"],
    [
      "54614881525019073782156187965076037537577",
      "5461488152501907378215618796507603753757",
      "7"
    ],
    [
      "1980181852120423152985411461523796354096776217426",
      "198018185212042315298541146152379635409677621742",
      "6"
    ],
    [
      "71103629781953043577711278657782051037",
      "7110362978195304357771127865778205103",
      "7"
    ],
    [
      "192199918727254420496996509883617",
      "19219991872725442049699650988361",
      "7"
    ],
    ["6516603288299521252958133", "651660328829952125295813", "3"],
    [
      "0549698768273073295451997422543678225772666307",
      "054969876827307329545199742254367822577266630",
      "7"
    ],
    [
      "86495665960757938740047056426450277738",
      "8649566596075793874004705642645027773",
      "8"
    ],
    ["38563081735134959023238795", "3856308173513495902323879", "5"],
    ["0881396675714293553912574348891", "088139667571429355391257434889", "1"],
    ["75404226575672", "7540422657567", "2"],
    [
      "03847351582239584836738165588731595",
      "0384735158223958483673816558873159",
      "5"
    ],
    [
      "092078018048435165891915630831222779842123",
      "09207801804843516589191563083122277984212",
      "3"
    ],
    ["83", "8", "3"],
    [
      "796664111657831540925156678893534",
      "79666411165783154092515667889353",
      "4"
    ],
    ["083889026416332434227082611", "08388902641633243422708261", "1"],
    ["7450", "745", "0"],
    ["8887534935045735788", "888753493504573578", "8"],
    [
      "50683991576788465201738584670068",
      "5068399157678846520173858467006",
      "8"
    ],
    [
      "6300661074658572109235946105681759702222940944358",
      "630066107465857210923594610568175970222294094435",
      "8"
    ],
    [
      "49597490064422818107761315748561",
      "4959749006442281810776131574856",
      "1"
    ],
    ["08895394941", "0889539494", "1"],
    ["7885627", "788562", "7"],
    [
      "860294917355734824232955794862662219753570727",
      "86029491735573482423295579486266221975357072",
      "7"
    ],
    [
      "316155958410984136823404028590294859389315",
      "31615595841098413682340402859029485938931",
      "5"
    ],
    [
      "37127747921881019081390599573226109070772",
      "3712774792188101908139059957322610907077",
      "2"
    ],
    [
      "8240027262937782385843427698937482724595",
      "824002726293778238584342769893748272459",
      "5"
    ],
    [
      "563172906064393026806598062505683170605416142",
      "56317290606439302680659806250568317060541614",
      "2"
    ],
    ["323659", "32365", "9"],
    ["0994905", "099490", "5"],
    ["09386209765806087018516207", "0938620976580608701851620", "7"],
    [
      "33421525854302365772578573973135641848979706",
      "3342152585430236577257857397313564184897970",
      "6"
    ],
    ["29330", "2933", "0"],
    [
      "8498596997358554364532632997585040",
      "849859699735855436453263299758504",
      "0"
    ],
    ["8576167814467109832320", "857616781446710983232", "0"],
    ["232", "23", "2"],
    [
      "6324764819359558617790395076257264506616106832933",
      "632476481935955861779039507625726450661610683293",
      "3"
    ],
    ["294120048623149305988437330", "29412004862314930598843733", "0"],
    [
      "7900111062867757453184244386710373296814574668",
      "790011106286775745318424438671037329681457466",
      "8"
    ],
    [
      "5367538500607856908983576772524810945111620762179",
      "536753850060785690898357677252481094511162076217",
      "9"
    ],
    ["968", "96", "8"],
    ["8961", "896", "1"],
    ["85370137279014395447", "8537013727901439544", "7"],
    ["2005169774293", "200516977429", "3"],
    ["623477229032567", "62347722903256", "7"],
    ["863862108", "86386210", "8"],
    [
      "59646720260211469659151766871919368641",
      "5964672026021146965915176687191936864",
      "1"
    ],
    ["67", "6", "7"],
    ["45203", "4520", "3"],
    ["7915744454676547808109853644", "791574445467654780810985364", "4"],
    ["5875487361106669", "587548736110666", "9"],
    ["6624140838899141132014247713", "662414083889914113201424771", "3"],
    [
      "9756567794897599766290433002294318359",
      "975656779489759976629043300229431835",
      "9"
    ],
    ["72397", "7239", "7"],
    ["218463818", "21846381", "8"],
    [
      "263813770569251323679670745238933084455721",
      "26381377056925132367967074523893308445572",
      "1"
    ],
    ["69734877926", "6973487792", "6"],
    ["89658158373339137022294", "8965815837333913702229", "4"],
    ["1552215830", "155221583", "0"],
    ["76035643643530792048269134", "7603564364353079204826913", "4"],
    ["338009939", "33800993", "9"],
    ["018994193005121895596566825490", "01899419300512189559656682549", "0"],
    ["4581126992476809766513180443332", "458112699247680976651318044333", "2"],
    ["66786195948495022", "6678619594849502", "2"],
    ["315121216515975938839", "31512121651597593883", "9"],
    [
      "33489890479999623652996047457384625515132870",
      "3348989047999962365299604745738462551513287",
      "0"
    ],
    [
      "262253938212053138418267398242050268050",
      "26225393821205313841826739824205026805",
      "0"
    ],
    ["52784212", "5278421", "2"],
    ["1768425892", "176842589", "2"],
    ["85520518", "8552051", "8"],
    ["7312557433533855", "731255743353385", "5"],
    ["34194998730219623", "3419499873021962", "3"],
    ["25937279309026750", "2593727930902675", "0"],
    ["41582", "4158", "2"],
    ["2857", "285", "7"],
    [
      "850358582146570426568272360872360087",
      "85035858214657042656827236087236008",
      "7"
    ],
    [
      "125957343885973496512989716687495",
      "12595734388597349651298971668749",
      "5"
    ],
    ["03044278", "0304427", "8"],
    [
      "05108454829869214309740788612171015584",
      "0510845482986921430974078861217101558",
      "4"
    ],
    ["4039079", "403907", "9"],
    ["80723383033265757759681334", "8072338303326575775968133", "4"],
    ["75", "7", "5"],
    [
      "574199228829400903986384817447646917802011348",
      "57419922882940090398638481744764691780201134",
      "8"
    ],
    ["331", "33", "1"],
    ["46978507410879403373513", "4697850741087940337351", "3"],
    ["07731773181451843", "0773177318145184", "3"],
    [
      "461907819256261684784230449111038702651",
      "46190781925626168478423044911103870265",
      "1"
    ],
    [
      "30084558181558765529058899629211451664063802541",
      "3008455818155876552905889962921145166406380254",
      "1"
    ],
    [
      "663743100507053993899002238074585",
      "66374310050705399389900223807458",
      "5"
    ],
    [
      "44425446487294639133493226245186890667105856",
      "4442544648729463913349322624518689066710585",
      "6"
    ],
    [
      "15924932017293097589542466771758",
      "1592493201729309758954246677175",
      "8"
    ],
    ["0585916146334538751506007", "058591614633453875150600", "7"],
    [
      "40679114499882976614293849035141192017",
      "4067911449988297661429384903514119201",
      "7"
    ],
    ["519865441544075878870", "51986544154407587887", "0"],
    [
      "664810302611584179617892709160140344776901942",
      "66481030261158417961789270916014034477690194",
      "2"
    ],
    ["3511381339378715469366018", "351138133937871546936601", "8"],
    ["56493816473474509107345480", "5649381647347450910734548", "0"],
    [
      "5741555974830965569095742116601699",
      "574155597483096556909574211660169",
      "9"
    ],
    ["36707719368859941969937943", "3670771936885994196993794", "3"],
    [
      "028867500681480919786133544924778704076040965",
      "02886750068148091978613354492477870407604096",
      "5"
    ],
    ["22454940441011231356", "2245494044101123135", "6"],
    ["943", "94", "3"],
    ["569438271987", "56943827198", "7"],
    ["613810", "61381", "0"],
    ["52039872", "5203987", "2"],
    ["455", "45", "5"],
    [
      "3110938967462244116852248333447562947300982",
      "311093896746224411685224833344756294730098",
      "2"
    ],
    ["7799891456854353253", "779989145685435325", "3"],
    ["0136612850", "013661285", "0"],
    ["776393540916201734200835839", "77639354091620173420083583", "9"],
    ["0237247724634033977", "023724772463403397", "7"],
    ["97042462639560872859475", "9704246263956087285947", "5"],
    [
      "88177429762445461368974189093209625050470",
      "8817742976244546136897418909320962505047",
      "0"
    ],
    ["1176165340804266", "117616534080426", "6"],
    [
      "4448902861372789129733172264672773151287726440",
      "444890286137278912973317226467277315128772644",
      "0"
    ],
    ["2269082", "226908", "2"],
    [
      "06896345684029731903256637529107857206016",
      "0689634568402973190325663752910785720601",
      "6"
    ],
    ["85957928264976", "8595792826497", "6"],
    [
      "779107316324250893550133606348025527726",
      "77910731632425089355013360634802552772",
      "6"
    ],
    [
      "0907504023894713968867734267473401822",
      "090750402389471396886773426747340182",
      "2"
    ],
    ["3859825684349", "385982568434", "9"],
    ["3177279707927209", "317727970792720", "9"],
    ["8550406179730333982075", "855040617973033398207", "5"],
    [
      "7464449650889249566946524428088716678022357024530",
      "746444965088924956694652442808871667802235702453",
      "0"
    ],
    [
      "90258743775887828360122408364180133258855663207",
      "9025874377588782836012240836418013325885566320",
      "7"
    ],
    ["0293953975696", "029395397569", "6"],
    [
      "6532499716831854673100166936758607468340821272580",
      "653249971683185467310016693675860746834082127258",
      "0"
    ],
    ["7791645920544", "779164592054", "4"],
    ["3514991100863763983700", "351499110086376398370", "0"]
  ];

  const invalid = [
    "6392838421",
    "6121688059",
    "9248001707",
    "4271763075",
    "9169125042",
    "3858339745",
    "6039761304",
    "7884147301",
    "068708067027311981306064527483090583446388",
    "3913457462233136864081203885827153721998236091",
    "722079608322052231983840357389776026691421092",
    "23359723550996",
    "028475029020470949485384686",
    "246355749714957",
    "4686949083",
    "093276231",
    "710821628420",
    "5671431076387547691746",
    "25601777009421961189069672471",
    "32815824414667935457262391050171012",
    "04456",
    "7886262331192414",
    "310367107146943414636692551774259043131881",
    "289002427113785452336380863380016574613336",
    "68335020692696657286801982061799684156",
    "154192190561376702893127011",
    "8515597340",
    "71470341208027909882306950054103542239441",
    "1574754365300635103670872604555508989627",
    "790609521274336907519",
    "3586072675653240416886803122465442824090268245840",
    "2937",
    "63146254",
    "02224792606711397534821577025352211741302962202",
    "28430750063317550278578633048214089144553",
    "4534831978552965164131948281558",
    "2967552421510192237347175021197177333878",
    "49023821327119191026308305503659982837433",
    "458686845182367652447",
    "032437937741846045419592880226147",
    "87128286132832",
    "7866939527758288362301366127142195119167",
    "1755614880757414840349021079157897056829284571035",
    "461879964439551392955750",
    "33",
    "187894786712582185137844999592312",
    "0292815674511",
    "418324473598556718580714594841117688286",
    "6272",
    "80008696575726384728",
    "000016729532868016414001118559770839",
    "360356419907268654632604",
    "739048752145894665",
    "1423914103611333416666209612998650",
    "0994618958",
    "4403820785298729065165338698",
    "0744659779675944211",
    "55966517848075",
    "892632986026435471277899504432",
    "7301",
    "5487621816",
    "92977122912408192",
    "18151904992777567414988",
    "374327",
    "374816606488036317725043279477071763950",
    "49227002639868324784327274354408870",
    "97373333824964909826510628632233296",
    "9804155099485934209474313",
    "3233302764417434734362447170856911985007",
    "87741352341391238074",
    "7357070142971997455",
    "0431014690031680275859",
    "598",
    "480890076",
    "592525",
    "5199395361638",
    "120716",
    "6699701772601879496766124878286054493452289",
    "36892701346824",
    "5466060712575115076055374531595",
    "041310571160011544011",
    "9512618487581182",
    "8862670494156451158091182778",
    "5253089105752163357784515",
    "2691928",
    "2242",
    "0373135119640172593626693567150017713426",
    "83717481660424883558059989497310616916",
    "13595167800855746",
    "087227272",
    "696441789221",
    "695265198265",
    "4501486212254454138460770696213605530982461",
    "46066702193683366991748423410275056",
    "694093454102806559377836462638205195636301151",
    "530831182876",
    "911568841692892005475835773913179032",
    "4011257213843365315926971016597295136",
    "51761921",
    "63418011869116970354945464",
    "1711430179",
    "8610504703682064519863727939045812579646287784097",
    "232251867808744015457413166125",
    "1767167",
    "8711959062521450730101543617102",
    "795776853946",
    "02390867554521165130979",
    "0385252401923660837899675993148080596742",
    "474577839",
    "40099832017141180543769235774",
    "0666451590169073293403139385820982300115526754266",
    "52923046652587976731502408971",
    "18465756339241354925",
    "826836721040094114209229746035668345730015",
    "88985702594",
    "9053390928432206013675401173744706672448",
    "23787271574",
    "1673",
    "43948910004104045848",
    "714",
    "323616925438820407103117890111914774624128686",
    "48416578105154974401301935165512651979"
  ];
  // }}}

  common.testAlgo(algo, valid, invalid);

  describe("luhn.validate()", () => {
    it("accepts Number type as argument", () => {
      const shortCases = valid.slice(0, 16);
      shortCases.forEach(([num]) => {
        assert.ok(algo.validate(Number(num)), `validate(Number(${num})`);
      });
    });
  });
});

// vim: fdm=marker fmr&
