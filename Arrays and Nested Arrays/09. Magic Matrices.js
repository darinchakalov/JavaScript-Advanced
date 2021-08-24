function solve(input) {
    let magic = true;
    let first = findSum(input[0]);

    for (const line of input) {
        let currentSum = findSum(line);
        if (currentSum !== first) {
            magic = false;
        }
    }

    for (let rows = 0; rows < input.length; rows++) {
        let sumCol = 0;
        for (let cols = 0; cols < input.length; cols++) {
            sumCol += input[cols][rows];
        }
        if (sumCol !== first) {
            magic = false;
            break;
        }
    }

    console.log(magic);

    function findSum(arr) {
        let sum = 0;
        for (const num of arr) {
            sum += num;
        }
        return sum;
    }
}
solve([
    [11, 32, 45],
    [21, 0, 1],
    ]);
