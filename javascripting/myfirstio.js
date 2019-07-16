const fs = require('fs')

const readFileSync= fs.readFileSync(process.argv[2], 'utf8')

var array = readFileSync.split('\n')
var arrayLength = array.length -1 
console.log(arrayLength)
