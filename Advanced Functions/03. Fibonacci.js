function getFibonator() {
    let current = [0, 1];

    return function () {
        let last = current[current.length - 1];
        let newLast = last + current[current.length - 2];
        current.push(newLast);
        return last;
    };
}
let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
