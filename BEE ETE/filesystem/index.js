// const fs = require('fs');
// // Specify the correct path and encoding
// fs.readFile('.././copy/a.txt', 'utf8', (err, data) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log(data);  // This will print the file contents as a string
//     }
// });

// -


// const fs=require('fs');
// fs.writeFile('./puru.txt','THis is new data',(err)=>{
//     if(err)
//         throw err;
//     else
//     console.log("HEllo world");
// })




// const fs = require('fs');
// fs.appendFile('./puru.txt', 'This is new data com\n', (err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Hello world");
//     }
// });


// const fs = require('fs');
// fs.unlink('./puru.txt',(err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Delete sucess");
//     }
// });


// const fs = require('fs');
// fs.rename('./puru1.txt','puru.txt',(err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log("changed");
//     }
// });


// const fs = require('fs');

// fs.mkdir('./puru', (err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log("dir success");
//     }
// });




// const fs = require('fs');

// // Recommended method to delete a directory
// fs.rm('./puru',{recursive:true,force:true}, (err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Delete success");
//     }
// });



// const fs = require('fs');
// fs.readdir('./module2', (err, files) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log(files);
//         console.log(__dirname) this is foe present dir
//     }
// });


//Here if file is not there it will create autometaacally
// const fs = require('fs');
// fs.appendFile('.././puru/module3.txt','this new file', (err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log('file create sucess');
//     }
// });


//Here if file is not there it will create autometaacally
// const fs = require('fs');
// fs.appendFile('../module4.txt','this new file', (err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log('file create sucess');
//     }
// });


// THis is about Create a new dir and copy the  all files  from the another dir 
// const fs = require('fs');
// const path = require('path');
// fs.readdir('.././puru', (err, files) => {
//     if(err) throw err;
//     else{
//     fs.mkdir('.././sum', (err) => {
//     files.forEach((file) => {
//             let source = path.join('.././puru', file);
//             let destination = path.join('.././sum', file);
//             fs.copyFile(source, destination, (err) => {
//                 if (err) {
//                     console.error('Error copying file:', err);
//                 }
//                 else{
//         console.log('DONE!');
//                 }
//             });
//         });
//     });
// }
// });


//Copy the dir and sub dir into the new dir
// * copying all subdirectories with files
// const fs = require('fs');
// const path = require('path');

// function copyData(src,dest){
//     if (!fs.existsSync(dest)){
//         fs.mkdirSync(dest,{recursive:true});
//     }
//          fs.readdir(src,(err,files)=> {
//             if(err) throw err;
//             files.forEach(file => {
//                 const srcPath = path.join(src,file);
//                 const destPath = path.join(dest,file);
//                 const stats = fs.statSync(srcPath);
//                 if(stats.isDirectory()){
//                     fs.mkdirSync(destPath,{recursive:true});
//                     copyData(srcPath,destPath);
//                 }
//                 else{
//                     fs.copyFileSync(srcPath,destPath);
//                 }
//             })
//          })
// }
// copyData('./bee lab','./rohan')

