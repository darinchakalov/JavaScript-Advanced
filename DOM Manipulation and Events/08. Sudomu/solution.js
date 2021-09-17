function solve() {
    let table = document.querySelectorAll("td");
    let inputs = document.querySelectorAll("input");
    let checkBtn = document.querySelectorAll("button")[0];
    let clearBtn = document.querySelectorAll("button")[1];

    checkBtn.addEventListener("click", checkIfSudoku);

    clearBtn.addEventListener("click", clearSudoku);

    function checkIfSudoku() {
        let matrix = [
            [Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value)],
            [Number(inputs[3].value), Number(inputs[4].value), Number(inputs[5].value)],
            [Number(inputs[6].value), Number(inputs[7].value), Number(inputs[8].value)],
        ];

        let isSudoku = true;
        let reducer = (previousValue, currentValue) => previousValue + currentValue;
        let initialSum = matrix[0].reduce(reducer);
        for (let row = 0; row < 3; row++) {
            let rowSum = 0;
            let colSum = 0;
            for (let col = 0; col < 3; col++) {
                rowSum += matrix[row][col];
                colSum += matrix[col][row];
            }
            if (rowSum !== initialSum || colSum !== initialSum) {
                isSudoku = false;
                break;
            }
        }
        if (initialSum === 0) {
            isSudoku = false
        }

        if (isSudoku) {
            document.querySelector("#exercise > table").style.border = "2px solid green";
            document.querySelectorAll("p")[0].style.color = "green";
            document.querySelectorAll("p")[0].textContent = `You solve it! Congratulations!`;
        } else {
            document.querySelector("#exercise > table").style.border = "2px solid red";
            document.querySelectorAll("p")[0].style.color = "red";
            document.querySelectorAll("p")[0].textContent = `NOP! You are not done yet...`;
        }
    }

    function clearSudoku() {
        [...inputs].forEach(el => {
            el.value = ''
        });
        document.querySelectorAll("p")[0].textContent = "";
        document.querySelector("#exercise > table").style.border = "none";
    }
}
