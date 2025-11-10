// function has(name){
//     console.log(`Hello ${name}`)
// }
// has("Hassan khan");
// has("wahaj khan");
// has("perviz khan");

// function retu(a , b ,c){
//    let val = a + b + c;
//    console.log(`Average = ${a / 3}`);
// }
// retu(100 , 30 , 90);

// let arr = ["apple","mango","kiwi"];
//  let arrme = arr.forEach((item , index , arr)=>{
//    console.log(item ,index , arr);
// })

// let arr = [1,2,3,4,5];
// arr.forEach((val ,index)=>{
//     if(val % 2 === 0){
//         console.log(val , index)
//     }
// })
 
// let mapin = [1,2,3,4,5];
// let has = mapin.map((val , index)=>{
//    return `${val * 2} : ${index}`;
// })

// console.log(has);

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let fil = numbers.filter((items)=>{
//   return items % 2 !== 0;
// })
// console.log(`you odd num: ${fil}`);
// let number = [10,20,30,40];
// let total = number.reduce((result , current)=>{
//     return result + current;
// })
// console.log(total);

//question answer solve
// first question solve
// let arr = [20,40,38,73,31];
// let fila = arr.filter((val)=>{
//     return val % 2 === 0;
// })
// console.log(fila);
// let ma = fila.map((val)=>{
//       return val + val
// })
// console.log(ma);

// let re = ma.reduce((reult , currnet)=>{
//     return result + current
// })
// console.log(re);

// second question solve
// let marks = [40, 55, 70, 30, 90, 82];
// let count = marks.filter((val)=>{
//    return val > 50;
// })
// console.log(count);
// let add = count.map((val)=>{
//      return val + 5
// })
// console.log(add);
// add.forEach((val)=>{
//     console.log(val);
// })
 
// // three quesion solve
// let prices = [250, 120, 60, 500, 90];
// let print = prices.filter((val)=>{
//     return val >= 100;
// })
// console.log(print);
// let discount = print.map((val)=>{
//     return val - val * 0.1;
// })
// console.log(discount);
// let total = discount.reduce((res , val)=>{
//      return res + val
// })
// console.log(`Your final bill is Rs: ${total}`);

 
// next question javascritp advance question
// // first question solve 
// let marks = [23, 60, 90,38, 54, 80];
// function myfun(){
//     for(let val of marks){
//         if(val >= 50){
//             console.log(`Pass: ${val}`)
//         }else{
//             console.log(`fail: ${val}`)
//         }
//     }
// }
        
// let marks1 = [23, 60, 90,38, 54, 80];
// let pass = marks1.filter((val)=>{
//     return val >= 50;
// })
// console.log(`pass: ${pass}`);
// let total = pass.reduce((res , curr)=>{
//     return res + curr;
// })
// let avg = total / pass.length;
// console.log(`Average marks of passed student ${avg}`);


// // second question solve
// let cartTotal = [250, 120, 60, 500, 90, 300]

// let has = cartTotal.filter((val)=>{
//        return val >= 100;
//     })
//     console.log(has);
//     let ma = has.map((val)=>{
//         return val - val * 0.1;
//     })
//     console.log(ma);
//     let red = ma.reduce((res , curr)=>{
//         return res + curr;
//     })
//     console.log(`final price: ${red}`);

// third question solve
let employees = [
  { name: "Hassan", salary: 25000, rating: 4.5 },
  { name: "Ali", salary: 18000, rating: 3.0 },
  { name: "Wahaj", salary: 30000, rating: 4.8 },
  { name: "Zain", salary: 22000, rating: 2.9 },
  { name: "Owais", salary: 27000, rating: 4.0 }
];
let nam = employees.filter((val)=>{
    return val.rating >= 4.0;
})
console.log(nam);
