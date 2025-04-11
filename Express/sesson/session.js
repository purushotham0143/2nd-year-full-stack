const session = require('express-session');
const express=require('express');
const fs=require('fs');
const { nextTick } = require('process');
const app=express();
app.listen(2000);
app.use(express.json());
app.use(express.static('./'));
app.use(express.urlencoded({extended : true}));
app.use(session({
    secret:"secret",
    saveUninitialized:false,
    resave:false
}))
let data1=JSON.parse(fs.readFileSync('./ss.json','utf-8'));
app.get('/',(req,res)=>{
  res.sendFile('./session.html',{root:'./'});
})
app.post('/data',(req,res)=>{
   
     let isuser=data1.find((ele)=>{
        if(req.body.name==ele.name && req.body.p==ele.p){   
            return 1;
        }
     })
     if(isuser){
        req.session.user=isuser;
        res.redirect('/home');
     }
     else{
        res.send('<h1>user not exists</h1>')
     }
})
function isAdmin(req,res,next){
    if(req.session.user.role=='admin'){
       next();
    }
    else{
       res.send('<h1>You dont have access</h1>');
    }
   }
   function user(req,res,next){
    if(req.session.isuser){
        next();
    }
    else{
        res.send('<h1>User is not Exists</h1>');
    }
   }
app.get('/home',user,(req,res)=>{
    res.sendFile('./home.html',{root:'./'});
})
app.get('/dash',isAdmin,(req,res)=>{
    res.sendFile('./dash.html',{root:'./'});
})