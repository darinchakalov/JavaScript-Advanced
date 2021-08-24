function solve(input) {
    "use strict";
    let result = [];
    let current = 0;
    for (const command of input) {
        if (command === "add") {
            current++;
            result.push(current);
        } else {
            current++;
            result.pop();
        }
    }
    if (result.length <= 0) {
        console.log(`Empty`);
    } else {
        for (const el of result) {
            console.log(el);
        }
    }
}
//solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
