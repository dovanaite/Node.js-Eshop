// //funkcija, kuri gauna prekių sąrašą ir jį atspausdina nurodytu formatu


function printList(list) {

    let table = [];

    let i = 0;
    for (const preke of list) {
        if (!preke.name ||
            typeof preke.name !== 'string' ||
            preke.name === '' ||
            !preke.price ||
            typeof preke.price !== 'object'
            // || Object.keys(item.price).length === 0
            ||
            !preke.price.value ||
            typeof preke.price.value !== 'number' ||
            preke.price.value < 0 ||
            !isFinite(preke.price.value) || //LEIDŽIA TIK SKAIČIUS
            !preke.price.currency ||
            !preke.inStock ||
            typeof preke.inStock !== 'number' ||
            preke.inStock % 1 !== 0 ||
            !preke.sold ||
            typeof preke.sold !== 'number') {
            continue;
        }
        try {
            table.push(`${++i}) ${preke.name}: ${preke.price.value} ${preke.price.currency}; parduota: ${preke.sold}; likutis: ${preke.inStock};`);

        } catch (error) {
            console.log('KRITINĖ KLAIDA')
        }
    }

    return table.join('\n\n');

}

module.exports = printList;