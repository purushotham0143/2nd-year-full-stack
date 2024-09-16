//expree is dependent on the nodejs
//it will decrease thee code 
//express  pproblem is solved by it self 
//routing is easy

const express=require('express');
const exp=express();
exp.get('./',(req,res)=>{
    res.send("HEllo user");
});
exp.listetn(8080);
