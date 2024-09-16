const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.listen(3030);

app.get('/',(req,res)=>{
    res.sendFile('./post.html',{root:__dirname});
})
app.post('/search',(req,res)=>{
    console.log(1,req.body.uname);
})