function solve(input) {
    let result = []
    for (const num of input) {
        if (num >= 0) {
            result.push(num)
        } else {
            result.unshift(num)
        }
    }
    return result
}
solve([7, -2, 8, 9])