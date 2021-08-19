function solve(input) {
    let correct = input;
    console.log(correct[0]);
    let reversed = [];
    for (let line of input) {
        reversed.push(line.reverse());
    }
    let result = [findDiagonalSum(correct), findDiagonalSum(reversed)];

    console.log(result.join(" "));

    function findDiagonalSum(arr) {
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input[i].length; j++) {
                if (j === i) {
                    sum += input[i][j];
                }
            }
        }
        return sum;
    }
}
solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89],
]);
solve([
    [20, 40],
    [10, 60],
]);
