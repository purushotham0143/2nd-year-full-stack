const http = require('http');
const fs = require("fs")
http.createServer((req,res) => {
  let array = []
    let str = ''
  // console.log(req.url);
  if(req.url == "/")
  {
    res.setHeader("Content-Type","text/html");
    let data=fs.readFileSync('./post.html','utf-8');
    res.end(data);
  }
  else if(req.url == "/getData")
  {
      req.on('data',(chunk)=>{
         str += chunk;
        //  console.log(str);
      })
      req.on('end',()=>{
        let obj = JSON.parse(str);
        //  array =JSON.parse (fs.readFileSync("./demo.json",'utf-8'));
        //  console.log(array,typeof array)
        //  array.push(obj);
        // fs.writeFileSync('./demo.json',JSON.stringify(array));
        // console.log(obj);
      })
  }
      

}).listen(8080,()=> {
    console.log("serve started");
})

