function calculator() {
    let obj = {s1: null, s2: null, res: null};
    obj.init = function (selector1, selector2, resultSelector) {
        s1 = document.querySelector(selector1)
        s2 = document.querySelector(selector2)
        res = document.querySelector(resultSelector)
    }
    obj.add = () => {
        res.value = Number(s1.value) + Number(s2.value)
    }
    obj.subtract = () => {
        res.value = Number(s1.value) - Number(s2.value)
    }
    return obj;
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
let num1 = $('#num1')
calculate.add;
