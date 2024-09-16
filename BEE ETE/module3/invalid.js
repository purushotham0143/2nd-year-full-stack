const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(8080,() => {
    console.log("server started");
})

let arr= []; 
let count = 0;


app.get('/',(req,res) => {
    res.sendFile('02.html',{root:'./'});
})

app.post('/signup',(req,res) => {
   let arr = JSON.parse(fs.readFileSync('./02.json','utf-8'));
   let isvaliddata = arr.find((obj) => {
     if ( obj.uname === req.body.uname ){
        return 1;
     }
   })
   if(isvaliddata)
  res.send('<h1>Signup successfull</h1>');
 else
 res.send('<h1>404 Eror not found</h1>');
})

app.get('/signup',(req,res) => {
    count++;
    res.send(`Invalid request with count ${count}`);
})
