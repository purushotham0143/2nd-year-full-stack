//  const path=require('path');
//  const http=require('http');
//  const fs=require('fs');
// http.createServer((req,res)=>{
// dowork(req.url,res);
// }).listen(1010,()=>{
//   console.log('server started 1010');
// })
//  function dowork(url,res){
//   try{
// const extention=path.extname(url);
// let pathname='';
// let header='';
// if(extention=='.jpg'){  // and here also .
//   header='image/jpg';
//   pathname=path.join(__dirname,'images',path.basename(url));
// }
// else if(extention=='.html'){
//   header='text/html';
//   pathname=path.join(__dirname,'htmlFiles',path.basename(url));
// }
// else{
//   header='text/plain';
//   res.end('404 error found');
// }
// let data=fs.readFileSync(pathname);
// res.setHeader('Content-Type',header);  // iam forgetting here
// res.write(data);
// res.end();
//  }
//  catch(error){
//   console.log(error);
//   res.end();
//  }
// }



const http=require('http');
const fs=require('fs');
const path = require('path');
http.createServer((req,res)=>{
  dowork(req.url,res);
}).listen(2020,()=>{
  console.log('server started 2020');
})
function dowork(url,res){
  try{
let extname=path.extname(url);
let header='';
let pathname='';
if(extname=='.jpg'){
  header='image/jpg';
  pathname=path.join(__dirname,'images',path.basename(url));
}
else if(extname=='.html'){
  header='text/html';
  pathname=path.join(__dirname,'htmlfiles',path.basename(url));
}
else if(extname=='.css'){
header='text/css';
pathname=path.join(__dirname,'htmlfiles',path.basename(url));
}
else{
  header='text/plain';
  res.end('404 Not found');
}
let data=fs.readFileSync(pathname);
res.setHeader('Content-Type',header);
res.write(data);
res.end();
}
catch(err){
console.log(err);
res.end();
}
}

