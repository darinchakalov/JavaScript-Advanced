class Stringer {
    constructor (string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(n){
        this.innerLength += Number(n)
    }
    decrease(n){
        if (this.innerLength - Number(n) < 0) {
            this.innerLength = 0
        } else {
            this.innerLength -= Number(n)
        }
    }
    toString() {
        if (this.innerLength === 0) {
            return '...'
        } else {
            if (this.innerLength < this.innerString.length) {
                return `${this.innerString.substring(0,this.innerLength)}...`
            }else{
                return this.innerString
            }
        }
    }
}
let test = new Stringer('Test', 5)
console.log(test.toString());
test.decrease(3)
console.log(test.toString());
test.decrease(5)
console.log(test.toString());
test.increase(4)
console.log(test.toString());