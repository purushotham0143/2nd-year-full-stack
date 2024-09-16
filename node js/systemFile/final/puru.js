
const fs = require('fs');
const path = require('path')
// fs.writeFile("./dem.txt","new Data",(err)=>{
//     if(err)
//     throw err;
// else
// console.log("Write sucessfull");
// })

//rename the Folder name

// fs.rename('./rohan new','./rohan',(error)=>{
//     if(error) throw error;
//     else
//     console.log("Name changed");
// })

// const path =require('path');
// const pathname= path.join(__dirname,'IBooma','Movie','.com');
// console.log(pathname);
// console.log(typeof(pathname));

// let data=fs.readFile('./dem.txt',(error,content)=>{
//  if(error) throw error;
//  console.log(content.toString());
// })



//To copy the one folder files into another folder;
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


// fs.mkdir('./chi',(err) => {
//     if(err) throw err;
//     console.log("directory created");
// })


fs.readdir('./rohan',(err,file)=>{
    if(err) throw err; 