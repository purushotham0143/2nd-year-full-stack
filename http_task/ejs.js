// const express = require('express')
// const app = express();
// const ejs = require('ejs');
// const fs = require('fs');
// app.listen(8080);
// app.use(express.static('./'))
// app.use(express.urlencoded({extended : true}));
// app.use(express.json());





// app.set('view-engine', 'ejs');


// let arr = [] ;

// app.get('/' ,(req,res) => {
//     res.render('login.ejs');
// })

// app.get('/login.ejs',(req,res) => {
//     res.render('login.ejs');
// })

// app.get('/signup.ejs',(req,res) => {
//     res.render('signup.ejs');
// })




// app.post('/login',(req,res) => {
//     let data = req.body;
//      arr =  JSON.parse(fs.readFileSync('./login.json','utf-8'));
//      let users = arr.find((obj) => {
//         return obj.uname == data.uname && obj.pass == data.pass
//      })
//      if(users){
//         res.render('home.ejs',{name : `Hello ${req.body.uname} welcome to home page ` })
//      }
//      else{
//         res.render('home.ejs',{ name  : ` Hello ${req.body.uname} please sign up to continue` })
//      }
// })


// let arr2= [];

// app.post('/signup',(req,res) => {
//     arr2 = JSON.parse(fs.readFileSync('./login.json','utf-8'));
//     let object = req.body;
//     let isuser = arr2.find((obj) => {
//         return obj.uname == req.body.uname || obj.pass == req.body.pass
//     })
//     if(isuser){
//         res.render('home.ejs',{name : ` this user already exists `})
//     }
//     else{
//         arr2.push(object)
//         fs.writeFileSync('./login.json',JSON.stringify(arr2));
//         res.render('home.ejs',{name : ` hello ${req.body.uname} you have successfully signed up `})
//     }
// })











const express = require('express');
const app = express();
app.listen(8080);
const ejs = require('ejs');
const fs = require('fs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('./'));


app.set('view-engine','ejs');


app.get('/',(req,res) => {
    res.render('login.ejs')
})

app.get('/login.ejs',(req,res) => {
    res.render('login.ejs')
})

app.get('/signup.ejs',(req,res) => {
    res.render('signup.ejs');
})

let arr=[]
let arr2=[];


app.post('/login',(req,res) => {
    arr = JSON.parse(fs.readFileSync('./login.json','utf-8'));
    let user = arr.find((obj) => {
        return obj.uname === req.body.uname && obj.pass === req.body.pass
    })
    if(user){
        res.render('home.ejs',{name  : `Hello ${req.body.uname} welcome to login page`})
    }
    else{
        res.render('home.ejs',{name  : `Please signup to continue `})
    }
})



app.post('/signup',(req,res) => {
      let obj = req.body;
      arr2 = JSON.parse(fs.readFileSync('./login.json','utf-8'));
      let isuser = arr2.find((ele) => {
        return ele.uname === req.body.uname || ele.pass === req.body.pass;
      })
      if(!isuser){
        arr2.push(obj);
        fs.writeFileSync('./login.json',JSON.stringify(arr2));
        res.render('home.ejs',{name : `Hello ${req.body.uname} you have successfullt signed up`})
      }
      else{
        res.render('home.ejs',{name  : `${req.body.uname} already exists`})
      }

})








// const express = require('express');
// const app = express();
// app.listen(8080);
// const ejs = require('ejs');
// const fs = require('fs');
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(express.static('./'));


// app.set('view-engine','ejs');

// app.get('/', (req, res) => {
//     let data = JSON.parse(fs.readFileSync('./login.json', 'utf-8'));
//     res.render('home.ejs', { users: data });
// })




