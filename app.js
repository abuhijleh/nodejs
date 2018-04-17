function greet () {
    console.log("TESXT")
}

greet();

function logGreet(fn){
    fn();
}

logGreet(greet);

logGreet(function(){console.log("how it goes")});