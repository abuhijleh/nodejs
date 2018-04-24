var test = require('./emmiter');


var emit = new test();

emit.on('launch',function (){
    console.log ('first call');
})

emit.on('launch', ()=> {console.log('second call')});
emit.on('close', ()=> {console.log('close call')});
emit.emit('launch');
emit.emit('close');




