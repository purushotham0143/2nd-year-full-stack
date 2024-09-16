const fs = require('fs');
const http = require('http');
const url = require('url');

http.createServer((req,res) => {
   let parsedurl = url.parse(req.url,true);


  if(req.url=='/'){
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Welcome to server</h1>');
  }

   if(parsedurl.pathname=='/home'){
    fs.readFile('./home.html',(err,data) => {
        if(err) { console.log(err);}
        else { 
            res.write(data); 
        }
        res.end();
    })
   }

   else if(parsedurl.pathname=='/about'){
    fs.readFile('./about.html',(err,data) => {
        if(err) { console.log(err);}
        else { res.write(data); }
        res.end();
    })
}

   else {
        fs.readFile("./03.json", (error, data) => {
         if(error){
          console.log(error);
         }
    let err;
    if (data == "") {
     err = [];
    }
    else{
     err = JSON.parse(data);
    }
    if (err.length > 4) {
     err = err.filter((v, i) => {
      return i != 0;
     });
    }
    

    if(parsedurl.pathname!="/favicon.ico"){
      let date = new Date();
      err.push({RequestURL:`${req.url}`,Date:`${date}`,Time:`${date.getHours()}hr ${date.getMinutes()}min ${date.getSeconds()}sec`});
    }
    fs.writeFile("./03.json", JSON.stringify(err),(error)=>{
      if(error){
        console.log(error);
      }
    });
   });
  res.end();
}
}).listen(8080,() => {
    console.log("server started");
})