// * leap year or not
// const prompt=require('prompt-sync')();
// let year=parseInt(prompt('Enter the year '));
// function getyear(year){
//     if((year%4==0&&year%100!=0)||(year%400==0))
//     console.log("the given year is a leap year");
// else
// console.log("the given year is not leap year");
// }
// getyear(year)


//* factorial of number
// const prompt=require('prompt-sync')();
// let number=parseInt(prompt('Enter a number '));
// function getfactorial(number){
//     let f=1;
//     for(let i=1;i<=number;i++)
//     f=f*i;
// return f;
// }
// console.log(getfactorial(number));


// //check word is paldrom or not******
// function isPalindrome(word) {
//     var lower= word.toLowerCase();
//     var reverse = lower.split('').reverse().join('');
//       if(lower === reverse)
//     console.log("level is a palindrome.");
// else
// console.log(" level is not a palindrome.");
//   }
//   var testWord = "level";
//  isPalindrome(testWord)

// reverse a number
// function reverse(num){
//    let rev = 0; 
//    while(num>0){
//     let a = num%10;
//      rev = rev*10 + a;
//      num = parseInt(num/10);
//    }
//    if(rev=num)
//    console.log('yes');
// else
// console.log('no');
// }
// reverse(1234567)


// * prime numbers between two numbers
// const prompt=require('prompt-sync')();
// let a= parseInt( prompt('Enter first number '));
// let b= parseInt(prompt('Enter second number '));
// function getPrime(a,b){
// let i,j,arr=[];
// for(i=a;i<b;i++){
//     count=0;
//     for(j=1;j<=i;j++){
//         if(i%j==0)
//         count++;
//     }
//     if(count==2)
//     arr.push(i);
// }
// console.log(arr);
// }
// getPrime(a,b);








//* sum of digits of a number
// const prompt=require('prompt-sync')();
// let n=prompt('Enter a number ');
// function sumofdigits(n){
//     let sum=0;
//     while(n!=0){
//         const r=n%10;
//         sum=sum+r;
//         n=parseInt(n/10);
//     }
//     return sum;
// }
// console.log(sumofdigits(n));





//* sum of marks of student object
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
//     console.log(${element.name} has scored ${sum} marks);
// })




//* sum of 1st n terms

//   let n= prompt('Enter number of terms ');
//   let i,s=0;
//   for(i=1;i<=n;i++)
//   s=s+i;
// console.log(s);


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




//* count total even and odd number in array

// let evenCount=0,oddCount=0,arr=[],i;
// let n=prompt('Enter the size of array ');
// for(i=0;i<n;i++)
// arr[i]=prompt('Enter array elements ');
// for(i=0;i<n;i++){
//     if(arr[i]%2==0) evenCount++;
//     else oddCount++;
// }
// console.log(evenCount);
// console.log(oddCount);



//* find largest number in array 
//* find smaller element in array 
//  let arr=[1,2,3,4,5,556,656,77676,],i;
// console.log(Math.max.apply(Math, arr));




