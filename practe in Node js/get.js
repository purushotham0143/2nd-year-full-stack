//get using form action Method
// const path=require('path');
// const http=require('http');
// const url=require('url');
// const fs=require('fs');
// http.createServer((req,res)=>{
//   if(req.url=='/'){
//     res.setHeader("content-Type","text/html")
//     let data= fs.readFileSync("./get.html");
//     res.end(data);
    
//    }
//    let puru=url.parse(req.url,true);
// //    console.log(puru)
//     if(puru.pathname=='/xyz'){
//     console.log(puru.query);
//     res.setHeader("content-Type","text/html")
//     res.end("Done");
//    }
// }).listen(5050,()=>{
// console.log("server started 5050");
// })




const path=require('path');
const http=require('http');
const url=require('url');
const fs=require('fs');
http.createServer((req,res)=>{
  if(req.url=='/'){
    res.setHeader("content-Type","text/html");
    data1=fs.readFileSync('./fetch.html');
    res.end(data1);
   }
   let puru=url.parse(req.url,true);
//    console.log(puru)
    if(puru.pathname=='/getData'){
    let x=puru.query;
    res.setHeader("Content-Type","application/json")
    res.setHeader('Access-Control-Allow-Origin','*');
    res.end(JSON.stringify(x));
   }
}).listen(5050,()=>{
console.log("server started 5050");
})