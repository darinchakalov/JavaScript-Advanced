function createSortedList() {
    let obj = {}
    let result = []
    obj.size = result.length;
    obj.add = (num) => {
        result.push(num);
        result.sort((a, b) => a - b);
    }
    obj.remove = (index) => {
        result.splice(index, 1);
        result.sort((a, b) => a - b);
    };
    obj.get = (index) => {
        return result[index];
    };
    return obj
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.result);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));	

