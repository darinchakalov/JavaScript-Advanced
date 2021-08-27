function solve(input) {
    let result = [];
    for (const line of input) {
        let [name, level, items] = line.split(" / ");
        let itemArr = items ? items.split(', ') : []
        result.push({
            name: name,
            level: Number(level),
            items: itemArr 
        });
    }
    console.log(JSON.stringify(result));
}
solve(["Isacc / 25 / Apple, GravityGun", "Derek / 12 / BarrelVest, DestructionSword", "Hes / 1 "]);
