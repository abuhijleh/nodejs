/*var EventEmmiter = require ('events');
var uitls = require ('util');

function Greetr () {
    this.greeting = "hello world!"
}

uitls.inherits(Greetr,EventEmmiter);

Greetr.prototype.greet = function (data) {
    console.log (`${this.greeting}  : ${data}`); // using template literals
    this.emit('greet',data);
}


var greeter1 = new Greetr();

greeter1.on('greet',function (data){
    console.log(`Someone greeted ${data}`);
});

greeter1.greet('coooooooling');
console.log(`${function () {}}`);*/

/*'use strict';

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
console.log(jane._proto__);*/

response.end('test');


