// funckija, kiek is viso butu buve galima uzdirbti

function maxProfit(goodsInfo) {

    let maxProfit = 0;

    for (const item of goodsInfo) {
        maxProfit += ((item.sold + item.inStock) * item.price.value);

    }
    return maxProfit;
}




module.exports = maxProfit;