var buf = require('fs');

var readable = buf.createReadStream(`${__dirname}/greet.txt`,{encoding:'utf8',highWaterMark:32*1024});

readable.on('data', (chunk)=>{
    console.log(`NEWNEWNEWNEWNEWNEWNEWNEWNEWNEWNEWNEWNEWNEWNEW: ${chunk}`);
} )