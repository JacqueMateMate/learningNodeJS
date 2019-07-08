const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    //html file
//    const readStream = fs.createReadStream('./static/index.html')
//    res.writeHead(200,{'Content-type':'text/html'})
//    readStream.pipe(res);

//json file
//const readStream = fs.createReadStream('./static/example.json')
//res.writeHead(200,{'Content-type':'application/json'})
//readStream.pipe(res);

//image file
const readStream = fs.createReadStream('./static/example.png')
res.writeHead(200,{'Content-type':'image/png'})
readStream.pipe(res);

});
server.listen('3000');
