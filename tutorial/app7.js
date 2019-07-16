//Read and write streams with pipes
//for using pipes we need a src and a destination stream.
const fs = require('fs')
const zlib = require('zlib') // for compression files
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./example.txt','utf8')
// const writeStream = fs.createWriteStream('example2.txt.gz')

//readStream.pipe(writeStream)

//pipe chaning

//readStream.pipe(gzip).pipe(writeStream)
const readStream = fs.createReadStream('./example2.txt.gz') // source is the compress file now
const writeStream = fs.createWriteStream('uncompressed.txt')
// uncompresse source 
readStream.pipe(gunzip).pipe(writeStream)