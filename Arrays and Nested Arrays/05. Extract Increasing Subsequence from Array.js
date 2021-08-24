function solve(input) {
    let biggest = 0;
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        if (current >= biggest) {
            biggest = current;
            result.push(biggest);
        }
    }
    return result;
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
