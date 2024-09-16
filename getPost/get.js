// const http=require('http');
// const fs=require('fs');
// const path=require('path');
// const url=require('url');
// http.createServer((req,res)=>{
//     if(req.url=='/'){
//    res.setHeader('Content-Type','text/html');
//    let file1=fs.readFileSync('./get.html');
//    res.end(file1);
//     }
//     let puru=url.parse(req.url,true);
//     if(puru.pathname=='getData'){
//         let x=puru.query;
//         console.log(x);
//         res.setHeader('Content-Type','text/html');
//         res.setHeader('Access-Control-Allow-Origin','*');
//         res.end(JSON.stringify(x));
//     }
// }).listen(1010,()=>{
//     console.log('server started 1010');
// })


const http=require('http');
const url=require('url');
const path=require('path');
const fs=require('fs');
const { json, arrayBuffer } = require('stream/consumers');
let arr=[];
let str="";
// const { json } = require('stream/consumers');
http.createServer((req,res)=>{
if(req.url=='/'){
    let data=fs.readFileSync('./get.html','utf-8');
    res.setHeader('Content-Type','text/html');
    res.write(data);
    res.end();
}
else{
 if(req.url=='/getdata'){
  req.on('data',(chunk)=>{
   str+=chunk;
  })
  req.on('end',()=>{
   let data=JSON.parse(str);
   arr=JSON.parse(fs.readFileSync('./get.json','utf-8'));
    arr.push(data);
    fs.writeFileSync('./get.json',JSON.stringify(arr));
    res.setHeader('Content-Type','application/json');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.end(JSON.stringify(data));
  })
}
}   
}).listen(4040,()=>{
    console.log('Server stared 4040');
})