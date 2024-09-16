const http=require('http');
const fs=require('fs');
const url=require('url');
http.createServer((req,res)=>{
if(req.url=='/'){
    res.setHeader('Content-Type','text/html');
 let data=fs.readFileSync('./Todo.html','utf-8');
    res.end(data);
}
let array=[];
let puru=url.parse(req.url,true);
if(puru.pathname=='/getData'){
let x=puru.query;
// console.log(x);
res.setHeader('Content-Type','text/plain');
res.setHeader('Access-Control-Allow-Origin','*');
array=fs.readFileSync('./Todo.json','utf-8');
      array=JSON.parse(array);
    array.push(x);
    fs.writeFileSync('./Todo.json',JSON.stringify(array));

res.end(JSON.stringify(x));
}
}).listen(5050,()=>{
    console.log("Server started 5050");
})