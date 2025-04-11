//expree is dependent on the nodejs
//it will decrease thee code 
//express  pproblem is solved by it self 
//routing is easy
//how to create route//Used to Routing //used for the midways
// it will descrease the http code  

const express=require('express');
const fs=require('fs');
const exp=express();
const cors = require('cors')
exp.listen(8080,()=>{
    console.log("server started 8080");
});
exp.use(express.static("./"));

exp.get('/',(req,res)=>{
 res.sendFile('./public/view/home.html',{root:'./'});
})
exp.get('/contact',(req,res)=>{
 res.sendFile('./public/view/contact.html',{root:'./'});
 })

// exp.get('/contact',(req,res)=>{
//     res.sendFile(__dirname+"/contact.html");  //this is also another method
//    })

exp.get('/about',(req,res)=>{
    res.sendFile('./public/view/about.html',{root:'./'});
   })
   exp.get('/rohan',(req,res)=>{
    res.sendFile('./sStyles/style.css',{root:'./'});
   })
   exp.get('/add',(req,res)=>{
    res.sendFile('./public/view/add.html',{root:'./'});
   })
   exp.get('/multer',(req,res)=>{
    res.sendFile('./multer.html',{root:'./'});
   })
exp.get('/dynamic/:name/:email', (req, res)=> {   // this is  called Dynamic Routing
    res.send(req.params);
    console.log(req.params);  // params means paramters if we give like /search/abc will get name=abc
})

   exp.get('*',(req,res)=>{
    res.send('<h1>404 Not Found</h1>');
   })

   





