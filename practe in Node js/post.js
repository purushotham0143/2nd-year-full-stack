const path=require('path');
const http=require('http');
const url=require('url');
const fs=require('fs');
// const { json } = require('stream/consumers');
let str='';
let array=[];
http.createServer((req,res)=>{
  if(req.url=='/'){
    res.setHeader("content-Type","text/plain");
    res.end("<h1>Welcome to Web page</h1>");
   }
    if(req.url=='/getData'){
    req.on('data',(chunk)=>{
    str+=chunk;
    })
    req.on('end',()=>{
        let obj=JSON.parse(str);
        // console.log(obj);
        array=JSON.parse(fs.readFileSync('./demo.json','utf-8'));
       array.push(obj);
       fs.writeFileSync('./demo.json',JSON.stringify(array));
    })
   }
}).listen(5050,()=>{
console.log("server started 5050");
})
