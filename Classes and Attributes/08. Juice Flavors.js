function solve(input) {
    let juices = {};
    let result = {};
    for (const line of input) {
        let [juice, quantity] = line.split(" => ");
        if (!juices.hasOwnProperty(juice)) {
            juices[juice] = Number(quantity);
        } else {
            juices[juice] += Number(quantity);
        }
        if (juices[juice] >= 1000) {
            let bottles = Math.floor(juices[juice] / 1000);
            if (!result.hasOwnProperty(juice)) {
                result[juice] = bottles;
            } else {
                result[juice] += bottles;
            }
            juices[juice] -= bottles * 1000;
        }
    }
    for (const [j, q] of Object.entries(result)) {
        console.log(`${j} => ${q}`);
    }
}
solve(["Orange => 2000", "Peach => 1432", "Banana => 450", "Peach => 600", "Strawberry => 549"]);

console.log();

solve(["Kiwi => 234", "Pear => 2345", "Watermelon => 3456", "Kiwi => 4567", "Pear => 5678", "Watermelon => 6789"]);
