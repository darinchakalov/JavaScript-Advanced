function solve() {
    let counts = {}
    for (const arg of arguments) {
        console.log(`${typeof arg}: ${arg}`);
        if (!counts.hasOwnProperty(typeof arg)) {
            counts[typeof arg] = 1
        } else {
            counts[typeof arg] += 1
        }
    }
    for (const [type, count] of Object.entries(counts).sort((a,b) => b[1] - a[1])) {
        console.log(`${type} = ${count}`);
    }
}
solve('cat', 42, function () { console.log('Hello world!'); })

solve({ name: 'bob'}, 3.333, 9.999)