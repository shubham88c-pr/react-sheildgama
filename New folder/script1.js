// 🟢 Transcript ka Hinglish Explanation
// 1. Course ka Intro
// Ye course tumhe React ground level se, step by step sikhayega.
// Lekin pehle section React ka nahi hai, balki JavaScript refresh karne ke liye hai.
// Matlab: Agar tumko JavaScript pehle se aati hai thoda-thoda, toh ye optional hai.
// Agar tumko bilkul JavaScript nahi aati, toh pehle JavaScript basics alag se seekhna zaroori hai.

// 2. Section ka Purpose
// Ye section JavaScript ke important concepts dobara revise karne ke liye hai.
// Specially un features ko cover karega jo React apps banate waqt kaam aate hain.
// Matlab tum React ka code likhne se pehle JavaScript ke rules aur modern features samjhoge.

// 3. JavaScript Environment
// JavaScript sirf browser mei hi nahi, aur jagah bhi chal sakti hai:
// Browser (originally banayi gayi thi isi ke liye)
// NodeJS, Deno → server-side ya system apps
// Mobile apps → React Native, Capacitor
// Lekin is course ka focus browser par hi hoga, kyunki React ek front-end (UI) library hai.

// 4. JavaScript Ko Website Mei Kaise Add Karein?
// Website mei JS code add karne ke liye hum script tag use karte hain:
// Inline JavaScript
//^<script>
  //^console.log("Hello World");
// ^</script>

// Code HTML ke andar likhte ho.
// Lekin ye best practice nahi hai, kyunki HTML file heavy aur complex ho jaati hai.
// External JavaScript File (Best)
// Ek .js file banao (e.g. app.js).
// Usko HTML mei import karo:

//^<script src="assets/scripts/app.js" defer></script>
// defer ka matlab: pehle HTML load ho jaye, phir JS chale.

// 5. Modern JavaScript Modules
// Agar tum script tag mei likhte ho:
//^<script type="module" src="app.js"></script>

// Toh tum JS file ko module bana rahe ho.
// Fir tum import/export kar sakte ho.

// Example:
// util.js
// ^export function add(a, b) {
// ^  return a + b;
// ^}

// app.js
// ^import { add } from './util.js';
// ^console.log(add(2, 3)); // 5

// 6. React Projects aur Script Tag
// Normal HTML project mei tum script tag manually add karte ho.
// Lekin React projects mei tumhe manually karna nahi padta.
// React ka build process automatically tumhare JS files ko HTML mei inject kar deta hai.
// Isiliye React project setup karte waqt tumhe script tag ki tension nahi hoti.

// 🟡 Summary (easy yaad karne ke liye):
// Ye section JavaScript basics refresh karne ke liye hai.
// JavaScript browser + aur environments mei chalti hai (Node, mobile).
// HTML mei JS add karne ke 2 tareeke hain: inline aur external file (best).
// Modern projects mei type="module" use hota hai → import/export possible hai.
// React projects mei tumhe script tag add nahi karna padta, build process khud karta hai.

// 🟢 Hinglish Explanation: React Projects aur Build Process
// 1. React Project mei Script Tag Kyu Nahi Hota?
// Agar tum React project ki index.html file kholo → usme tumhe script tag nahi milega.
// Sirf kuch meta tags, link tags (CSS, favicon) hote hain.
// Body mei ek noscript tag hota hai (fallback message agar JavaScript disable ho).
// Lekin phir bhi React app chalti hai aur JavaScript code run hota hai.
// 👉 Question: Agar script tag nahi hai toh code kaise run hota hai?

// 2. Answer: Build Process

// React projects ek build process use karte hain.
// Matlab: Tum jo code likhte ho → wo directly browser mei run nahi hota.
// Pehle wo transform hota hai (convert kiya jata hai), fir browser ko diya jata hai.

// Example:
// Tum JSX likhte ho (HTML jaisa code JS file ke andar).
// Browser normal JavaScript samajhta hai, JSX nahi.
// Build process JSX ko valid JavaScript mei convert karta hai.

// 3. React Scripts & Tools

// React projects mei ek package.json file hoti hai jisme dependencies list hoti hain.
// Usme tumhe react aur react-dom dikhte hain (React chalane ke liye).
// Saath hi react-scripts (ya Vite, webpack, esbuild) hota hai jo build process handle karta hai.
// Ye tools tumhara code ko:
// Transform karte hain (JSX → normal JS).
// Inject karte hain HTML mei script tags ke through.
// Optimize karte hain (minify, bundle).

// 4. Development Server
// Jab tum CodeSandbox ya local React project run karte ho (npm start), ek development server chal raha hota hai.
// Ye server tumhare code ko watch karta hai:
// Agar tum file update karo → wo auto transform karke browser mei bhejta hai.
// Yehi reason hai ki tumhe manually script tag add nahi karna padta.

// 5. Build Process Kyun Zaroori Hai?
// Do main reasons hai:
// JSX Support
// React code mei tum JSX likhte ho (HTML inside JS).
// Browser isko samajh nahi sakta.
// Build process JSX ko valid JavaScript mei badal deta hai.
// Example:

// ^return <h1>Hello</h1>;

// convert hoga kuch aise:

// ^return React.createElement("h1", null, "Hello");

// Optimization (Minification + Bundling)
// Tumhare likhe code ko compress karke chhota kar diya jata hai.
// Variable names short kar diye jate hain (e.g., username → u).
// Ye fast load hota hai aur user ke liye website tez chalti hai.

// 6. Node.js ka Role

// React ke build tools chalane ke liye Node.js zaroori hai.
// Node.js tumhe npm aur npx commands deta hai (React project banane ke liye).
// Saath hi Node.js hi background mei code transform aur development server run karta hai.

// 7. Important Point

// Normal HTML+JS project mei tumhe script tag manually likhna padta hai.
// React project mei tumhe kabhi script tag manually add nahi karna hota.
// Build process automatically karta hai ye kaam.

// 🟡 Summary (easy yaad karne ke liye):

// React project ki index.html file mei script tag nahi hota → build process inject karta hai.
// Build process JSX ko normal JS mei badalta hai aur code optimize karta hai.
// Development server tumhara code watch karke live transform karta hai.
// Node.js background mei ye sab run karne ke liye zaroori hai.


// 🟢 Import / Export in JavaScript (Hinglish Explanation)
// 1. Import/Export kyu use karte hain?
// JavaScript project mei sab kuch ek hi file mei likhne se code messy aur complex ho jaata hai.
// Best practice hai ki code ko multiple files mei tod do (split kar do).
// Fir jis file mei jo code chahiye usko export kar ke, doosri file mei import kar lo.
// 👉 Matlab: Ek file se dusre file mei value/function leke aane ka tareeka hai import/export.

// 2. Example (Named Export)

// ^util.js
// ^export let apiKey = "abc123xyz";

// Yaha apiKey naam ka variable banaya.
// export likhne se ye variable doosre files mei bhi use ho sakta hai.
// app.js

// ^import { apiKey } from "./util.js";

// ^console.log(apiKey); // Output: abc123xyz

// import { } ke andar wahi naam likhna padta hai jo export hua hai.

// File ka path "./util.js" likhna zaroori hai 
// (React mei extension .js optional hota hai build process ki wajah se).
// Case-sensitive hota hai → apiKey ≠ apikey.

// 3. Default Export

// Kabhi kabhi file mei sirf ek hi main value ya function hota hai → tab use karte hain default export.

// util.js
// ^export default "abc123xyz";

// app.js
// ^import key from "./util.js";
// ^console.log(key); // abc123xyz

// Default export mei { } nahi use karna.
// Import karte waqt tum apna khud ka naam de sakte ho (key, apiKey123, kuch bhi).
// Ek file mei sirf ek hi default export ho sakta hai.

// 4. Multiple Named Exports

// util.js

// ^export let apiKey = "abc123xyz";
// ^export let abc = "Hello";

// app.js

//^ import { apiKey, abc } from "./util.js";

// ^console.log(apiKey); // abc123xyz
// ^console.log(abc);    // Hello

// Ek file se multiple cheeze export karne ke liye comma separated import karte hain.

// 5. Import * as (Sab ek object mei lena)

// app.js

// ^import * as utils from "./util.js";

// ^console.log(utils.apiKey); // abc123xyz
//^ console.log(utils.abc);    // Hello

// * as utils ka matlab → sab exports ek object ke andar aajayenge.

// Fir tum dot (.) lagakar access karte ho.

// 6. Aliases (as keyword)
// Agar imported naam pasand nahi hai, toh rename kar sakte ho.

// app.js
// ^import { abc as content } from "./util.js";

//^ console.log(content); // Hello

// abc ko import karte waqt rename karke content bana diya.

// 7. Important Notes

// Named exports → curly braces {} ke saath import karte ho.
// Default export → bina curly braces, aur koi bhi naam use kar sakte ho.
// Ek file mei ek hi default export, lekin multiple named exports ho sakte hain.
// React mei mostly default export use hota hai (jab ek component per file hota hai).

// 🟡 Summary (easy yaad karne ke liye)
// export → cheez ko doosri file mei bhejne ke liye.
// import → cheez ko doosri file se lane ke liye.
// Named export:

// ^export let name = "Rigel";
// ^import { name } from "./file.js";

// Default export:
// ^export default "Rigel";
// ^import naam from "./file.js";
// Multiple exports ko , se ya * as object bana ke laa sakte ho.

// as keyword se naam rename kar sakte ho.
// 🔹 Values (Data kya hota hai?)
// JavaScript mei sab kuch data hota hai.

// Examples of values:
// Strings (text) → "Hello World" ya 'Twitter Post'
// Numbers (ginti) → 100, 3.14, -50
// Booleans (true/false) → true, false
// null & undefined → matlab variable mei abhi value nahi hai.
// Objects → ek container jisme multiple values store ho sakti hain (isko baad mei detail mei samjhenge).

// 👉 Example:
// ^console.log("Hello World"); // String
// ^console.log(100);           // Number
// ^console.log(true);          // Boolean
// ^console.log(null);          // Null
// ^console.log(undefined);     // Undefined

// 🔹 Variables (Data container)

// Variable ek dabba (box) hota hai jisme tum values rakhte ho.
// Variable create karne ke liye let ya const use karte hain.
// ✅ let

// Value badal sakti hai.
// ^let userName = "Aman";
// ^console.log(userName);  // Aman
// ^userName = "Rahul";
// ^console.log(userName);  // Rahul


// ✅ const

// Value ek baar set hone ke baad badal nahi sakti.
//^ const PI = 3.14;
// ^console.log(PI);  // 3.14
// ^ PI = 3.14159; ❌ Error (const value badal nahi sakte)

// 👉 Best practice:
// Agar value change hone wali hai → let use karo.
// Agar value constant hai (jaise API key, PI, config) → const use karo.

// 🔹 Naming Rules (Variable ka naam kaise rakhe?)

// ✔ Chhoti letter se start karo.
// ✔ Multiple words → camelCase likho (jaise userMessage, apiKey).
// ✔ Space nahi ho sakta, dash (-) nahi use karna.
// ✔ Numbers use kar sakte ho but start mei nahi (✅ user1, ❌ 1user).
// ✔ Special characters nahi (❌ user@name), sirf _ aur $ allowed hai.

// 🔹 Operators (Math aur Logic ke liye)
// Arithmetic Operators:
// ^let x = 10;
// ^let y = 5;

// ^console.log(x + y); // 15
// ^console.log(x - y); // 5
// ^console.log(x * y); // 50
// ^console.log(x / y); // 2
// ^console.log(x % y); // 0 (modulus = remainder)

// Comparison Operators (true/false return karte hain):

// ^console.log(10 > 5);   // true
// ^console.log(10 < 5);   // false
// ^console.log(10 === 10); // true (=== strict equality)
// ^console.log(10 !== 5);  // true

// Assignment Operator (=):

// ^let score = 100;  // score variable mei 100 store hua

// ✅ Why Variables Useful?

// Agar tum same value baar-baar use karte ho, toh ek hi jagah value badalne se sab jagah update ho jaata hai.
// Code readable aur clean ho jaata hai.
// Example without variable ❌:

// ^console.log("Hello World");
// ^console.log("Hello World");

// Example with variable ✅:

// ^let message = "Hello World";
// ^console.log(message);
// ^console.log(message);

// 🔑 Summary:

// Values → string, number, boolean, null, undefined, object.
// Variables → let (changeable), const (fixed).
// Operators → +, -, *, /, %, ===, !==, >, <

// 🔹 Operators in JavaScript

// Operators ka matlab hai — kisi value ke saath kaam karna (math karna, compare karna, ya join karna).
// 1. Math Operators
// ^let a = 10;
// ^let b = 5;

// ^console.log(a + b); // 15 (plus)
// ^console.log(a - b); // 5 (minus)
// ^console.log(a * b); // 50 (times/multiply)
// ^console.log(a / b); // 2 (divide)

// 2. Plus operator with Strings

// 👉 Plus (+) sirf numbers ke liye nahi, balki text (string) jodne ke liye bhi use hota hai.
// ^console.log("Hello" + "World"); // HelloWorld
// ^console.log("Hello " + "World"); // Hello World (agar space chahiye toh string ke andar space do)

// 3. Comparison Operators

// === (strict equality) → check karta hai ke value + type same hai ya nahi.
// !== → not equal
// <, >, <=, >= → chhota, bada, ya barabar

// ^console.log(10 === 10);  // true
// ^console.log(10 === "10"); // false (kyunki number aur string alag type hain)
// ^console.log(10 !== 5);   // true
// ^console.log(10 > 5);     // true
// ^console.log(10 < 5);     // false
// 👉 Ye operators if condition ke andar bahut use hote hain (hum aage if-statements samjhenge).


// 🔹 Functions in JavaScript

// Function = code ka dabba (box) jisme tum kuch logic likhte ho, aur usse baar-baar use kar sakte ho.

// ⚡ Functions ke fayde:
// Code reuse hota hai (baar-baar likhne ki zarurat nahi).
// Code organized aur clean hota hai.
// Parameters ke through dynamic banaya jaa sakta hai.

// 1. Function banane ka basic syntax
// ^function greet() {
//  ^ console.log("Hello!");
// ^}


// 👉 Abhi function sirf define hua hai, run nahi hua.
// Isse run karne ke liye call karna padta hai:

// ^greet(); // Output: Hello!
// ^greet(); // Output: Hello! (baar-baar call kar sakte ho)

// 2. Parameters (input values)

// Function ko input de sakte ho jaise dabbe ke andar saman daalte ho.

// ^function greetUser(userName, message) {
//  ^ console.log(userName + ": " + message);
// ^}

// ^greetUser("Aman", "Hello!");   // Aman: Hello!
// ^greetUser("Rahul", "How are you?"); // Rahul: How are you?

// 👉 Parameters = variables jo sirf function ke andar use hote hain.

// 3. Default Parameters
// Agar value nahi doge toh default use hogi.

//^ function greetUser(userName, message = "Hello!") {
// ^  console.log(userName + ": " + message);
// ^}

// ^greetUser("Aman"); // Aman: Hello! (default use hua)
// ^greetUser("Rahul", "What's up?"); // Rahul: What's up?

// 4. Return Value

// Kabhi function sirf print nahi karta, balki value return karta hai taaki tum use store kar sako.

// ^function createGreeting(userName, message) {
//  ^ return "Hi, I am " + userName + ". " + message;
// ^}

// ^const greeting1 = createGreeting("Aman", "Nice to meet you!");
// ^const greeting2 = createGreeting("Rahul", "How are you?");

// ^console.log(greeting1); // Hi, I am Aman. Nice to meet you!
// ^console.log(greeting2); // Hi, I am Rahul. How are you?

// 👉 Yaha function string return kar raha hai, aur tum usse variable mei store karke baad mei use kar sakte ho.

// 🔑 Summary

// ✔ Operators → Math (+, -, *, /), String join (+), Comparison (===, !==, <, >).
// ✔ Functions → Code reuse ke liye, parameters lete hain, default value ho sakti hai,
//  aur return karke result de sakte hain.


// 🔹 Normal Function vs Arrow Function

// 👉 JavaScript mei function banane ke do tareeke hote hain:
// Normal Function (function keyword use karke)
// Arrow Function (short syntax wala)

// 🔹 Normal Function Example
// ^function greet(username, message) {
//  ^ return "Hi " + username + "! " + message;
// ^}

// Ye ek named function hai (iska naam hai greet).
// Isme function keyword aata hai.
// Parentheses () ke andar parameters likhe jaate hain.
// { } ke andar function ka code hota hai.
// return ka use karke koi value wapas bhej sakte ho.

// 🔹 Anonymous Function (naam ke bina)

// Kabhi-kabhi hume function ka naam nahi chahiye hota, sirf function ka code use karna hota hai.
// Isko bolte hain Anonymous Function.

// Example:

// ^export default function() {
// ^  console.log("Hello");
//^ }

// Yahaan function ka koi naam nahi hai.
// 🔹 Arrow Function

// Ab agar anonymous function likhna ho toh arrow function aur bhi short aur clean hota hai.
// Syntax:
// ^(username, message) => {
//  ^ return "Hi " + username + "! " + message;
// ^}

// ⚡ Difference:
// Arrow function me function keyword hata dete hain.
// Parameters () ke andar aate hain.
// => (arrow) lagate hain parameters aur function body ke beech.

// 🔹 Arrow Function Example
// ^const greet = (username, message) => {
//  ^ return "Hi " + username + "! " + message;
// ^};

// 👉 Yahan greet ek constant hai jisme humne ek arrow function store kiya hai.
// 👉 Isko call karne ka tareeka same hi hai:

//^console.log(greet("Max", "Welcome!")); 
// Output: Hi Max! Welcome!

// 🔹 Arrow Function Shortcut

// Agar tumhare function me sirf ek line return karni ho, toh tum {} aur return hata sakte ho.
// Example:
// ^const add = (a, b) => a + b;
// ^console.log(add(5, 3)); // Output: 8
// ✅ Conclusion:

// Normal Function → zyada traditional, long syntax.
// Arrow Function → short aur modern syntax, React me bohot use hota hai (specially button click, events, etc.).

// JavaScript Objects

// Objects are like containers that can group multiple values together.

// Example:
// ^const user = {
//  ^ name: "Max",
//  ^ age: 34
// ^};
// ^console.log(user);       // pura object
// ^console.log(user.name);  // "Max"
// ^console.log(user.age);   // 34
// user is an object.
// name and age are properties (key-value pairs).
// Dot notation (user.name) is used to access a property.

// 🔹 Objects with Functions (Methods)

// Objects can also store functions, which are called methods.

//^ const user = {
// ^  name: "Max",
//  ^ age: 34,
//   ^greet: function() {
//    ^ console.log("Hello!");
//   ^}
// ^};

// ^user.greet();  // Output: "Hello!"
// Function inside object → method.

// Call it with objectName.methodName().
// 🔹 this keyword

// Inside a method, this refers to the current object:
// ^const user = {
//  ^ name: "Max",
//   ^age: 34,
//   ^greet: function() {
//    ^ console.log("Hi, I am " + this.name + " and I am " + this.age);
//   ^}
// ^};

// ^user.greet();  // Output: Hi, I am Max and I am 34
// this.name → refers to the name property of this object.

// Useful to access other properties of the same object.

// 🔹 Classes (Blueprints for Objects)

// Classes let you create blueprints for objects, so you can easily make multiple objects with the same structure.
// ^class User {
//  ^ constructor(name, age) {
//  ^   this.name = name;
//   ^  this.age = age;
//   ^}
//   ^greet() {
//    ^ console.log("Hi!");
//   ^}
// ^}

// Create objects from class
// const user1 = new User("Manuel", 35);
// ^console.log(user1.name);  // "Manuel"
// ^user1.greet();            // "Hi!"

// class User → defines a blueprint.

// constructor → special function to set initial properties.
// this → refers to the object being created.
// new User("Manuel", 35) → creates a new object from the blueprint.
// All objects created from this class have the same methods (greet here).

// ✅ Key Points About Objects:
// Objects store related values together.
// Use dot notation to access properties.
// Objects can have methods (functions inside them).
// this keyword → refers to the current object.
// Classes → blueprints to create objects with the same structure.


// 🔹 What is an Array?

// 👉 Array ek list of values hoti hai.
// Objects → values ko key-value pair ke form mein store karte hain.
// Arrays → values ko order (position) ke hisaab se store karte hain.
// Example:
// ^const hobbies = ["Sports", "Cooking", "Reading"];

// Yahaan hobbies ek array hai.
// Index hamesha 0 se start hota hai.
// "Sports" → index 0
// "Cooking" → index 1
// "Reading" → index 2
// Access karna:
// ^console.log(hobbies[0]); // Sports
// ^console.log(hobbies[1]); // Cooking

// 🔹 Arrays ke andar kya ho sakta hai?

// Array ke andar kuch bhi ho sakta hai:
// Strings
// Numbers
// Objects
// Even dusre Arrays (nested arrays)

// Example:
// ^const mixed = ["Hello", 10, {name: "Max"}, [1, 2, 3]];

// 🔹 Common Array Methods
// 1. push() → array ke end me naya item add karna

//^ hobbies.push("Working");
// ^console.log(hobbies);
// ["Sports", "Cooking", "Reading", "Working"]

// 2. findIndex() → kisi item ka index find karna
// ^const index = hobbies.findIndex(item => item === "Sports");
// ^console.log(index); // 0
// 👉 Yahaan arrow function item => item === "Sports" har item ko check karta hai.
// Agar true return kare → wahi index return hoga.
// Agar sab false → -1 return hota hai (matlab nahi mila).

// 3. map() → har item ko transform karna aur ek nayi array banana
//^ const editedHobbies = hobbies.map(item => item + "!");
// ^console.log(editedHobbies);
// ["Sports!", "Cooking!", "Reading!", "Working!"]

// ⚡ Important:
// map() original array ko change nahi karta.
// Nayi array return karta hai.

// 4. map() se Objects banana

// Agar tum array ke har element ko ek object me convert karna chaho:
// ^const objectHobbies = hobbies.map(item => ({ text: item }));
// ^console.log(objectHobbies);
// [{text: "Sports"}, {text: "Cooking"}, {text: "Reading"}, {text: "Working"}]
// 👉 Yahan ( ) isliye lagaye gaye hain taaki JS samjhe ki tum ek object return kar rahe ho, na ki function ka body likh rahe ho.

// ✅ Key Points Summary:
// Array = ordered list of values.
// Index 0 se start hota hai.
// Arrays me strings, numbers, objects, dusre arrays sab ho sakte hain.
// Useful methods:
// push() → item add karna
// findIndex() → item ka index dhoondhna
// map() → items ko transform karke nayi array banana

// 🔹 Destructuring (Array + Object)

// 👉 Destructuring ka matlab hai values ko todna aur alag variables mei store karna easily.
// Pehle lamba tareeka hota tha, ab shortcut hai.

// 1. Array Destructuring

// Array ek list hota hai. Example:

// ^const userNameData = ["Max", "Schwarzmuller"];
// Normal way:
// ^const firstName = userNameData[0]; // "Max"
// ^const lastName = userNameData[1];  // "Schwarzmuller"
// Ye boring aur lamba lagta hai.
// Ab destructuring se shortcut:
// ^const [firstName, lastName] = userNameData;
// ^console.log(firstName); // Max
// ^console.log(lastName);  // Schwarzmuller

// 🟢 Rule: Square brackets [] use karo → position ke hisaab se values milengi.

// 2. Object Destructuring

// Object ek box hai jisme key-value pairs hote hain. Example:

// ^const user = {
//   ^name: "Max",
//  ^ age: 30
// ^};

// Normal way:
// ^const name = user.name;
// ^const age = user.age;
// Destructuring shortcut:
//^ const { name, age } = user;
//^ console.log(name); // Max
// ^console.log(age);  // 30


// 🟢 Rule: Curly braces {} use karo → name (keys) ke hisaab se values milengi.

// 3. Alias (Nick Name)

// Kabhi variable ka naam change karna ho:
//^ const { name: userName, age } = user;
//^ console.log(userName); // Max
//^ console.log(age);      // 30
// Yaha name property ko naya naam userName de diya.

// 🤩 Summary

// Array destructuring → [] → position based.
// Object destructuring → {} → property name based.
// Colon : use karke alias (naya naam) de sakte ho.

// 🔹 Spread Operator (…)

// Ye ek teen dots (…) hote hain jo arrays aur objects ke andar use hote hain.
// Kaam: Andar ke values ko bahar nikalna aur dusri jagah chipka dena.

// 1. Spread with Arrays

// Maan le ek array hai:
// ^const hobbies = ["Sports", "Cooking"];
// ^const newHobbies = ["Reading"];
// ^Agar mai normally merge karu:
// ^const merged = [hobbies, newHobbies];
// ^console.log(merged);
// ^Output:
//^ [ ["Sports", "Cooking"], ["Reading"] ]
// ⚠️ Problem: Nested arrays ban gaye (array ke andar array).

// Ab spread use karo:
// ^const merged = [...hobbies, ...newHobbies];
// ^console.log(merged);
// ^Output:
//^ ["Sports", "Cooking", "Reading"]
// ✅ Saare values seedhe nikal ke ek hi list me aa gaye.

// 2. Spread with Objects

// Object example:
// ^const user = { name: "Max", age: 30 };
// ^const extendedUser = { ...user, isAdmin: true };
// ^console.log(extendedUser);
// ^Output:
// ^{ name: "Max", age: 30, isAdmin: true }
// ✅ Yaha ...user ne user object ke saare key-value pairs nikal ke new object me daal diye.

// 🔑 Important Points
// ... ka matlab hai: spread (phaila do).
// Arrays me → elements nikal kar list ban jati hai.
// Objects me → properties nikal kar new object ban jata hai.
// Nested arrays/object avoid karne ke liye bohot useful hai.

// 👉 Simple bolu toh:
// Spread operator = ek copy-paste machine jo array/object ke andar ghus ke unke items ko bahar nikal ke new jagah chipka deta hai.


// 🔹 Control Structures

// JavaScript mein control structures ka kaam hota hai:
// 👉 “Code ka flow decide karna” – matlab konsa code chale aur konsa skip ho jaaye.
// 1. if / else if / else statement
// Iska use hota hai conditions check karne ke liye.

// Example:

// ^const password = prompt("Enter your password:");

// ^if (password === "Hello") {
//  ^ console.log("Access Granted: Hello works");
// ^} else if (password === "hello") {
//  ^ console.log("Access Granted: hello works");
// ^} else {
//  ^ console.log("Access Not Granted");
// ^}

// ⚡ Samajh le:

// Agar password Hello hai → pehla block chalega.
// Agar password hello (chhoti h) hai → doosra chalega.
// Agar kuch aur likha → else chalega (fallback case).
// 👉 Isiliye isko bolte hain control structure, kyunki ye control karta hai ki konsa code chale.

// 2. for…of Loop
// Loop ka matlab → ek hi code baar-baar chalana, jab tak list ke sab items cover na ho jaayein.

// Example:

// ^const hobbies = ["Sports", "Cooking"];

// ^for (const hobby of hobbies) {
// ^  console.log(hobby);
//^ }
// Output:
// Sports
// Cooking

// ⚡ Matlab:

// Pehli baar → hobby = "Sports" aur console.log("Sports").
// Dusri baar → hobby = "Cooking" aur console.log("Cooking").
// ✅ For-of loop arrays ke saare elements iterate karne ke liye bohot useful hai.

// 🔑 Quick Summary
// if / else if / else → decision making (true/false ke basis pe).
// for…of loop → repeat karna code for har item in array.


// 🔹 DOM Manipulation in Plain JavaScript

// Normally, in vanilla JavaScript, we often select elements from the DOM and then read or change them.
// Example:
// ^const btn = document.querySelector("button");
// ^btn.remove();  // removes button from the page

// ➡️ Here, you manually tell JavaScript what to do step by step. This is called an imperative approach.

// 🔹 React’s Approach

// In React, we don’t manually use querySelector, .remove(), or .innerHTML.
// Instead, we describe how the UI should look depending on the state.
// React then takes care of updating the DOM automatically.
// This is called a declarative approach.

// Example in React:
// ^function App() {
//^   const [showButton, setShowButton] = React.useState(true);
//   ^return (
//     ^<div>
//    ^   {showButton && <button onClick={() => setShowButton(false)}>Click me</button>}
//   ^  </div>
//  ^ );
// ^}
// ➡️ Here, no querySelector, no remove().
// React looks at the state (showButton) and updates the DOM for you.

// ✅ So in this course, you won’t see much manual DOM manipulation (like document.querySelector, .remove(), .appendChild()).
// Instead, you’ll learn to rely on React’s declarative rendering.

// 👉 Functions are “first-class citizens” in JavaScript.
// That means we can treat them like any other value:
// Store them in variables
// Pass them as arguments to other functions
// Return them from functions
// Let me break this into simple chunks with examples so it never confuses you again 👇

// 🔹 1. Passing a Function as a Value

// In JavaScript, you can give a function as input to another function.

// Example with setTimeout:
// ^function handleTimeout() {
//  ^ console.log("Timed out!");
// ^}
//^ setTimeout(handleTimeout, 2000);  // pass function as a value
// ⚠️ Important:

// ^setTimeout(handleTimeout, 2000) → ✅ correct (passing the function).

//^ setTimeout(handleTimeout(), 2000) → ❌ wrong (this executes immediately and passes the return value).

// 🔹 2. Using Anonymous Functions

// Instead of creating a separate named function, you can also define directly inside:
// ^setTimeout(function () {
// ^  console.log("Hello from anonymous function!");
//^ }, 2000);
// Or shorter with arrow functions:
// ^setTimeout(() => {
// ^  console.log("Hello from arrow function!");
//^ }, 2000);
// Both are anonymous (no name), but you can also store them in a variable to “name” them indirectly:
// ^const handleTimeout2 = () => {
//  ^ console.log("Another timeout!");
// ^};
//^ setTimeout(handleTimeout2, 3000);
// 🔹 3. Passing Functions to Your Own Functions

// This doesn’t only work with setTimeout.
// You can build your own functions that accept other functions as parameters.

// Example:
// ^function greeter(greetFn) {
//^ greetFn is expected to be a function
//  ^ greetFn();
// ^}
// ^greeter(() => {
// ^  console.log("Hi!");
//^ });

// 👉 Output: Hi!
// Here:
// greeter gets a parameter greetFn.
// When we call greeter, we pass in a function.
// Inside greeter, we call it with greetFn().

// 🔹 4. Why Is This Powerful?

// Because this enables callbacks and higher-order functions.
// Callbacks → tell another function what to do later.
// Higher-order functions → functions that accept or return functions.
// Example:

// ^function doMath(a, b, operationFn) {
//  ^ return operationFn(a, b);
// ^}

// ^console.log(doMath(5, 3, (x, y) => x + y)); // 8
// ^console.log(doMath(5, 3, (x, y) => x * y)); // 15

// ✅ So the key takeaway:
// Functions can be treated like variables.
// You pass them without parentheses if you want to give them as values.
// You add parentheses when you want to execute them.

// 🔹 1. Function ke andar Function

// Tum ek function bana sakte ho aur uske andar ek aur function define kar sakte ho.
// Example:
// ^function init() {
// ^  function greet() {
//^     console.log("Hi");
//   ^}
//  ^ greet();  // call inside
// ^}

//^ init();  // calling init
// 👉 Jab tum init() call karte ho:

// Pehle init execute hota hai.
// Uske andar greet function define hota hai.
// init ke andar greet() ko call kiya gaya hai → so output "Hi" aata hai.

// 🔹 2. Scope ka Rule

// greet sirf init ke andar hi accessible hai.
// Agar tum greet() ko init ke bahar call karoge toh error aayega ❌.
// Kyunki greet ka scope sirf init function ke andar tak limited hai.

// Example:
// ^function init() {
//   ^function greet() {
//    ^ console.log("Hi");
//   ^}
//  ^ greet(); // ✅ works
// ^}
// ^init();
//^ greet(); // ❌ ERROR: greet is not defined

// 🔹 3. Kyun Useful Hai?

// Normal JavaScript mein shayad tum nested functions kam use karoge,
// but React mein bohot baar use karoge.

// React example (soch lo abhi simple sa):
// ^function App() {
//   ^function handleClick() {
//   ^  console.log("Button clicked!");
//  ^ }

// ^  return <button onClick={handleClick}>Click Me</button>;
//^ }
// 👉 Yahaan App ek React component hai, aur uske andar humne ek aur function handleClick banaya jo sirf App ke andar kaam karega.

// ✅ Key Takeaway:
// Tum function ke andar aur function bana sakte ho.
// Woh inner function sirf parent function ke andar hi chalega.
// React ke andar hum aise hi karte hain jab event handler ya helper functions banana ho.

// 🔹 1. Primitive Values (Numbers, Strings, Booleans)

// Example:
// ^let userMessage = "Hello";
// ^userMessage = "Hi";
// "Hello" ek primitive value hai.
// Jab tum "Hi" assign karte ho, to naya value create hota hai, purana "Hello" memory se hat jaata hai.
// Matlab primitive values change nahi hote, balki replace hote hain naye value se.
// Aur agar tum string method use karte ho:
// ^let msg = "Hello";
// ^let newMsg = msg.concat(" World");
// ^console.log(msg);     // "Hello" (purana unchanged)
// ^console.log(newMsg);  // "Hello World" (naya ban gaya)

// 👉 Yahaan bhi original "Hello" change nahi hua, ek naya string ban gaya.
// 🔹 2. Reference Values (Objects, Arrays)
// Ab objects aur arrays alag hote hain. Yeh reference type hote hain.

// Example:
// ^const hobbies = ["Sports", "Cooking"];
// ^hobbies.push("Working");
// ^console.log(hobbies); // ["Sports", "Cooking", "Working"]

// 👉 Yahaan array hobbies change ho gaya, naya array nahi bana.
// Kyuuun❓
// Kyunki variables mein array/object direct value store nahi hota, balki address (reference in memory) store hota hai.
// Jab tum push karte ho → JS memory ke us address pe jaake usi array ko modify karta hai.

// 🔹 3. Const ka Confusion

// Tum sochoge:
// "Arre const use kiya hai, fir bhi array edit kaise ho gaya?"
// Answer:
// const ka matlab hota hai: variable ko naya value assign nahi kar sakte.
// Lekin agar variable ek object ya array ka address hold kar raha hai, to us address pe jo value hai usko modify kar sakte ho.
// Example:
// ^const arr = [1, 2];
// ^arr.push(3);  // ✅ allowed (address same hai, value modify hui)
// ^arr = [4, 5]; // ❌ Error (naya array assign karna mana hai)

// 🔑 Summary

// Primitive (number, string, boolean):

// Immutable (change nahi hote).
// Naya value create hota hai.

// Reference (object, array):
// Address store hota hai.
// Same address pe value modify ho sakti hai.
// const sirf reassignment rokti hai, modification nahi.

// ⚡Quick Analogy (real life example):
// Primitive = ek chitthi (letter) likhi → agar badalni hai to puri nayi chitthi likhni padegi.
// Reference = ek ghar ka address likha → ghar ke andar furniture badal sakte ho, address same rahega.