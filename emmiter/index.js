'use strict';

var util = require('util');
var EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter{
    constructor() {
        super();
    }

    greet(data) {
        console.log(`hello ${data}`);
        this.emit('greet',data)
    }
}

