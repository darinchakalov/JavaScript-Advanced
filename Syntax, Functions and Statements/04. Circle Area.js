function solve(input) {
    let typeofInput = typeof(input)
    if (typeofInput === 'number') {
        console.log((Math.PI*Math.pow(input, 2)).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeofInput}.`);
    }
}
solve(5)
solve('name')