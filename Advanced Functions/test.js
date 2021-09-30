function calculator() {
    let obj = {s1: null, s2: null}
    obj.init = (selector1, selector2) => {
        s1 = selector1
        s2 = selector1
    }
    obj.add = () => {
        return s1
    }
    return obj;
}

let test = calculator()
test.init(1,2)
console.log(test.add());