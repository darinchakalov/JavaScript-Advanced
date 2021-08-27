function solve(input) {
    let result = {};
    for (const line of input) {
        let [town, product, price] = line.split(' | ')
        if (!result.hasOwnProperty(product)) {
            result[product] = []
            result[product] = [Number(price), town]
        } else {
            if (Number(price) < result[product][0]) {
                result[product] = [Number(price), town]
            }
        }
    }
    for (const [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value[0]} (${value[1]})`);
    }
}
solve([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
]);
console.log('');
solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'])