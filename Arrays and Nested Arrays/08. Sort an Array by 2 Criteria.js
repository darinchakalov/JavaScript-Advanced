function solve(input) {
    input = input.sort((a, b) => sortByLenghtAndName(a, b));

    for (const el of input) {
        console.log(el);
    }

    function sortByLenghtAndName(a, b) {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            if (a.localeCompare(b)) {
                return 1;
            } else {
                return -1;
            }
        }
    }
}
solve(["Deny", "omen", "test", "Default"]);
