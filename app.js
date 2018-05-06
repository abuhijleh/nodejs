var EventEmmiter = require ('events');
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
console.log(`${function () {retrun 3}}`);


