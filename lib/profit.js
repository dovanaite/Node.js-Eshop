// // //funkcija, kuri skaičiuoja uždirbtų pinigų kiekį/ kiek suprekiauta

function profit(goodsInfo) {
    let profit = 0;

    for (const item of goodsInfo) {

        profit += (item.sold * item.price.value);
        valiuta = item.price.currency;
        // console.log('item.price.value', item.price.value);
        // console.log('item.price.sold', item.sold);

    }
    // console.log('PROFIT', profit);

    return profit;
}



module.exports = profit;