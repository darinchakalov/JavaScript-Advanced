function solve(input) {
    let half = Math.ceil(input.length / 2);
    input = input.sort((a, b) => a - b).reverse();
    return input.splice(0, half).reverse()
}
solve([4, 7, 2, 5]);
