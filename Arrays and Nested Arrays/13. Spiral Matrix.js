function solve(x, y) {
    let len = x;
    let n = 1;
    let matrix = [];
    for (let i = 0; i < Number(x); i++) {
        matrix[i] = new Array(y);
    }
    let top = 0;
    let right = y - 1;
    let bottom = x - 1;
    let left = 0;
    while (!checkIfFull(matrix)) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = n++;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = n++;
        }
        right--;
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = n++;
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = n++;
        }
        left++
    }
    for (const line of matrix) {
        console.log(line.join(" "));
    }

    function checkIfFull(matrix) {
        let full = true;
        matrix.forEach(line => {
            if (line.includes(undefined)) {
                full = false
            }
        });
        return full;
    }
}
solve(5, 5
    );
