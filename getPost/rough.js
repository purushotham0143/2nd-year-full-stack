// const http = require('http');
// const fs = require("fs");
// const { json } = require('stream/consumers');
// let str='';
// let arr=[];
// http.createServer((req,res)=>{
//     if(req.url=='/'){
//     res.setHeader('Content-Type','text/html');
//     let data=fs.readFileSync('./rough.html');
//     res.end(data);
//     }
//     else if(req.url=='Datapost'){
//         req.on('data',(chunk)=>{
//           str+=chunk;

//         })
//         req.on('end',()=>{
//             let obj=JSON.parse(str);
//             console.log('recived:',obj);
//             res.setHeader('Content-Type','text/html');
//             res.end(JSON.stringify(obj));
//         })
    
//     }
// }).listen(9090,()=>{
//     console.log("server started 9090");
// })





const http = require('http');
const fs = require("fs");
let server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        const data = fs.readFileSync('./rough.html'); // Use synchronous read for simplicity
        res.end(data); 
    } else if (req.url === '/Datapost') { 
        let str = ''; 

        req.on('data', (chunk) => {
            str += chunk; 
        });

        req.on('end', () => {
            const receivedObj = JSON.parse(str);  // here we recive the string data and we are converting in javascript object
            console.log('Received Data:', receivedObj); 

            // Respond with some data back to the client
            res.setHeader('Content-Type', 'application/json'); // Correct content type
            res.end(JSON.stringify({ received: receivedObj })); // Send back a response
        });
    } else {
        // If no matching route, return 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(9090, () => {
    console.log("Server started on port 9090");
});
