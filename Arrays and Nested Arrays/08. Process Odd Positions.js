function solve(input) {
    return input.filter((a,i) => i % 2 !== 0).map(x => x * 2).reverse().join(' ')
    /*let result = []
    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            result.push(input[i]*2)
        }
    }
    return result.reverse()*/
}
solve([10, 15, 20, 25])