const futureProfit = require("./lib/futureProfit.js");
const jsonParse = require("./lib/jsonParse.js");
const readFile = require("./lib/readFile.js");
const profit = require("./lib/profit.js");
const printList = require("./lib/printList.js");
const inStockTotalCount = require("./lib/inStockTotalCount.js");

console.log(readFile());
// console.log(profit());

(async() => {
    const prekes = ["arbata", "kvepalai", "masinos", "kebabai"];

    const prekiuInfo = [];

    for (const preke of prekes) {
        const fileContent = await readFile(preke);

        if (typeof fileContent === "string" && fileContent !== "") {
            if (jsonParse(fileContent)[0] !== true) {
                prekiuInfo.push(jsonParse(fileContent)[1]);
            } else {
                console.log("SORI, NERASTA:", preke);
            }
        } else {
            console.log("FAILAS NERASTAS:", preke);
        }
    }
    console.log("prekiu info:", prekiuInfo);


    console.log('---------------------------------')
        // for (let i = 0; i < prekiuInfo.length; i++) {
        //     const prekesRusis = prekiuInfo[i]

    //     console.log(`${prekesRusis.name}: ${prekesRusis.price.value} ${prekesRusis.price.currency}; parduota: ${prekesRusis.sold}; likutis: ${prekesRusis.inStock}.`);
    // }


    console.log(printList(prekiuInfo));
    console.log('---------------------------------')
    console.log(profit(prekiuInfo))
    console.log('---------------------------------')
    console.log(futureProfit(prekiuInfo))
    console.log('---------------------------------')

    for (let i = 0; i < prekiuInfo.length; i++) {
        const prekesRusis = prekiuInfo[i]
        const apyvarta = (prekesRusis.sold * prekesRusis.price.value).toFixed(2)
        const nesuprekiautaApyvarta = (prekesRusis.inStock * prekesRusis.price.value).toFixed(2)
            // console.log('apyvarta', apyvarta)

        console.log(`Parduotuvės suvestinė:
        - turimų prekių sandėlyje: ${prekesRusis.inStock}
        - parduotų prekių prekių: ${prekesRusis.sold}
        - suprekiauta suma: ${apyvarta} ${prekesRusis.price.currency}
        - maksimalus parduotuvės pardavimai: ${nesuprekiautaApyvarta} ${prekesRusis.price.currency}`);
    }

})();