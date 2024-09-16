// //to declear a varibles//
// let a=5;
// var n="puru";
// const t= 17;
// //without using any varable we can also declear 
// y =17;
// //var functions scoped vs let
// //let block scoped
// //var redecleration is possible//
// //let cannot be used for redecleration
// //var suppport hosting property vs let do not suppport hosting property
// const test; //error
// let test;
// var test;//undefined 
// const test=89;//const not allow to change the value
// test=102; //error we have to declear only once 


// // type of java script//
// let a=89;
// let b=99.0;
// console.log(typeof(8))
// console(typeof()) //undifined
// console.log(a) //undefined
// console.log(typeof(NAN)); //Not a number
// //bigint 
// let a=12345678944n;


// //stings
// const str1 ="puru";
// const str2 'puru';
// let str3 = `` //this is also call sting template 
// let str3 =` My Name is ${str1}`; //${str1} we call  thsis placeholder
// let str3 =`My name is`+str1 // string concicatenate

// console.log('5'+5);//55
// console.log('5'*5);//25
// console.log('Hello'+5)//ans is NaN

// //In how many ways we can dsplay Ouput
// console.log()
// Document.write()
// alert()
// confirm() //it will ask conformation to user it will ask 'ok or cancel'
// prompt() //we use this to take this input from usr


// //key words
// //if else let var functions,switch,break,continue => This aere used for special perpous
  

// //operators
// x=2;
// y=5;
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x**y) //only this the extra in java script "We use this for power exponent"
// console.log(x/y); // Here we it will give float value
// console.log(Math.floor(x/y)); //ans is nearest lowest inter value
// console.log(Math.trunc(x/y)); //ans is nearest lowest inter value
// console.log(Math.round(x/y)); //ans is nearest greatest inter value 





// //where we have to use float have and wheere have to not use 


// let x=5;
// let y=2;

// let b=x++;
// console.log(b*y);
// let c= --y;
// console.log(x*c);
// ans is 10;
// second ans is 6
//  // ----------------------------------

//  let z = x++  +  ++y - c; // arthamatic exp
//  > or < true or false it will give //conditonal operstor or expersion

//  //precident list 
//  //which is will work first and last 
//  let z=100+ 50*5+30**20
 
//  //assingment operstor
//  // =,+=

//  // comparison operstors
//  console.log(x!==y)
//  console.log(x===y)

//  //logical operators in js
//  // && ,||, !
//  console.log(4&&1)// ans 1
//  console.log(4&&-1) //ans -1;
//  console.log(-1&&-4); //ans -4;

//  if(4&&-1)
//  console.log("true");
// else
// console.log("false") //true

// let z= 4&&1||0;

// //Bit Wise  operstor
// console.log(5&1) //and
// console.log(5|1) //or
// console.log(~1) //Inversion or not "Opposit" AND singn is Negative i stored 
// console.log(5^1)  //xor
// console.log(5<<1) //left shift
// console.log(5>>1) // right shift

// 32 bit scint format 

// IN Java script negative number are stored in 2s complement


// // concatenation operstors
// let str1 = 'Hello';
// let str2 = 'How are you';
// console.log(str1 + str2)

// //ternary operator ? :
// // is in as c language

// //operator precedence list  in js "Google It" 
// // [], new ,=>, .

// // cascading  or ladder form
// else if(){

// }
// else if(){

// }
// else

// // Nested if
// if()
// {
//     if()
//     {
//         if()

//     }
// }

// // program to greet good aft good even
// let today =new Date();
// console.log(today);
// let time = today.getHours();

// // if else conditions 
// if(time<12)
// console.log("Good Mornig");
// else if(time>=12&& time<16)
// console.log("Good Afterno0n ");
// else if(time>=16&& time<21)
// console.log("Good Evening");
// else
// console.log("Good Night");


//  //block scoped 

//  let a;
  
//  if(a) //single number is undefined //And undefiend is false
//  console.log("good");
// else
// console.log("bad");
// //ans is bad
//  //And in this place of (NAN) NOt a number is also false
 

//   // if("Hello") ;
//  console.log("good");
// else
// console.log("bad");
// //ans is error in else


// if(a);
// console.log("good");
// //ans is good;

// //what is the difference between if else and switch 
//  //we can do switch statement in else if also to redecue sintex or process we do in swwitch statement 


// let ch=parseInt(prompt("Enter your choice:"))
//  switch(ch){
//     case 1:
//         {
//         let msg ="Say Hi";
//         console.log(msg);
//         break;
//         }
//         case 2:
//             {
//             let msg ="Say Hello"
//             console.log(msg);
//             break;
//             }
//             default:{
//                 console.log("Invalid Operator");
//             }
//  }
// // To print day in js

//  let today =new Date();
//  console.log(today);
//  let day = today.getDay();
//  console.log(day);
//  switch(day){
//  case 0:
//     console.log("Sunday");
//     break;
//     case 1:
//         console.log("Moday");
//         break;
//         case 2:
//     console.log("Tuesday");
//     break;
//     case 3:
//         console.log("Wednesday");
//         break;
//         case 4:
//     console.log("Thursday");
//     break;
//     case 5:
//         console.log("friday");
//         break;
//         case 6:
//     console.log("saturday");
//     break;
//     default:
//         console.log("Invalid day");
//  }

//  //*while dowhile when we use 
//  // for  //When i know how may time have to run my for loop; 
//   //while // when i know how many times has to run my loop and at  i have to stop
//  // do while //To run one time we use 

//  //To print Positive Numbers i js script
// // program that checks if the number is positive, negative or zero
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


// // If you want skip any particular ittiration

// use// continues //statement

// //To Print Prime numbers and If not have to continue
// while(1){
// const number = parseInt(prompt("Enter a number: "));
// if(i%2==0)
// console.log(i);
// else
// continue;
// }


// //functions

// 1.function sum(a,b)
// {
//     let c=a+b;
//     console.log(c);
// }

// sum (4,5);


// // Down one will run Its Support  Hostinf property ;
// sum (4,5);
// function sum(a,b)
// {
//     let c=a+b;
//     console.log(c);
// }
// //
// 2.function sum(a,b)
// {
//     let c=a+b;
//     return c;
// }

// let x1 =sum(4,5);

// 3.// Varibles can store functions Reference and then we can use this varible as a function

// let a1= function(){  //Anonymous functionns ?//That means whe we wont give  name

//     let c=a+b;
//     console.log(c);
// }
// a1(3,4);
// // we can pass function  as a an argument to another function

// function total(function(){

// })



// // iife   imidetily Invoke Function express(iife):-We dont Need to call the function
// (function sum(a,b)
// {
//     let c=a+b;
//     console.log(c);

// })();

// //Ananomos function
// (function (a,b)
// {
//     let c=a+b;
//     console.log(c);

// })(3,4);

