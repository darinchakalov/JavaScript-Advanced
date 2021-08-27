function solve(input) {
    let result = {}
    for (const line of input) {
        let [product, price] = line.split(' : ')
        result[product] = Number(price)
    }
    let keys =Object.keys(result).sort((a,b) => a.localeCompare(b))
    let letters = new Set;
    for (const el of keys) {
        letters.add(el[0])
    }
    
    let sorted = Object.entries(result).sort((a,b) => a[0].localeCompare(b[0]))
    for (const letter of letters) {
        console.log(letter);
        for (const product of sorted) {
            if (product[0][0] === letter) {
                console.log(`  ${product[0]}: ${product[1]}`);
            }
        }
    } 
}
solve([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
]);
