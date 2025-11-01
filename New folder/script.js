// var ,let, const -  line-by-line comparison 
// variable kyu bnane hai?
// variable bnane k kitne tarike hai?
// declarations and initialization

// ^const { createElement } = require("react");

// ^var a; // declare karna  
// ^var a = 12; // declare and initialize 


// ^var a = 12;

// var 
// window mei add karta hai
// function scoped hota hai 
// aap firse declare kar skte ho same name se and 
// error nahi aayega

// var a = 12;
// var a = 13;

// const discount = 12;
// let dulha= "lab"; 
// let dulhan = "laby";
// javascript functional scoped hai 
// function abcd(){
//     if(true){
//     var a = 12;

//     }
// }

// a = 12;
// var a;
// var a = 12;
// let a ;
// let a = 12;
// const a = 12;
// const a ;
// console.log(a);

// let a = 12;

// scope (global, block, functional)

// function abcd(){
//     var a = 12;
// }

// var a  = 12;

// {
//     var a=12;
// }

// function abcd(){
//     if(true){
//         let a =12;
//     }
// }

// Reassignment, redeclaration
// var a =12;
// a = 32;

// var a =233;

// let b =12;
// b = 32;

// let b= 433;

// ^var a //declare 
// ^var a = 12; //intialize

// ^a = 13; //reassignment

// ^var a = 11; //redeclare

// let a //declare
// let a =12; //intialize

// a = 14; //reassignment


// Temporal dead zone

// console.log(d);



// var d = 12;

// Hoisting impact per type 

// let a = undefined;
// console.log(a)
// a = 12;


// var-> hoist -> undefined 
// let -> hoist -> X 
// const -> hoist -> X   



// 1.variable and Declarations 
// common confusions?
// why var leaks outside block but let doesn't
// why const allows changing object properties.


// Datatypes

// primitives -> aisi saari values jinko 
// copy karne par tumhe ek real copy mil jaaye

// String,number,boolean,null,underdefined,
//  Symbol, bigint 

// Reference -> inko copy karne par real copy nahi
//  milegi but aapko reference milega parent ka
// Array,objects,functions
// [] {} ()

//^ let a = 12;
// ^let b = a;
// ^a = a + 2

// String
// '' - single quotes
// "" - double quotes
// `` - backticks
// 'harsh'
// "harsh"
// `harsh`

// number 
// 12 - integer 
// 12.3 - Number

// Boolean
// let a = true
// let b = false

// null ka matlab hai aapne jaan boojh kar koi value nahi di 

// let selectedStudents = null;  

// undefined ka matlab  ki aapne ek variable 
// banaya aur usey 
// value nahi di toh jo value by
//  default mili wo hai undefined


//^ let a;

// symbol -> unique immutable value 
// future mein hum koi libraries use karengay abb 
// is case mein un libraries
// mein kai baar kuchh fields hoti hain jinse 
// similar hum bhi bhi banaa dete hai 
// aur galti se humaari banaai hui fields us 
// library ki original fields ko change kar dete hai

// let shreyjs = {
//     uid : 12,
//     model:"harsh"
// }

// shreyjs.uid = 1;

// let u1 = Symbol("uid");
// let u2  = Symbol("uid");

// let obj = {
//     uid: 1,
//     name:"harsh",
//     age:13,
//     email:"test@test.com"
// }

// let u1 = Symbol("uid");
// obj[u1] = "001";

// ^Number.MAX_SAFE_INTEGER(limit for hold the value) is the biggest value for the variable 
// let a = Number.MAX_SAFE_INTEGER
// a 
// a + 1
// a + 2
// a + 3
// a + 4

// Bigint 
// let a = 9007199254740991n
// a + 12n

// let a = [1,2,3];
// let b = a;

// b.pop();

// let a ={
//     name:"harsh",
// };
// let b = a;
// b.name="harshita";

// Dynamic typing -> js mei static typing nahi hai and yaha 
// par hai dynamic typing typing jiska matlab hai 
// aap data ko change kar skte ho kyuki yaha par 
// dynamic data types hai 

// let a =12;
// a=true;
// a="harsh";
// a=[];
// a=null;
// a=undefined;

// typeof quirks(e.g., typeof null === 'object')

// typeof 12
// NaN===Nan  is false 
// 1=='1'
// 1==='1'
// typeof null 

// Type coercion (== vs ===)
// Truthy vs falsy values  

// 0 false "" null undefined Nan document.all  
//^ !! to check true ya false

// Type coercion -> concept jismein aapka ek type automatically convert hojayega 
// "5" + 1 = "51"
// "5" - 1 = 4

// if(12){

// }
// True
// if(null){

// }
// false 

// predict the result: true + false  , null+1 ,5+'5',!!undefined 
// true=1 and false = 0

// why NaN is a number?
// undefined vs null 
// "5"+1 "5"-1


// Arithmetic , comparison, logical, assignment , unary, ternary
// + - * / % **

// 1+2 = 3
// "ha" + "rsh" = "harsh"
// concatenation

// 12- 2 =10
// 12/6 = 2
// 12-4 = 8
// 12%2 = 0,12%3=0 
// 2**3 = 8

// = == ===
// <> <= >= ! != !== !!
// && ||  !

//  + - ! typeof ++ --

// ?:

// condition ? true hui ka code : false hui code 


// comparison
// =  
// let a =12; assignment operator


// == not strict
// === strict
// != not strict  
// !== strict
// >=
// <=
// <
// >

// 12==13      false
// 12=="12"    true  
// 12 === "12" false

// 12!=13 //true
// "harsh" != "harshita"

// 12!== 13

// assignment operator

// =
// -=
// +=
// *=
// /=
// %=

// let a  = 12;
// a+=3;
// a-=11; // a = a - 11
// a*=2; // a = a * 2
// a/=2; // a = a / 2
// a%= 3; 
// console.log(a);


//logical 
// && || ! 

// true && true 
// false && true
// true && false 
// false && false 

// false || true - True 
// AND 
// OR 


// unary operator

// + - ! typeof ++ -- 

// let a = 12;

// ++a;
// // 13
// a++;
// console.log(a);
// a++ + a;
// console.log(a);

// let a = 3;
// // --a;
// a--;
// a
// console.log(a);

// ternary operator
// ?:
// 12>13 ? console.log("true") : console.log("false")

// let a =[];
// a instanceof Array; 

// let b = {}
// b instanceof Object

// b instanceof Array
// variable instanceof _____


// let a = 12;

// a instanceof Number 

// let x = 3;
// let y = x++;
// console.log(x,y);

// let p = 4;
// let q = ++p;
// console.log(p,q);

// let m = 10;
// console.log(m--);
// console.log(m);

// let n = 5;
// let result = n++ + ++n;
// console.log(result);


// let likes = 100;
// function likePost(){
//     return ++likes;
// }
// console.log(likePost());
// console.log(likes);


// let count = 5;

// if (count-- === 5){
//     console.log("matched");
// }
// else{
//     console.log("not matched")
// }

// !! value for truthiness
// preincrement and post increment


// if else else if 
// switch case
// early return pattern

// if(65){

// }
// else{

// }

// if(logged){

// }
// else if(loggedin && admin){

// } 


// switch(val){
//     case 1:
//         break;
//     case 2:
//         break;
//     case 3:
//         break;    
//     default:
// }
// switch(1){
//     case 1:
//         console.log("heyheye")
//     case 2:
//         console.log("case 2")
//         break;
//     case 3:
//         break;    
//     default:
// }

// function getval(val){
//     if (val < 12)return"D";
//     else if (val < 50) return "C ";
//     else if (val < 75) return "B ";
//     else return "A";


// }
// console.log(getval(81));

// function getgrade(score){
//     if(score>=90)return "A+";
//     else if(score>=80 && score<=89)return "A";
//     else if(score>=70 && score<=79 )return "B";
//     else if(score>=60 && score<=69)return "C";
//     else if(score>=33 && score<=59)return "D";
//     else if(score>=0 && score<=32)return "Fail";
//     else return "Invalid Marks";
// }
// console.log(getgrade(95))
// console.log(getgrade(75))
// console.log(getgrade(65))
// console.log(getgrade(85))
// console.log(getgrade(55))
// console.log(getgrade(35))


//  rock-paper-scissor logic

// function rps(user,computer){
//     if (user=== computer ) return "Draw!!!"
//     else if( user === "rock" && computer==="scissor") return "user";
//     else if( user === "paper" && computer==="scissor") return "computer";
//     else if( user === "rock" && computer==="paper") return "computer";
//     else if( user === "scissor" && computer==="paper") return "user";

//     return "computer"

// }
// console.log(rps("rock","paper"));

// fallthrough in switch-case

//repeat karne ko loop kahte hai  
// 1 1 1 1 1 1 1 1 
// 1 2 3 4 5 6 7 8 

// kaha se jaana hai -> kaha tak jaana hai -> kaise jaana hai 
// for 

// kaha se jaana hai hai -> kab rukna hai -> kaise jaana hai 
// while 

// 1-40 for 
// 20-30 for 
// hello na aajaye - while  
// laal color ka ped - while 
// bhaalu miley jab jiske upar hirad baitha hai - while  

// for 
// 1 - 100000000

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);

// for(startTransition; end; change){

// }

// start
// while(end){
//code
//     change
// }


// 1-100
// for(let a = 1; a<101;a++){
//     console.log(a)
//     // console.log("huihuihui")
// }

// let i = 1;
// while (i<33){
//     console.log(i);
//     i++
// }

// let i = 12;
// do{
//     console.log(i);
//     i++;
// }
// while(i<2){

// }

// for(let i = 1; i <=201 ; i++){
//     console.log(i);
//     if(i===33){
//         break;
//     }
// }

// for(let i = 1; i <=201 ; i++){
//     if(i===32){
//         continue;
//     }
//     console.log(i);
// }


// for ( let i = 1; i<11; i++){
//     console.log(i)
// }

// let i = 10;
// while(i>0){
//     console.log(i);
//     i--;
// }

// for (i = 1; i<21 ; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// for (i=1; i<21; i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }

// let a = 1;
// while(a<11){
//     console.log(`5 X ${a} = ${5*a}`)
//     a++;

// }

// let sum = 0
// for (let i = 1; i<101;i++){
//     sum = sum + i ; 
// }
// console.log(sum);

// for (let i = 1; i<51 ; i++){
//     if(i%3===0){
//         console.log(i)
//     }
// }

// let val  = prompt("give a number: ")
// for ( let i = 1 ; i<=val; i++){
//     if(i%2===0){
//         console.log(`${i} is even`)
//     }
//     else{
//         console.log(`${i} is odd`)
//     }
// }

// let count = 0
// for(let i = 1; i<101; i++){
//     if(i%3===0 && i%5===0){
//         console.log(i)
//         count++
//     }
// }
// console.log(count)

// for (let i = 1; i<21;i++){
//     if (i%7===0){
//         console.log(i)
//         break;
//     }
// }

// for(let i = 1;i<101;i++){

//     if(i%7===0){
//         continue;
//     }
//     console.log(i);

// }


// for (let i = 1; i<21; i++){

//     if (i%3===0){
//         continue;
//     }
//     console.log(i)
// }
// let count = 0;
// for (let i = 1; i < 101 ;i++){
//     if(i%2===0){
//         continue;

//     }
//     count++;

//     if (count===5){
//         break;
//     }
//     console.log(i);
// }

// let sum = 0;
// for (let i = 1;i<=10;i++){
//     sum += i;
// }
// console.log(sum);

// let n = Number(prompt("enter the number:")); 
// let rev = 0; 
// while(n>0){ 
//     let digit = n%10;
//      rev = rev*10 + digit; 
//      n = Math.floor(n/10);
//      } 
// console.log("Reversed number is: " + rev);


// what why how
// what function  

// agar code likh diya to woh turant chal jaata hai  

// console.log("hey");

// function dance(){
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
// }

// dance();

// function lolo(){
//     console.log("Happy new year");

// }
// lolo();

// function abcd(){

// }  function declaration 

// let fnc = function(){
// fnc expression
// }

// fat arrow fnc 
// ()=>{

// }


// let fnc=()=>{
//     console.log("heyehheeh");
// };
// fnc();

// function dance(v1) {
//     console.log(`${v1} naach raha hai`);
// }

// dance("ghoda");
// dance("hirad");
// dance("machli");
// dance("genda");

// function add(v1,v2){
//     console.log(v1+v2);
// }

// add(3,12);
// add(13,12);

// function add(v1,v2){
//     console.log(v1,v2);
// }

// add();
// function add(v1,v2){
//     console.log(v1+v2);
// }

// add();


// function add(v1=0,v2=0){
//     console.log(v1+v2);
// }

// add();

// jab arguments kai saare ho toh humein utne hi parameter banaane padega, issey bachne ke liye , hum rest ka use karte hai agar  ... function ke parameter space mein lage toh woh rest operator hai
// function abcd(...val) {
//     console.log(val)

// }
// abcd(1,2,3,4,5,6,7,8,9,10);

// function abcd(a,b,c, ...val){
//     console.log(a,b,c,val);

// }
// abcd(1,2,3,4,5,6);

// return matlab jaha se aaye ho wahi daal denge 

// function abcd(v){
//     return 12+v;
// }
// let val = abcd(23);
// console.log(val);

// first class fncs -> functions ko values ki tarah treat kar sakte hai

// function abcd(val){
//     val();
// }

// abcd(function(){
//     console.log("hey!!!")
// });

// hof wo function hota hai jo ki return kare functoin ya fir accept kare ek fnc apne parameter mei 

// function abcd(){
//     return function(){
//      console.log("heyhey");
//     }
// }

// abcd()();


// pure vs impure functions
// aisa fnc jo ki baahar ki value ko naa badle wo hai pure fnc 

// let a =12;

// function abcd(){
//     console.log("hehehe");
// }

// function hui(){
//     a++;
// }

// aisa fnc jo baahar ki value ko badal de wo hai impure functions  


// closures -> ek fnc jo return kare ek aur function aur return hone waala function humesha   use karega parent fnc ka koi variable 

// function abcd(){
//     let a =12;
//     return function(){
//         console.log(a);
//     }
// }


// function abcd(){
//     let a =12;
//     function defg() {
//         let b = 13;
//         function ghij(){
//             let c = 14;
//         }
//     }
// }


// (function (){
//     console.log("heyhey");
// })();

// abcd();



// function abcd() {
//     console.log("heyheyhey");
// }


// abcd();



// let abcd = function() {
//     console.log("heyheyhey");
// }


// q1 : what's the difference between function declaration and expression in terms of hoisting?

// hoisting
// abcd();

// function abcd(){

// }

// abcd();

// let abcd = function(){

// }

// greet();

// function greet(){
//     console.log("hello!");
// }

// let multiply = (a,b)=>{
//     return a*b;
// }

// function welcome(name){
//     console.log(name);
// }
// welcome("harsh");

// function demo(a,b,c){}
// demo(1,2);

// function sayhi(name="Guest"){
//     console.log("Hi",name);
// }
// sayhi();

// what does the ... operator mean in parameter?
// function abcd(...val){
//  console.log(val)
// }
// abcd(1,2,3,4,5,6)


// function abcd(a,b,c,...val){
//     console.log(a,b,c,val);
// }
// abcd(1,2,3,4,5,6)

// use rest parameter to accept any number of scores and return  the total 

// function getscore(...scores){
//     let total  = 0 ;
//     scores.forEach(function(val){
//         total = total + val;
//     });
//     return total;
// }
// console.log(getscore(10,12,14,18));

// function checkage(age){
//     if (age < 18){
//         console.log("Too young");
//     }
//     else{
//         console.log("allowed");
//     }
// }

// function checkage(age){
//     if (age<18) return "Too Young";
//     return "Allowed";

// }
// console.log(checkage(23));

// function f(){
//     return;
// }
// console.log(f());

// what does it mean when we say "functions are first-class citizens"?

// can you assign a function to a variable and then call it? show How . 

// let a = function(){
//   console.log("fsfsdf")
// }
// a();

// pass a function into another function and execute it inside. 

// function abcd(val){
//   val();
// }

// abcd(function(){
//    console.log("hey");
// })

// what is a high-order function?  

// function abcd(val){
//     val();
// }

// abcd(function(){

// })

// [1,2,3].map(function (x){
//     return x * 2;
// });
// console.log(x)  

// let total = 0;
// function addToTotal(num){
//     total+=num;
// }

// convert the above function into a pure function.

// let total = 0;

// function addToTotal(num){
//     let newtotal = total;
//     newtotal += num;
// }

// what is  a closure? when is it created ? 

// function abcd(){
//     let val = 0 ;
//     return function(){
//         console.log(val);
//     };
// }

// function outer(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);

//     };
// }

// const counter = outer();
// counter();
// counter();


// convert this normal function into a IIfe:

// (function init(){
//     console.log("initialized")
// })();

// what is the use of IIFE? Name one real-world use case.

// let shrey = (function (){
//     let score = 0;
//     return{
//         getscore: function (){
//             console.log(score)
//         },
//         setscore: function (val){
//             score = val;
//         },
//     };

// })();

// what will be the output here and why?

// greet(); 

// var greet = function(){
//     console.log("hi");
// };

// greet();
// function greet(){
//     console.log("hi");
// };

// write a bmi calculator

// function bmi(weight,height){
//   return weight / (height*height);
// }
// console.log(bmi(85,1.74).toFixed(3))

// function discountcalculator(discount){
//     return function(price){
//         return price - price * (discount/100);


//     }
// };
// let discounter = discountcalculator(10);
// console.log(discounter(200));

// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     };
// }
// let c = counter();
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// let d = counter();
// console.log(d());

// function double(val){
//     return val * 2;
// };
// console.log(double(5));

// (function (){
//     const password = "secret password";
//     console.log(password);
// })();

// console.log(password);

// arrow vs regular functions 
// functions hoisting and TDZ

// array 
// let marks = [10,40,52,37,92];
// marks[2] = 44;

// let arr = new Array();

// let arr = [1,2,3,4];
// arr[2]  = 12;

// let arr = [1,2,3,4,5];
// arr.push(7000);

// let arr = [1,2,3,4,5];
// arr.pop();

// let arr = [1,2,3,4,5];
// arr.shift();

// let arr = [1,2,3,4,5];
// arr.unshift(6);

// let arr = [1,2,3,4,5];
// arr.splice(1,2);  index 1 se value hatni hai 

// let arr = [1,2,3,4,5];
// let newarr = arr.slice(0,2);

// let arr = [1,2,3,4,5];
// arr.reverse();

// let arr = [11,62,3,4,25];
// let sr = arr.sort(function(a,b){
//     return a - b;
// });

// let arr = [11,62,3,4,25];
// let sr = arr.sort(function(a,b){
//     return b - a;
// });

// let arr = [11,62,3,4,25];
// arr.forEach(function(val){
//     console.log(val+5);
// });

// let arr = [11,62,3,4,25];

// map sirf tab use karna hai jab aapko ek naya array banana hai pichhle array ke data ke basis par


// map dikhte hi saath man mein ek blank array bana liya karo

// let newarr = arr.map(function(val){
//   return 12;  
// });

// let newarr = arr.map(function(val){
//   if (val>10) return val;  
// });

// jab bhi aapko aisa koi case dikh jaaye jaha par ek array se naya array banega and wo naya array kuchh values ko rakhega tab map lagega

// let arr = [1,2,3,4,5,6,7,8];
// let newarr=arr.filter(function(val){
//     if(val>4)return true;
// });

// let arr = [1,2,3,4,5,6,7];

// let ans = arr.reduce(function(accumulator,val){
//     return accumulator + val;
// },0);


// let arr = [
//     {id:1,ke:1},
//     {id:2,ke:2},
//     {id:3,ke:1},

// ];

// let newarr = arr.find(function(val){
//     return val.ke === 1;
// });

// let arr = [10,30,32,90];

// let any = arr.some(function(val){
//     return val > 85;
// })

// let arr = [10,30,32,90];
// let eve = arr.every(function(val){
//   return val > 15;
// });

// destructing

// let arr = [1,2,3,4,5];
// let [a,b, , c] = arr;

// let arr = [1,2,3,4,5,6,7,8,9];
// let arr2 = [...arr];

// create an array with 3 fruits and print the second fruit. 
// let fruits = ['apple','guava','banana'];
// console.log(fruits[1]);

// add "mango" at the end "pineapple" at the beginning of this array:

// let fruits = ["apple","banana"];
// fruits.push("Mango");
// fruits.unshift("pineapple");
// console.log(fruits);

// replace "banana" with "kiwi" in the array above.

// let fruits = ["apple","banana"];
// fruits.pop();
// fruits.push("kiwi");
// console.log(fruits);

// what's the difference between .push() and .unshift()?

// remove the last item from this array using a method:
// let numbers = [1,2,3,4,5];
// numbers.pop()

// insert "red" and "blue" at index 1 in this array:

// let colors = ["Green","yellow"];
// colors.splice(1,0,"red","blue");
// console.log(colors);

// extract only the middle 3 elements from this array 
// let items = [1,2,3,4,5,6];
// let newarr=items.slice(2,5);
// console.log(newarr);

// sort this array alphabetically and then reverse it:
// let names = ["zara","arjun","mira","bhavya"];
// console.log(names.sort().reverse())

// use .map() to square each number:

// let arr = [1,2,3,4];
// let newarr = arr.map(function(val){
//     return val*val
// });

// USE .FILTER() to keep numbers greater than 10:

// let arr = [5,12,8,20,3];
// let newarr = arr.filter(function(val){
//   return val > 10;
// });

// use .reduce() to find the sum of this array:

// let arr = [10,20,30];
// let newarr = arr.reduce(function(acc,val){
//   return acc+val;
// },0);

// use .find() to get the first Number less than 10:

// let arr = [12,15,3,8,20];
// let newarr = arr.find(function(val){
// return  val<10;
// });

// use .some() to check if any student has scored below 35:

// let arr = [45,60,28,90];
// let newarr = arr.some(function(val){
//  return val < 35;
// });

// use .every() to check if all numbers are even:

// let arr = [2,4,6,8,10];
// let ans = arr.every(function(val){
//     return val%2===0;
// });

// Destructor this array to get firstname and lastname

// let fullname = ["harsh","sharma"];
// let [firstname,lastname] = fullname;

// merge two arrays using spread operator 
// let a = [1,2];
// let b = [3,4];

// let c = [...a, ...b];

// add "india" to the start of this array using spread 
// let countries = ["usa","uk"];
// countries = ["India",...countries];

// clone this array properly (not by reference):
// let arr = [1,2,3];
// let arr2 = [...arr];

// big blunder with .sort()

//object 

// let obj = {
//     name : "harsh",
//     age:26,
//     khaana:"daal chawal"
// };

// obj.age
// console.log(obj['age'])

// let aa = "name";
// console.log(obj[aa])

// obj[aa] 


// const user = {
//     name:"harsh",
//     address: {
//         city:"Bhopal",
//         pin: 462001,
//         location:{
//             lat:23.2,
//             lng:77.4,
//         },

//     },
// };
// console.log(user.name)
// console.log(user.address.city)
// console.log(user.address.location)

// let {lat,lng} = user.address.location;
// console.log(lat)
// console.log(lng)

// let obj = {
//     name:"harsh",
//     age:26,
//     email:"test@test.com",
// };

// for(let ke in obj){
//     console.log(ke,obj[ke]);
// console.log(obj.ke)
// console.log(ke);
// };

// console.log(Object.keys(obj));
// console.log(Object.entries(obj));
// let obj = {
//     name:"harsh",
//     age:26,
//     email:"test@test.com",
//     address : {
//         city: "bhopal",
//     },
// };

// let obj2 = {...obj};

// let obj2 = Object.assign({price : Infinity },obj);

// let obj2 = {...obj};
// console.log(obj2)
// obj2.address.city = "Indore";
// console.log(obj2)
// let obj = {
//     name:"harsh",
//     age:26,
//     email:"test@test.com",
//     address : {
//         city: "bhopal",
//     },
// };

// JSON.stringify(obj)

// let obj2 = JSON.parse(JSON.stringify(obj));

// optional chaining
// obj?.address?.city 

// computed properties


// let role = 'admin';
// let obj = {
//     name:"harsh",
//     age:26,
//     email:"test@test.com",
//     address : {
//         city: "bhopal",
//     },
//     [role] : "harsh",
// };


// create an object for a student with name ,age, and isEnrolled. 

// let obj = {
//     name:"harsh",
//     age: 26,
//     isEnrolled:true,
// };

// can an object key be a number or boolean? Try this 

// const obj = {
//     true:"Yes",
//     42: "answer"
// };

// console.log(obj[42]);

// Access the value of "first-name" from this object:

// const user = {
//     "first-name":"harsh",
// };

// user["first-name"]

// given a dynamic key let key = "age", how will you access user[key]?
// let key = "age";
// const user = {
//     age:26,
// };

// console.log(user[key])


// from the object below, print the latitude:
// const locations = {
//     city:"Bhopal",
//     coordinates:{
//         lat:23.2,
//         lng:77.4,
//     }
// }
// console.log(locations?.coordinates?.lat)

// Destructor the city and lat from the location object above 

// let  {city} = locations;
// let {lat} = locations.coordinates;

// Destructor the key "first-name" as a variable called firstName

// const user = {
//     "first-name":"harsh",
// };

// let {"first-name":firstName} = user;

// use for-in to log all keys in this object:
// const course = {
//     title: "Javascript",
//     duration: "4 weeks"
// };

// for(let key in course){
//     console.log(key)
// };


// use Object.entries() to print all key-value pairs as:
// title:javascript 
// duration:4 weeks

// const course = {
//     title:"javascript",
//     duration: "4 weeks",
// };
// console.log(Object.entries(course))

// Object.entries(course).forEach(function(val){
//    console.log(val[0] ,":", val[1]);
// });

// const original = {a:1,b:2};
// const copy = {...original};


// const obj1 = {info : {score:80}};
// const clone = {...obj1};
// clone.info.score = 100;
// console.log(obj1.info.score);

// deep clone the obj1 safely. 
// const obj1 = {info : {score:80}};
// let newobj = JSON.parse(JSON.stringify(obj1));
// newobj.info.score = 100;

// Rewrite this safely using optional chaining:

// const person = {};
// console.log(person?.profile?.name);

// use a variable to dynamically assign a property 

// const key = "role";

// let obj = {
//     name: "harsh",
//     [key]: "admin",

// };



// &DOM 


// dom manipulation
// html se element select karna
// Text badalna
// html badalna 
// css badalna
// attribute event listeners


// selecting elements 
// getElementById , getElementsByClassName , querySelector,querySelectorAll

//^ let h1 = document.querySelector("h1")
// ^console.log(h1)

//^ let h1 = document.getElementById("abcd");
// ^let h1 = document.getElementsByClassName("abcd");

// ^let h1 =  document.querySelector("h1");
//^ console.dir(h1);



// Text/content access innerText, textContent , innnerHTML

// let h1 =  document.querySelector("h1");
// h1.textContent="hello harshita kaise ho";
// h1.innerHTML = "harsh badhiya hai";
// h1.innerText = "harsh badhiya hai";
// h1.innerHTML = "<i>hey</>";
// h1.hidden = true;
// console.dir(h1);

// Attribute manipulation getAttribute, setAttribute , removeAttribute
// let a = document.querySelector("a");
// a.href = "https://www.google.com";
// a.setAttribute("href","https://www.google.com");

// let a = document.querySelector("img");
// a.setAttribute("src","https://images.unsplash.com/photo-1529927066849-79b791a69825?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVnfGVufDB8fDB8fHww");

// let a = document.querySelector("a");
// console.log(a.getAttribute("href"))

// let a = document.querySelector("a");
// a.removeAttribute("href")

//Dynamic DOM Manipulation createElement , appendChild , removeChild , prepend

// let h1  = document.createElement("h1");
// h1.textContent = "Hello ji"; 
// console.log(h1);
// document.body.append(h1);
// document.body.prepend(h1);

// create element 
// append/prepend karo jaha bhi Element chahiye waha 

// let h1 = document.createElement("h1");
// h1.textContent = "hello ji kaise ho";
// h1.textContent = "ghar par jaao khana khaao";
// document.querySelector("body").append(h1); 
// document.querySelector("body").prepend(h1);

// let h1 = document.querySelector("h1");
// h1.remove();

// let h1 = document.createElement("h1");
// h1.textContent = "hey mai baahar se aaya hu";
// document.querySelector("div").prepend(h1);
// document.querySelector("div").append(h1);

// let div = document.querySelector("div");
// div.appendChild(h1);
// div.append(h1);


//* style and classList (add,remove,toggle)


//^ let h1 = document.querySelector("h1");
// js se css badalna
// h1.style.color = "red";
// h1.style.backgroundColor = "green"; 
// h1.style.fontFamily = "Bigbesty";
// h1.style.textTransform = "capitalize";
// console.dir(h1);

// h1.classList.remove("hulu");
// h1.classList.toggle("hulu");
// h1.classList.add("hulu");

// what is the DOM? How does it represent the HTML structure ?

// Name the types of Nodes in the DOM tree. 


// what's the difference between an element node and a text node? 

// Inspect the following HTML in the browser and identify each node:

// What is the difference between getElementById and querySelector?
// document.getElementById("apple")
// document.querySelector("#apple")

// what does getElementByClassName return? Is it an array?

// let cl = document.getElementsByClassName("color");
// console.log(cl);

// Use querySelectorAll to select all buttons with class"buy-now".
// let buynow = document.querySelectorAll(".buy-now");
// console.log(buynow);

// T1: Select the heading of a page by ID and change its text to "Welcome to Shreyians!". 
// ^let heading = document.querySelector("#heading");
// ^heading.textContent = "Welcome to Shreyians!";

// Select all <li> elements and print their text using a loop.

// let lis = document.querySelectorAll('li');
// lis.forEach(function(val){
//     console.log(val.textContent);
// });

// for(let i = 0; i<lis.length;i++){
//    console.log(lis[i].textContent);
// }

// what's the difference between innerText, textContent, and innerHTML?

// when should you use textContent instead of innerText? 


// Select a paragraph and replace its content with:
{/* <b>Updated</b> by Javascript */ }

// let p = document.querySelector("p");
// p.innerHTML = "<b>Updated</b> by Javascript";

// How do you get the src of an image using Javascript?


// let img = document.querySelector("img");
// console.log(img.src);
// console.log(img.getAttribute("src"));

// what does setAttribute() do?
// document.querySelector("img").setAttribute("src","https://images.unsplash.com/photo-1755397467747-6160983f9694?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D");

// select a link and update its href to point to https://shreyians.com. 

// let a = document.querySelector("a");
// a.href = "https://www.sheryians.com";

// Add a title attribute to a div dynamically. 

// let div = document.querySelector("div");
// div.setAttribute("title","some info");


// Remove the disabled attribute from a button. 
// let btn = document.querySelector("button");
// btn.removeAttribute("disabled");


// what does createElement() do? what's returned?
// let h1 = document.createElement("h1");
// console.log(h1);

// what's the difference between appendChild() and prepend()

// Can you remove an element using removeChild()?
// document.querySelector("div").removeChild(elementNode)

// Create a new list item <li>New Task</li> and add it to the end of a <ul>.

// let ul = document.querySelector("ul");
// let li = document.querySelector("li");

// li.textContent = "New Task";

// ul.appendChild(li);

// create a new image Element with a placeholder source and add it at the top of a div. 

// let img = document.createElement("img");
// img.setAttribute("src","https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png");

// img.classList.add("placeholder");

// document.querySelector("div").prepend(img);

// select the first item in a list and delete it from the DOM.

// let ul = document.querySelector("ul");
// let li = document.querySelector("li");

// ul.removeChild(li);

// How do you change the background color of an element?

// element.style.backgroundColor = "red";

// what's the difference between .classList.add() and .classList.toggle()?

// Add a highlight class to every even item in a List.

// let li = document.querySelectorAll("ul li:nth-child(2n)");
// li.forEach(function(elem){
//   elem.classList.add("highlight")
// });


// Toggle a class active on a button when clicked (Hint: Use classList.toggle()). 

// set the font size of all <p> elements to 18px using Style. 

// let p = document.querySelectorAll("p");

// p.forEach(function(elem){
//    elem.style.fontSize = "8px";
// });

// innertext vs textcontent vs innerhtml
// classslist Vs style property 


//* Events and Eventhandling

// events binding: addEventListener, removeEventListener 



// common events : click,input,change,submit,mouseover,keyup 
// event object: Target,type,preventDefault
// event bubbling and capturing 
// event delegation 

// browser mein page par koi bhi harkat karo event raise ho jaayega  

// kuch screen  par ho aur aapko reaction dena ho toh us waqt aapko event handle karna aana chahiye

// event matlab hota hai koi action hua 
// event listener ka matlab hai aapne koi action ka reaction diya 

// ^let h1 = document.querySelector("h1");
// ^h1.addEventListener("click",function(){
//  ^ h1.style.color = "red";
// ^});

//^ let p  = document.querySelector("p"); //select the parameter first
//^ p.addEventListener("click",function(){
// ^ p.style.color = "green";
// ^});


// ^let p = document.querySelector("p");
// ^p.addEventListener("dblclick",function(){
//  ^   p.style.color = "yellow";
// ^});

// Element.addEventListener("event name", function(){

// });

// let p = document.querySelector("p");
// function dblclick(){
//     p.style.color = "green";
// }
// p.addEventListener("dblclick",dblclick);
// p.removeEventListener("dblclick",dblclick);


// i am very confused that how many events are there in js. i want to know all the names whatever events are there i mean all

// everytime i type in the input what event is triggered
// and when the mouse comes on my div
// when somebody types anything on keyboard on the whole screen, not anywhere specific or any input specific just on the website 

// ^let p = document.querySelector("p");
// ^p.addEventListener("click",function(){
//  ^   p.style.color = "red";
// ^});

// ^let input = document.querySelector("input");

// ^input.addEventListener("input", function(){
// ^    console.log("typed");
//^ });
// ^let inp = document.querySelector("input");

// ^inp.addEventListener("input", function(evt){
//  ^   console.log(evt.data);
// ^});

// ^let inp = document.querySelector("input")

// ^inp.addEventListener("input",function(dets){
// ^    console.log(dets);
// ^});


// let inp = document.querySelector("input");
// inp.addEventListener("input", function(dets){
//     if(dets.data !== null){
//         console.log(dets.data)
//     }
// });

// change event tab chalta hai jab aapka koi input select ya textarea mein koi change hojaaye

//^ let sel = document.querySelector("select");
// ^let device = document.querySelector("#device")
// ^sel.addEventListener("change",function(dets){
//^ console.log(dets.target.value);
//    ^ device.textContent = `${dets.target.value} Device Selected`;
// ^}); 

//approach

//
// let h1 = document.querySelector("h1");

// window.addEventListener("keydown",function(dets){
// console.log(dets.key);
//     if(dets.key === " "){
//         h1.textContent = "SPC";
//     }
//     else{

//     h1.textContent = dets.key;
//     }
// });


//^ let btn = document.querySelector("#btn");
// ^let fileinp = document.querySelector("#fileinp");
// ^btn.addEventListener("click",function(){
// ^  console.log(fileinp.click());
//  ^ fileinp.click();
//^ });

// ^fileinp.addEventListener("change",function(dets){
//  ^  console.log(dets.target.files[0].name);
// ^btn.textContent = dets.target.files[0].name;
// ^});

// let btn = document.querySelector("#btn");
// let fileinp = document.querySelector("#fileinp");
// btn.addEventListener("click",function(){
//   console.log(fileinp.click());
//   fileinp.click();
// });

// fileinp.addEventListener("change",function(dets){
//    console.log(dets.target.files[0].name);
//       const file = dets.target.files[0];
//       if(file){
//         btn.textContent = file.name;
//       }
// });

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");
// form.addEventListener("submit",function(dets){
//     dets.preventDefault();

// console.log(inputs[0].value,
//             inputs[1].value,
//             inputs[2].value,
//             inputs[3].value);

// let card =  document.createElement("div");
// card.classList.add("card");
// let profile = document.createElement("div");
// profile.classList.add("profile")

// let img = document.createElement("img");
// img.setAttribute("src","https://images.unsplash.com/photo-1759505041005-6c75a1399f4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D")

// img.setAttribute("src",inputs[2].value);



// card.appendChild(profile);
// console.log(card);

// let h3 = document.createElement("h3");
// h3.textContent = inputs[0].value;
// let h5 = document.createElement("h5");
// h5.textContent = inputs[1].value;
// let p = document.createElement("p");
// p.textContent = inputs[3].value;


// profile.appendChild(img);
// card.appendChild(profile);

// card.appendChild(h3);  
// card.appendChild(h5);  
// card.appendChild(p);  

// main.appendChild(card);


// inputs.forEach(function(inp){
//     if(inp.type!== "submit"){
//       inp.value = "";
//     }
// });
// });

// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("mouseover",function(){
//     abcd.style.backgroundColor = "green";
// });
// abcd.addEventListener("mouseout",function(){
//     abcd.style.backgroundColor = "red";
// });

// let abcd = document.querySelector("#abcd");
// window.addEventListener("mousemove", function(dets){
// console.log(dets.clientX,dets.clientY)
//    abcd.style.top = dets.clientY + "px"; 
//    abcd.style.left = dets.clientX + "px"; 
// });


// document.getElementById("myinput").addEventListener("keyup", function(event) {
//   console.log("Key released:", event.key);
// Perform actions based on the released key
//   if (event.key === "Enter") {
//     console.log("Enter key was released!");
//   }
// });


// event object (dets)

// let abcd = document.querySelector("#abcd");
// abcd.addEventListener("click", function(dets){ 
// console.log(dets);
// })


// let form = document.querySelector("form");

// form.addEventListener("submit", function(dets){
//   dets.preventDefault();
// });

// event bubbling
// jispe event aayega agar uspar listener nahi hua to humaara event uska parent par listener dhundhega aur aisa krte krte upar ki taraf move karega 

// document.querySelector("#nav").addEventListener("click", function() {
//   alert("clicked");
//  });


// let ul = document.querySelector("ul");

// ul.addEventListener("click",function(dets){
// alert("clicked");
// console.log(dets);
// dets.target.style.textDecoration="line-through";
//     dets.target.classList.toggle("lt");
// });

// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let  btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//   console.log("button clicked");
// });
// c.addEventListener("click",function(){
//   console.log("c button clicked");
// });
// b.addEventListener("click",function(){
//   console.log("b button clicked");
// });
// a.addEventListener("click",function(){
//   console.log("a button clicked");
// });


// Event capturing
// jab bhi aap click krte ho ya koi bhi event raise krte ho toh aapka jo event  flow do phases mein chalta hai:

// phase 1: event top level element se neeche ki taraf aayega 
// phase 2: event raised element se parent ki taraf jaayega 

// aur pehle phase1 hoti hai 


// humesha phase1 hi pahle hoti hai par vo by default off rahti hai, agar hum usey on kar dein to pahle phase 1 ka answer milega 

// pehle capture phase chlta hai 
// phir bubble phase chlta hai 

//^ let a = document.querySelector(".a");
//^ let b = document.querySelector(".b");
//^ let c = document.querySelector(".c");
//^ let  btn = document.querySelector("button");

//^ btn.addEventListener("click",function(){
// ^  console.log("button clicked");
//^ });
// ^c.addEventListener("click",function(){
//  ^ console.log("c button clicked");
// ^});
// ^b.addEventListener("click",function(){
// ^  console.log("b button clicked");
//^ });
// ^a.addEventListener("click",function(){
// ^  console.log("a button clicked");
//^ },true //capturing on
// ^);


// event delgation 


// let inp = document.querySelector("input");
// let span = document.querySelector("span");

// inp.addEventListener("input", function(){
//  span.textContent = inp.value.length
//  span.textContent = 20 - inp.value.length;
//     let left = 20-inp.value.length;
//     span.textContent = left;
//     if(left<0){
//         span.style.color = "red";
//     }
//     else{
//         span.style.color = "black";

//     }

// });


// let todolist = document.getElementById("todo-list");
// let addbtn = document.getElementById("add-btn");
// let newiteminput = document.getElementById("new-item");


// todolist.addEventListener("click",function(event){
//     // console.log(event);
//     if(event.target.tagname==="li")
//         event.target.classList.toggle("completed");
//         console.log("Task toggled:", event.target.textContent);

// });
// addbtn.addEventListener("click", function() {
//   const newItemText = newiteminput.value.trim();
//   if (newItemText === "") return;

//   const li = document.createElement("li");
//   li.textContent = newItemText;
//   todolist.appendChild(li);

//   npewiteminput.value = "";
// });

// event vs listener
//  capturing vs bubbling

// forms and form validation 

// reading values from input,textarea,select 
// prevent default submission 
// inline and js-based validation 
// showing error messages conditionally 
// pattern attribute vs custom regex 


// let nm = document.querySelector("#name");
// let form = document.querySelector("form");

// form.addEventListener("submit",function(dets){
//   dets.preventDefault();
//   if (nm.value.length <= 2){
//     document.querySelector("#hide").style.display = "initial";
//   }
//   else{
//     document.querySelector("#hide").style.display = "none";
//   }  
// });

//  i want you to give me a regex code to check a valid email  

// let nm = document.querySelector("#name");
// let form = document.querySelector("form");

// form.addEventListener("submit", function (dets){
//    dets.preventDefault();
//    const regex = /^[a-zA-Z0-9,_%+-]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,}$/;
//    const regex = /^[a-zA-Z0-9_]{3,20}$/;
//    let ans=regex.test("ht_c");
//    console.log(ans)

// });

// create a regex which allows a username

// so i am going to create an email password validator with html css js please give me the html and css code so that i can write the js part 

// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let form = document.querySelector("form");

// form.addEventListener("submit",function(dets){
//   dets.preventDefault();

//   document.querySelector("#emailError").textContent = "";
//   document.querySelector("#passwordError").textContent = "";

//   const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   const passwordregex =  /^(?=.*[a-z])(?=.*\d)(?=.*[@#!%*?&^])[A-Za-z\d@#!%*?&^]{8,}$/;

//   let emailans = emailregex.test(email.value);
//   let passwordans = passwordregex.test(password.value);
//   let isvalid = true;

//   if(!emailans){
//     document.querySelector("#emailError").textContent="email is incorrect"
//     document.querySelector("#emailError").style.display =  "initial";
//     isvalid = false;
// }

// if(!passwordans){
//     document.querySelector("#passwordError").textContent="password is incorrect"
//     document.querySelector("#passwordError").style.display = "initial";
//     isvalid = false;
//   }

// if(isvalid){
//     document.querySelector("#resultMessage").textContent = "Everything is correct"
// }

// });

// value vs textcontent 



// Timers and Intervals
//setTmeout

// console.log("hello")

// setTimeout(function(){
//     console.log("hey")
// },5000)

// setInterval 

// setInterval(function (){
//    console.log("hello");
// },5000);

// clearTimeout  

// let tm = setTimeout(function (){
//     console.log("hey");
// },30000);

// clearInterval(tm);
// let tm = setInterval(function (){
//     console.log("hey");
// },3000);

// clearInterval(tm);

// let count = 10;

// let interval = setInterval(function (){
//   if (count>=1){
//     count--;
//     console.log(count)
// }
//   else {
//     clearInterval(interval)
//   }
// },1000);

// let count = 10;

// let interval = setInterval(function (){
//   if (count>=0){
//       console.log(count)
//       count--;
// }
//   else {
//     clearInterval(interval)
//   }
// },1000);


// let count = 0 ;
// let sec = 20;
// let progress = document.querySelector(".progress-bar");
// let percentText = document.querySelector("#percentText");
// // let percentText = document.getElementById("percentText");
// let intev = setInterval(function (){
//     if (count<= 99){
//         count++;
//         progress.style.width = `${count}%`;
//         percentText.textContent=`${count}%`;
//     }
//     else{
//         document.querySelector("h2").textContent="Downloaded.";
//         clearInterval(intev);
//     }
// },(sec*1000)/100);


// auto hide alert banner after 3sec

// let alrt = document.querySelector("#alertBanner");

// let timr = setTimeout(function(){
//    alrt.style.display = "none"
// },3000);

// setInterval vs setTimeout recursion


// localStorage, sessionStorage, And Cookies 

//* localStorage -> aapke browser ke andar data store karna jo ki browser band hone par bhi delete nahi hoga 

//* sessionStorage -> ye aapke data temporarily store karta hai matlab ki tab band hua aur data gaya 

//* cookies -> ye bhi data store karta hai and aapka data browser ke cookies naam ki property mein save hota hai and ye cookie concept kam data ya light data ke liye hota hai.

// localStorage
// store kaise kare - setItem
// data fetch kaise kare - getItem
// remove kaise kare - removeItem
// update kaise kare 

// store kaise kare 
// localStorage.setItem("name","harsh");

// data fetch kaise kare
// let val = localStorage.getItem("name");

// remove kaise kare 
// localStorage.removeItem("name");

// update kaise kare 
// localStorage.setItem("name","harshita");

// sessionStorage.setItem("name","harsh");
// sessionStorage

// let name = sessionStorage.getItem("username")
// console.log(name)


// sessionStorage.clear()
// sessionStorage

// sessionStorage.removeItem("username");

// Data Delete Karna (ek item):
// sessionStorage.removeItem("username");


// cookies 
// browser mein chhota data store karne ke liye cookies ka istemaal hota hai 

// cookies ~4kb 
// localStorage sessionStorage -~5mb  

// cookies mein jo bhi data store karoge wo data page reload par automatically server par jaayega

// document.cookie = "email=harsh@test.com"
// document.cookie = "age=26";
// document.cookie

// storing/retrieving strings vs json 

// localStorage.setItem("friend",["akash","sumit","amit"])
// localStorage.setItem("friend",{one:"akash",two:"sumit"});

// JSON.stringify([1,2,3,4,5])
// localStorage.setItem("friend")
// localStorage.clear()
// localStorage



// localStorage.setItem("friends",JSON.stringify(["akash","harsh","amit"]));
// localStorage.getItem("friends")
// JSON.parse('["akash","harsh","amit"]')
// let fr = JSON.parse(localStorage.getItem("friends"));
// console.log(fr);

// how to get the os display mode dark or light in js, just property no code

// window.matchMedia('(prefers-color-scheme: dark)').matches



// function setDarkOrLight(){

//     if(window.matchMedia('(prefers-color-scheme: light)').matches){
//         document.body.classList.add("dark")
//         document.body.classList.remove("light")
//     }
//     else{
//         document.body.classList.add("light")
//         document.body.classList.remove("dark")
//     }
// }



// if(localStorage.getItem("theme")){
//     document.body.classList.add(localStorage.getItem("theme"));
// }
// else{
//     setDarkOrLight();
// }

// window.matchMedia('(prefers-color-scheme: light)').addEventListener("change",function(){
//     if(!localStorage.getItem("theme")){
//       setDarkOrLight();
//     }
// })

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     if(document.body.classList.contains("dark")){
//         document.body.classList.remove("dark")
//         document.body.classList.add("light")
//         localStorage.setItem("light")
//     }
//     else{
//         document.body.classList.remove("light")
//         document.body.classList.add("dark")
//         localStorage.setItem("dark")

//     }
// })

// document.body.classList.add(localStorage.getItem("theme"));

// i want to check in document.body.classlist dark class exists or not 

// why only strings work in local storage 
// understandiing cookies 

// let users = [
//   {
//     name: "amisha rathore",
//     pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
//     bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
//   },
//   {
//     name: "amita mehta",
//     pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
//     bio: "main character energy 🎬 | coffee > everything ☕✨",
//   },
//   {
//     name: "isha oberoi",
//     pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
//     bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
//   },
//   {
//     name: "Ojin Oklawa",
//     pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
//     bio: "too glam to give a damn 💅 | filter free soul",
//   },
//   {
//     name: "diya bansal",
//     pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
//     bio: "a little chaos, a lot of art 🎨✨ | just vibes",
//   },
//   {
//     name: "tanay rawat",
//     pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
//     bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
//   },
//   {
//     name: "mohit chhabra",
//     pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
//     bio: "aesthetic overload 📸🕊️ | living in lowercase",
//   },
// ];

// function showUsers(arr) {
//   arr.forEach(function (user) {
//     // Create outer card div
//     const card = document.createElement("div");
//     card.classList.add("card");

//     // Create image
//     const img = document.createElement("img");
//     img.src = user.pic;
//     img.classList.add("bg-img");

//     // Create blurred-layer div
//     const blurredLayer = document.createElement("div");
//     blurredLayer.style.backgroundImage = `url(${user.pic})`;
//     blurredLayer.classList.add("blurred-layer");

//     // Create content div
//     const content = document.createElement("div");
//     content.classList.add("content");

//     // Create h3 and paragraph
//     const heading = document.createElement("h3");
//     heading.textContent = user.name;

//     const para = document.createElement("p");
//     para.textContent = user.bio;

//     // Append heading and paragraph to content
//     content.appendChild(heading);
//     content.appendChild(para);

//     // Append all to card
//     card.appendChild(img);
//     card.appendChild(blurredLayer);
//     card.appendChild(content);

//     // Finally, append card to the body or any container
//     document.querySelector(".cards").appendChild(card);
//   });
// }

// showUsers(users);

// let inp = document.querySelector(".inp");
// inp.addEventListener("input", function () {
//   let newUsers = users.filter((user) => {
//     return user.name.startsWith(inp.value);
//   });

//   document.querySelector(".cards").innerHTML = "";
//   showUsers(newUsers);
// });
// saare users show karaana
// filter karna har baar input karne pe 
// show karna filtered users  

//New cards create karne hai, data local storage mein save karna hai  
// localstorage se hi cards ko show karna hai. 
// buttons ko handle karna hai  
// filters ko handle karna hai

//^ const tasks = [];

// let addNote = document.querySelector("#add-note");
// let formContainer = document.querySelector(".form-container");
// let closeform = document.querySelector(".closeform");

// const stack = document.querySelector(".stack");
// const upBtn = document.querySelector("#upBtn");
// const downBtn = document.querySelector("#downBtn");

// const form = document.querySelector("form");

// const imageUrlInput = form.querySelector("input[placeholder='https://example.com/photo.jpg']");

// const fullnameInput = form.querySelector("input[placeholder='Enter full Name']");

// const homeTownInput = form.querySelector("input[placeholder='Enter home town']");

// const purposeInput = form.querySelector("input[placeholder='e.g., Quick appointment']");

// const categoryRadios = form.querySelectorAll("input[name='category']");

// const submitButton = form.querySelector(".submit-btn");

// function saveToLocalStorage(obj){
//     if (localStorage.getItem("tasks")===null){
//         let oldTasks=[];
//         oldTasks.push(obj);
//         localStorage.setItem("tasks",JSON.stringify(oldTasks));
//     }
//     else {
//         let oldTasks = localStorage.getItem("tasks");
//         oldTasks = JSON.parse(oldTasks);
//         oldTasks.push(obj);
//         localStorage.setItem("tasks",JSON.stringify(oldTasks));


//     }
// }


// addNote.addEventListener("click",function(){
//        formContainer.style.display = "initial";

// });

// closeform.addEventListener("click",function(){
//     formContainer.style.display="none";
// });





// form.addEventListener("submit",function (evt) {
//   evt.preventDefault();
//   const imageUrl = imageUrlInput.value.trim();
//   const fullName = fullnameInput.value.trim();
//   const homeTown = homeTownInput.value.trim();
//   const purpose = purposeInput.value.trim();

//   let selected = false;
//   categoryRadios.forEach(function(cat){
//     // console.log(cat);
//     // console.dir(cat);
//     if(cat.checked){
//         selected = cat.value;
//     }

//   });

//   if (imageUrl === ""){
//     alert("please enter an Image URL.");
//     return; 
//   }
//   if (fullName === ""){
//     alert("please enter your Full Name.");
//     return; 
//   }
//   if (homeTown === ""){
//     alert("please enter your Home Town.");
//     return; 
//   }
//   if (purpose === ""){
//     alert("please enter your Purpose.");
//     return; 
//   }

//   if(!selected){
//     alert("Please select a category");
//     return;
//   }
//   saveToLocalStorage({
//     imageUrl,
//     fullName,
//     purpose,
//     homeTown,
//     selected,
//   });
//   form.reset();
//   formContainer.style.display = "none";
//   showCards();
// });

// function showCards(){
//     let allTasks = JSON.parse(localStorage.getItem("tasks"))|| [];

//     allTasks.forEach(function (task){

//       // Create cards container 
//     const card = document.createElement("div");
//     card.classList.add("card");

//     //Avatar image

//     const avatar = document.createElement("img");
//     avatar.src = task.imageUrl;
//     avatar.alt = "profile";
//     avatar.classList.add("avatar");
//     card.appendChild(avatar);

//     //Name 
//     const name = document.createElement("h2");
//     name.textContent = task.fullName;
//     card.appendChild(name);

//     //info:Home town 
//     const hometownInfo = document.createElement("div");
//     hometownInfo.classList.add("info");

//     const hometownLabel = document.createElement("span");
//     hometownLabel.textContent = "Home Town";
//     const hometownValue = document.createElement("span");
//     hometownValue.textContent = task.homeTown;

//     hometownInfo.appendChild(hometownLabel);
//     hometownInfo.appendChild(hometownValue);

//     card.appendChild(hometownInfo);

//     // Info:bookings 

//     const bookingsInfo = document.createElement("div");
//     bookingsInfo.classList.add("info");

//     const bookingsLabel = document.createElement("span");
//     bookingsLabel.textContent = "Purpose";
//     const bookingsValue = document.createElement("span");
//     bookingsValue.textContent = task.purpose;

//     bookingsInfo.appendChild(bookingsLabel);
//     bookingsInfo.appendChild(bookingsValue);
//     card.appendChild(bookingsInfo);

//     // Button container 
//     const buttonsDiv = document.createElement("div");
//     buttonsDiv.classList.add("buttons");

//     //call Button 
//     const callBtn = document.createElement("button");
//     callBtn.classList.add("call");
//     callBtn.innerHTML = '<i class="ri-phone-line"></i>call';

//     //messages Button 
//     const msgBtn = document.createElement("button");
//     msgBtn.classList.add("msg");
//     msgBtn.textContent = "Message";

//     //append buttons 
//     buttonsDiv.appendChild(callBtn);
//     buttonsDiv.appendChild(msgBtn);

//     //append buttonsDiv to card 
//     card.appendChild(buttonsDiv);

//     // document.body.appendChild(card);
//     document.querySelector(".stack").appendChild(card);


//     });

// }
// showCards();

// function updatestack(){
//   const cards = document.querySelectorAll(".stack .card");

//   for (let i=0 ; i<3; i++){
//     card.style.zIndex = 3 - i;
//     card.style.transform = `translateY(${i * 10}px) scale(${1 - i* 0.02})`;
//     card.style.opacity = `${1 - i * 0.02}`;

//   }
// }



// upBtn.addEventListener("click", function(){
//   // console.log(stack);
//   // console.dir(stack);
//   let lastChild = stack.lastElementChild;
//   if(lastChild){
//     stack.insertBefore(lastChild,stack.firstElementChild);
//     updatestack();
//   }
// })
// downBtn.addEventListener("click", function(){
//   let firstChild = stack.firstElementChild;
//   if(firstChild){
//     stack.appendChild(firstChild)
//     updatestack();
//    } 
// })



// Scope, Execution Context, Closures

//scope hai ke aap apne created variables and functions kaha tak use kar skte ho 

// line 1-- variable


//^ function abcd(){
//     var a = 12;

// }

// console.log(a);

// scope - functional scope , global scope and block scope 
// function scope - function ke andar hi use ho sakti hai 
// global scope - poore code mein  kahi bhi use ho skti hai 
//  block scope - {} curly braces mein hi use ho skti hai 

// agar aapka code kisi bhi {} ke andar nahi hai toh aapka code global hai  

// Execution content 

// js sabse pahle jaise hi aapka function dekhta hai sabse pahle js banaata hai execution context, ye ek process hai jo ki do different phases mein chalta hai, memory phase and doosre ka naam hai execution phase 

// function abcd() {
//     var a = 12;
//     var b = 13;
//     var c = 14;

//     // .....
//     //  sdfs
// }

// execution context: memory creation & execution phase 
// Lexical scope vs dynamic scope  

// js - lexical scoping -> ki aap kaha par physically available ho ye poori tareeke se depend karta hai ki aap kya access kro paaoge  

// ^function abcd() {
//     let a = 12;
//     function defg() {
//         console.log(a)
//     }
// }


// dynamic scoping -> kaha se call kr rahe ho uspe depend karega ki kya value milegi 

//^ let a = 12;
// function abcd() {
//     console.log(a);
// }

// function defg() {
//     let a = 13;
//     abcd();
// }

// defg();

// closure definition and how variables are preserved
// closures hote hai functions jo ki kisi parent fnc ke andar ho aur andar waala function return ho raha ho, and returning fnc use kare , parent function ka koi variable  

// ^function abcd(){
//     let a = 12;
//     return function (){
//       console.log(a);
//     };
// }
// let fnc = abcd();
// fnc();

// faayde nuksaan par 
// private variables 
// global pollution

// ye sach hai fnc ke khatam hone pe aapka fnc and uske variables khtm  hojaate hai , par jab bhi closure banta hai toh aapka fnc aur uske variables ka ek backlink bnaya jaata hai aur uska naam hota hai [[environment]]

// ^function countForMe() {
//     let c = 0;
//     return function(){
//         c++;
//         console.log(c);
//     };
// }

// let fnc = countForMe();
// fnc();
// fnc();
// fnc();


// let fnc2 = countForMe();
// fnc2();
// fnc2();
// fnc2();
// fnc2();


//^ function clickLimiter() {
//     let click = 0;
//     return function (){
//         if (click < 5) {
//             click++;
//             console.log(`clicked : ${click} times`);
//         }
//         else{
//             console.error("LIMIT EXCEEDED, TRY AFTER SOME TIME");
//         }
//     };
// }
// let fnc = clickLimiter();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();


// toaster 

//^ function createtoaster(config){
// return function(notification){
//     return function(str){
//kuch karega
//         let div = document.createElement("div");
//         div.className = `fixed ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none ${config.positionX === "right"? "right-10" : "left-10"} ${config.positionY==="top"?"top-10":"bottom-10"}`;

//         div.textContent = notification;
//         document.body.appendChild(div);

//         setTimeout(()=>{
//           document.body.removeChild(div);

//         },config.duration * 1000);
//     };
// }

// let toaster=createtoaster({
//     positionX: "left",
//     positionY:"bottom",
//     theme:"light",
//     duration: 3,
// });

// toaster("Download Done!!!")
// toaster("Some interesting notification!!!")

// function createtoaster(config){
//     return function(str){
//         let div = document.createElement("div");
//         div.textContent = str;
//         div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black" } px-6 py-3 rounded shadow-lg pointer-events-none`; 

//         document.querySelector(".parent").appendChild(div);
//         if (config.positionX !== "left" || positionY !== "top"){
//             document.querySelector(".parent").className += `${config.positionX ==="right" ? "right-5":"left-5"} ${config.positionY === "bottom"?"bottom-5":"top-5"}`;
//         }
//         setTimeout(() =>{
//             document.querySelector(".parent").removeChild(div);
//         },config.duration * 1000);
//     }; 
// }

// let toaster = createtoaster({
//     positionX: "right",
//     positionY: "bottom",
//     theme: "light",
//     duration:3,
// });

// toaster("Download Done!!!")
// setTimeout(() =>{
//     toaster("Harsh accepted your request");
//     },2000);



// this keyword special keyword hai,kyuki jaise ki baaki saare keyword ki value ya unka nature same rehta hai this ki value ya nature badal jaata hai is baat se ki aap usey kaha use kar rahe ho 

//global scope  
// window hai ek pradhan mantri - supreme
// console.log(this);

// function ke andar
// function abcd(){
//     console.log(this);
// }

// abcd();

// method
// let obj = {
//     name:"harsh",
//     age:26,
//     sayName:function(){    //sayName is method
// console.log(this.name);
//         console.log(this.age);
//     },
// };
// obj.sayName();

// event  handler 

// document.querySelector("h1").addEventListener("click",function (){
//   alert();
//  console.log(this.style.color = "red");
// }); 

// class ke andar 

// class Abcd {
//     constructor() {
//         console.log("heyhe");
//         this.a=12;
//     }
// }

// let val = new Abcd();

// this is equal to the window because this is loose the owns value don't use arrow function 
// let obj = {
//     name: "harsh",
//     age: 26,
//     sayName: () =>{
//         console.log(this);
//     },
// };

// It's for window
// let obj = {
//     name: "harsh",
//     age: 26,
//     sayName: function() {
//         function defg (){
//          console.log(this);
//         }
//     },
// };

// It's for obj
// let obj = {
//     name: "harsh",
//     age: 26,
//     sayName: function() {
//          let defg = () => {
//          console.log(this);
//         };
//         defg();
//     },
// };
// obj.sayName();


// this ki value 
// --------------------
// global - window 
// function - window 
// method with es5 fnc - object 
// method with es6 arrow fnc - window 
// es5 function inside es5 method - window 
// arrow function inside es5 method - object 
// event handler -element 
// class - blank object 

// call apply bind 
// function ko call karte waqt aap set kr skte ho ki uski this ki value kya hogi 


//^ let obj = {
//     name:"harsh",
//     age: 26,
// };

// function abcd(){
//     // console.log(this.age);
//     console.log(this);
// }
// abcd.call(obj);

// let obj = {
//     name:"harsh",
//     age: 26,
// };

// function abcd(a,b,c){
//     // console.log(this.age);
//     console.log(this,a,b,c);
// }
// abcd.apply(obj,[1,2,4]);

// let obj = {
//     name:"harsh",
//     age: 26,
// };

// function abcd(a,b,c){
//     // console.log(this.age);
//     console.log(this,a,b,c);
// }
// let fnc = abcd.bind(obj,1,2,4);
// fnc();

//^ let form = document.querySelector("form");
// let username = document.querySelector("#name");
// let role = document.querySelector("#role");
// let bio  = document.querySelector("#bio");
// let pic  = document.querySelector("#photo-url");
// const userManager = {
//     users: [],
//     init: function (){
//     //  alert();
//     form.addEventListener("submit", this.submitForm.bind(this));
//     },
//     submitForm: function (e) {
//         e.preventDefault();
//         this.addUser();
//         // console.log("form submitted");

//     },
//     addUser: function () {
//         this.users.push({
//             username:username.value,
//             role:role.value,
//             bio:bio.value,
//             pic:pic.value,
//         });
//         form.reset(); 
//         this.renderUi();
//     },
//     renderUi: function () {
//         document.querySelector(".users").innerHTML = "";
//         this.users.forEach((user,index)=>{
//         const card = document.createElement("div");
//         card.className = "bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center";

//   // Image element banao
//   const img = document.createElement("img");
//   img.src = user.pic;
//   img.alt = "user photo";
//   img.className = "w-28 h-28 rounded-full mb-5 object-cover border-blue-200 shadow";
//   card.appendChild(img);


//   // Name element banao
//   const name = document.createElement("h3");
//   name.className = "text-2xl font-bold mb-1 text-blue-700";
//   name.textContent = user.username;
//   card.appendChild(name);

//   // Role element banao
//   const role = document.createElement("p");
//   role.className = "text-purple-500 mb-2 font-medium";
//   role.textContent = user.role;
//   card.appendChild(role);


//   // Description element banao
//   const desc = document.createElement("p");
//   desc.className = "text-gray-700 text-center";
//   desc.textContent = user.bio;
//   card.appendChild(desc);



//   // Card ko container me daalo
//   document.querySelector(".users").appendChild(card);
//   // ❌ Delete button
//             const delBtn = document.createElement("button");
//             delBtn.textContent = "Remove User";
//             delBtn.className = "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700";

//   // delete click listener
//             delBtn.addEventListener("click", () => {
//                 this.removeUser(index);
//             });
//             card.appendChild(delBtn);  
// })
//     },
//     removeUser: function (index) {
//         // array se remove karo
//         this.users.splice(index, 1);
//         // UI dobara render karo
//         this.renderUi();
//     },
// };
// userManager.init();


function CreateBiscuits(name, price, qty, company, category) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.company = company;
    this.category = category;
}

let biscuit1 = new CreateBiscuits("oreo", 10, 5, "cadbury", "chocolate");
let biscuit2 = new CreateBiscuits("Fantasy", 20, 3, "parle", "chocolate filled")


// humein seekhna factories banaana, matlab ki aap ek baar blueprint bana do ki har object kaisa dikhega and hum log naye naye objects with different values bana paayega, yahi upar upar se poora kaam hai OOPS mein


// function CreatePencil(name,price,color,company){
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.company = company ;

// }

// CreatePencil.prototype.company = "Sheryians";

// CreatePencil.prototype.write = function(text) {
//       let h1 = document.createElement("h1");
//       h1.textContent = text;
//       h1.style.color = this.color;
//       document.body.append(h1);
//     }; 

// let pencil1 = new CreatePencil("Natraj",10,"black","natraj");
// let pencil2 = new CreatePencil("Doms",20,"red","doms");


//  agar tumhaara constructor function koi field apne prototype par attach karle toh uss constructor se banne waale sabhi new instances yaani ki objects , ke paas wo field automatically chali jaati hai  


// ^class CreatePencil{
//     constructor(name,company,price,color){
//         this.name = name;
//         this.company = company;
//         this.price = price;
//         this.color = color;
//     }

// erase(){
//     document.body.querySelectorAll("h1").forEach((elem) => {
//         if (elem.style.color===this.color){
//             elem.remove();
//         }
//     });
// }
// write(text){
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = this.color;
//     document.body.appendChild(h1);
// }
// }

// let p1 = new CreatePencil("Natraj","natraj",10,"black");
// let p2 = new CreatePencil("Apsara","apsara",15,"blue");


//^ class User{
//     constructor(name,address,username,email){
// constructor(name,address,username,email,role){
//     this.name = name;
//     this.address = address;
//     this.username = username;
//     this.email = email;
//     // this.role = role;
//     this.role = "user";
// }
// checkRole(){
// console.log(`youy are a ${this.role}`);
//         return `you are a ${this.role}`;

//     }
//     write(text){
//         let h1 = document.createElement("h1");
//         console.log(this);

//         h1.textContent = `${this.name} : ${text}`;
//         document.body.appendChild(h1);
//     }
// }

// class Admin extends User {
//     constructor(name,address,username,email){
//         super(name,address,username,email);
//         this.role = "admin"
//     }
//     remove(){
//         document.querySelectorAll("h1").forEach(function(elem){
//          elem.remove();
//         });
//     }
// }


// let u1 = new User("harsh","Bhopal","async123","hey@heyhey.com","user");
// let u1 = new User("harsh","Bhopal","async123","hey@heyhey.com");
// let u2 = new User("harshita","Delhi","harshiiiiiitaaa","hey@heyhey.com","user");
// let u2 = new User("harshita","Delhi","harshiiiiiitaaa","hey@heyhey.com");
// let a1 = new Admin("admin1","India","adminnnn","a@a.a")


// classical inheritance - java cpp 
// classses banana and unhe extend krdena 

// inheritance - class -> class 
//  prototypal inheritance - object -> object 


// ^let coffee = {
//     color: "dark",
//     drink: function (){
//         console.log("gut gut gut");
//     },
// };

// let arabiataCoffee = Object.create(coffee);
// arabiataCoffee.taste = "bitter";
// arabiataCoffee.drink();
// console.log(arabiataCoffee);

//ek object hai aap chaaho toh uski saari  props/methods ko inherit kara dete ho doosre object mein 

// ^let a = {};
// let b = Object.create(a);


// sync async  

// koi bhi code js mein line by. line chalega aur ye , natural pattern bhi hota hai ki code line by line chale, but kabhi kabaar aise cases aaate hai life mein jaha par aapka code wait krta hai and utni der mein agla code chal jaata hai 

// ^console.log("hey1");
// console.log("hey2");
// setTimeout(()=>{
//     console.log("hey3");
// },2000);
// console.log("hey4");

// sync async  

//aisa code jo line by line chale hota hai sync code  
//aisa code jo jab chalne ke liye ready ho jaaye tab chale wo hai async 

// ^function kuchhDerBaadChalunga(val){
// setTimeout(()=>{
// console.log(val);

// },Math.floor(Math.random()*10)*1000);
// },console.log(Math.floor(Math.random()*10)*1000));
// }
//^ function kuchhDerBaadChalunga(fnc){
// setTimeout(fnc,Math.floor(Math.random()*10)*1000);
// },console.log(Math.floor(Math.random()*10)*1000));
// }

// kuchhDerBaadChalunga(12);
// kuchhDerBaadChalunga(function(){
//     console.log("hey");

// });

// ek function ko agar aap ek aur function  bhej de rahe ho parameter mein , toh woh parameter waala fnc kehlaata hai callback


// ^function profileLekarAao(username,cb){
//    setTimeout(() => {
//     console.log(`profile fetched of ${username}`);
//     cb({username})
//    }, 2000);
// }
// profileLekarAao("harsh",function(profileData){
//     console.log(profileData);

// })

//^ function profileLekarAao(username,cb){
//    console.log("fetching profile's Data...")
//    setTimeout(() => {
//        console.log(`profile fetched of ${username}`);
//        cb({_id:12122,username,age:26,email:"huihui@hui.com"});
//     }, 2000);
// }

// function saarePostLekarAao(id,cb){
//     console.log("fetching All Posts...")
//     setTimeout(()=>{
//      cb({_id:id, posts:["hey","hi","good morning","hello"]})
//     },3000);
// }

// function savedpostnikaalao(id,cb){
//     console.log("fetching All Saved Posts...")
//     setTimeout(()=>{
//      cb({_id:id, posts:[1,2,3,45,4,322]})
//     },3000);
// }


// profileLekarAao("harsh",function(profileData){
//     console.log(profileData);
//     saarePostLekarAao(profileData._id,function(posts){
//         console.log(posts);
//     savedpostnikaalao(profileData._id,function(saved){
//         console.log(saved);


//     });
//     });

// })



// promises
// aap ek promise banaate ho jo ki do states mein se ek state me jaa sakta hai and wo yaa to resolve hoga ya to reject hoga abb wo kya hoga ye to waqt bataayega par humein dono ke liye code likhna padta hai  

//^ let pr = new Promise(function (res,rej){
//     setTimeout(() => {
// res("harsh");
//         let rn = Math.floor(Math.random()* 10);
//         if (rn>5) res("resolved "+ rn)
//             else rej("rejected "+ rn)
//     }, 3000);
// })  

// pr.then(function (val){
//     console.log(val);

// }).catch(function(val){
//     console.log(val);

// });
// let pr = new Promise(function (res,rej){
//     setTimeout(() => {
// res("harsh");
//         let rn = Math.floor(Math.random()* 10);
//         if (rn>5) res("resolved "+ rn)
//             else rej("rejected "+ rn)
//     }, 3000);
// })  

// async function abcd(){
//     try{
//         let val = await pr;
//         console.log(val);

//     }catch (err){
//         console.log(err);

//     }
// }

// abcd();



// fetch and api  


//^ fetch("https://randomuser.me/api/")
// .then((rawdata)=>{
//     return rawdata.json();

// })
// .then((data)=>{
//     console.log(data.results[0].name.first);

// }).catch((err)=>{
//     console.log(err);

// })

// ^function getUser(){

//    fetch("https://randomuser.me/api/?results=3")
// .then((raw)=> raw.json())
// // .then((data)=> console.log(data.results[0]));
// // .then((data)=> console.log(data.results));

// .then((data)=> {
//     document.querySelector(".users").innerHTML = "";   
//     data.results.forEach( function(user){
//     // console.log(user.name);
//     const card = document.createElement("div");
//     card.className = "bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full";

//     const innerflex = document.createElement("div");
//     innerflex.className = "flex items-center space-x-4";

//     const avatar = document.createElement("img");
//     avatar.className = "w-16 h-16 rounded-full object-cover border-2 border-gray-700";
//     avatar.src = user.picture.large
//     avatar.alt = "user avatar";

//     const textContainer = document.createElement("div");

//     const name = document.createElement("h2");
//     name.className = "text-xl font-semibold text-gray-100";
//     name.textContent = user.name.first + " " + user.name.last;

//     const email = document.createElement("p");
//     email.className = "text-gray-400";
//     email.textContent = user.email;

//     const badge = document.createElement("span");
//     badge.className = "inline-block mt-2 px-3 py-1 bg-blue-900 text-blue-200 text-xs rounded-full";
//     badge.textContent = "Active";

//     textContainer.appendChild(name);
//     textContainer.appendChild(email);
//     textContainer.appendChild(badge);


//     innerflex.appendChild(avatar);
//     innerflex.appendChild(textContainer);

//     card.appendChild(innerflex);

//     document.querySelector(".users").appendChild(card);

// });
// });

// }

// getUser();

// document.querySelector("#refreshBtn").addEventListener("click",function(){
//     getUser();
// });
// fetch("https://randomuser.me/api/?results=3")
// .then((raw)=> raw.json())
// // .then((data)=> console.log(data.results[0]));
// // .then((data)=> console.log(data.results));
// .then((data)=> {data.results.forEach( function(user){
//     // console.log(user.name);
//     const card = document.createElement("div");
//     card.className = "bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full";

//     const innerflex = document.createElement("div");
//     innerflex.className = "flex items-center space-x-4";

//     const avatar = document.createElement("img");
//     avatar.className = "w-16 h-16 rounded-full object-cover border-2 border-gray-700";
//     avatar.src = user.picture.large
//     avatar.alt = "user avatar";

//     const textContainer = document.createElement("div");

//     const name = document.createElement("h2");
//     name.className = "text-xl font-semibold text-gray-100";
//     name.textContent = user.name.first + " " + user.name.last;

//     const email = document.createElement("p");
//     email.className = "text-gray-400";
//     email.textContent = user.email;

//     const badge = document.createElement("span");
//     badge.className = "inline-block mt-2 px-3 py-1 bg-blue-900 text-blue-200 text-xs rounded-full";
//     badge.textContent = "Active";

//     textContainer.appendChild(name);
//     textContainer.appendChild(email);
//     textContainer.appendChild(badge);


//     innerflex.appendChild(avatar);
//     innerflex.appendChild(textContainer);

//     card.appendChild(innerflex);

//     document.querySelector(".users").appendChild(card);

// });
// });

// let form = document.querySelector("form");
// let name = document.querySelector("#name");
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");

// form.addEventListener("submit",function(evt){
//     evt.preventDefault();
//     fetch("url",{
//         method:"POST",
//         body: JSON.stringify({
//             name,email,password,
//         }),
//     });
// });

// Design pattern

// Module pattern ek design pattern hai. jisme hum apna code ek self executing function (IIFE) ke andar likhte hain, taki variables aur functions private rahen.

// iske andar se hum sirf wahi cheezein return karte hai jo bahar use karni hain.

// Is pattern ka main fayda hai data hiding (encapsulation) aur clean structure , taaki code secure , reusable aur manageable ban sake.  


// module pattern 
//iife  

// let fnc = (function(){
//   return 12;
// })();

//^ let Bank = (function () {
//     let bankbalance = 12000;

//     function checkBalance() {
//         console.log(bankbalance);
//     }
//     function setBalance(val) {
//         bankbalance = val;
//     }
//     function withdraw(val) {
//         if (val <= bankbalance) {
//             bankbalance -= val;
//             console.log(bankbalance);
//         }
//     }
    // return {  //revealing module pattern 
//         check: checkBalance,
//         set: setBalance,
//         draw: withdraw,
//     }
// })();

// Bank.checkBalance();
// Bank.set(12000);
// Bank.draw(1000);

// factory function pattern 
// ek function banate ho jo objects create karta hai (factory = object banane ki machine)

// Factory Function Pattern ek aisa design pattern hai jisme hum ek simple function likhte hain jo naye objects banakar return karta hai, bina class ya new keyword use kiye. 

// Is pattern ka main idea hai -> object creation ko ek function ke through control karna .

// Har baar jab tum factory function call karte ho, tumhe ek naya object milta hai jisme apne methods aur (agar chaho to) private data ho sakta hai.

// yeh pattern specially useful hai jab tumhe ek hi type  ke bohot saare objects chahiye, jaise users , products , tasks , etc.


//^ function createProduct(name, price) {
//     let stock = 10;
//     return {
//         name,
//         price,
//         checkstock(){
//             console.log(stock);
            
//         },
//         buy(qty) {
//             if (qty <= stock) {
//                 stock -= qty;
//                 console.log(`${qty} pieces booked - ${stock} pieces left.`);

//             }
//             else{
//                 log.error(`We only have ${stock} pieces left.`)
//             }
//         },
//         refill(qty) {
//             stock += qty;
//             console.log(`refilled the stock - ${stock} pieces now.`);

//         }

//     }
// }

// let iphone = createProduct("iphone", 70000);
// iphone.buy(3);
// let kitkat = createProduct("kitkat",10);



// observer pattern  

// ^class YoutubeChannel{
//     constructor(){
//         this.subscribers = [];
//     }

//     subscribe(user){
//         this.subscribers.push(user);
//         user.update(`${user.name},You have subscirbed the channel.`)
//     }
//     unsubscribe(user){
//         this.subscribers = this.subscribers.filter((sub) => sub!== user);
//         user.update(`You have un-subscribed the channel.`)
//     }
//     notify(message){
//         this.subscribers.forEach((sub)=> sub.update(message));


//     }
// }


// class User{
//     constructor(name){
//         this.name = name;
//     }
//     update(data){
//         console.log(`${this.name}, ${data}`);
        
//     }
// }

// let sheriyans = new YoutubeChannel();
// let user1 = new User("harsh");
// let user2 = new User("Amit");

// sheriyans.subscribe(user1);
// sheriyans.subscribe(user2);

// sheriyans.notify("new video is live on the channnel")



//debouncing -> aap koi action kar rahe ho and aap ye nahi chhate har action pe kuchh ho, jab bhi mere actions ke beech mein koi specific gap  aajaye toh fir reaction perform ho

//^ let input = document.querySelector("input");

// function debounce(fnc,delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(() =>{
//             fnc(...args);
//         },delay);
//     }
// }

// input.addEventListener("input", debounce(function(dets){
//     console.log(dets);
//^ input.addEventListener("input", debounce(function(){
//     console.log("ran");
    
// },1000));


//debounce -> ek delay bataaoge tum utna delay jab bhi aayega action ka reaction milega 

// throttle -> interval par chalunga , action agar hota raha and aapne ek interval bataya to utne interval me aapka event chalega 

// ^function throttle(fnc,delay){
//     let timer = 0;
//     return function(...args){
//         let now = Date.now();
//         if (now - timer >= delay){
//             timer = now;
//             fnc(...args);
//         }
//     };
// }

// input.addEventListener("input",throttle(function () {
//   console.log("ran");
  
// },1000));

//Lazy loading images with Intersectionobserver

// ^let imgs = document.querySelectorAll("img");


// const observer = new IntersectionObserver(
//     function(entries,observer){
//         entries.forEach(function (entry){
//             if (entry.isIntersecting){
//                 const img = entry.target;
//                 img.src = img.dataset.src;
//                 img.classList.add("loaded");
//                 observer.unobserve(entry);
//             }
//         });
//     },
//     {
//         root:null,  // apki screen mei entry
//         threshold:0.1,  // screen pe andar touch karte he image load
//     }
// );

// imgs.forEach(function (img){
//     observer.observe(img);
// });


// code splitting 
//import aur export karne k liye hume type="module" <script> k. 

//heavy.js
// ^export function veryHeavy(){
//     console.log("giant feature loaded...");
//     alert("heavy feature loading completed...");
    
// } 

// Script.js
// ^const btn = document.querySelector("button");

// btn.addEventListener("click",async function(){
//     let heavy = await import("./heavy.js");
//     heavy.veryheavy();
// })




//Avoiding unnecessary reflows and repaints

// ^const ul = document.querySelector("ul");


// for(let i=0; i <100;i++){
//     const li = document.createElement("li");
//     li.textContent = i;
//     ul.appendChild(li);
// }
// ^const ul = document.querySelector("ul");
// const space = document.createDocumentFragment();

// for(let i=0; i <100;i++){
//     const li = document.createElement("li");
//     li.textContent = i;
//     space.appendChild(li);
// }

// ul.appendChild(space);


//Memory leaks: timers,event listeners
// ^let count = 0;
// const int = setInterval(()=>{
//     if (count < 10) {
//         count++;
//         console.log(count);
        
//     }else{
//         console.log("still chal raha hai..");
//         clearInterval(int);
//     }
// },200);


// DOM ka code and logic ka code alag rehna chahiye separation of concerns

// ^const btn = document.querySelector("button");
// const ul = document.querySelector("ul");

// function add(n1,n2){
//     return n1 + n2
// }


// btn.addEventListener("click",function (){
//     const num1 = Math.floor(Math.random()*10);
//     const num2 = Math.floor(Math.random()*10);

//     let finalAdd = add(num1,num2);
//     let li = document.createElement("li");
//     li.textContent = finalAdd;
//     ul.appendChild(li);
// })

// map -> ek array ke top pe chalta hai and us array ke sabhi members us map function ke andar aate hai and map function ek naya aaray return krta hai and us  naye array mein jo bhi map ne return kiya hoga wahi placed hota hai 

const arr = [1,2,3,4,5];

function myMap(arr,callback) {
    let newarr = [];
    for (let i = 0; i<arr.length; i++){
        newarr.push(callback(arr[i],i,arr));

    }
    return newarr;
}
let ans = myMap(arr,function (val){
    return val + 2;
})

// let ans = myMap([1,2,3,4],(num)=>num+2);


// call Stack (Execution stack)

//js single-threaded hai-> ek time par ek hi kaam karta hai.
//jab tum function call karte ho -> wo stack ke top pe chala jata hai.
// function complete hone ke baad stack se nikal jata hai (pop ho jata hai).  


//^ function a(){
//     console.log("a");
    
// }
// function b(){
//     a();
//     console.log("b");
    
// }
// function c(){
//     b();
//     console.log("c");
    
// }
// c();


// web apis 
// console setTimeout setInterval alert prompt 
// js ka part nahi hoti hai  