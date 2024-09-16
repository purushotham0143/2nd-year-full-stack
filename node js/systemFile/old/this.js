// fs.readdir('./old',(err,files) => {
//     if(err) throw err;
//    files.forEach((file) => {
//          const src = path.join('./old',file); // ./old/puru.js
//          const dest = path.join('./rohan',file); // ./rohan/puru.js 
//          fs.copyFile(src,dest,(err) => {
//             if(err) throw err;
//             console.log("DONE DONE");
//          });
//    })
// })