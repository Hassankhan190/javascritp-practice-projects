// first question
// let user = prompt("Enter your number: (1 to 10 )");
// for(let i = 1;i <= 10;i++){
//    if(i % 2 === 0){
//     console.log("You Even: =",i);
//    }else{
//     console.log("You Odd: =",i);
//    }
// }

// second question
let marks = {
    English : 90,
    computer : 80,
    biology : 70,
    commerce : 60
}
for(let i in marks){
let grade;

    if(marks[i] >= 90 && marks[i] <= 100){
       grade = "A";
    }else if(marks[i] >= 80 && marks[i] <= 89){
       grade = "B";
    }else if(marks[i] >= 70 && marks[i] <= 79){
        grade = "C";
    }else if(marks[i] <= 60 && marks[i] >= 69){
        grade = "D";
    }else {
        grade = "Fail";
    }
}

//  let marks = {
//     English: 90,
//     computer: 80,
//     biology: 70,
//     commerce: 60,
// };

// for (let i in marks) {
//     let grade;

//     if (marks[i] >= 90 && marks[i] <= 100) {
//         grade = "A";
//     } else if (marks[i] >= 80 && marks[i] <= 89) {
//         grade = "B";
//     } else if (marks[i] >= 70 && marks[i] <= 79) {
//         grade = "C";
//     } else if (marks[i] >= 60 && marks[i] <= 69) {
//         grade = "D";
//     } else {
//         grade = "Fail";
//     }
//     console.log(`${i} = ${grade}`);
// let score = {
//   English: 90,
//   computer: 80,
//   biology: 70,
//   commerce: 60,
// }

// for (let i in score){
//   let grade;

//   if (marks[i] >= 90 && score[i] <= 100) {
//     grade = "A";
//   } else if (score[i] >= 80 && score[i] <= 89) {
//     grade = "B";
//   } else if (score[i] >= 70 && score[i] <= 79) {
//     grade = "C";
//   } else if (score[i] >= 60 && score[i] <= 69) {
//     grade = "D";
//   } else {
//     grade = "Fail";
//   }

//   console.log(`${i} = ${grade}`);
// }
// }
//third question
// let words = ["apple" , "banana" , "kiwi" , "pineapple"];
// for(let word of words){
//     if(word.length >= 5){
//         console.log(word);
//     }
// }

//four question
// let totalAmount = Number(prompt("Enter your total shopping amount:"));

// let discount = (totalAmount > 5000) ? 0.2 : 0.1;

// let discountAmount = totalAmount * discount;
// let finalPrice = totalAmount - discountAmount;

// console.log(`Your final price after discount is: ${finalPrice}`);

//five question 
// let number = [20, 10, 30, 5, 10];
// let sum = 0;
// for(let total of number){
//  sum += total
//  }
//     if(sum >= 100){
//         console.log("high total:",sum);
//     }else{
//         console.log("low total:",sum);
//     }

// const fullName = "Hassan"
// console.log(fullName);

// let x = 5;
// let y = 2;
// let a = x ** y;
// console.log(a); //25

// let x = 5;
// let v = 3;
// console.log(x += v);//8
// let a = 4;
// let b = 4;
// console.log( !(a === b , b === a));//false

// let a = 7;
// let b = 7;
// if(a !== b){
//     console.log("you value is ture");
// }else{
//     console.log("you not equal");
// }

// let age = 18;
// if(age >= 28){
//     console.log("you vot");
// }else if(age <= 16){
//    console.log("you not vot");
// }else{
//     console.log("middle");
// }
// let age = 18;
// let age1 = age <= 8 ? "you vot" : "you not vot";
// console.log(age1);

// let user = prompt("Enter your number");
// if(user % 5 === 0){
//     console.log("yes multiple of 5");
// }else{
//     console.log("not multiple of 5");
// }

// for(let i = 1;i <= 1000;i++){
//     console.log("apna college",i);// 6 < 5
// }
// let i = 1;
// while(i <= 5){
//     console.log("apna college",i);
//     i++
// }
// let i = 1;
// do{
//     console.log("apne college",i);
//     i++
// }while(i <= 5);

// let has = "hassankhan";
// for(let val of has){
//     console.log(val);
// }

// let student = {
//     Name : "apne college",
//     age : "30"
// }
// for(let i in student){
//     console.log(i + " = "  + student[i]);
// }

// let str = "apne college";
// console.log(str);
// console.log(str[2],str[3]);//ne
// let str = "hello";
// console.log(str);
// console.log(str.charAt(3));//4

// let nam = ["hassan","khan","perviz","khan"];
// nam.push("wahaj")

// console.log(nam);
// let nam = ["hassan","khan","perviz","khan"];
// console.log(nam.splice(2, 0 , "wahaj","khan"));


// let usernam1 = Number(prompt("Enter your first number"));
// let usernam2 = Number(prompt("Enter your second number"));
// if(usernam1 > usernam2){
//     console.log(`${usernam1} is greater`);
// }else if (usernam1 < usernam2){
//     console.log(`${usernam2} is greater`);
// }else{
//     console.log("Both are equal value");
// }

// let students = ["Hassan", "Perviz", "Ali", "Wahaj"];
// for(let i = 0; i < students.length;i++){
//     console.log(students[i]);
// }
//    for(let val of students){
//         console.log("Hello " + val);
//      }  
//      for(let num in students){
//         console.log(students[num].length);
//      }

// let fruits = ["apple", "banana", "mango", "orange"];
// console.log(fruits);
// console.log(fruits.push("grapes"));
// console.log(fruits.unshift("kiwi"));
// console.log(fruits.pop());
// console.log(fruits.slice(0,3));
// for(let i of fruits){
//     console.log(i.toUpperCase())
// }

// let str = "apne college me seekho";
// console.log(str);
// console.log(str.slice(5,12));
// console.log(str.startsWith("apne"));
// console.log(str.replace("seekho","practices karo"));






