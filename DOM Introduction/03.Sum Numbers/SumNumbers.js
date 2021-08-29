function calc() {
    let n1 = document.getElementById("num1");
    let n2 = document.getElementById("num2");
    let result = document.getElementById("sum");
    //result.readOnly = false;
    console.log(Number(n1) + Number(n2));
    result.value = (Number(n1.value) + Number(n2.value));
}
