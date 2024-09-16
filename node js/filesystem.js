// let fs = require("fs");

// fs.readFile("./demo.txt",(error,content)=>{
//     if(error)
//     throw error;
// else 
// console.log(content.toString());
// })

// fs.readFile("./demo.txt","utf-8",(error,content)=>{
//     if(error)
//     throw error;
// else 
// console.log(content);
// })

// console.log("hello");

// let s = fs.readFileSync("./demo.txt","utf-8")
// console.log(s);
// console.log("Hello")


//write file : 
// fs.writeFile("./dem.txt","new Data",(err)=>{
//     if(err)
//     throw err;
// else
// console.log("Write sucessfull");
// })


// append file :
// fs.appendFile("./deo.txt"," appended data",(err)=>{
//     if(err)
//     throw err;
// else 
// console.log("Append data sucessfull");
// })

// rename file : 
// fs.rename("./deo.txt","xyz.txt",(err)=>{
//     if(err)
//     throw err;
// console.log("Rename sucessfull");
// })

//delete file or unlink file :
// fs.unlink("./dem.txt",(err)=>{
//     if(err)
//     throw err;
// else 
// console.log("delete successfull");
// })


// creating a directory
// const fs = require('fs');
// fs.mkdir('./newdir',(err) => {
//     if(err) throw err;
//     console.log("directory created");
// })



//* read dir and return string//it wil give output  folder lo unna files ni Display chistundi
// const fs = require('fs');
// fs.readdir('./',(err,files) => {
//     if(err) throw err;
//     console.log(files);
// })




// const fs = require('fs');
// fs.readdir(__dirname,(err,files) => {
//     if(err) throw err;
//     console.log(files);
// })



//* returns directory name // two underscores we type
// const fs = require('fs');
// console.log(__dirname);




// const fs =require("fs");
// const path =require('path');
// const pathname= path.join(__dirname,'IBooma','Movie','.com');
// console.log(pathname);
// console.log(typeof(pathname));


//***Tasks */:
//* task: creating 3 to 4 files in directory and creating other new folder then copying all files into it
//* task copy the one folder files into other  folder  


// const fs = require('fs');
// const path = require('path');

// fs.readdir('./bee lab',(err,files)=> {
//     fs.mkdir('./rohan new',(err) => {
//         files.forEach((file) => {
//             const source = path.join('./bee lab',file);
//             const destination = path.join('./rohan new',file);
//             fs.copyFile(source,destination,(err)=> {
//                 console.log("DONE!");
//             })
//         })
//     })
   
// })





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



