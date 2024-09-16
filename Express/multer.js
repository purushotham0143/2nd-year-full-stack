const express=require('express');
const app=express();
const path=require('path');
app.listen(3030,()=>{
    console.log('server statred 3030');
});
const multer=require('multer');
const { error } = require('console');

app.get('/',(req,res)=>{
    res.sendFile('./multer.html',{root:'./'});
})

// const upload=multer({dest:'./upload'});
// app.post('/fileup',upload.single('image'),(req,res)=>{
//     res.send('file uploaded');
//     console.log(req.files);
// })

// app.post('/fileup',upload.array('images',10) ,(req,res)=>{
//     console.log(req.file);
//     res.send('file uploaded');
// })



// const xyz = multer.diskStorage({
//     destination:"./upload",
//     filename:function (req,file,cb)
//     { 
//         let ext = path.extname(file.originalname);
//         cb(null,Date.now()+ext)
//     }
// })
// const upload = multer({storage:xyz})
// app.post('/fileup',upload.any('image',5),(req,res)=>{
// console.log(req.files);
// })

// const xyz=multer.diskStorage({
// destination:'./upload',
// filename:function(req,file,cb){
// let ext=path.extname(file.originalname);
// cb(null,Date.now()+ext);
// }
// })
// const upload=multer({storage:xyz});
// app.post('/fileup',upload.array('image',5),(req,res)=>{
// res.send('Files uploaded');
// console.log(req.files);
// })


const xyz=multer.diskStorage({
    destination:function(req,file,cb){
        if(file.mimetype=='image/png'){
            cb(null,'./upload/png');
        }
        else if(file.mimetype=='image/jpg'){
            cd(null,'./upload/jpg');
        }
        else if(file.mimetype=='aplication/pdf'){
            cb(null,'./upload/pdf');
        }
    },
    filename : function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname));
    }
})

const upload=multer({
    storage:xyz,
    fileFilter:function(req,file,cb){
        if(file.mimetype=='image/png'||file.mimetype=='image/jpg'||file.mimetype=='image/jpeg'){
            cb(null,true);
        }
        else{
            cd(new error('file type not matched'));
        }
    },
    limits:{fileSize:10*1024*1024}
  
})
app.post('/fileup',upload.any('images',10),(req,res)=>{
    res.send('Files uploaded');
    console.log(req.files);
   }) 


// const xyz = multer.diskStorage({
//     destination:function(req,file,cb){
//       if(file.mimetype =='image/png'  )
//       cb(null,'./upload/PNG') ///here we cant create the files  dynamically 
//      else if(file.mimetype =='image/jpeg'  )
//      cb(null,'./upload/JPG')
//      else if(file.mimetype =='application/pdf'  )
//      cb(null,'./upload/PDF')
//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now()+path.extname(file.originalname))
//     }
// })

// const upload = multer({
//     storage:xyz,
//     fileFilter:function (req,file,cb){
//         if(file.mimetype == 'image/png' || file.mimetype == 'application/pdf' ||file.mimetype == 'image/jpeg') // application/pdf
//         cb(null,true);
//     else{
//         cb(new Error("File type not matched"));
//     }
//     },
//     limits:{fileSize:10*1024 * 1024}   
// })
// app.post('/fileupload',upload.array('img',5),(req,res)=>{
//     console.log(req.files);
// })

