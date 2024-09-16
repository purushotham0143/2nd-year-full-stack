const prompt=require('prompt-sync')();
let arr=[];
let n=prompt('size of array ');
for(let i=0;i<n;i++){
    arr[i]=prompt('Enter array elements ');
}
for(let i=0;i<n;i++){
    console.log(arr[i]);
}
