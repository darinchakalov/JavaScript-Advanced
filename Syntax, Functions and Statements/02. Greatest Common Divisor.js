function solve(n1, n2) {
    let res;
    for (let i = 1; i <= Math.min(n1, n2); i++) {
        if (n1 % i === 0 && n2 % i === 0) {
            res = i
        }
        
    }
    console.log(res);
}
solve(15, 5)