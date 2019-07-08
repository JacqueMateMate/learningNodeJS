//create a web server with nodejs

const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.write('Hello World from nodeJS');
        res.end(); 
    }
    else{
        res.write('using some other domain')
        res.end();
    }
});

// set up ports

server.listen('3000');
