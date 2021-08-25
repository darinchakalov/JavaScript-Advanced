function solve(input) {
    let [width, height, x, y] = input.map(Number);
    let matrix = [];
    for (let i = 0; i < height; i++) {
        matrix[i] = new Array(width);
    }
    matrix[x][y] = 1;
    let len = matrix[0].length;
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            matrix[i][k] = Math.max(Math.abs(i -x), Math.abs(k - y)) + 1
            
        }
    }
    for (const line of matrix) {
        console.log(line.join(" "));
    }
}
solve([5, 5, 4, 4]);
console.log('\n');
solve([5, 5, 2, 2]);
console.log('\n');
solve([5,5,1,1])
/*if (i < k) {
    matrix[i][k] = x - i + 1
} else {
    matrix[i][k] = y - k + 1
}*/
