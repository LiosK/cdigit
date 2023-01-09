import { common } from "./common.js";
import { mod11_2 as algo } from "../lib/index.js";

describe(`${algo.longName} (${algo.name})`, () => {
  // {{{ List sample strings
  const valid = [
    ["0011757177482476", "001175717748247", "6"],
    ["7476336", "747633", "6"],
    ["7344045298056080", "734404529805608", "0"],
    ["418129259", "41812925", "9"],
    ["986596515101003X", "986596515101003", "X"],
    ["1778043904", "177804390", "4"],
    ["8999526", "899952", "6"],
    ["82001070289436", "8200107028943", "6"],
    ["65834910862726", "6583491086272", "6"],
    ["1183444155021", "118344415502", "1"],
    ["9825464", "982546", "4"],
    ["0001945859", "000194585", "9"],
    ["82703512512057X", "82703512512057", "X"],
    ["43386", "4338", "6"],
    ["0077631611488", "007763161148", "8"],
    ["7908303594550", "790830359455", "0"],
    ["47317222700", "4731722270", "0"],
    ["0000884866190340", "000088486619034", "0"],
    ["40274887937", "4027488793", "7"],
    ["18308", "1830", "8"],
    ["40148510", "4014851", "0"],
    ["4312344506", "431234450", "6"],
    ["814264171763X", "814264171763", "X"],
    ["49676608298713", "4967660829871", "3"],
    ["4839331627035", "483933162703", "5"],
    ["4732355148X", "4732355148", "X"],
    ["164966998536", "16496699853", "6"],
    ["44925710798", "4492571079", "8"],
    ["8388X", "8388", "X"],
    ["74072194943", "7407219494", "3"],
    ["845546775241", "84554677524", "1"],
    ["00488444211", "0048844421", "1"],
    ["0455276", "045527", "6"],
    ["007426109245830", "00742610924583", "0"],
    ["0023680363843", "002368036384", "3"],
    ["84000361124402", "8400036112440", "2"],
    ["6721029", "672102", "9"],
    ["2204368106", "220436810", "6"],
    ["7580440350732", "758044035073", "2"],
    ["3382949X", "3382949", "X"],
    ["1776377783", "177637778", "3"],
    ["89907", "8990", "7"],
    ["3721781955829", "372178195582", "9"],
    ["29031", "2903", "1"],
    ["671881018208", "67188101820", "8"],
    ["009595345834", "00959534583", "4"],
    ["001247346528086750", "00124734652808675", "0"],
    ["4363306630", "436330663", "0"],
    ["3544266013146", "354426601314", "6"],
    ["3180133998", "318013399", "8"],
    ["635226408666477", "63522640866647", "7"],
    ["93355106645189", "9335510664518", "9"],
    ["151475", "15147", "5"],
    ["000057892695714", "00005789269571", "4"],
    ["0088102296842119", "008810229684211", "9"],
    ["4572462877712", "457246287771", "2"],
    ["000761555343", "00076155534", "3"],
    ["000010589067", "00001058906", "7"],
    ["68647", "6864", "7"],
    ["2340989126", "234098912", "6"],
    ["9428", "942", "8"],
    ["30350076177", "3035007617", "7"],
    ["7818586135", "781858613", "5"],
    ["2497904928", "249790492", "8"],
    ["3524547417205688735929977843815", "352454741720568873592997784381", "5"],
    [
      "984209267947541134823126725540161274066766",
      "98420926794754113482312672554016127406676",
      "6",
    ],
    ["33751", "3375", "1"],
    [
      "40907337141175001314559419167080",
      "4090733714117500131455941916708",
      "0",
    ],
    ["164908722566", "16490872256", "6"],
    [
      "019004728982241242344684177475068509043",
      "01900472898224124234468417747506850904",
      "3",
    ],
    [
      "8006624820959368054652036020050805",
      "800662482095936805465203602005080",
      "5",
    ],
    [
      "0141286384511160987821135754810127",
      "014128638451116098782113575481012",
      "7",
    ],
    ["3488544415374028515", "348854441537402851", "5"],
    [
      "647819310800604844758288301336465820199853",
      "64781931080060484475828830133646582019985",
      "3",
    ],
    ["357330316217543025X", "357330316217543025", "X"],
    ["1469531553020311686891301", "146953155302031168689130", "1"],
    [
      "93938495201039966768460154704864288629613995908",
      "9393849520103996676846015470486428862961399590",
      "8",
    ],
    [
      "818721983601329952689828816011399",
      "81872198360132995268982881601139",
      "9",
    ],
    ["190217596563", "19021759656", "3"],
    [
      "282173239745680571960577128026306330",
      "28217323974568057196057712802630633",
      "0",
    ],
    [
      "35189001806651923418206332025273792107339",
      "3518900180665192341820633202527379210733",
      "9",
    ],
    [
      "7811475608646276078547323343961873799",
      "781147560864627607854732334396187379",
      "9",
    ],
    ["955210930992800175902666376", "95521093099280017590266637", "6"],
    ["618114891986230722", "61811489198623072", "2"],
    [
      "9269750906381297086349286925355340068",
      "926975090638129708634928692535534006",
      "8",
    ],
    ["425349575", "42534957", "5"],
    ["806423476714929054245", "80642347671492905424", "5"],
    [
      "0436384604647801098627433534027031033",
      "043638460464780109862743353402703103",
      "3",
    ],
    ["794834242", "79483424", "2"],
    ["01", "0", "1"],
    ["315985719772213", "31598571977221", "3"],
    ["8665286", "866528", "6"],
    ["470616505453459", "47061650545345", "9"],
    ["570078910327597075041071", "57007891032759707504107", "1"],
    ["003529473352719", "00352947335271", "9"],
    ["518004435413007", "51800443541300", "7"],
    ["570", "57", "0"],
    ["759691", "75969", "1"],
    ["645558272602047", "64555827260204", "7"],
    [
      "33324483787120908812028323349629354912961",
      "3332448378712090881202832334962935491296",
      "1",
    ],
    [
      "523636084303647525209118924026321158003270",
      "52363608430364752520911892402632115800327",
      "0",
    ],
    ["11433748860979X", "11433748860979", "X"],
    ["531995314685546442659791", "53199531468554644265979", "1"],
    ["5312", "531", "2"],
    [
      "691869780192465467581322294517542807130039459950",
      "69186978019246546758132229451754280713003945995",
      "0",
    ],
    ["92092975412", "9209297541", "2"],
    [
      "42669291115030016051639896408229170X",
      "42669291115030016051639896408229170",
      "X",
    ],
    ["16441", "1644", "1"],
    ["968", "96", "8"],
    ["9174914963821", "917491496382", "1"],
    [
      "93086163307745347735330239213400013249466",
      "9308616330774534773533023921340001324946",
      "6",
    ],
    [
      "77301157615638576337614751502845585",
      "7730115761563857633761475150284558",
      "5",
    ],
    [
      "0008232734083642886284969097813438136467",
      "000823273408364288628496909781343813646",
      "7",
    ],
    [
      "784418366292083208934520127020489",
      "78441836629208320893452012702048",
      "9",
    ],
    ["7039336100238058870685253605", "703933610023805887068525360", "5"],
    [
      "8878867032890119373097838505154457",
      "887886703289011937309783850515445",
      "7",
    ],
    ["018738739799", "01873873979", "9"],
    [
      "6965939346237849284494373853453005",
      "696593934623784928449437385345300",
      "5",
    ],
    [
      "78646062330592508810294764575856867935343030",
      "7864606233059250881029476457585686793534303",
      "0",
    ],
    [
      "9400955974061983043464649492007080948823756",
      "940095597406198304346464949200708094882375",
      "6",
    ],
    ["25452977066473141854", "2545297706647314185", "4"],
    ["28", "2", "8"],
    ["11793553", "1179355", "3"],
    [
      "60190625303892707052452083916151801058754221439X",
      "60190625303892707052452083916151801058754221439",
      "X",
    ],
    [
      "92790493500776944440936657668332868",
      "9279049350077694444093665766833286",
      "8",
    ],
    ["6839494752826402605", "683949475282640260", "5"],
    [
      "910938462212219331515508499926839736693",
      "91093846221221933151550849992683973669",
      "3",
    ],
    ["339255386762", "33925538676", "2"],
    [
      "3203500529789454273299571256187364",
      "320350052978945427329957125618736",
      "4",
    ],
    ["394290548516475657", "39429054851647565", "7"],
    [
      "36672995098872366940704252410883297896",
      "3667299509887236694070425241088329789",
      "6",
    ],
    ["76380", "7638", "0"],
    [
      "099760946630237810495931531353027162028295",
      "09976094663023781049593153135302716202829",
      "5",
    ],
    ["228557834514", "22855783451", "4"],
    [
      "6441735842447655625882458783087713919",
      "644173584244765562588245878308771391",
      "9",
    ],
    ["36", "3", "6"],
    [
      "9009453698080836607800238466548267281",
      "900945369808083660780023846654826728",
      "1",
    ],
    ["9324373708964007932845978", "932437370896400793284597", "8"],
    ["81363295558572603952086", "8136329555857260395208", "6"],
    [
      "721298576743097028922035624911008542686377",
      "72129857674309702892203562491100854268637",
      "7",
    ],
    ["36759013067530748135316993", "3675901306753074813531699", "3"],
    ["182052191626058086447416", "18205219162605808644741", "6"],
    [
      "49680056365226050734900669483691184895717152461",
      "4968005636522605073490066948369118489571715246",
      "1",
    ],
    ["683243963325670157730152X", "683243963325670157730152", "X"],
    ["9688334327580953", "968833432758095", "3"],
    [
      "88117016006997516751019657433595",
      "8811701600699751675101965743359",
      "5",
    ],
    ["461238", "46123", "8"],
    ["5865231", "586523", "1"],
    ["195159414470978977069435", "19515941447097897706943", "5"],
    [
      "77687678102431174995659614384759401608",
      "7768767810243117499565961438475940160",
      "8",
    ],
    [
      "688768247593401810522420113525970430365666930191",
      "68876824759340181052242011352597043036566693019",
      "1",
    ],
    [
      "199036096414526087924521384976303852279",
      "19903609641452608792452138497630385227",
      "9",
    ],
    ["16729634363", "1672963436", "3"],
    ["849710310269", "84971031026", "9"],
    [
      "119787327368292777656348703101413466",
      "11978732736829277765634870310141346",
      "6",
    ],
    ["60X", "60", "X"],
    ["47856611033140162903070534X", "47856611033140162903070534", "X"],
    ["2550697165456401830", "255069716545640183", "0"],
    [
      "66898807555867617585387251991724268550960968456",
      "6689880755586761758538725199172426855096096845",
      "6",
    ],
    [
      "617223776743644533413522820816052186576265602196",
      "61722377674364453341352282081605218657626560219",
      "6",
    ],
    ["179689", "17968", "9"],
    [
      "41124234736859793812287135095874042237725376",
      "4112423473685979381228713509587404223772537",
      "6",
    ],
    ["84615812648", "8461581264", "8"],
    ["4790214335", "479021433", "5"],
    [
      "524440602769545282125370136110392671050888271",
      "52444060276954528212537013611039267105088827",
      "1",
    ],
    ["60", "6", "0"],
    [
      "0276811098833375054102004931742197",
      "027681109883337505410200493174219",
      "7",
    ],
    [
      "7173224200057020538454554757585616383901",
      "717322420005702053845455475758561638390",
      "1",
    ],
    ["061735708407545838046010", "06173570840754583804601", "0"],
    ["2238484018424527191791212966309", "223848401842452719179121296630", "9"],
    ["7259614422602555067151072687", "725961442260255506715107268", "7"],
    ["98299", "9829", "9"],
    [
      "9480407921184877667984143560429089829824776166",
      "948040792118487766798414356042908982982477616",
      "6",
    ],
    [
      "566351312964014948873761212958237323848771380",
      "56635131296401494887376121295823732384877138",
      "0",
    ],
    ["8660588881250959235X", "8660588881250959235", "X"],
    ["70480553223018818108202554366", "7048055322301881810820255436", "6"],
    ["558017183550389951", "55801718355038995", "1"],
    [
      "7617999068427842931787763626587018776170815907X",
      "7617999068427842931787763626587018776170815907",
      "X",
    ],
    ["2269349395", "226934939", "5"],
    ["72969392486105462325051", "7296939248610546232505", "1"],
    [
      "8383823843012000782108735460858504955548629",
      "838382384301200078210873546085850495554862",
      "9",
    ],
    [
      "22562697637815556409568180855273121492488663",
      "2256269763781555640956818085527312149248866",
      "3",
    ],
    ["5832941265045006", "583294126504500", "6"],
    ["578814298286220795640146030403", "57881429828622079564014603040", "3"],
    ["056981121187", "05698112118", "7"],
    ["29424647077685450X", "29424647077685450", "X"],
    [
      "774620849928434370627771135836833401199620738531",
      "77462084992843437062777113583683340119962073853",
      "1",
    ],
    ["80075539514", "8007553951", "4"],
    ["150921423950", "15092142395", "0"],
    ["190028", "19002", "8"],
    ["8606341958175395046186969922", "860634195817539504618696992", "2"],
    [
      "628683040591214114342896152812300216062473804015",
      "62868304059121411434289615281230021606247380401",
      "5",
    ],
  ];

  const invalid = [
    "7476337",
    "342299031259625387591418182673166975222929480",
    "495816629051",
    "2481883078897157541257068X",
    "849417252667266898450983049819139270166166691859",
    "842114920080020222586539832",
    "7327509827727475890095198185014533628729783033",
    "78738817142067909880332557384473",
    "1600790191220574261847076342",
    "3704241889437156431794498316373",
    "93709133708101991759576059171116572170721687323X",
    "97X",
    "77494421",
    "39308061949184",
    "2090707338484419",
    "0003882322007280765784428905050831149",
    "99412953385721711354402240975024347586814",
    "921722971247049248820",
    "01246240651718079713583391X",
    "595694996496402395120386612532",
    "7460043949290754078882645",
    "2939770134200365561159031112941382989871",
    "7271037992365700614142097777837669431082836",
    "00108666792161",
    "22318372X",
    "90444787590898980616098356582095576778",
    "7239917554940207590060586726891594463599160062",
    "338522039897954895964",
    "14049286485365523182852",
    "835273873702325662606684",
    "116306012771504031",
    "2431520613859199590869283200817337579",
    "896178047254382978412078541527140358832247",
    "04393551245",
    "5048040729849661774524748311366429177249401366689",
    "5X",
    "8050700911689055827656164918928206321759850869399",
    "3484219",
    "2985947372056193819986979306446269571458844994",
    "1842379204840344957113145485",
    "036428253918492925863637411549366605174632118X",
    "488011976285",
    "0348461360988546857107101486126958312144657",
    "72276988663473",
    "229644453",
    "40916",
    "5424560",
    "7409724466125",
    "85",
    "037136937988326566451479886173981380081",
    "17220848003252569210585781054694051",
    "3711",
    "0213731086662489479978504368592989",
    "697257",
    "280631810894865593537683371",
    "2945",
    "406323496335745",
    "4142800597817776454289559X",
    "3495959895405870069706",
    "57821820056878",
    "255947593600179524776482477234473",
    "1851797758711449648960690731231677446251X",
    "9558386412688985986596105294142870386",
    "03301008580629131259471118269907",
    "717845684676180644422892388769125016",
    "770673552925763738706798474892940",
    "20839020148567714500539026909820684936299614444",
    "75149470557328600768",
    "253406",
    "4374625940401686265679911038203767895646279604",
    "0412841605570",
    "1583234487154634156",
    "767793520708773487168639299381298637143",
    "54832828018966764479327931483340",
    "8277595416270441",
    "8432871415482885677455942731481048061691117369X",
    "074516792356481018371422657271",
    "5552658965",
    "061950489750567061760190892289962248732363643",
    "5736949797645775265037554",
    "24529133677069703758232427845718",
    "83673556772786806481901773873464112503504811779",
    "8326748454711395137709110556917653596509146397400",
    "1196861201969204943",
    "9657604",
    "90567394853192306",
    "4825763557642603461647185413883",
    "5059145156771001483099679079965461900134075655670",
    "669889536872534058834277321984441392169843278",
    "49921402073399894276",
    "9635212848106618016360915361264473",
    "4384211464443935326756051698612232X",
    "008062368848725667197916234485069216733844731",
    "73549",
    "85885720859",
    "5859601776784810339920858102458",
    "834955350400565650994647253354434305191",
    "971493625269495741588852041607326068712",
    "93144953",
    "556571777727",
    "4284651224696715305186469238631337615696",
    "3489432969288890043410",
    "03518359111818998048774513437514179236460X",
    "11850894638288",
    "11799819",
    "2948571430967382888943005546952649566",
    "399295179436351539050921789643037741375964844",
    "909410383069744102557",
    "16110380909262678682163488404080152199X",
    "143500891293385718433528",
    "091562268893827",
    "9204852922448",
    "12324247872517030650063636636728543252589",
    "8002611474224472688351781",
    "08996688338522735342847415791234",
    "481968512",
  ];
  // }}}

  const charMap = Object.fromEntries([..."0123456789X"].map((c, i) => [c, i]));
  const numVals = valid.map(([, src, cc]) => {
    return [
      [...src.replace(/[^0-9]/g, "")].map((c) => charMap[c]),
      [...cc].map((c) => charMap[c]),
    ];
  });

  common.testAlgo(algo, valid, invalid, numVals);
});

// vim: fdm=marker fmr&
