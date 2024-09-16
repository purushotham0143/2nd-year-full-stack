// // it will return routes 
// // it is self invoking function withour parameterrds 
// module.exports = (function () {
//     const route = require('express').Router();  



//    route.get('/', (req, res) => {
//        res.send('<h1>Welcome to server</h1>')
//    })

//    route.get('/home.html', (req, res) => {
//        res.sendFile('./public/view/home.html', { root: './' })
//    })
   
//    route.get('/style.css', (req, res) => {
//        res.sendFile('./style.css', { root: './' })
//    })
   
   
//    route.get('/about.html', (req, res) => {
//        res.sendFile('./public/view/about.html', { root: './' })
//    })
//    route.get('/contact.html', (req, res) => {
//        res.sendFile('./public/view/contact.html', { root: './' })
//    })
   
// return route;

// })();



module.exports=(function(){
   const route=require('express').Router();
   route.get('/', (req, res) => {
           res.send('<h1>Welcome to server</h1>');
       })
    
       route.get('/home.html', (req, res) => {
           res.sendFile('./public/view/home.html', { root: './' })
       })
       
       route.get('/style.css', (req, res) => {
           res.sendFile('./style.css', { root: './' })
       })
       return route;
})();
