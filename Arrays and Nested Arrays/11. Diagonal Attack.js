function solve(input) {
    let matrix = [];
    for (let line of input) {
        let current = line.split(" ").map(Number);
        matrix.push(current);
    }
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            if (k === i) {
                leftDiagonal += matrix[i][k];
            }
            if (k === matrix[i].length - 1 - i) {
                rightDiagonal += matrix[i][k];
            }
        }
    }
    if (leftDiagonal === rightDiagonal) {
        for (let i = 0; i < matrix.length; i++) {
            for (let k = 0; k < matrix[i].length; k++) {
                if (k !== i && k !== matrix[i].length - 1 - i) {
                    matrix[i][k] = leftDiagonal;
                }
            }
        }
        printResult(matrix)
    } else {
        printResult(matrix);
    }

    function printResult(arr) {
        for (const line of arr) {
            console.log(line.join(" "));
        }
    }
}
solve(["5 3 12 3 1", "11 4 23 2 5", "101 12 3 21 10", "1 4 5 2 2", "5 22 33 11 1"]);
