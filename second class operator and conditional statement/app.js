// Arthmetic operators
// let a = 10;
// let b = 3;  //5 x 5 x 5 x 5 x 5 x 5 = 30
// let c = a ** b; // 10 x 10 x 10 
// console.log("a + b", c); 
// console.log("a - b", c);
// console.log("a ** b", c)

// let a = 10;
// let b = 5;
// // ++a
// console.log("a--", a--)
// console.log(a);

// Assignment operators
// let a = 5;
// let b = 10;
// a **= 3 
// console.log("a += b:", a);

// Comparsion operators
// let a = 5; //number
// let b = 10; //string
// console.log("a <= b ", a <= b); //true
 
// Logical operators
// let a = 10;
// let b = 10;
// console.log( !(a == b)); // false

// Conditional Statement

// let age = 17;
// if(age >= 18){
//     console.log("You can vot");
// }

// let mode = "dark";
// let color;
// if(mode === "dark"){
//     color = "black";
// } else{
//     color = "white"
// }
// console.log(color);

    
// let age = 18;
// if(age >= 20){
//     console.log("you are vot")
// } else{
//     console.log("you are NOT vot")
// }

// let mode = "dark";
// let color;
// if(mode === "dark"){
//  color = "black"
// }else{
//  color = "white"
// }
// console.log(color);

// let age = 18;

// if (age <= 29){
//     console.log("you can vot");
// }else{
//     console.log("you can not vot");
// }

// let age = 18;
// let vot;
// if(age >= 21){
//     vot = "your are vot"
// } else if(age <= 20){
// vot = "your are another vot"
// } else{
//     vot = "your can not vot"
// }
// console.log(vot);

// let mode = "yellow";
// let color;
// if( mode === "dark"){
//     color = "black"
// } else if (mode === "blue"){
//     color = "blue"
// } else if (mode === "pink"){
//     color = "pink"
// } else{
//     color = "white"
// }
// console.log(color);


// ternary operators
// let vot = 16;
// let result = vot >= 18 ? "you are vot" : "you are not vot";
// console.log(result);

// Question answer solve
// particles Q1:

// let num = prompt("Enter your number");
// if(num % 2 === 0){
//     console.log(num,"you are multiple 2");
// } else {
//     console.log(num,"you are not multiple 2");
// }

// particles Q2:

// let grades = prompt("Enter your Grades marks: (0,100)");
// let scorse;
// if(grades >= 0 && grades >= 90){
// scorse = "A+"
// } else if (grades >= 0 && grades >= 80){
//  scorse = "B";

// }else if ( grades >= 0 && grades >= 70){
//     scorse = "C"
// }else if ( grades >= 0 && grades >= 60){
//     scorse = "D"
// } else{
//     scorse = "fail"
// }
// console.log("very fanei", scorse);

// let a = 5;
// let b = 2;
// let c = a / b;
// console.log("a / b", c) 

// let num = prompt("Enter your number multiple of number (2)");
// if (num % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// let a = 10;
// let b = 2;
// let c = a ** b;
// console.log("a + b = ",c);

// let a = 10;
// console.log(a++);
// console.log(a)

// let a = 10;
// a **= 3;
// console.log(a)

// let a = 10;
// let b = 20;
// console.log("a <= b =",a <= b) // true

// let a = 10;
// let b = 3;
// // console.log(a !== b || b !== a); //true
// console.log("a < b", !(a < b)) // true

// let age = 16;
// if(age >= 18){
//     console.log("you can vot"); //false
// }

// if(age < 30){
//     console.log("you can not vot");
// }

// let a = 10;
// let b = 6;
// if(a < b || b > a){
//     console.log("very good"); //false
// } else{
//     console.log("not very good");
// }

// let mode = "dark_mode";
// let color;
// if(mode !== "dark_mode"){
//     color = "black"
// } else{
//     color = "white"
// }
// console.log(color);

// let age = 18;
// let vot;
// if(age >= 20){
//     vot = "You are vot";
// } else if(age >= 21){ // two condition flase hai
//     vot = "no vot";
// }else{
//     vot = "your can not a vot";
// }
// console.log(vot);

// let mode = "dark_mode";
// let mode1 = "dark_mode" === ? "black" : "blue";

// let num = prompt("Enter you number");
// if(num % 3 === 0){
//     console.log ("yes multiple of 3");
// } else {
//     console.log ("not multiple of 3");
// }

// let userName =prompt("Enter you userName");
// console.log(userName);


// let score = prompt("Enter your grade marks (0 - 100)");
// let grade;
// if(score >= 90 && score <= 100){
//     grade = "A";
// } else if(score >= 80 && score <= 89){
//     grade = "B";
// } else if(score >= 70 && score <= 79){
//     grade = "C";
// } else if (score >= 60 && score <= 69){
//     grade = "D";
// } else if(score >= 0 && score <= 49){
//     grade = "Fail";
// } else {
//     grade = "you condition not a false";
// }
// console.log(grade);
// let gamenum = 7;
// let game = prompt("Enter you game number option (2,4,9,7,4,3,5)");
// while(game != gamenum){
//     game = prompt("Enter you game number try again");
// }
// console.log("conduralution you win the game:");

// let num = prompt("Enter your number");
// if(num % 2 === 0){
//     console.log("you even number");
// } else if(num % 2 !== 0){
//     console.log("you odd number");
// }else{
//     console.log("you try again");
// }

// let num = [20,30,40,89,38,77,33,22,97];
// let evencount = 0;
// let oddcount = 0;
// for(let i = 0; i < num.length;i++){
//     if(num[i] % 2 === 0){
//         evencount++
//     }else{
//         oddcount++
//     }
// }

// console.log("you even number:",evencount);
// console.log("you odd number:", oddcount)

// let str = "javascript";
// console.log(str);
// console.log(str.length); //10
// console.log(str[0],str[1],str[2],str[3]);//java

// let student = {
//     Name : "Hassan",
//     class : "first years"
// }
// let output = `The name ${student ,name}`

// let up = "apna college";
// console.log(up);
// console.log(up.toUpperCase());
// console.log(up.toLowerCase());

// let up = "        Hassan khan          ";
// console.log(up.trim());

// let sli = "apnacollege";
// console.log(sli);
// console.log(sli.slice(2,6)); //naco

// let i = "apna ";
// let b = "college";
// console.log(i+b);

// let na = "Hello";
// console.log(na.replace("H","Y"))

// let num = "137839";
// console.log(num.charAt(0));//839 

let fullName = prompt("Enter you fullName no space");
console.log("@" + fullName + fullName.length);