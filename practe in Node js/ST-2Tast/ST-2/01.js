const express = require('express');
const app = express();
const fs = require('fs');
const session = require('express-session');

app.listen(8080);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./'));

app.use(session({
    secret : 'secret',
    resave : false,
    saveUninitialized : false
}));

let users = JSON.parse(fs.readFileSync('./01.json','utf-8'));

app.get('/',(req,res) => {
    res.sendFile('login.html',{root:'./'});
});

app.post('/login',(req,res) => {
    let user = users.find((user) => {
        return user.email == req.body.email && user.fname == req.body.fname && user.lname == req.body.lname && user.pass == req.body.pass; 
    });
    if(user){
        req.session.user = user;
        res.redirect('/web');
    }
    else {
        res.send('<h1>Invalid username or password please sign up</h1>');
    }
});

app.post('/signup',(req,res) => {
    let isUser = users.find((ele) => {
        if(ele.fname == req.body.fname || ele.lname == req.body.lname){
            return 1;
        }
        else{
            return 0;
        }
    });
    if(!isUser){
        users.push(
            { 
                email : req.body.email,
                fname : req.body.fname,
                lname : req.body.lname,
                pass:req.body.pass,
                role:'user'
            }
        );
        fs.writeFileSync('./01.json', JSON.stringify(users), 'utf-8');
        res.send('<h1>Signup successful!</h1>');
    }
    else{
        res.send('<h1>User already exists</h1>');
    }
});

const isAdminORUser = (req,res,next) => {
    if(req.session.user.role == 'admin'){
        next();
    }
    else{
        res.redirect('/web');
    }
};




app.post('/logout',(req,res) => {
    req.session.destroy();
    res.send('<h1>Successfully logged out </h1>');
});

app.get('/dash',isAdminORUser,(req,res) => {
    res.sendFile('dash.html',{root:'./'});
});
app.get('/web',(req,res) => {
    res.sendFile('web.html',{root:'./'});
});
