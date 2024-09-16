//powershell -ExecutionPolicy Bypass -Command "nodemon demojson.js"

// const http = require('http');
// const fs = require('fs')
// http.createServer((req,res) => {
//     let data = fs.readFileSync('./products.json');
//     res.setHeader("Content-Type",'application/json')   // video/mpv4, audio/mp3, image/gif, application/js
//     res.end(data);
// }).listen(8080,()=>{
//     console.log("Server started");
// })



// const http = require('http');
// const fs = require('fs')
// http.createServer((req, res) => {
//     if (req.url == '/api/products.json') {
//         let data = fs.readFileSync('./products.json');
//         res.setHeader("Content-Type", 'application/json')   // video/mpv4, audio/mp3, image/gif, application/js, text/plain
//         res.setHeader('Access-Control-Allow-Origin', '*') // we can access it is it is *
//         res.statusCode = 202;
//         res.statusMessage = "data served"
//         res.end(data);
//     }
//     else {
//         console.log("data not found");
//     }
// }).listen(8080, () => {
//     console.log("Server started");
// })



// const http=require('http');
// const fs=require('fs');
// http.createServer((req,res)=>{
// if(req.url=='/sample.jpg'){
//  let data=fs.readFileSync('./sample.jpg');
//  res.setHeader('Content-Type','image/jpg');
//  res.write(data)
// }
// else{
//  console.log("Data Not found");
// }
// })
// .listen(8080,()=>{
//     console.log("server created"); 
// })


const http = require('http');
const fs = require('fs');

const imagePaths = {
    '/sample1.jpg': './sample1.jpg',
    '/sample2.jpg': './sample2.jpg',
    '/sample3.jpg': './sample3.jpg'
};

http.createServer((req, res) => {
    const imagePath = imagePaths[req.url];
    if (imagePath) {
        fs.readFile(imagePath, (err, data) => {
            if (err) {
             throw err;
            } else {
                  res.setHeader('Content-Type','image/jpg');
                  res.end(data);
            }
        });
    } else {
        console.log("Data Not found");
    }
}).listen(8080, () => {
    console.log("Server created");
});
