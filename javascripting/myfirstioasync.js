// my version

const fs = require('fs')
const file = fs.readFile(process.argv[2] ,'utf8', (err,data)=>{
    if(err)
        console.log(err)
    else{
       // console.log('data:'    +data)
        calculateLinesNumber(data)
    }
})

function calculateLinesNumber(value){
    var textSplit = value.split('\n')
    var lines = textSplit.length -1
    console.log(lines)
}

//oficial solutions

// var fs = require('fs')  
// var file = process.argv[2]  
  
// fs.readFile(file, function (err, contents) {  
//   // fs.readFile(file, 'utf8', callback) can also be used  
//   var lines = contents.toString().split('\n').length - 1  
//   console.log(lines)  
// })
