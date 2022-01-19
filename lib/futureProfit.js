//funckija, kuri apskaičiuoja, už kiek dar galima suprekiauti iš likusių prekių


function futureProfit(goodsInfo) {
    let futureProfit = 0;

    for (const item of goodsInfo) {

        futureProfit += (item.inStock * item.price.value);

    }


    return futureProfit;
}



module.exports = futureProfit;