const express=require('express');
const app=express();
const path=require('path');
app.listen(3030);
const multer=require('multer');

// const upload=multer({dest:'./upload'});
// app.post('/fileup',upload.single('images') ,(req,res)=>{
//     console.log(req.file);
//     res.send('file uploaded');
// })
app.get('/',(req,res)=>{
    res.sendFile('./multer.html',{root:'./'});
})
const upload=multer({dest:'./upload'});
app.post('/fileup',upload.array('images',5),(req,res)=>{
    res.send('file uploadded');
    console.log(req.file);
})

// app.post('/fileup',upload.array('images',5),(req,res)=>{
//     console.log(req.files);
//     res.send('files are upload');
// })



// const xyz=multer.diskStorage({
//     destination:'./upload',
//     filename:function(req,file,cb){
//         cb(null,Date.now()+path.extname(file.originalname));
//     }
// })
// const upload=multer({
//     storage:xyz
// })
// app.post('/fileup',upload.any('images',5),(req,res)=>{
//     console.log(req.files)
// })

// const xyz=multer.diskStorage({
// destination:function(req,file,cb){
//     if(file.mimetype=='image/png')
//     cb(null,'./upload.PNG');
//     else if(file.mimetype=='image/jpeg')
//      cb(null,'./upload.JPG');
//     else if(file.mimetype=='application/pdf')
//     cb(null,'./upload.PDF');
// },
// filename:(req,file,cb)=>{
//     cb(null,Date.now()+path.extname(file.originalname));
// }
// })
// const upload=multer({
//     storage:xyz,
//     fileFilter:function(req,file,cb){
//         if(file.mimetype=='image/png'||file.mimetype=='image/jpeg'||file.mimetype=='application/pdf')
//         cb(null,true);
//     else{
//         cb(new error('file type not matched'))
//     }
//     },
//     limits:{fileSize:10*1024*1024},
// })
// app.post('/fileup',upload.any('images',5),(req,res)=>{
//     // console.log(req.files);
//     res.send('file uploaded');
// })
