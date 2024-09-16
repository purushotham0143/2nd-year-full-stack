// const http = require('http');
// const url = require('url');
// const fs = require('fs');
// const { KeyObject } = require('crypto');

// http.createServer((req, res) => {
//     let puru = url.parse(req.url, true);
//     if (req.url == '/sign.html') {
//         res.setHeader("Content-Type", "text/html");
//         let data = fs.readFileSync("./sign.html");
//         res.end(data);
//     } else if (req.url == '/login.html') {
//         res.setHeader("Content-Type", "text/html");
//         let data = fs.readFileSync("./login.html");
//         res.end(data);
//     } 
//     else if(req.url=='/Forget.html'){
//         res.setHeader("Content-Type", "text/html");
//         let data = fs.readFileSync('./Forget.html');
//         res.end(data);
//       }
//     else if (puru.pathname=='/getData') { 
    
//         let x = puru.query;
//         let array = [];
//         let data = fs.readFileSync('./login.json', 'utf-8');
//         array = JSON.parse(data);
//         array.push(x);
//         res.setHeader("Content-Type", "text/html");
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         fs.writeFileSync('./login.json', JSON.stringify(array));
//         res.end("Data received successfully"); 
//     } 
//     else if(puru.pathname == '/xyz')
//     {
//         let arrayofObj = JSON.parse(fs.readFileSync('./login.json','utf-8'))
//         let c = 0;
//         arrayofObj.forEach((obj)=>{
//             if(obj.uname == puru.query.uname && obj.password == puru.query.password)
//             {
//                 c = 1;
        
//                 res.setHeader("Content-Type", "application/json");
//                 res.end(JSON.stringify({massege:"login succesful"}))
//             }
//         })
//         if(c == 0)
//         {
//             res.setHeader("Content-Type", "application/json");
//                 res.end(JSON.stringify({massege:"login not succesful"}))
//         }
//     }
//     else if(puru.pathname == '/forget')
//     {
//         let arrayofObj = JSON.parse(fs.readFileSync('./login.json','utf-8'))
//         arrayofObj.forEach((obj)=>{
//             if(obj.uname == puru.query.uname)
//             {        

//                 res.setHeader("Content-Type", "application/json");
//                 res.end(JSON.stringify({massege:"login succesful"}))
//             }
//         })
//     }
//     else if(puru.pathname == '/change')
//     {
//         let arrayofObj = JSON.parse(fs.readFileSync('./login.json','utf-8'))
//         arrayofObj.forEach((obj)=>{
//             if(obj.uname == puru.query.uname)
//             {        //console.log(puru.query.password);
//                     //console.log(puru.query.uname);
//                 obj.password=puru.query.password
//                 const updatedData = JSON.stringify(arrayofObj);
//                 // Write the updated array back to the file
//                 fs.writeFileSync('./login.json', updatedData, 'utf-8');
//                 res.setHeader("Content-Type", "application/json");
//                 res.end(JSON.stringify({massege:"Password changed"}))
//             }
//         })
//     }
//     else 
//     {
//         res.setHeader("Content-Type", "text/html");
//         res.end("<h1>404 not found</h1>"); 
//     }
// }).listen(1010, () => {
//     console.log("server started 1010");
// });





// // IN post method ********************************************
// // const http = require('http');
// // const fs = require('fs');
// // const path = require('path');
// // const url = require('url');



// // http.createServer((req, res) => {
// //     let flag = false;
// //     let str = '';
// //     let arr = [];

// //     if (req.url == '/') {
// //         res.setHeader('Content-Type', 'text/html');
// //         let data = fs.readFileSync('./signup.html', 'utf-8');
// //         res.end(data);
// //     }

// //     else if (req.url == '/signup' && req.method == 'POST') {
// //         req.on('data', (chunk) => {
// //             str += chunk;
// //         })
// //         req.on('end', () => {
// //             let obj = JSON.parse(str);
// //             arr = JSON.parse(fs.readFileSync('./login.json', 'utf-8'));
// //             arr.push(obj);
// //             fs.writeFileSync('./login.json', JSON.stringify(arr));
// //             res.setHeader('Content-Type', 'application/json');
// //             res.setHeader('Access-Control-Allow-Origin', '*');
// //             res.end(JSON.stringify({ message: "SIGN UP SUCCESSFULLLLL" }));
// //         })
// //     }

// //     else if (req.url == '/login' && req.method == "POST") {
// //         console.log("Hello")
// //         req.on('data', (chunk) => {
// //             str += chunk;
// //         })
// //         req.on('end', () => {
// //             res.setHeader('Access-Control-Allow-Origin', '*');
// //             let obj = JSON.parse(str);
// //             arr = JSON.parse(fs.readFileSync('./login.json', 'utf-8'));
// //             arr.forEach((ele) => {
// //                 console.log(ele);
// //                 if (ele.uname == obj.uname && ele.pass == obj.pass) {
// //                     flag = true;
// //                     res.setHeader('Content-Type', 'application/json');
// //                     res.end(JSON.stringify({ message: "LOGIN SUCCESSS" }));
// //                 }
// //             })
// //             if (flag == 0) {
// //                 res.setHeader('Content-Type', 'application/json');
// //                 res.end(JSON.stringify({ message: "LOGIN FAILED" }));
// //             }
// //         })
// //     }
// // }).listen(3030, () => {
// //     console.log("server started ");
// // })