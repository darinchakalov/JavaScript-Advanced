class List {
    constructor() {
        this.result = [];
        this.size = 0;
    }
    add(num) {
        this.size++;
        this.result.push(Number(num));
        this.result.sort((a,b) => a-b);
    }
    remove(index) {
        if (Number(index) >= 0 && Number(index) < this.result.length) {
            this.size--;
            this.result.splice(Number(index), 1);
            this.result.sort((a,b) => a-b);
        }
    }
    get(index) {
        if (Number(index) >= 0 && Number(index) < this.result.length) {
            return this.result.sort((a,b) => a-b)[Number(index)];
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
