function extensibleObject() {
    let myProto = {};
    let extObj = Object.create(myProto);
    extObj.extend = function (template) {
        for (const key in template) {
            if (typeof template[key] === "function") {
                let proto = Object.getPrototypeOf(this);
                proto[key] = template[key];
            } else {
                this[key] = template[key];
            }
        }
    };
    return extObj;
}

const myObj = extensibleObject();

const template = {
    extensionMethod: function () {
        console.log(`this function works`);
    },
    extensionProperty: "test String ",
};

myObj.extend(template);
console.log(Object.getPrototypeOf(myObj).hasOwnProperty("extensionMethod"));
