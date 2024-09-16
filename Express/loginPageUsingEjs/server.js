const express=require('express');
const ejs=require('ejs');
const app= express();
app.listen(1010);
app.set('view-engine','ejs');
let arrayOfObj = [{name:"rohan",password:20}]

app.get('/',(req,res)=>{
    res.render('login.ejs',{user:arrayOfObj})
})