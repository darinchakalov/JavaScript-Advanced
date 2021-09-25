function solution() {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavours: 0,
    };

    function restock(stuff, quantity) {
        stock[stuff] += Number(quantity);
        return "Success";
    }
    function prepare(stuff, quantity) {
        let carbStock = 0
        let flavStock = 0
        let fatStock = 0
        let proteinStock = 0
        switch (stuff) {
            case "apple":
                carbStock = 1 * Number(quantity);
                flavStock = 2 * Number(quantity);
                if (stock.carbohydrate >= carbStock && stock.flavours >= flavStock) {
                    stock.carbohydrate -= carbStock;
                    stock.flavours -= flavStock;
                    return "Success";
                } else {
                    
                }
                break;
            
        }
    }
    function noStock(s1, s2, s3) {
        if (s3 !== undefined) {
            if () {
                
            } else {
                
            }
        } else {

        }
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
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
