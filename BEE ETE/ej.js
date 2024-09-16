const express=require('express');
const app=express();
app.listen(1010);
const ejs=require('ejs');
app.set('views-engine','ejs');
let data=[{name:'puru',age:'20',pin:'524344'},{name:'puru',age:'20',pin:'524344'},{name:'puru',age:'20',pin:'524344'}]
app.get('/',(req,res)=>{
    res.render('index.ejs',{user:data});
})