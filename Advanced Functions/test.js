function test() {
    let test1 = {
        1: 't',
        2: 'e',
        3: 's'
    }
    let test2 = Object.assign({}, test1)
    let test3 = {...test1}
    let test4 = test1

    test1['4'] = 't'
    test4['ddd'] = 'vvv'
    console.log(test1);
    console.log(test2);
    console.log(test3);
    console.log(test4);

}
test()