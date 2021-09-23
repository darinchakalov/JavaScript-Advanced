function solve(input) {
    let result = {}

    let obj = (function () {
        return {
            create: (name) => {
                result[name] = {}
            },
            inherit: (newObj, oldObj) => {
                result[newObj] = {}
                result[newObj]['inherit'] = result[oldObj]
            }, 
            set: (name, k, v) => {
                result[name][k] = v;
            },
            print: (name) => {
                for (const [key, value] of Object.entries(result[name])) {
                    console.log(`${key}:${value}`);
                }
            }
        }
    })();



    for (const line of input) {
        let [cmd, first, second, third] = line.split(' ')
        switch (cmd) {
            case 'create':
                if (second) {
                    obj[second](first, third);
                }else{
                    obj[cmd](first)
                }
                break;
            case 'set':
                obj[cmd](first,second,third)
                break;
            case 'print':
                obj[cmd](first);
        }
    }
}
solve(["create c1", "create c2 inherit c1", "set c1 color red", "set c2 model new", "print c1", "print c2"]);
