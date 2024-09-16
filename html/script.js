
        async function fun(){ //to fetch data from the apis
            let result=await fetch('https://jsonplaceholder.typicode.com/posts');
            console.log(typeof(result));
            let data=await result.json();
            console.log(data);
            
        }
