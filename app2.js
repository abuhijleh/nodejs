var util = require ('util');

function Person() {
    this.firstName='john';
    this.lastName="Doe";
}

Person.prototype.greet = function (){
    console.log(`Hello ${this.firstName} ${this.lastName}`)
};

function Policman () {
    Person.call(this);
    this.badgeNumber=12345;
}

util.inherits(Policman,Person);


var policman = new Policman ();
policman.greet()