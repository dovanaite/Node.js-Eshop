// // //funkcija, kuri skaičiuoja uždirbtų pinigų kiekį/ kiek suprekiauta

function profit(goodsInfo) {
    let profits = 0;

    for (const item of goodsInfo) {

        profits += (item.sold * item.price.value);
        valiuta = item.price.currency;
        // console.log('item.price.value', item.price.value);
        // console.log('item.price.sold', item.sold);

    }
    // console.log('PROFIT', profit);

    return profits;
}



module.exports = profit;