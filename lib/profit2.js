// // //funkcija, kuri skaičiuoja uždirbtų pinigų kiekį/ kiek suprekiauta

function profit(money) {

    for (const preke of money) {

        const profit = (preke.sold * preke.price.value).toFixed(2)

        console.log(`suprekiauta prekės suma: : ${profit} ${preke.price.currency}`)
    }

}



module.exports = profit;