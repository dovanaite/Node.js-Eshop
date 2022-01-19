// const IsValid = require("./IsValid.js");

function inStockTotalCount(goodsInfo) {
    let inStock = 0;

    for (const item of goodsInfo) {

        inStock += item.inStock
    }

    return inStock;
}


module.exports = inStockTotalCount;