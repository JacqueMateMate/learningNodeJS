//file system part 2 : folders:

const fs = require('fs');
// fs.mkdir('tutorial2',(err)=>{ //create folder
//     if(err)
//         console.log(err)
//     else{
//         fs.rmdir('tutorial2',(err)=>{ //remove directory can only be used in an empty directory
//             if(err)
//                 console.log(err)
//             else
//                 console.log('folder deleted')
//         })
//     }
// });
// fs.unlink('./tutorial2/example.txt', (err)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log('\n File deleted')
//         fs.rmdir('tutorial2',(err)=>{ //remove directory can only be used in an empty directory
//             if(err)
//                 console.log(err)
//             else
//                 console.log('folder deleted')
//         })

// });
// fs.mkdir('tutorial2',(err)=>{ //create folder
//     if(err)
//         console.log(err)
//     else{
//         fs.writeFile('./tutorial2/example.txt', '123', (err)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log('file and folder created')
//             }

//         })
//     }
// });


//multiple files in a folder

fs.readdir('example',(err, files)=>{
    if(err)
        console.log(err)
    else{
        for (let file of files){
            fs.unlink('./example/'+ file, (err)=>{
                if(err)
                    console.log(err);
                else{
                    console.log('files successfully deleted')
                }
            })
        }
    }

});