const express = require('express');
const app = express();
const session = require('express-session');
const multer=require('multer');
const path=require('path');
const fs=require('fs');
const { json } = require('stream/consumers');
app.listen(4040,()=>{console.log("server started 4040");})
app.use(express.urlencoded());
app.use(express.json())
app.use(express.static('./'))
let array=[],obj={},ext;
app.use(session({
    secret : "secret",
    resave : false,
    saveUninitialized:false
}))

let users = [{uname:"abc",pass:"abc",role:"user"},{uname:"xyz",pass:"xyz",role:"admin"}]
 
app.get('/login',(req,res)=>{
    res.sendFile('login.html',{root:__dirname})
})
app.post('/user',(req,res)=>{
   let user =  users.find((obj)=>{
        return obj.uname == req.body.uname &&  obj.pass == req.body.pass
    })
    if(user){
        req.session.x=user;
        res.redirect('/home');
    }
    else{
        res.send('<h1>User Not Exits</h1>')
    }
 
})
let Admin= function(req,res,next){
    if(req.session.x.role=='admin'){
        next();
    }
    else{
        res.send('<h1>Your Not Authorised To access Lakshmi</h1>')
    }
 }
const xyz = multer.diskStorage({
    destination:"./upload",
    filename:function (req,file,cb)
    { 
        let ext = (file.originalname);
        cb(null,ext)
    }
})
const upload = multer({storage:xyz})
app.post('/fileup', upload.single('image'), (req, res) => {
    console.log(req.file);
    let data=req.body;
    obj = {
       'SNO':data.sn,  
      'Title':data.title,
      'image':req.file.destination+'/'+req.file.filename,
      'textarea':data.textarea,
    }; 
    array=JSON.parse(fs.readFileSync('./web.json','utf-8'));
    array.push(obj);
    fs.writeFileSync('./web.json', JSON.stringify(array));
    res.redirect('/home');
});
app.get('/table',(req,res)=>{
    data=JSON.parse(fs.readFileSync('./web.json','utf-8'));
    res.json(data);
})
app.get('/website',(req,res)=>{
    data=JSON.parse(fs.readFileSync('./web.json','utf-8'));
    res.json(data);
})




app.get('/home',(req,res)=>{
    res.sendFile('/home.html',{root:'./'});
})
app.get('/Admindash',Admin,(req,res)=>{
    res.sendFile('dash.html',{root:'./'});
})
app.get('/datasend',Admin,(req,res)=>{
    res.sendFile('web.html',{root:'./'});
})
app.get('*',(req,res)=>{
    res.send('<h1>$0$ Error found</h1>');
})
