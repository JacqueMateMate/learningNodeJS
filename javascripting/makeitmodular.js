const myModule = require('./filteredls.js')
var path = process.argv[2]
var extension = process.argv[3]
myModule(path, extension, (err, files) => {
    if (err)
        console.log(err)
    else {
    }
})
