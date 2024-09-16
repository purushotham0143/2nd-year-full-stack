const express=require('express');
const app=express();
app.listen(3000);
const path=require('path');
const multer=require('multer');
const { fileLoader } = require('ejs');
const { truncateSync } = require('fs');
// const upload=multer({dest:'./rough'});
app.get('/',(req,res)=>{
res.sendFile('./rough.html',{root:'./'});
})
// app.post('/multer',upload.array('image',4),(req,res)=>{
//     console.log(req.file);
//     res.send('Done');
// })





// const xyz=multer.diskStorage({
//      destination:'./rough',
//      filename:function(req,file,cb){
//         let extention=path.extname(file.originalname);
//         cb(null,Date.now()+extention);
//      }
// })
// const upload=multer({storage:xyz});
// app.post('/multer',upload.any('image',4),(req,res)=>{
//  res.send('ok');
// })


const xyz=multer.diskStorage({
    destination:function(rea,file,cb){
        if(file.mimetype=='application/pdf'){
            cb(null,'./rp');
        }
        else if(file.mimetype=='image/png'){
            cb(null,'./rpng');
        }
       else{
       filename:(req,file,cb)=>{
        cb(null,Date.now+path.extname(file.originalname));
       }
        
       }
    }
})

const upload=multer({
   storage:xyz,
   fileFilter:function(res,file,cb){
    if(file.mimetype=='application/pdf'||file.mimetype=='image/png'){
        cb(null,true);
    }
    else{
        cb(new Error('file not matched'));
    }
   },
   limits:{fileSize:1024*10*1024},
})

app.post('/multer',upload.array('image',3),(req,res)=>{
    res.send("okay got it");
})

