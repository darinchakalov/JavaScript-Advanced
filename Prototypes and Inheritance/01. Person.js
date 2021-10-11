function Person(first, last) {
    "use strict";
    this.firstName = first;
    this.lastName = last;

    Object.defineProperty(this, "fullName", {
        set: function (newFullName) {
            let [f, l] = newFullName.split(" ");
            if (f !== undefined && l !== undefined) {
                this.firstName = f;
                this.lastName = l;
            }
        },
        get: function () {
            return `${this.firstName} ${this.lastName}`;
        },
    });
}
let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName);
