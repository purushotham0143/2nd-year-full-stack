//view and Exits
// There are multiple view eengenies in the express  but we will coomly use the EJS-Embedded JavaScript templates
const express=require('express');
const ejs=require('ejs');
const app= express();
app.listen(2020);
app.set('view-engine','ejs');
let arrayOfObj = [{name:"rohan",age:20},{name:"rohan",age:20},{name:"rohan",age:20},{name:"rohan",age:20},
{name:"rohan",age:20},{name:"rohan",age:20},{name:"rohan",age:20},{name:"rohan",age:20},{name:"rohan",age:20},
{name:"rohan",age:20},{name:"rohan",age:20},{name:"rohan",age:20},{name:"rohan",age:20},{name:"rohan",age:20},
{name:"rohan",age:20},]
app.get('/',(req,res)=>{
    res.render('home.ejs',{user:arrayOfObj})
})


//    <!-- <% %>
//    <%=%> same  how we give  that like it will give asitae it will give with the html elements;
//    <%-%> html element it will remove the Html tags and it wwill Extract the html value
//    <%#%> for the coments -->

// <h1>Hello how are you <%=name%></h1>

//In Ejs Task make a login page and when login successful then i have show User name which user is login in one navbar