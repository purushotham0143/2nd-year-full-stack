
const { error } = require('console');
const fs = require('fs');
const path = require('path')
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



// //To copy the one folder files into another folder;
// fs.readdir('./old',(err,files) => {
//     if(err) throw err;
//    files.forEach((file) => {
//          const src = path.join('./old',file); // ./old/puru.js
//          const dest = path.join('./rohan',file); // ./rohan/puru.js 
//          fs.copyFile(src,dest,(err) => {
//             if(err) throw err;
//             console.log("DONE DONE");
//          });
//    })
// })


///*** To copy 2 folder into another folder */
// function copyData(folder1,folder2){
// fs.readdir(folder1,(err,files) => {
//     if(err) throw err;
//    files.forEach((file) => {
//          const src = path.join(folder1,file); // ./old/puru.js
//          const dest = path.join(folder2,file); // ./rohan/puru.js 
//          fs.copyFile(src,dest,(err) => {
//             if(err) throw err;
//             console.log("DONE DONE");
//          });
//    })
// })
// }
// copyData('./old','./chitkara');
// copyData('./rohan','./chitkara');



// fs.mkdir('./AllFiles',(err)=>{
//    if(err) throw err;
//    console.log("Directory is created");
// })



// fs.readFile('./old/this.js','utf-8',(err,data)=>{
//     if(err) throw err;
//     else
//     console.log(data);
// })

// fs.writeFile('./demo2.txt',"New data",(err)=>{
//     if(err)throw err;
//     else
//     console.log("Done");
// })

// fs.appendFile('./demo2.txt',"Hello ragala i am good",(err)=>{
//     if(err) throw err;
//     else
//     console.log("ok");
// })

// fs.unlink('./demo2.txt',(err)=>{
//     if(err) throw err;
//     else{
//         console.log("OK");
//     }
// })

// fs.mkdir('./complete',(err)=>{
//     if(err) throw err;
//     else{
//         console.log("ok");
//     }
// })





















// fs.readdir('./chitkara',(err,file)=>{
//    if(err) throw err;
// //  console.log(file);
//   file.forEach((fil)=>{
//   const src=path.join('./chitkara',fil);
//   const dest=path.join('./final',fil)
//   fs.copyFile(src,dest,(error)=>{
//    if(error) throw error;
//    console.log("Work Done");
//   })
//   })
// })



// function copyData(folder1,folder2){
// fs.readdir(folder1,(err,files) => {
//     if(err) throw err;
//    files.forEach((file) => {
//          const src = path.join(folder1,file); // ./old/puru.js
//          const dest = path.join(folder2,file); // ./rohan/puru.js 
//          fs.copyFile(src,dest,(err) => {
//             if(err) throw err;
//             console.log("DONE DONE");
//          });
//    })
// })
// }
// copyData('./chitkara','./AllFiles');
// copyData('./final','./AllFiles');
// copyData('./old','./AllFiles');
// copyData('./rohan','./AllFiles');

