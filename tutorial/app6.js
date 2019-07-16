//write and read in chunks 
const fs = require('fs')
const readStream = fs.createReadStream('./example.txt','utf8'); // read a text files 
const writeStream = fs.createWriteStream('example2.txt')
readStream.on('data', (chunk)=>{
    writeStream.write(chunk)
    console.log(chunk);
});

//reading the file in chunks, you can immediately start working with it. 
//while reading you can send data to a new file

//write and open large file with Streams, the readFile uses a buffer, if the files is bigger than the size of the buffer it will throw an error
//therefore is better to use Streams 
//Stream also uses a buffer, a small buffer, it is reading the file in chunks. It doesn't attempt the whole buffer 
//at once. 

