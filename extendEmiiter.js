'use strict';

var Greetr = require('./emmiter')


var greeter1= new Greetr();
greeter1.on('greet', function(data){
    console.log(`someone greeted ${data}`)
})

greeter1.greet('Ahmad');