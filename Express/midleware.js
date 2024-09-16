const express = require('express');
const app = express();
app.listen(8080);


app.use((req, res, next) => {
    const date = new Date();
    console.log(req.url + " " + date);
    next(); // it will move on to the next middleware
})


app.get('/', (req, res) => {
    res.send("<h1>MIDDLEWARE</h1>")
})


app.use((req, res, next) => {
    console.log("requested url is", req.url);
    next(); // it will move on to the next middleware
})



app.get('/next', (req, res) => {
    res.send("<h1>NEXT END POINT</h1>")
})


