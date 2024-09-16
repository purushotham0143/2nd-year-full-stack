// const prompt=require('prompt-sync')();
// const number = parseInt(prompt("Enter a number: "));
// if (number > 0) {
//     console.log("The number is positive");
// }
// else if (number == 0) {
//   console.log("The number is zero");
// }
// else {
//      console.log("The number is negative");
// }


/// find the repeting element inarray
// const  arr=[1, 2, 3, 4, 3,9,9,11,13,11]
// const repeat=arr.filter((ele,index,array)=>array.indexOf(ele)!==index);
// console.log(repeat)
// const prompt=require('prompt-sync')();
// let array=[];
// let n=prompt('enter size');
// for(let i=0;i<n;i++){
// array[i]=prompt('enter elements');
// }
// let result=array.filter((ele,index,array)=>array.indexOf(ele)!==index);
// console.log(result);

//  **  remove the  duplicates occurance from the array using filter
// // [4,2,6,3,2,4,1,3];
// // [4,2,] 
// const ori = [4, 2, 6, 3, 2, 4, 1, 3];
// const uni = ori.filter((element, index, array) => array.indexOf(element)=== index);
// console.log(uni);


//multiply all Number in array
// const prompt=require('prompt-sync')();
// let array=[];
// let p=1;
// let n=prompt('Enter A size');
// for(let i=0;i<n;i++){
//  array[i]=prompt('enter array elements');
// }
// for(let i=0;i<n;i++){
// p=p*array[i];
// }
// console.log(p);


// 10-html,css 
// flex grid  
// loop questions //
// leep year , factrial, palandram.
// array //duplictes new array return //merg two arrays shoud not return duplicates//Range//
// object//return sum even numbers in array//
// sum of digits like //1234/10;1234%10//

// MIN AND MAX ELEMENT
// var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// console.log(Math.min.apply(Math, ages));
// console.log(Math.max.apply(Math, ages));


//          AVERAGE ,sum,multiply

// const ages = [19,22,19,24,20,25,26,24,25,24]
// let sum=0;
// ages.forEach(x =>{sum += x;});
//  sum=sum/10;
// console.log(sum);


//              RANGE

// const ages = [19,22,19,24,20,25,26,24,25,24]
// ages.sort((a, b) => a - b)
// console.log(ages[9]-ages[0]);





//* Armstrong number 
// const prompt=require('prompt-sync')();
// let i,m,s=0,r;
// let n=prompt('Enter a number ');
//   m=n;
//   for(i=0;m!=0;m=parseInt(m/10),i++);
//   m=n;
//   while(n!=0){
//     r=n%10;
//     s=s+Math.pow(r,i);
//     n=parseInt(n/10);
//   }
//   if(m==s)
//     console.log("yes");
//   else
//     console.log("no");
//     return 0;



// * sum of 1st n terms
// const prompt=require('prompt-sync')();
//   let n= prompt('Enter number of terms ');
//   let i,s=0;
//   for(i=1;i<=n;i++)
//   s=s+i;
// console.log(s);




//*factorial of a number
// const prompt=require('prompt-sync')();
// let n=prompt('Enter a number to find the factorial of it ');
// let i,f=1;
// for(i=1;i<=n;i++){
//     f=f*i;
// }
// console.log(f);





// // *product of  digits of a number
// const prompt=require('prompt-sync')();
// let n= prompt('Enter a number ');
// let p=1,r;
// while(n!=0){
//     r=n%10;
//     p=p*r;
//     n=parseInt(n/10);
// }
// console.log(p);



//* fibonnacci series
// function feb(n){
//     let i,a,b,c;
//    for(a=0,b=1,i=1;i<=n;i++){
//      console.log(a);
//      c=a+b;
//      a=b;
//      b=c;
//    }
//   }
//   feb(3);
  

//* prime factors of a number 
// const prompt=require('prompt-sync')();
// let n = prompt('Enter a number to find its prime factors ');
//       for(let i=2;i<=n;i++){
//         while(n%i==0){
//           console.log(i);
//           n=n/i;
//         }
//       }




//* count total even and odd number in array
// const prompt=require('prompt-sync')();
// let evenCount=0,oddCount=0,arr=[],i;
// let n=prompt('Enter the size of array ');
// for(i=0;i<n;i++)
// arr[i]=prompt('Enter array elements ');
// for(i=0;i<n;i++){
//     if(arr[i]%2==0) evenCount++;
//     else oddCount++;
// }
// console.log(`The number of even numbers in the given array is ${evenCount}`);
// console.log(`The number of odd numbers in the given array is ${oddCount}`);










//Rohan Questions from here********************************************************

// const prompt=require('prompt-sync')();
// let array=[];
// array[0] = prompt('enter a val')
// array[1] = prompt('enter a val')
// array[2] = prompt('enter a val')
// array[3] = prompt('enter a val')

// array.sort((a,b)=>{
//     return b-a;
// })
// console.log(array[1]);

// let arr = [10,2,3,23,5,1,3,46,7]
// function kth(arr,k){
//     arr.sort((a,b)=>b-a)
//     console.log(arr);
//     return arr[k]; 
// }
// console.log(kth(arr,2));



//gcd***************
// function gcd(p,q){
//     if(q==0)
//     return p;
// else{
//     return (gcd(q,p%q));
// }
// }
// let result=gcd(6,9);
// console.log(result);




// lcm***********
// function lcm(m,n){
   
//     for(let i=1; ;i++)
//     {
//         if(i%m==0 && i%n==0)
//         return i;
//     }
// }
// let result=lcm(2,10);
// console.log(result);



//reverse a number
// function reverse(num){
//    let rev = 0; 
//    while(num>0){
//     let a = num%10;
//      rev = rev*10 + a;
//      num = parseInt(num/10);
//    }
//    return rev;
// }
// console.log(reverse(1234567))

//ferfect number*****
// function perfect(num){
//     let sum = 0;
//     for(let i=1;i<num;i++)
//     {
//        if(num%i==0)
//        sum+=i;
//     }
//     if(sum==num)
//     return "yes";
//     else
//     return "no";
// }
// console.log(perfect(8128));


// function prime(n){
//     for(let i=2;i<n;i++){
//     if(n%i==0)
//     return "No";
//     }

//     return "Yes";
// }
// console.log(prime(9392))

// find largest and smallest number
// let arr = [10,2,3,23,5,1,3,46,7]
// function kth(arr,k){
//     arr.sort((a,b)=>b-a)
//     // console.log(arr);
//     return arr[k]; 
// }
// console.log(kth(arr,0));

//find characters in array
// let arr = [1,2,3,"e","1","e",2,3,4]
// let array=[];
// arr.map((ele)=>{
//     if(typeof(ele)!="string")
//     array.push(ele);
// })
// console.log(array);

