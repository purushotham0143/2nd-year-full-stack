// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//     if (req.url === '/') {
//         let data = fs.readFileSync("./home.html", "utf-8");
//         res.setHeader("Content-Type", "text/html");
//         res.write(data);
//         res.end();
//     } else if (req.url === '/about') {
//         let data = fs.readFileSync("./about.html", "utf-8");
//         res.setHeader("Content-Type", "text/html");
//         res.write(data);
//         res.end();
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         res.end('<h1>404 Page Not Found</h1>');
//         data(); 
//     }
// }).listen(7070, () => {
//     console.log("Server started 7070");
// });

// function data() {
//     const date = new Date();
//     let obj = { key: date.toLocaleTimeString() };
//     fs.readFile('./s1.json', 'utf8', (err, data) => {
//          if(err)
//          console.log('req is error')
//             let array = [];
//             if (data) 
//                 array = JSON.parse(data);
//             array.push(obj);

//             fs.writeFile('./s1.json', JSON.stringify(array), (err) => {
//                 if (err) {
//                     console.error('Error writing to file:', err);
//                 } else {
//                     console.log('Data written to file successfully.');
//                 }
//             });
        
//     });
// }

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        let data = fs.readFileSync("./home.html", "utf-8");
        res.setHeader("Content-Type", "text/html");
        res.write(data);
        res.end();
    } else if (req.url === '/about') {
        let data = fs.readFileSync("./about.html", "utf-8");
        res.setHeader("Content-Type", "text/html");
        res.write(data);
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Page Not Found</h1>');
        data(); 
    }
}).listen(7070, () => {
    console.log("Server started 7070");
});

function data() {
    const date=new Date();
    let obj={key:date.toLocaleTimeString()}
   fs.readFile('./s1.json','utf-8',(err,data)=>{
    if(err)
        console.log('req is error');
    let array=[];
    if(data)
         array=JSON.parse(data);
        array.push(obj);
        fs.writeFile('./s1.json',JSON.stringify(array),(err)=>{
            if(err){
                console.log("Work not done:",err);
            }
            else{
               console.log("Work done");
            }
        })
   })
}

