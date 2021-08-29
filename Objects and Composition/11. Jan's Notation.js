function solve(input) {
    let arr = [];
    let error = false;
    for (const line of input) {
        if (Number.isInteger(line)) {
            arr.push(Number(line));
        } else {
            if (arr.length < 2) {
                console.log(`Error: not enough operands!`);
                error = true
                break;
            } else {
                let num2 = arr.pop();
                let num1 = arr.pop();
                switch (line) {
                    case "+":
                        arr.push(num1 + num2);
                        break;
                    case "-":
                        arr.push(num1 - num2);
                        break;
                    case "*":
                        arr.push(num1 * num2);
                        break;
                    case "/":
                        arr.push(num1 / num2);
                        break;
                }
            }
        }
    }
    if (arr.length > 1) {
        console.log(`Error: too many operands!`);
    } else {
        if (!error) {
            console.log(arr[0]);
        }
    }
}
solve([3, 4, "+"]);
solve([5, 3, 4, "*", "-"]);
solve([7, 33, 8, "-"]);
solve([15, "/"]);
