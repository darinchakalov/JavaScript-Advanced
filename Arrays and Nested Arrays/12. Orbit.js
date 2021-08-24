function solve(input) {
    let [width, height, x, y] = input.map(Number)
    let matrix = []
    for (let i = 0; i < height; i++) {
        matrix[i] = new Array(width)
    }
    matrix[x][y] = 1
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            if (i !== x && k !== y) {
                matrix[i][j] = matrix[i].length
            }
        }
    }
}
solve([4, 4, 0, 0])