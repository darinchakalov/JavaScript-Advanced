function solve(input) {
    let biggest = Number(input[0][0])
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[0].length; j++) {
            let current = Number(input[i][j]);
            if (current > biggest) {
                biggest = current;
            }
        }
    }
    return biggest;
}
solve([
    [20, 50, 10],
    [8, 33, 145],
]);
solve([
    [-20, -50, -10],
    [-8, -33, -145],
]);