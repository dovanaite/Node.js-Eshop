// funkcija, kuri gauna prekiu sarasa ir ji isspausdina nurodytu formatu

function printList(list) {
    let table = [];

    let i = 0;
    for (const item of list) {
        if (!item.name ||
            typeof item.name !== 'string' ||
            item.name === '' ||
            !item.price ||
            typeof item.price !== 'object'
            // || Object.keys(item.price).length === 0
            ||
            !item.price.value ||
            typeof item.price.value !== 'number' ||
            item.price.value < 0 ||
            !isFinite(item.price.value) ||
            !item.price.currency ||
            !item.inStock ||
            typeof item.inStock !== 'number' ||
            item.inStock % 1 !== 0 ||
            !item.sold ||
            typeof item.sold !== 'number') {
            continue;
        }
        try {
            table.push(`${++i}) ${item.name}: ${item.price.value} ${item.price.currency}; parduota: ${item.sold}; likutis: ${item.inStock};`);
        } catch (error) {
            console.log('KRITINE KLAIDA');
            continue;
        }
    }

    return table.join('\n');
}

module.exports = printList;