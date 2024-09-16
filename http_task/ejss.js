const express=require('express');
const app=express();
app.use(express.static('./'));
app.use(express.urlencoded({extended:true}));
const ejs=require('ejs');
const fs=require('fs');
app.use(express.json());
app.listen(1000,()=>{
    console.log("server statred 1000");
})
app.set('view-engine','ejs');
let arr=[];
app.get('/',(req,res) => {
    res.render('login.ejs')
})

app.get('/login.ejs',(req,res) => {
    res.render('login.ejs')
})
app.get('/signup.ejs',(req,res) => {
    res.render('signup.ejs');
})
app.post('/signup.ejs',(req,res)=>{
    let data=JSON.parse(fs.readFileSync('./login.json','utf-8'));
  let user= data.find(ele => {
       return req.body.uname==ele.uname||req.body.pass==ele.pass;
    });
    if(user){
        res.render('home.ejs',{message:`Account exists already login ${req.body.uname}`})
    }
    else{
    let arr=JSON.parse(fs.readFileSync('./login.json','utf-8'));
     arr.push(data);
     fs.writeFileSync('./login.json',JSON.stringify(arr));
   res.render('home.ejs',{message:`Login sucessful ${req.body.uname}`});
    }
})
app.post('/login',(req,res)=>{
    let data=JSON.parse(fs.readFileSync('./login.json','utf-8'));
    let user=data.find((ele)=>{
        return req.body.uname==ele.uname && req.body.pass==ele.pass;
    })
    if(user){
        res.render('home.ejs',{message:`Login sucessful ${req.body.uname}`});
    }
    if(!user){
        res.render('home.ejs',{message:`Siginup for login ${req.body.uname}`});    }
})


// const express = require('express');
// const app = express();
// app.listen(8080);
// const ejs = require('ejs');
// const fs = require('fs');
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(express.static('./'));


// app.set('view-engine','ejs');

// app.get('/', (req, res) => {
//     let data = JSON.parse(fs.readFileSync('./login.json', 'utf-8'));
//     res.render('home.ejs', { users: data });
// })




