function solve(input) {
    let rightSum = 0;
    let reversedSum = 0;

    /*for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (j === i) {
                rightSum += input[i][j];
            }
            if (j === (input[i].length - 1) - i) {
                reversedSum += input[i][j];
            }
        }
    }*/
    let firstIndex = 0
    let secondIndex = input[0].length -1;
    input.forEach(el => {
        rightSum += el[firstIndex++];
        reversedSum += el[secondIndex--];
    });

    console.log(rightSum, reversedSum);
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