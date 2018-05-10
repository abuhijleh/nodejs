'use strict';


var buf = require('fs');
var gzip= require('zlib');

var readable = buf.createReadStream(`${__dirname}/greet.txt`,{encoding:'utf8',highWaterMark:32*1024});
var writable = buf.createWriteStream(`${__dirname}/greet2.txt.gz`)
var gzipObj = gzip.createGzip();

readable.pipe(gzipObj).pipe(writable);


/*readable.on('data', (chunk)=>{
    
    console.log(`NEWNEWNEWNEWNEWNEWNEWNEWNEWNEWNEWNEWNEWNEWNEW: ${chunk}`);
} )*/