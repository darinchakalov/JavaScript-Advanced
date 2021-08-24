function solve(input) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
    ];

    let player = "X";
    let winner;

    for (const command of input) {
        let [x, y] = command.split(" ").map(Number);
        if (board[x][y] === false) {
            board[x][y] = player;
            if (checkIfWins(board, player)) {
                console.log(`Player ${player} wins!`);
                printResult(board);
                break;
            }
            if (!checkFreeSpaces(board)) {
                console.log(`The game ended! Nobody wins :(`);
                printResult(board);
                break;
            }
            player = player === 'X' ? 'O' : 'X';
        } else {
            console.log(`This place is already taken. Please choose another!`);
        }
    }

    function printResult(arr) {
        for (const line of arr) {
            console.log(line.join("\t"));
        }
    }

    function checkFreeSpaces(arr) {
        let hasFalse = false;
        for (const line of board) {
            if (line.includes(false)) {
                hasFalse = true;
            }
        }
        return hasFalse;
    }

    function checkIfWins(arr, player) {
        let wins = false;

        for (let i = 0; i < 3; i++) {
            if (arr[0][i] === player && arr[1][i] === player && arr[2][i] === player) {
                wins = true;
                break;
            }
            if (arr[i][0] === player && arr[i][1] === player && arr[i][2] === player) {
                wins = true;
                break;
            }
        }
        if (!wins) {
            if (
                (arr[0][0] === player && arr[1][1] === player && arr[2][2] === player) ||
                (arr[0][2] === player && arr[1][1] === player && arr[2][0] === player)
            ) {
                wins = true;
            }
        }
        return wins;
    }
}
solve(["0 0", "1 0", "0 1", "2 0", "0 2", "1 1", "1 2", "2 2", "2 1", "0 0"]);
