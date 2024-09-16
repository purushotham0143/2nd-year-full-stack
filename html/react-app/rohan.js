// const root = ReactDOM.createRoot(document.querySelector('#root'));

// // let var1 = <div>
// //     <h1>this is a H1</h1>
// //     <p>this is a  Ptag</p>
// //     <button>sbmit</button>
// // </div>
// let a = 10;
// let b = 20;

// let obj = {
//     name:"Rohan",
//     age:19
// }
// let var2 = <div>
//     {/* {2+3} */}
//     {/* {a+b} */}
// {/*    
//         {<div>
//         {obj.name} <br/> oka object ni aieti Mamuluga call chiyavachu kani multipule aieti div lo malli inko div chiyali
//         {obj.age}
//         </div>}  */}        
// </div>

// let array = ["li-1","li-2","li-3","li-4","li-5","li-6"]

// let para5 = <div>
//     <ol>
//     {
//     array.map((ele)=>{
    
//     return <li>{ele}</li>
//     })
//     }
//     </ol>
// </div>

// root.render(para5);

let root=ReactDOM.createRoot(document.querySelector('#root'));
let a=10;
let b=20;
let para=<div>
<p>Hi am purushotham</p>
 <p>I am from teh chitkarauniversity</p>
 {a+b}
</div>
root.render(para);
