// get uaing form  action 
// const http = require('http');
// const fs = require('fs');
// const url = require('url');
// http.createServer((req,res) => {
//       if(req.url=='/'){
//         res.setHeader("Content-Type","text/html");
//         let data = fs.readFileSync('./index.html')
//         res.end(data);
//       }
//       let puru = url.parse(req.url,true);
//       console.log(puru.pathname);
//       console.log(100,req.url);
//        if(puru.pathname=='/xyz'){
//         console.log(puru.query);
//         res.setHeader("Content-Type","text/html");
//         res.end("Hello")
//       }
// }).listen(8080,()=> {
//     console.log("serve started");
// })







// get using fetch method*************************************************
const http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer((req,res) => {
  console.log(req.url);
  let puru = url.parse(req.url,true);
  if(req.url == "/")
  {
    res.setHeader("Content-Type","text/html");
    res.end("<h1>Welcome to the Server</h1>")
  }
  else if(puru.pathname == "/getData")
  {
    console.log(puru.query);
    let x = puru.query;
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Content-Type","text/plain");
    console.log("data send");
    res.end(JSON.stringify(x));
  }
}).listen(8080,()=> {
    console.log("serve started");
})




