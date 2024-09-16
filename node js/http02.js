


// const http = require("http");
// const fs = require("fs");
//  let server =  http.createServer((req,res)=>{
//     console.log(req.url); // to find end point of url
//     if(req.url == "/")
//     {
//         let data = fs.readFileSync("./home.html","utf-8");
//         res.setHeader("Content-Type","text/html")
//         res.write(data);
//         res.end();

//     }
//     else if(req.url == "/about"){
//         let data = fs.readFileSync("./about.html","utf-8")
//         res.setHeader("Content-Type","text/html");
//    res.write(data);
//     res.end();
//     }
//     else if(req.url == "/home.css"){
//         res.setHeader("Content-Type","text/css")
//         let data=fs.readFileSync("./aa/css/home.css","utf-8");
//         res.end(data);
//     }
//     else {
//         res.write( "<h1>404 not found</h1> ");
//     res.end();
//     }
//  })
 
//  server.listen(2000,()=>{
//     console.log("server started")
//  })




// const http = require("http");
// const fs = require("fs");
//  let server =  http.createServer((req,res)=>{
//     console.log(req.url); // to find end point of url
//     if(req.url == "/")
//     {
//         let data = fs.readFileSync("./home.html","utf-8");
//         res.setHeader("Content-Type","text/html")
//         res.write(data);
//         res.end();

//     }
//     else if(req.url == "/about"){
//         let data = fs.readFileSync("./about.html","utf-8")
//         res.setHeader("Content-Type","text/html");
//    res.write(data);
//     res.end();
//     }
//     else if(req.url == "/home.css"){
//         res.setHeader("Content-Type","text/css")
//         res.write(fs.readFileSync("./home.css","utf-8"))
//         res.end();
//     }
//     else if(req.url == "/sample.jpg"){
//         res.setHeader("Content-Type","image/jpg")
//         let data=fs.readFileSync("./image/sample.jpg")
//         res.end(data);
//     }
//  })
 
//  server.listen(2000,()=>{
//     console.log("server started")
//  })




// const http = require('http');
// const fs = require('fs')
// const path = require('path');

// http.createServer((req,res)=>{       
//    sendResponse(req.url,res);
// }).listen(3030,()=>{
//     console.log('server started on port 3030')
// })

// function sendResponse(url,response){
//     try{
//     const extName = path.extname(url);
//     let header = ''
//     let filePath =''
//      if(extName == '.jpg'){
//         header = 'image/jpg' 
//         filePath = path.join(__dirname,'./aa/images',path.basename(url)) //   
//     }     
//     console.log(filePath);
//     response.setHeader('Content-Type',header);
//     let data = fs.readFileSync(filePath)
//     response.end(data);
//     }
//     catch{
//         response.end();
//         return '';
//     }
// }
// console.log(__dirname);


const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    if(req.url=='/'){
        let data=fs.readFileSync('./home.html','utf-8');
        res.setHeader('Content-Type','text/html')
        res.write(data);
        res.end();
    }
    else if(req.url=='/about'){
        let data=fs.readFileSync('./about.html');
         res.setHeader('Content-Type','text/html');
         res.write(data);
         res.end();
    }
    else if(req.url=='css'){
        let data=fs.readFileSync('./about.css');
        res.setHeader('Content-Type','text/css');
        res.write(data);
        res.end();
    }
    else{
        res.setHeader('Content-Type','text/html');
        res.write('404 Page not found')
    }
}).listen(1010,()=>{
    console.log('server statred 1010'); 
}).on('error',()=>{
    console.log('Unable to starrt 1010');
})