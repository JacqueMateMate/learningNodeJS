//working with the FIle System Module (creating, reading, deleting, renaming) file

const fs = require ('fs')
// //create a file

// fs.writeFile('example.txt', "this is an example",(err)=>{

//     if(err)
//         console.log(err)
//     else
//         console.log('File successfully created!');
//         fs.readFile('example.txt', 'utf8',(errr, file)=>{ // without specifying the encoding the file will just read as a binary
//             if (err)
//                 console.log(err)
//             else    
//                 console.log(file)
//         })
// })

// rename method'

fs.rename('example.txt','example2.txt', (err)=>{
    if(err)
        console.log(err)
    else
        console.log('File name changed successfully')
})

//append data to  a file 

fs.appendFile('example2.txt', 'Some data being appended', (err)=>{
    if(err)
        console.log(err)
    else
        console.log('\n Data successfully appended to the file')

})

//delete file

fs.unlink('example2.txt', (err)=>{
    if(err)
        console.log(err)
    else
        console.log('\n File deleted')

})