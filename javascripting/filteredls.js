const fs = require('fs')
const path = require('path')


module.exports = function (dir, ext, callback) {
    fs.readdir(dir, 'utf-8', (err, files) => {
        if (err)
            return callback(err)
        else
            //console.log(files)
            sortDirectory(files, ext)
    })

    function sortDirectory(files, extension) {
        const filesSorted = files.filter(file => path.extname(file) === '.'+extension)
        return callback(null,filesSorted)
        }
    }

    //solución oficial 

    

    // var fs = require('fs')
    // var path = require('path')

    // module.exports = function (dir, filterStr, callback) {
    //   fs.readdir(dir, function (err, list) {
    //     if (err) {
    //       return callback(err)
    //     }

    //     list = list.filter(function (file) {
    //       return path.extname(file) === '.' + filterStr
    //     })

    //     callback(null, list)
    //   })
    // }