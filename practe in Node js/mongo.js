// const express = require('express');
// const app = express();
// app.listen(8080);



// const {MongoClient} = require('mongodb');

// // MongoClient.connect('url',function(err,data))  // itis one way


// const url = 'mongodb+srv://maramrohanraj:demo123@cluster0.dsdrgyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// const client = new MongoClient();

// app.get('/',async (req,res) => {
//     try{
//        await client.connect();   // we will connect client to mongodb and then it will execute the further functions 
//        const db = client.db('rohan')   // we are currently working with which database we need to mention it
//        const collection = db.collection('product');
//     //    const users = await collection.find({}).toArray();
//     const users = await collection.find({'id':1}).toArray();
//        console.log(users);
//        res.json(users);
//     }
//     catch{
//   console.log("Error occured");        
//     }
// })







// This code is in Atlas 

// const express = require('express');
// const app = express();
// app.listen(9090);
// app.use(express.urlencoded())
// app.use(express.json())

// const {MongoClient} = require('mongodb');

// // MongoClient.connect('url',function(err,data))  // it also one way


// const url = 'mongodb+srv://rpurushotham0143:1234@cluster0.ivuxpys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// const client = new MongoClient(url);

// app.get('/',async (req,res) => {
//     try{
//        await client.connect(); 
//        const db = client.db('Purushotham') 
//        const collection = db.collection('Puru');
//     const users = await collection.find({firstname:"rohan"}).toArray();
//        console.log(users);
//        client.close();
//        res.send(users);
//     }
//     catch{
//   console.log("Error occured");        
//     }
// })



// app.get('/mongo',(req,res) => {
//     res.sendFile('mongo.html',{root:'./'});
// })


// app.post('/register',async (req,res) => {
//         await client.connect();
//         const db = client.db('Purushotham')   // we are currently working with which database we need to mention it
//         const collection = db.collection('Puru');
//         const response = collection.insertOne(req.body);
        // const response = collection.insertMany([{name:"rohan"},{age:"17"},{pin:"524344"}]);
//         console.log(response);
//         res.send('<h1>Data inserted</h1>')
// })




// const  express=require('express');
// const fs=require('fs');
// const  app=express();
// app.listen(3030,()=>{
//   console.log('server started 3030');
// })
// app.use(express.urlencoded());
// app.use(express.json());

// const {MongoClient}=require('mongodb');
// const url='mongodb+srv://rpurushotham0143:123@cluster0.ivuxpys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const client=new MongoClient(url);

// app.get('/mongo',(req,res)=>{
//   res.sendFile('mongo.html',{root:'./'});
// })
// app.post('/register', async(req,res)=>{
//   await client.connect();
//   let db=client.db('Purushotham');
//   let coll=db.collection('puru');
//   let file=fs.readFileSync('./s1.json','utf-8');
// file = JSON.parse(file) 
//   let data=await coll.insertOne(req.body);
//   // let data=await coll.insertMany(file);
//   console.log(data);
//   res.send('Done');
// })


const express=require('express');
const fs=require('fs');
const {MongoClient}=require('mongodb');
const url='mongodb+srv://rpurushotham0143:123@cluster0.ivuxpys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client=new MongoClient(url);
app.get('/',(req,res)=>{
   res.sendfile('./hone.html');
})
app.post('/registar',async(req,res)=>{
        await client.connect();
        let db=client.db('purushohtam');
        let coll=db.collection('puru');
        let data=await coll.insertOne({id:'22'});
})



















// const express = require('express');
// const app = express();
// app.listen(8080);

// const {MongoClient} = require('mongodb');
// const uri = 'mongodb+srv://maramrohanraj:mongodb123@cluster0.dsdrgyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// const client = new MongoClient(uri);


// app.use(express.urlencoded({extended:true}))
// app.use(express.json());


// app.get('/' , async (req,res) => {
//     // await client.connect();
//     // const db = client.db('hellobro');
//     // const collection = db.collection('raj');
//     // let response = await collection.insertOne({id:"2"});
//     // console.log(response);
//     // client.close();
//     // res.send('<h1>Data inserted </h1>')
//     res.sendFile('./register.html',{root:'./'})
// })

// let arr =[];
// app.post('/register',async (req,res) => {
//        await client.connect();
//        let obj = req.body;
//        let db = client.db('hellobro');
//        let collection = db.collection('raj');
//        let response = await collection.insertMany([obj]);
//        console.log(response);
//        res.send('<h1>Data inserted </h1>')
// })








// const express = require('express');
// const app = express();
// app.listen(8080);



// const {MongoClient} = require('mongodb');
// const uri = 'mongodb+srv://maramrohanraj:mongodb123@cluster0.dsdrgyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// const client = new MongoClient(uri);



// app.use(express.urlencoded({extended:true}))
// app.use(express.json())
// app.use(express.static('./'))
    

// app.get('/',(req,res) => {
//     res.sendFile('./login.html',{root:'./'})
// })



// app.post('/login',async (req,res) => {
//     await client.connect();
//     const db = client.db('hellobro')
//     const collection = db.collection('raj');
//     let users = await collection.find().toArray();
//     let isuser =  users.find((ele) => {
//         return ele.uname === req.body.uname && ele.pass === req.body.pass
//     })
//         if(isuser){
//             res.send('<h1>LOGIN SUCCESS</h1>')
//         }
//         else{
//             res.send('<h1>LOGIN FAILED!!!!!!</h1>')
//         }
// })




// app.post('/signup',async (req,res) => {
//     await client.connect();
//     const db = client.db('hellobro');
//     const collection = db.collection('raj');
//     const users = await collection.find().toArray();
//     let userexists = users.find((ele) => {
//         return ele.uname === req.body.uname || ele.pass === req.body.pass
//     })
//     if(userexists){
//         res.send('<h1>User already exists</h1>');

//     }
//     else{
//         const response = await collection.insertOne(req.body);
//         console.log(response);
//         res.send('<h1>Data insered </h1>');
//     }
// })
