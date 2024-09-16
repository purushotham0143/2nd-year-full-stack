// const express = require('express')
// const app = express();
// app.listen(2020,()=>{
//     console.log("server start 2020");
// })
// const cors = require('cors')
// // const bodyparser = require('body-parser')
// app.use(express.json());
// const fs = require('fs');
// const htmlroutes = require('./htmlroutes');
// app.listen(1000);


// app.use(express.static('./'))
// app.use('/', htmlroutes);


const express = require('express');
const cors = require('cors');
const app = express();

// app.use(express.static('./'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const htmlroutes = require('./htmlroutes');
app.use('/', htmlroutes);



app.listen(4040, () => {
    console.log(`Server started on port 4040`);
}).on('error', (err) => {
    console.error('Failed to start server:', err);
});
