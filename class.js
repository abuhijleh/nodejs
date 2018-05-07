'use strict';

class Person {
    constructor (firstname,lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log (`hello ${this.firstname} ${this.lastname}`)
    }
}


var john = new Person ('john','Doe');
var jane = new Person ('jane', 'Doe');

john.greet();
jane.greet();

console.log(john._proto__);
console.log(jane._proto__);