// const express=require('express');
// const app=express();
// // app.use(express.static(__dirname));
// app.get('/search',(req,res)=>{
//   res.sendFile('./get.html',{root:'./'});
//   const name=req.query.name;
//   const age=req.query.age;
//   console.log(name);
//   console.log(age);
// })
// app.listen(3000,()=>{
//   console.log('server starteed 3000');
// })


const express=require('express');
const app=express();
app.get('/xyz',(req,res)=>{
  res.sendFile('./get.html',{root:'./'});
  let uname=req.query.uname;
  console.log(uname);
})
app.listen(1000,()=>{
  console.log('server started 1010');
})