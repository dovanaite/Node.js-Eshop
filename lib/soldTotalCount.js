//funkcija, kuri skaičiuoja visų parduotų prekių kiekį


function soldTotalCount(goodsInfo) {
    let sold = 0;

    for (const item of goodsInfo) {

        sold += item.sold;
    }

    return sold;
}


module.exports = soldTotalCount;