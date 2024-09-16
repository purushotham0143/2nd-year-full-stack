// const prompt=require('prompt-sync')();
//  let arr=[];
//  let n=prompt('size of array ');
//  for(let i=0;i<n;i++){
//      arr[i]=prompt('Enter array elements ');
//  }
//  for(let i=0;i<n;i++){
//      console.log(arr[i]);
//  }
// ches board//
// var ans=""

// const PromptSync = require("prompt-sync");

// function print(data){

//  for(var i=0;i<data;i++)

//  {

//   for(var j=0;j<data;j++)
//   {

//    if((i+j)%2==0)

//    ans+="*";
//   else
//   ans+="#";
//   }
//   ans+=newLine();
//  }

// }
// function newLine(){

//  return "\n";

// }

// var data=8;

// print(data);

// console.log(ans)

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

//To Printf Second maxmium of array
// const prompt=require('prompt-sync')();
// let array=[];
// let n=prompt('Enter a size');
// for(let i=0;i<n;i++){
//     array[i]=prompt('Enter Elements');
// }
// let max1=array[0],max2=array[0];
// for(let i=0;i<n;i++){
//     if(array[i]>max1)
//     max1=array[i]
// }
// for(let i=0;i<n;i++){
//     if(max2<array[i]&&array[i]<max1)
// max2=array[i];
// }
// console.log(max2);

// Print the maximum element array
// const prompt=require('prompt-sync')();
// let array=[];
// let n=prompt('Enter a size');
// for(let i=0;i<n;i++){
//     array[i]=prompt('Enter Elements');
// }
// let max1=array[0];
// for(let i=0;i<n;i++){
//     if(array[i]>max1)
//     max1=array[i]
// }
// console.log(max1);



// let array=["puru","rohan","sashank","vamsi"];
// array.push("lakshmi");
// console.log(array);




// let array=["puru","rohan","sashank","vamsi"];
// array.pop();
// console.log(array);





// let array=["puru","rohan","sashank","vamsi"];
// array.shift();
// console.log(array);





// let array=["puru","rohan","sashank","vamsi"];
// array.unshift("lakshmi");
// console.log(array);




// let array=[1,2,3,4,5,6,7,8];
// array.splice(3);
// console.log(array);






// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(0,3);
// console.log(citrus);



// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray);




// let text = "How are you doing today?";
// const myArray = text.split(" ");
// let word = myArray[1];
// console.log(word);

 
//  let array=[1,2,3,4,5,6,7,-1,9,-5];
// console.log(Math.max.apply(Math,array));

 //Leap year *****

// const prompt=require('prompt-sync')();
// const year=prompt('enter the year');
// function getyear(year){
//     if((year%4==0 && year%100!==0)||year%400==0)
//     return true;
// else
// return false;
// }
// console.log(getyear(year));


//prime numbers between two numbers;
// function prime(a,b)
// {
//  var flag=0;
//   var i,j;
//   for(i=a;i<=b;i++)
//   {
//     for(j=2;j<i;j++)
//     {
//       if(i%j==0)
//         {flag=1;
//         break;}
//     }
//     if(flag==0)
//       console.log(i);
//     flag=0;
//   }}
//   var a=5,b=20;
//  prime(a,b);
 
//factorial of a Number ***** 
// function factorial(num)
// {  
//      let f=1
//     for(let i=1;i<=num;i++)
//         f=f*i;
//   return f;
// }
// let num=5;
//  factorial(num);
// console.log(factorial(num));

//sum of the digits****

// function sumofdigit(num)
// {
//     while(num>0)
//     {
//         const lastDigit=num%10;
//         sum+=lastDigit;
//         num=Math.floor(num/10);
//     }
//     return sum;
// }
// const a=121;
// var sum=0;
// console.log(sumofdigit(a));

///Given number is a palendram***********

// let word="rohan"
// let n=word.length;
// function checkpalindrome(word){
//     for(let i=0,j=n-1;i<j;i++,j--){
//         if(word[i]!=word[j]){
//         return false;
//         break;
//         }
//     }
//     return true;
// }
// if(checkpalindrome(word))
// console.log("true");
// else
// console.log("false");


// //Merge Two arrays It should not return Duplicates vlaues
// const array1=[1,2,3,4,5,6,7,8];
// const array2=[5,6,7,8,9,10,11,12];
// const ans=withoutduplicates(array1,array2)
// function withoutduplicates(array1,array2){
//     let mergearray=array1.concat(array2);
//     const result= mergearray.filter((value,index,array) => {
//         return array.indexOf(value) === index;
//     })
//     return result;
// }
// console.log(ans);



// let array1=[1,2,3,4,5,6,7,8];

//     const result=array1.filter(function(value,index,array){
//         return array.indexOf(value)=== index;
//     })
//     console.log(result);



// var students=[
//     {name:"a1",marks:[12,13,19,13]},
//     {name:"a2",marks:[12,18,12,15]},
//     {name:"a3",marks:[12,14,12,13]},
//     {name:"a4",marks:[15,13,11,13]},
//     {name:"a5",marks:[16,13,12,11]},
// ]
// students.forEach(element =>{
//     let sum=0;
//     element.marks.forEach(mark=>{
//         sum+=mark
//     })
//     console.log(`${element.name} has scored ${sum} marks`);
// })



// const array1=[1,2,3,4,5,6,7,8];
// const array2=[5,6,7,8,9,10,11,12];
// const ans=withoutduplicates(array1,array2)
// function withoutduplicates(array1,array2){
//     let mergearray=array1.concat(array2);
//     const result= mergearray.filter((value,index,array) => {
//         return array.indexOf(value) === index;
//     })
//     return result;
// }
// console.log(ans);

// let str="test";
// let n=str.length;
// function palandram(str){
//     for(let i=0,j=n-1;i<j;i++,i++){
//         if(str[i]!=str[j]){
//         return false;
//     break;
//     }
//     }
//     return true;
// }
// if(palandram(str))
// console.log("true");
// else
// console.log("false");

//sum of the digits of a number*******
// let s=0;
// let array=[1,4,5];
// function sum(array){
//     for(i=0;i<array.length;i++){
//         s  += array[i];
//     }
//     return s;
// }
// console.log(sum(array));

 //for each function and Arrow function// 1 way

// var salaries = [50000,45000,55000,60000];
// console.log(salaries);
// salaries.forEach((salary,index)=>{
//     let incriment=salary/10;
//     salaries[index]=salary+incriment
// })
// console.log(salaries);

// We can also use Anamus function 2 way

// var salaries = [50000,45000,55000,60000];
// console.log(salaries);
// salaries.forEach(function(salary,index){
//     let incriment=salary/10;
//     salaries[index]=salary+incriment
// })
// console.log(salaries);

 //3 way manam function oka dagara rasi dhani name ela kuda evachu  for each lo//
// var salaries = [50000,45000,55000,60000];
// console.log(salaries);
// salaries.forEach(incriment)


// function incriment(salary,index){
//     let incriment=salary/10;
//     salaries[index]=salary+incriment
// }
// console.log(salaries);

// filter Method
  
// var num=[2,3,4,78,4,8,66];
// var even=num.filter(function(ele){
//     return ele%2==0
// })
// console.log(even);

//map Method yandhuku anti Alredy unna array lo emina modify chisi and new array lo 
//Return chiyali inko new array***********

// let age=[2000,2001,2002,2003,2004];
//  let ages=age.map(function(ele){
//     let age=2023-ele
//     return age;
//  })
//  console.log(ages);

//2 way of map method
// let age=[2000,2001,2002,2003,2004];
//  let ages=age.map(birth);

//  function birth(ele){
//     let age=2023-ele
//     return age;
//  }
//  console.table(ages);


//object in javascript**************************
//objet is collection of elements in form of  properties and methods 
// 5 ways of object

// let move={
//     name:"RRR",
//     realse:2021,
//     director:"Rajamouli"
// }
// console.log(move.name);

// to add prperties to the object;

// let move={
//     name:"RRR",
//     realse:2021,
//     director:"Rajamouli"
// }
// move.budget="400 crores"
// console.log(move)


//* Armstrong number 

// let i,m,s=0,r;
// let n=prompt('Enter a number ');
//   m=n;
//   for(i=0;m!=0;m=Math.floor(m/10),i++);
//   m=n;
//   while(n!=0){
//     r=n%10;
//     s=s+Math.pow(r,i);
//     n=Math.floor(n/10);
//   }
//   if(m==s)
//     console.log("yes");
//   else
//     console.log("no");
//     return 0;




//* sum of 1st n terms

//   let n= prompt('Enter number of terms ');
//   let i,s=0;
//   for(i=1;i<=n;i++)
//   s=s+i;
// console.log(s);




//*factorial of a number

// let n=prompt('Enter a number to find the factorial of it ');
// let i,f=1;
// for(i=1;i<=n;i++)
// f=f*i;
// console.log(f);




//* return odd number array and even number array 

// let n= prompt('Enter a number ');
// let evendigitarray=[],odddigitarray=[];
// while(n!=0){
//     r=n%10;
//     if(r%2==0){
//        evendigitarray.push(r);
//     }
//     else{
//         odddigitarray.push(r);
//     }
//     n=Math.floor(n/10);
// }
// console.log(evendigitarray);
// console.log(odddigitarray);




//*product of  digits of a number

// let n= prompt('Enter a number ');
// let p=1,r;
// while(n!=0){
//     r=n%10;
//     p=p*r;
//     n=Math.floor(n/10);
// }
// console.log(p);




//*find lcm

//   let x = prompt('Enter 1st number ');
//   let y = prompt('ENter 2nd number '); 
//   let l=x>y? x:y;
//   while(1){
//   if(l%x==0&&l%y==0){
//     console.log(l);
//     break;  
//   }
//   l++;
//   }




//* find gcd

//   let dividend,remainder,divisor;
//   let x = prompt('Enter 1st number ');
//   let y = prompt('ENter 2nd number '); 
//   if(x<y){
//     dividend = y;
//     divisor  = x;
//   }
//   else{
//     dividend = x;
//     divisor  = y;
//   }
//   while(divisor!=0){
//     remainder = dividend % divisor;
//     dividend  = divisor;
//     divisor   = remainder;
//   }
//   console.log(dividend);




//* reverse a number

// let n=prompt('Enter a number ');
// let m,rev=0;
// m=n;
// while(n!=0){
//     r=n%10;
//     rev=rev*10+r;
//     n=Math.floor(n/10);
// }
// console.log(rev);




//* fibonnacci series

//   let n= prompt('Enter the number of fibonacci numbers to be printed ');
//     let i,a,b,c;
//    for(a=0,b=1,i=1;i<=n;i++){
//      console.log(a);
//      c=a+b;
//      a=b;
//      b=c;
//    }
  



//* prime factors of a number 

// let n = prompt('Enter a number to find its prime factors ');
//       for(let i=2;i<=n;i++){
//         while(n%i==0){
//           console.log(i);
//           n=n/i;
//         }
//       }




//* count total even and odd number in array

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




//* count total characters and  numbers in array

// const numStrings=prompt("Enter the number of strings: ");
// let arr=[],totalCharacters=0,totalNumbers=0,i;
// for(i=0;i<numStrings;i++){
//     const str=prompt("Enter string " + (i + 1) + ": ");
//     arr.push(str);
// }
// arr.forEach((str) => {
//     for(i=0;i<str.length;i++){
//         if(isNaN(str[i])) totalCharacters++;
//         else  totalNumbers++;
//     }
// });
// console.log("Total characters: " + totalCharacters);
// console.log("Total numbers: " + totalNumbers);




//* find largest number in array 

// let arr=[],i;
// let n=prompt('Enter the size of array ');
// for(i=0;i<n;i++)
// arr[i]=prompt('Enter array elements ');
// let max=arr[0];
// for(i=1;i<n;i++){
//  if(max<arr[i])
//  max=arr[i];
// }
// console.log(`the maximum element of the given array is ${max}`);




//* find smaller element in array 

// let arr=[],i;
// let n=prompt('Enter the size of array ');
// for(i=0;i<n;i++)
// arr[i]=prompt('Enter array elements ');
// let min=arr[0];
// for(i=1;i<n;i++){
//  if(min>arr[i])
//  min=arr[i];
// }
// console.log(`the minimum element of the given array is ${min}`);




//* find nth largest number of array

// let arr=[],i,sortedArray=[];
// let n=prompt('Enter the size of array ');
// for(i=0;i<n;i++)
// arr[i]=prompt('Enter array elements ');
//  sortedArray = arr.sort((b,a) => b-a );
//   let x = prompt('Enter the xth largest number we need to find ');
//   console.log(sortedArray[x-1]);




//* find nth smallest number in the array 

// let arr=[],i,sortedArray=[];
// let n=prompt('Enter the size of array ');
// for(i=0;i<n;i++)
// arr[i]=prompt('Enter array elements ');
//  sortedArray = arr.sort();
//   let x = prompt('Enter the xth smallest number we need to find ');
//   console.log(sortedArray[x-1]);




//* how many times a particular element in the array is repeated

// let arr=[],i,count=0;
// let n=prompt('Enter the size of array ');
// for(i=0;i<n;i++)
// arr[i]=prompt('Enter array elements ');
// let x = prompt('Enter a element in array so see how many times it repeated ');
// for(i=0;i<n;i++)
// if(arr[i] == x)
// count++;
// console.log(`the element ${x} is repeated ${count} times `);




//* by removing duplicates print the remaining array

// let arr=[];
// let n=prompt('Enter array length ')
// for(let i=0;i<n;i++)
// arr[i]=prompt("enter array elements ");
//  const result= arr.filter(function(value,index,arr){
//     return arr.indexOf(value) === index
// })
// console.log(result);




//* prime numbers between a and b

// const prompt=require('prompt-sync')();
// var a=prompt('Enter first number ');
// var b=prompt('Enter second number ');
// prime(a,b);
// function prime(a,b){
//   var i,j,flag=0;
//   for(i=a;i<=b;i++){
//     for(j=2;j<i;j++){
//         if(i%j==0)
//         flag=1;
//     break;
//     }
//     if(flag==0)
//     console.log(i);
//   flag=0;
//   }
// }
