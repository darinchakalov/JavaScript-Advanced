function createSortedList() {
    let obj = {
        array: [],
        size: 0,
    };
    obj.add = (num) => {
        obj.array.push(num);
        obj.array.sort((a, b) => a - b);
        obj.size++;
    };
    obj.remove = (index) => {
        if (index >= 0 || index < obj.array.length) {
            obj.array.splice(index, 1);
            //obj.array.sort((a, b) => a - b);
            obj.size--
        } else {
            throw new Error('Index outside the array')
        }
    };
    obj.get = (index) => {
        if (index >= 0 || index < obj.array.length) {
            return obj.array[index];
        } else {
            throw new Error('Index outside the array')
        }
    };

    return obj;
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.size);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
