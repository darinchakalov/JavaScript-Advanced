function solve(input) {
    let catalogue = {}
    for (const line of input) {
        let [brand, model, produced] = line.split(' | ');
        if (!catalogue.hasOwnProperty(brand)) {
            catalogue[brand] = {}
            catalogue[brand][model] = Number(produced)
        } else {
            if (!catalogue[brand].hasOwnProperty(model)) {
                catalogue[brand][model] = Number(produced)
            } else {
                catalogue[brand][model] += Number(produced)
            }
        }
    }
    for (const [brand, model] of Object.entries(catalogue)) {
        console.log(brand);
        for (const [mod,quantity] of Object.entries(catalogue[brand])) {
            console.log(`###${mod} -> ${quantity}`);
        }
    }
}
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])