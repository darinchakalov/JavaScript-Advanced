class Hex {
    constructor(value) {
        this.value = Number(value);
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }
    plus(num) {
        let result = (this.value + Number(num))
        return new Hex(result)
    }
    minus(num) {
        let result = (this.value - Number(num))
        return new Hex(result)
    }
    parse(hexString) {
        return parseInt(hexString, 16)
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === "0xF");
console.log(b.parse("AAA"));
//console.log(Hex.parse('AAA'));