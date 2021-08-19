function solve(input) {
    let test = input.split(/[\W+\s]+/)
    let pattern = /[A-Za-z]+/g
    let arr = input.match(pattern)
    let result = []
    for (let word of test) {
        if (word !== '') {
            result.push(word.toUpperCase())
        }
    }
    console.log(result.join(', '));
}
solve('Hi, how are you?')