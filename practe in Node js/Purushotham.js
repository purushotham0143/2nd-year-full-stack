const mongoose = require('mongoose');
const movies = require('./movies');

const uri = 'mongodb+srv://rpurushotham0143:Puru0143@cluster0.ivuxpys.mongodb.net/HANJI?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri);

const movies = require('./movies');

async function run() {
    try {
        const data = await movies.create({
            id: 24,
            rating: 2.1,
            image: "imge_url",
            imdb_url: "url",
            title: "abc"
        });
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

run();

async function run(){
    try{
    const data=await movies.create({
        
    })
    }
    catch(err){
        console.log(err);
    }
}

// async function run() {
//     try {
//       const data=(await movies.find({})).toString();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// run();