//setting up a new express server
//Express is a web framework for nodejs. 

const express = require('express')
const app = express(); //returns an objec with many methos

app.get(('/'),(req,res)=>{
    res.send("hello world from expressnodejs")
})
app.listen(8080);

app.get(('/example/:name/:age'),(req,res)=>{ //route parameters
    res.send('example with route params' + JSON.stringify(req.params))
    console.log(req.params)
    console.log(req.query)
    //req.query = in the browser you add "?" after the url and then varName=value for 1 and for multiple just concatenate with &
    //Query string for optional variables
})