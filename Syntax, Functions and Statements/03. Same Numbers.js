function solve(input) {
    let arr = input.toString().split("");
    let sum = 0;
    for (const n of arr) {
        sum += Number(n);
    }
    let n = Number(arr.shift());
    let same = true;
    for (const num of arr) {
        if (Number(num) === n) {
            continue;
        } else {
            same = false;
            break;
        }
    }
    if (same) {
        console.log(true);
    } else {
        console.log(false);
    }
    console.log(sum);
}
solve(1234);
