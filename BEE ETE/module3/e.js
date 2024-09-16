// Ecomercs Website in Backedn and we have to get data from json file using get or post
const http = require('http');
const fs = require('fs');
const url = require('url');
const server =http.createServer((req,res) => {
  let puru=url.parse(req.url,true);
      if(req.url=='/'){
        res.setHeader("Content-Type","text/html");
        let data = fs.readFileSync('./e.html')
        res.end(data);
      }
      else if(puru.pathname=='/xyz'){
     let filedata=JSON.parse(fs.readFileSync('./e.json','utf-8'));
     filedata.products.forEach((obj)=>{
      if(obj.category == puru.query.search)
      {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(obj));
      }
     })
      }
})
server.listen(1010,()=> {
    console.log("serve started 1010");
})
server.on(1010,()=> {
    console.log(" unable to start serve");
})
