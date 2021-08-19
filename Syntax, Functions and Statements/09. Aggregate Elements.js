function solve(input) {
    console.log(input.reduce((a,b) => Number(a) + Number(b)));
    let sum = 0
    for (const num of input) {
        sum += 1 / Number(num)
    }
    console.log(sum);
    console.log(input.reduce((a,b) => a.toString() + b.toString()));
}
solve(['1','2','3'])