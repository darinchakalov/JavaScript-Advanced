function solve(num, op1, op2, op3, op4, op5) {
    num = Number(num);
    let arr = [op1, op2, op3, op4, op5];
    for (const operation of arr) {
        switch (operation) {
            case "chop":
                num /= 2;
                break;
            case "dice":
                num = Math.sqrt(num);
                break;
            case "spice":
                num++
                break;
            case "bake":
                num *= 3
                break;
            case "fillet":
                num = num - (num * 0.20);
                break;
        }
        console.log(num);
    }
}
solve("32", "chop", "chop", "chop", "chop", "chop");
