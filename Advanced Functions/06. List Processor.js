function solve(input) {
    let result = [];

    let command = (function () {
        return {
            add: (str) => {
                result.push(str);
            },
            remove: (str) => {
                result = result.filter((x) => x != str);
            },
            print: () => console.log(result.join(",")),
        };
    })();
    for (const line of input) {
        let [cmd, str] = line.split(" ");
        command[cmd](str);
    }
}
solve(["add hello", "add again", "remove hello", "add again", "print"]);
