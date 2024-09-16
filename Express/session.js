//http is a state less it is not manage the data;
// This is staorage
//1.cookies:it will go automitaclly,this two will store data in the Clint side
//2.local Storage;it not going automitacly append go  to server,we have to send the req manully
//3.session: it is stored in server,this i an object,it is closed after the one request is completed


// const express = require('express');
// const session = require('express-session');
// const app = express();

// // Set up session middleware
// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: true
// }));

// // Route handling
// app.get('/', (req, res) => {
//     if (req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
//     res.send(`${req.session.count}`);
// });

// // Start the server
// app.listen(9090, () => {
//     console.log('Server listening on port 9090');
// });



// Authentication  :- valid user or not we are cheching ,this is only for one user
// two ways of creating the Authentication
//TOkens - jwt
//sessions
// const express = require('express');
// const app = express();
// const session = require('express-session');
// app.listen(4000,()=>{console.log("server started");})
// app.use(express.urlencoded());
// app.use(express.json())
// app.use(session({
//     secret : "secret",
//     resave : false,
//     saveUninitialized:false
// }))

// let users = [{uname:"abc",pass:"abc",role:"user"},{uname:"xyz",pass:"xyz",role:"admin"}]
 
// app.get('/',(req,res)=>{
//     res.sendFile('index1.html',{root:__dirname})
// })
// app.post('/goToserver',(req,res)=>{
//    let user =  users.find((obj)=>{
//         if(obj.uname == req.body.uname && req.body.pass == obj.pass)
//         return obj;
//     })
//     if(user)
//     {
//         req.session.x = 1; 
//         res.redirect('/home')  
//     }
//     else{
//       res.send("<h1>User Not exists</h1>")
//     }
// })

// let userAuth = function (req,res,next){
//     if(req.session.x)
//     next();
//     else{
//         res.send("<h1>You are not Logedin Please sign up .yooo</h1>")
//     }
// }

// app.get('/home',(req,res)=>{
//     res.send("<h1>Home Page</h1>")
// })

// app.get('/profile',userAuth,(req,res)=>{
//     res.send(`<h1>Profile page</h1>`)
// })
// app.get("/admin",(req,res)=>{
//     res.send(`<h1>Admin page</h1>`)
// })



//Authorigation : This is the permission that we can access the full template 
//Role based Authorigation: Here we have to 

// const express = require('express');
// const app = express();
// const session = require('express-session');
// app.listen(4000,()=>{console.log("server started");})
// app.use(express.urlencoded({extended:true}));
// app.use(express.json())
// app.use(session({
//     secret : "secret",
//     resave : false,
//     saveUninitialized:false
// }))

// let users = [{uname:"abc",pass:"abc",role:"user"},{uname:"xyz",pass:"xyz",role:"admin"}]
 
// app.get('/',(req,res)=>{
//     res.sendFile('index1.html',{root:__dirname})
// })
// app.post('/goToserver',(req,res)=>{
//    let user =  users.find((obj)=>{
//         if(obj.uname == req.body.uname && req.body.pass == obj.pass)
//         return obj;
//     })
//     if(user)
//     {
//         req.session.x = user; 
//         res.redirect('/home')  
//     }
//     else{
//       res.send("<h1>User Not exists</h1>")
//     }
// })


// function isAdmin(req,res,next){
//     if(req.session.x.role == 'admin')
//     next();
// else {
//     res.send('<h1>YOu cant access</h1>')
// }
// }



// let userAuth = function (req,res,next){
//     if(req.session.x)
//     next();
//     else{
//         res.send("<h1>You are not Logedin Please sign up .yooo</h1>")
//     }
// }

// app.get('/home',(req,res)=>{
//     res.send("<h1>Home Page</h1>")
// })
// app.get('/profile',userAuth,(req,res)=>{
//     res.send(`<h1>Profile page</h1>`)
// })
// app.get("/admin",isAdmin,userAuth,(req,res)=>{
//     res.send(`<h1>Admin page</h1>`)
// })

const express = require('express');
const session = require('express-session');
const app = express();

app.listen(8080, () => {
    console.log('Server started on port 8080');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}));

let obj = [
    { uname: 'puru', pass: '1234', role: 'user' },
    { uname: 'reddy', pass: '999', role: 'admin' } // fixed "name" to "uname" to be consistent
];



app.get('/', (req, res) => {
    res.sendFile('./index1.html', { root: './' });
});

app.post('/goToserver', (req, res) => {
    let user = obj.find(user => req.body.uname === user.uname && req.body.pass === user.pass);

    if (user) {
        req.session.x = user;
        res.redirect('/home');
    } else {
        res.send('<h1>User not found</h1>');
    }
});
// Middleware to check if user is authenticated
const UserAth = (req, res, next) => {
    if (req.session.x) {
        next();
    } else {
        res.send('<h1>You don’t have access to do it</h1>');
    }
};

// Middleware to check if user is admin
const AdminAth = (req, res, next) => {
    if (req.session.x && req.session.x.role === 'admin') {
        next();
    } else {
        res.send('<h1>You don’t have access to do it</h1>');
    }
};
app.get('/home', UserAth, (req, res) => {
    res.send('<h1>This is Home page</h1>');
});

app.get('/profile', UserAth, (req, res) => {
    res.send('<h1>This is profile page</h1>');
});

app.get('/admin', UserAth, AdminAth, (req, res) => {
    res.send('<h1>This is admin page</h1>');
});
