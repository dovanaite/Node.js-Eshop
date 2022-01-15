/*

UŽDUOTIS: 

-perskaityti visų produktų failus;
-susidėti visus produktus į vieną bendrą masyvą;
-išspausdinti produktų lentelę, kuri atrodys taip (žr. žemiau)

"Univermagas" pardavime turi:
----------------------------
1) Prekės pavadinimas: kaina valiuta; parduota: [kiekis]; likutis: [kiekis];
2) Prekės pavadinimas: kaina valiuta; parduota: [kiekis]; likutis: [kiekis];
3) Prekės pavadinimas: kaina valiuta; parduota: [kiekis]; likutis: [kiekis];
----------------------------
Parduotuvės suvestinė:
- turimų prekių sandėlyje: [total kiekis]
- parduotų prekių prekių: [total kiekis]
- suprekiauta suma: [total pinigu] [valiuta]
- maksimalus parduotuvės pardavimai: [total pinigu] [valiuta]

*/

const futureProfit = require("./lib/futureProfit.js");
const jsonParse = require("./lib/jsonParse.js");
const readFile = require("./lib/readFile.js");
const profit = require("./lib/profit.js");

console.log(readFile());
// console.log(profit());

(async() => {
    const prekes = ["arbata", "kvepalai", "masinos", "kebabai"];

    const prekiuInfo = [];

    for (const preke of prekes) {
        const fileContent = await readFile(preke);

        if (typeof fileContent == "string") {
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

    // console.log(await readFile("arbata"));
    // console.log(await readFile("kvepalai"));
    // console.log(await readFile("masinos"));
    // console.log(await readFile("kebabas"));

    // const parduotuve = [];
    // console.log(parduotuve);

    for (let i = 0; i < prekiuInfo.length; i++) {
        const prekesRusis = prekiuInfo[i]

        console.log(`${prekesRusis.name}: ${prekesRusis.price.value} ${prekesRusis.price.currency}; parduota: ${prekesRusis.sold}; likutis: ${prekesRusis.inStock}`);
    }
    for (let i = 0; i < prekiuInfo.length; i++) {
        const prekesRusis = prekiuInfo[i]
        const apyvarta = (prekesRusis.sold * prekesRusis.price.value).toFixed(2)
        const nesuprekiautaApyvarta = (prekesRusis.inStock * prekesRusis.price.value).toFixed(2)
        console.log('apyvarta', apyvarta)

        console.log(`Parduotuvės suvestinė:
        - turimų prekių sandėlyje: ${prekesRusis.inStock}
        - parduotų prekių prekių: ${prekesRusis.sold}
        - suprekiauta suma: ${apyvarta} ${prekesRusis.price.currency}
        - maksimalus parduotuvės pardavimai: ${nesuprekiautaApyvarta} ${prekesRusis.price.currency}`);
    }

})();