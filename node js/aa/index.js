const http = require("http");
const fs = require("fs");
const path = require("path")
http.createServer((req,res)=>{
abc(req.url,res);
}).listen(3000,()=>{
    console.log("working on port 3000")
})
function abc(url,res){
    let ext = path.extname(url);
    console.log(ext);
    res.end();
}
