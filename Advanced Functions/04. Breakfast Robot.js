function solution() {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    let receipts = {
        apple: {protein: 0, carbohydrate: 1, fat: 0, flavour: 2},
        lemonade: {protein: 0, carbohydrate: 10, fat: 0, flavour: 20},
        burger: {protein: 0, carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, carbohydrate: 0, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
    }

    function restock(stuff, quantity) {
        stock[stuff] += Number(quantity);
        return "Success";
    }
    function prepare(stuff, quantity) {
        quantity = Number(quantity)
        if (quantity * receipts[stuff].protein > stock.protein) {
            return `Error: not enough protein in stock`
        } else if (quantity * receipts[stuff].carbohydrate > stock.carbohydrate) {
            return `Error: not enough carbohydrate in stock`
        }else if (quantity * receipts[stuff].fat > stock.fat) {
            return `Error: not enough fat in stock`
        }else if (quantity * receipts[stuff].flavour > stock.flavour) {
            return `Error: not enough flavour in stock`
        } else {
            stock.protein -= quantity * receipts[stuff].protein
            stock.carbohydrate -= quantity * receipts[stuff].carbohydrate
            stock.fat -= quantity * receipts[stuff].fat
            stock.flavour -= quantity * receipts[stuff].flavour
            return `Success`
        }
    }
    function report() {
        let result = []
        for (const [key, value] of Object.entries(stock)) {
            result.push(`${key}=${value}`)
        }
        return result.join(' ')
    }
    
    return function (input) {
        let [command, stuff, quantity] = input.split(" ");
        switch (command) {
            case "restock":
                return restock(stuff, quantity);
                break;
            case "prepare":
                return prepare(stuff, quantity);
                break;
            case "report":
                return report();
                break;
        }
    };
}
let manager = solution();
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));