function solve(input) {
    let towns = {}
    for (const line of input) {
        let [city, population] = line.split(' <-> ')
        population = Number(population)
        if (!towns.hasOwnProperty(city)) {
            towns[city] = population
        } else {
            towns[city] += population
        }
    }
    for (const [town, popu] of Object.entries(towns)) {
        console.log(`${town} : ${popu}`);
    }
}
solve([
    "Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000",
]);
