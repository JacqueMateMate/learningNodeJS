//Serving Static Files with Express
const express = require('express')
const path = require('path')
const app = express(); //returns an objec with many methos

app.use('/public',express.static(path.join(__dirname,'static'))) // using a middleware, first element is alias so people doesn't know that in my server the folder is called static
app.get(('/'),(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'))
})
app.listen(8080);

app.get(('/example/:name/:age'),(req,res)=>{ //route parameters
    res.send('example with route params' + JSON.stringify(req.params))
    console.log(req.params)
    console.log(req.query)
    //req.query = in the browser you add "?" after the url and then varName=value for 1 and for multiple just concatenate with &
    //Query string for optional variables
})