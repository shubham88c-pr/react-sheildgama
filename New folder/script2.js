// 🔹 React Essentials Course Section (Hinglish Explanation)
// Is section mei hum React aur ground-up (zero se) ek demo web application banayenge jo bohot hi beautiful website hogi.

// 👉 Is website ke andar tumhe do cheezein milengi:
// Static Content (jo fixed hai, change nahi hota)
// Dynamic Interactive Content (jo user ke actions ke according change hota hai, jaise button click karke color change karna ya data update karna).
// Aur isi ko banate-banate tum React ke most important features seekh jaoge – jo hamesha chahiye hote hain, chahe tum chhoti si React app banao ya ek badi complex app.

// 🔹 Pehla Step: Components
// React ke andar sabse important concept hai Component.
// Tum apni app ko chhote-chhote blocks (LEGO pieces) mei todh kar banao.
// Har component apna alag part handle karega (jaise header, footer, button).

// 🔹 Related Concepts:
// JSX → JavaScript + HTML mix code likhne ka tareeka.
// Example:

//<h1>Hello World!</h1>

// Yeh HTML jaisa dikh raha hai, lekin actually JavaScript ke andar likha hua hai.
// Props → Data ko ek component se dusre mei bhejna.
// Example:

// Ek "Greeting" component banaya.
// Usme name="Aman" bhejna → aur component andar usko show karega.

// 🔹 Data Handling in React

// Tum seekhoge ki data ko kaise output karna hai (jaise JavaScript variable ko JSX ke andar use karna).
// Example:
// const name = "Aman";
// <h1>Hello {name}</h1>

// 🔹 Interactivity (User ke actions)

// React apps ko interactive banana seekhoge.
// Jaise ek button click hone par text change ho jaye.
// Yeh hota hai user events ke through.
// Aur iske liye tum seekhoge ek aur important React concept → State.
// State ek tarah ka memory box hai jo component ke andar hota hai.
// Isme values save hoti hain aur jab wo values change hoti hain, toh component automatically update ho jaata hai.

// Example: Button click karne par number +1 ho jaye (Counter App).

// 🔹 By End of Section

// Tumko ye saare fundamental React concepts samajh aa jaayenge:
// ✔ Components
// ✔ JSX
// ✔ Props
// ✔ State
// ✔ Data Handling
// ✔ Events

// Tum basic React apps bana paoge →

// Static (jo sirf show kare)

// Dynamic Interactive (jo user ke actions ke hisaab se change ho).

// ⚡ Aur tension mat lo – React start karne ke liye tumhe React ka pehle se knowledge nahi chahiye.
// Sirf basic JavaScript knowledge chahiye (jo assume kiya gaya hai).


// 🔹 React Components (Hinglish Explanation)

// React aur uska ecosystem (React ke saath use hone wale tools aur features) bohot saare useful aur important features deta hai.
// Lekin agar ek hi core concept choose karna ho, jo har React app ke liye zaroori hai → toh wo hai Components.

// 🔹 Components kya hote hain?

// Components ek tarah ke reusable building blocks hote hain.
// Tum ek chhota sa component banaate ho (jaise ek Button ya Header), aur phir unko combine karke pura UI (User Interface) banate ho.
// Matlab pura React app Components ko jod ke banta hai.

// 👉 Example: Ek website ko socho. Usme hamesha kuch parts (blocks) honge:

// Header (logo, navigation)
// Content Section (main info, cards, images)
// Tabs Section (click karke switch karne wale buttons)
// Yeh sab alag-alag Components banakar manage kiya jaa sakta hai.

// 🔹 Component ki Definition

// Ek Component basically HTML, CSS aur JavaScript ka ek chhota package hota hai:
// HTML (markup) – kya dikhana hai
// CSS (style) – kaise dikhana hai
// JavaScript (logic) – kaise behave karna hai
// Aur jab tum in sabko ek jagah rakhte ho, toh tumhare UI ke chhote chhote parts manageable ho jaate hain.

// 🔹 Reusability ka Fayda

// Components reusable hote hain → ek hi component tum app mei multiple jagah use kar sakte ho.
// Example: Ek "Card" component banaaya jisme title aur description hai → isse tum 4 baar use karke alag data dikha sakte ho.

// 👉 Tumhe alag se 4 HTML likhne ki zarurat nahi. Bas ek component bana ke bar-bar call karna hai.

// 🔹 Without Components kya problem hoti?

// Agar tum HTML + JS normal tareeke se likho → files bohot badi aur messy ho jaati hain.
// Agar ek code change karna ho toh tumhe alag-alag jagah pe wohi change karna padega → zyada errors hone ke chances hote hain.
// Tumhe HTML aur JS files ke beech bar-bar jump karna padta hai.

// But Components ke saath:
// Related code (HTML + CSS + JS) ek saath hota hai.
// Tumhe sirf ek jagah change karna hota hai → automatically sab jagah apply ho jaata hai.
// Development process simple aur clean ho jaata hai.

// 🔹 Separation of Concerns (Kaam alag-alag karna)

// Components ka ek aur fayda hai ki tum different concerns alag-alag handle kar sakte ho:
// Ek component sirf data dikhane ke liye (output).
// Dusra component user input handle karne ke liye (button click, tab switch).
// 👉 Jaise-jaise projects bade hote hain, ye aur useful ho jaata hai, specially jab multiple developers ek project pe kaam kar rahe hote hain.

// 🔹 Popularity of Components

// Ye idea sirf React ka nahi hai.
// Angular, Vue, Svelte (aur bhi frameworks) mei bhi Components use hote hain.
// Even mobile app frameworks jaise Flutter mei bhi yahi concept use hota hai.

// 🔹 Summary

// React apps = Components ka combination.
// Components = Reusable, maintainable, aur easy-to-manage building blocks.
// Tum ek React developer banoge toh tum hundreds aur thousands of Components banate aur use karte rahoge.
// ⚡ Next Step: Ab hum apna pehla React Component code mei dekhenge aur banayenge.

// 🔹 Components coding start karna (React Project Setup)

// Ab jab tumhe idea lag gaya ki Components kya hote hain aur kyu useful hote hain, toh ab practical coding shuru karenge.
// Iske liye teacher ne tumhe do options diye hain:

// ✅ Option 1: CodeSandbox (Easy way)

// CodeSandbox ek browser-based environment hai.
// Matlab tumhe apne computer pe kuch install nahi karna.
// Sirf link open karo → project ready milega.
// Aur tum directly apna React code likh sakte ho.
// 👉 CodeSandbox tumhare liye npm install aur npm run dev waali cheezein automatically kar deta hai.

// ✅ Option 2: Local Setup (Apne computer pe)

// Agar tum apne computer pe coding karna chahte ho, toh ye steps follow karne hain:
// Zip file download karo (teacher ne diya hoga).
// Extract (unzip) karo aur project folder open karo.
// Apna code editor open karo (jaise Visual Studio Code).
// Terminal khol kar project folder mei jao.

// Command run karo:

//^ npm install

// 👉 Ye command React aur uske saare libraries + tools download karega jo project chalane ke liye chahiye.
// (Ye sirf ek hi baar karna padta hai).

// Fir project start karne ke liye run karo:

// ^npm run dev

// 👉 Ye ek development server start karega.
// Matlab ek preview website open hogi jahan tum apni React app live dekh sakte ho.
// Aur jab bhi tum code mei changes karoge, website automatically reload ho jaayegi.

// Jab coding stop karni ho toh terminal mei Ctrl + C dabake server band kar do.
// Next time coding start karni ho toh phir se sirf:

// ^npm run dev

// run karna hai.

// 🔹 Difference Recap

// CodeSandbox = Easy, online, no install needed.
// Local Setup = Tumhare computer pe React install hota hai, tum offline bhi kaam kar sakte ho.

// ⚡ Matlab ab tumhare paas project ka ek starting point ready hoga (same project dono tareekon mei milega). Isi par tum apne Components create aur test karoge.


// 🔹 Project Folder ke andar kya hota hai?

// ^index.html
// Ye project ka base HTML file hota hai.
// Lekin agar tum ise open karoge toh ye kaafi empty dikhega (sirf basic <html>, <head>, <body> tags honge).

// Jo cheezein tum browser mei dekh rahe ho (image, title, content) → wo index.html mei directly nahi likha hota.
// Kyun? → Kyunki React hi screen pe content render karta hai.

// ^index.jsx

// Ye ek JavaScript file hai jo index.html ke andar include hota hai.
// Is file ka kaam React ko initialize karna hota hai aur main App component ko screen par render karna hota hai.

// ^App.jsx

// Ye file ke andar tumhe wo content milega jo actually screen pe dikh raha hai.
// Matlab jo UI tum browser mei dekhte ho → wo isi App.jsx ke andar likha hota hai.

// 🔹 Yeh “HTML inside JavaScript” ka kya scene hai?

// Jab tum App.jsx open karte ho, tumhe lagta hai ki HTML code likha hai function ke andar.

// Example:

// ^function App() {
// ^  return <h1>Hello World!</h1>;
// ^}

// Lekin ye normal HTML nahi hai → ye hai JSX (JavaScript Syntax Extension).

// 🔹 JSX kya hota hai?

// JSX ka full form hai: JavaScript Syntax Extension.
// Yeh tumhe allow karta hai ki tum HTML jaisa code JavaScript ke andar likho.
// React mei UI banane ke liye JSX bohot useful hai.

// 👉 Problem: Browsers directly JSX samajh nahi paate.
// 👉 Solution: React ka development server tumhara JSX code ko normal JavaScript mei convert (transform) karta hai, aur fir browser usse samajhta hai.

// 🔹 React Component kya hota hai?

// React Component = ek JavaScript function
// Lekin React component ko recognize karne ke liye 2 rules follow karne hote hain:
// Function ka naam uppercase letter se start hona chahiye. (e.g. App, Header, Button)
// Function ko return karna hoga ek renderable value (usually JSX code jo UI batata hai).

// 👉 Example:

// ^function App() {
// ^  return <h1>Hello React!</h1>;
//^ }

// Yahan App ek component hai.
// Ye JSX return kar raha hai → <h1>Hello React!</h1>.
// React isse screen pe render karega.

// 🔹 Why Components are Powerful?

// Har component ek chhota UI block banata hai.
// Tum apne app ko chhote chhote manageable parts mei todh kar bana sakte ho.
// Har part (component) ke andar apna HTML, CSS aur JS logic hota hai.

// ⚡ To ab tumhe clear ho gaya ki project ke andar jo tumhe dikh raha hai wo actually App.jsx ke andar ek component hai, aur isi tarah tum apne custom components banaoge.

// 🔹 React Components Kya Hote Hain?

// React mein har cheez ek component hoti hai (App, Header, Footer, Sidebar, Button, etc.).
// Component ek JavaScript function hota hai jo HTML (JSX) return karta hai.
// Ye reusable hote hain, matlab ek hi component baar-baar use kar sakte ho.

// 🔹 Apna Pehla Custom Component Kaise Banaye?

// Abhi humne ek App component tha jisme header ka code likha hua tha (image, title, subtitle).
// Ab hum is header wale part ko ek alag component banaenge.

// Step 1: Ek naya function banao

// ^function Header() {
//  ^ return (
//   ^  <header>
//     ^  <img src="logo.png" alt="Logo" />
//    ^   <h1>My React App</h1>
//   ^    <p>This is my first custom component!</p>
//  ^   </header>
// ^  );
//^ }

// ✅ Important:

// Component ka naam capital letter se start hona chahiye (Header, not header).
// Function ke andar return hamesha JSX return karega (jo browser mein dikhega).
// Agar JSX multi-line hai to usse ( ) ke andar likhna zaroori hai.
// Step 2: Apne App component ke andar use karo

// ^function App() {
//   ^return (
//    ^ <div>
//    ^   <Header />   {/* yaha apna custom component use kiya */}
//    ^   <p>Welcome to my app!</p>
//   ^  </div>
//  ^ );
// ^}

// ✅ Important:

// React components ko HTML tags ki tarah use karte hain (<Header />).
// Agar self-closing tag use karte ho (<Header />), toh slash / zaroor hona chahiye.

// Step 3: Preview
// File save karne ke baad jab tum browser/CodeSandbox mein dekho, toh header content wahi dikhega jo pehle tha, bas ab wo alag component se aa raha hai.
// Ye pehla step hai React mein code ko clean aur reusable banane ka.

// 🟢 Quick Recap:

// Component = Function jo JSX return karta hai.
// Naam capital letter se start hona chahiye.
// JSX multi-line ho toh ( ) ke andar likho.
// Component ko HTML tag ki tarah use karo <Header />.

// 1) Page source vs rendered DOM — farak samjho

// View Page Source (jo browser ka “view source” dikhata hai) woh sirf woh HTML dikhata hai jo server ne seedha bheja. Usme tum header/title/image nahin dekhoge (sirf <div id="root"></div> jaisa kuch).
// Inspect → Elements tab (developer tools) mein jo dikhega woh React ke baad bana hua DOM hai — yani React ne JavaScript chala ke jo elements create kiye woh yahin nazar aayenge (header, images, etc.).
// Isliye jab tum source dekhte ho content nahi milta, par Inspect karoge to content milta hai — kyunki React browser mein run karke DOM ko update karta hai.

// 2) Kaunse files milte hain aur kya karte hain (simple flow)

// ^index.html

// Ye base file hai. Isme ek div hota hai jiska id root hota hai:
// ^<div id="root"></div>

// Ye wahi jagah hai jahan React apna UI inject karega.

// ^src/index.jsx (entry point)

// Ye file React app ko "boot" karti hai — yahi pe App component import hota hai aur React ko bola jata hai ki App ko root div ke andar render karo.

// ^src/App.jsx

// Isme tumhara App component hota hai jo JSX return karta hai (aur uske andar tumhare custom components jaise <Header/> use hote hain).
// ^src/Header.jsx (optional)
// Tumhara custom header component, jo App ke andar render hota hai.

// 3) Chhota sa, realistic code example (step-by-step)

// ^index.html
// ^<!doctype html>
// ^<html>
//   ^<head><meta charset="utf-8" /><title>My App</title></head>
//  ^ <body>
//    ^ <div id="root"></div>
//    ^ <!-- dev server ya bundler yaha compiled JS load karega -->
//   ^  <script type="module" src="/src/index.jsx"></script>
//  ^ </body>
// ^</html>

//^ src/index.jsx
//^ import React from 'react';
// ^import { createRoot } from 'react-dom/client';
// ^import App from './App.jsx';        // App component ko import kiya

// ^const container = document.getElementById('root'); // index.html ka div
// ^const root = createRoot(container);               // React 18+ way
// ^root.render(<App />);                             // App ko render kar diya

// Line-by-line (Hinglish):

// ^import ... → JS module feature: hum App aur createRoot le rahe hain.
// ^getElementById('root') → wahi HTML element jo index.html mein tha.
// ^createRoot(...) → React ko bolta hai “ye root element hai jahan meri app jayegi”.
// ^root.render(<App />) → React ko bola “App component ko run karke jo dikhega woh is root mein daal do”.

// ^src/App.jsx
// ^import React from 'react';
// ^import Header from './Header.jsx';

// ^export default function App() {
//   ^return (
//     ^<div>
//      ^ <Header />
//      ^ <main>
//      ^   <h2>Welcome!</h2>
//     ^    <p>Yeh main content hai.</p>
//    ^   </main>
//   ^  </div>
//  ^ );
// ^}
// ^src/Header.jsx

// ^import React from 'react';

// ^export default function Header() {
//   ^return (
//    ^ <header>
//      ^ <img src="/logo.png" alt="Logo" />
//     ^  <h1>My React Site</h1>
//    ^   <p>Subtitle yahan</p>
//   ^  </header>
//  ^ );
// ^}

// 4) JSX → browser mein kaise dikhta hai (behind the scenes)

// Tum JSX likhte ho (jaise <Header /> ya <h1>Hello</h1>).
// Build tool/dev server (Vite/webpack/CodeSandbox) tumhare JSX ko normal JavaScript mein convert kar deta hai (transpile) — browser ko woh normal JS samajh aata hai.
// React run karta hai, tumhare component functions
//  (jaise Header() ya App()) ko execute karta hai — jo ye functions return karte 
// hain (JSX) usse final DOM elements (like <header>, <h1>) bante hain aur #root ke andar inject ho jaate hain.

// 5) Uppercase naming rule — kyu zaroori?

// Lowercase names (e.g., div, img, header) → built-in HTML elements hote hain → React unhe seedhe DOM nodes banata hai.
// Uppercase names (e.g., Header, App) → React samajhta hai “ye custom component hai” → React is function ko call karega, aur jo return value milegi usko process karega.
// Isse name clash bhi nahi hota (agar tum header lowercase se component banate, toh browser ka built-in <header> confuse ho sakta).

// 6) Component tree (tree of components)

// App ke andar Header ho sakta hai, Header ke andar aur chhote components ho sakte — isi tarah ek tree banta hai.
// React is tree ko analyze karta hai, phir final DOM nodes generate karta hai.
// Developer tools mein tum component tree React DevTools se bhi dekh sakte ho (ye alag panel deta hai jo components ko show karta hai).

// 7) Short summary — ek line mein

// index.html → root element provide karta hai.
// src/index.jsx → App ko root mein mount karta hai (createRoot + render).
// App + custom components → JSX return karte hain → bundler/React convert karke final HTML DOM produce karta hai → browser usse dikhata hai.
// View Source mein static served HTML milega; Inspect → Elements mein React-generated DOM milega.

// 🔹 1. Static vs Dynamic Content

// Static content: Fixed text/image jo har bar same dikhega (jaise <h1>Fundamental React Concepts</h1>).
// Dynamic content: Content jo change ho sakta hai based on:

// Random number
// User input
// API data
// State/Props
// Abhi hum random words output karenge.

// 🔹 2. Curly Braces { } in JSX

// React mein agar tumhe HTML ke andar JavaScript ka code likhna hai toh curly braces {} use karte ho.

// 👉 Example:
//^ <h1>{1 + 1}</h1>
// Screen pe output hoga:
// ^2

// Matlab {} ke andar koi bhi JavaScript expression likh sakte ho:

// variable
// function call
// math expression
// array access

// 🔹 3. Random word choose karna

// Hum ek array banayenge jisme 3 words honge:

// ^const reactDescriptions = ["Fundamental", "Crucial", "Core"];
// Phir ek helper function banayenge jo ek random index generate kare:
// ^function genRandomInt(max) {
//  ^ return Math.floor(Math.random() * (max + 1));
// ^}

// Ye function hamesha 0 se max tak ek random integer dega.

// 🔹 4. Dynamic output in Header.jsx

// Ab header component mein, hard-coded "Fundamental" ki jagah ek random word daalenge.

// ^import React from "react";

//^ const reactDescriptions = ["Fundamental", "Crucial", "Core"];

// ^function genRandomInt(max) {
//  ^ return Math.floor(Math.random() * (max + 1));
// ^}

//^ export default function Header() {
// ^  const description = reactDescriptions[genRandomInt(2)]; 
//^ genRandomInt(2) -> random number 0,1,2

//  ^ return (
//  ^   <header>
//  ^     <h1>{description} React Concepts</h1>
//  ^   </header>
// ^  );
//^ }

// 🔹 5. Kya hoga?

// Har bar jab tum page reload karoge, Header() function dobara run hoga.
// genRandomInt(2) ek random number dega:

// 0 → "Fundamental"
// 1 → "Crucial"
// 2 → "Core"
// Aur wahi word screen pe dikhega.

// 🔹 6. Best practice

// Direct curly braces ke andar logic likh sakte ho (e.g. {reactDescriptions[genRandomInt(2)]}).
// Lekin clean code ke liye result ek variable (description) mein store karna best practice hai.

// 🔹 7. Example output

// Reload pe kabhi ye dikhega:
// Fundamental React Concepts
// Reload dobara:
// Crucial React Concepts
// Phir reload:
// Core React Concepts

// 👉 So tumne seekha:
// JSX mein {} lagake JS code likh sakte ho.
// Random numbers aur arrays ke saath dynamic content bana sakte ho.
// Best practice: pehle variable mein store karo, phir use karo.

// 🔹 Problem kya hai?

// Normally tum aise image laga sakte ho:
// <img src="./src/assets/react-core-concepts.png" />
// Aur yeh kaam bhi karega (image dikh bhi jayega).
// Lekin jab tum project ko deploy (publish) karoge, to React ka build process (jo sab code ko optimize aur bundle karta hai) is tarah ke image path ko ignore kar sakta hai. Matlab image final project mein missing ho sakta hai.

// 🔹 Best way: Import karke use karna

// Instead of directly path likhne ke, hum image ko JavaScript variable ki tarah import karte hain.

// Example:
//^ import reactImage from "./assets/react-core-concepts.png";

// ^function Header() {
//  ^ return (
//   ^  <header>
//  ^     <img src={reactImage} alt="React logo" />
// ^    </header>
//^   );
//^ }

// 🔹 Ye kyun kaam karta hai?

// Normal JavaScript mein tum image ko import nahi kar sakte.
// Lekin React (ya Next.js) ke project setup mein ek build process hota hai (Webpack/Vite).
// Woh process:

// JSX ko normal JS mein convert karta hai ✅
// CSS imports ko support karta hai ✅
// Aur image imports ko bhi handle karta hai ✅
// Matlab agar tum import reactImage from "..." likhte ho, to build process ensure karega ki:
// Image final build mein include ho.
// Image ka optimized path generate ho.
// Browser usse sahi tarike se load kare.

// 🔹 Curly braces { } ka role

// Jab tum src attribute mein image variable use karte ho:

//^ <img src={reactImage} />

// 👉 Tum quotes "" nahi lagate.
// 👉 Sirf {reactImage} likhte ho.

// Kyunki {} ka matlab hai: "Yeh ek JavaScript variable hai, string nahi".
// Aur woh variable reactImage actually us image ka optimized path rakhta hai.

// 🔹 Summary

// Direct src="./..." likhna production ke liye safe nahi hai ❌.
// Hamesha images ko import karke variable ke through use karo ✅.
// {} curly braces se woh variable src ke andar pass kar do.
// Build process image ko bundle aur optimize karega.

// ✅ Example code (Best Practice):

// ^import reactImage from "./assets/react-core-concepts.png";

//^ export default function Header() {
// ^  return (
//  ^   <header>
//    ^   <h1>React Concepts</h1>
//   ^    <img src={reactImage} alt="React core concepts" />
//  ^   </header>
// ^  );
// ^}


// 🔹 Components ko reuse karna

// React mein Components ek baar banao → fir use multiple jagah use kar sakte ho.
// Example: Tumne ek Header component banaya. Usko tum page par do baar likhoge to 2 header dikhenge.
// Lekin kuch components sirf ek hi baar use hote hain (jaise header).
// Aur kuch components baar-baar use hote hain (jaise product card, list items, buttons).

// 🔹 Problem: Reusable data

// Maan lo tum ek CoreConcept component bana rahe ho jisme ek image, ek title aur ek description dikhna hai.
// Agar tum isko ek hi data ke sath banao, to baar-baar wahi same cheez repeat hogi.
// Lekin hume chahiye: same component but different data (jaise 4 alag-alag core concepts).

// 🔹 Solution: Props

// React mein isko solve karne ke liye ek concept hai Props (Properties).

// Props ka kaam hai:
// 👉 Data ko component ke andar bhejna (pass karna).
// 👉 Har baar component use karte waqt alag-alag data bhej sakte ho.

// Bilkul waise hi jaise JavaScript mein tum function mein parameters pass karte ho.

// 🔹 Example Code
//^ CoreConcept.jsx (Custom Component)

//^ function CoreConcept(props) {
// ^  return (
//  ^   <li>
//  ^     <img src={props.image} alt={props.title} />
//   ^    <h3>{props.title}</h3>
//  ^     <p>{props.description}</p>
// ^    </li>
//^   );
//^ }

// ^export default CoreConcept;

// App.jsx (Using Component with Props)

//^ import CoreConcept from "./CoreConcept";
//^ import componentsImage from "./assets/components.png";
//^ import propsImage from "./assets/props.png";

// ^function App() {
//  ^ return (
//   ^  <section id="core-concepts">
//     ^  <h2>Core Concepts</h2>
//     ^  <ul>
//    ^     <CoreConcept 
//       ^    title="Components" 
//      ^     description="The core UI building block" 
//     ^      image={componentsImage} 
//      ^   />
//     ^    <CoreConcept 
//    ^       title="Props" 
//   ^        description="Make components reusable" 
//  ^         image={propsImage} 
//   ^      />
//  ^     </ul>
// ^    </section>
// ^  );
//^ }

//^ export default App;

// 🔹 Kaise kaam karta hai?
// CoreConcept ek function hai jo props parameter accept karta hai.
// Jab tum <CoreConcept title="Components" ... /> likhte ho, React automatically ek object banata hai:

//^ props = {
// ^  title: "Components",
// ^  description: "The core UI building block",
// ^  image: componentsImage
// ^};

// Fir tum component ke andar props.title, props.description, props.image use kar sakte ho.
// Har baar component ko alag props doge → alag output milega ✅

// 🔹 Important baat

// Props ek object hota hai.
// Key = attribute name jo tumne diya (title, description, image)
// Value = jo data tumne pass kiya.
// Props read-only hote hain → component ke andar unko badal nahi sakte.

// 🔹 Simple Example (Visualize karo)
//^ <CoreConcept title="Car" description="Runs on fuel" />
// ^<CoreConcept title="Bike" description="Two-wheeler" />
//^ <CoreConcept title="Bus" description="Carries many people" />

// Output:
// Car - Runs on fuel
// Bike - Two-wheeler
// Bus - Carries many people
// ✅ Props ka use karke tum ek hi component ko multiple data ke liye reuse kar sakte ho.


// 🔹 Problem (Long way)

// Abhi tak hum CoreConcept component ko aise use kar rahe the:

// ^<CoreConcept 
//  ^ title={CORE_CONCEPTS[0].title}
//  ^ description={CORE_CONCEPTS[0].description}
//  ^ image={CORE_CONCEPTS[0].image}
// ^/>
//^ <CoreConcept 
//^   title={CORE_CONCEPTS[1].title}
//^   description={CORE_CONCEPTS[1].description}
//^   image={CORE_CONCEPTS[1].image}
//^ />

// 👉 Ye code sahi hai, lekin lamba aur repetitive lag raha hai.

// 🔹 Shorter Way (Spread Operator)

// JavaScript ka spread operator (...) use karke tum pura object ke saare key-value pairs as props bhej sakte ho.

//^ <CoreConcept {...CORE_CONCEPTS[0]} />
//^ <CoreConcept {...CORE_CONCEPTS[1]} />
//^ <CoreConcept {...CORE_CONCEPTS[2]} />
//^ <CoreConcept {...CORE_CONCEPTS[3]} />

// ➡️ Iska matlab: title, description, image automatically props ke andar chale jaayenge, kyunki ye object me already exist karte hain.

// 🔹 Inside Component (Destructuring)

// Abhi tum CoreConcept ke andar props.title, props.description, props.image likh rahe the.
// ^function CoreConcept(props) {
//  ^ return (
//   ^  <li>
//   ^    <img src={props.image} alt={props.title} />
//   ^    <h3>{props.title}</h3>
//   ^    <p>{props.description}</p>
//  ^   </li>
//  ^ );
// ^}

// 👉 Isko aur short likhne ke liye hum object destructuring use karte hain:
// ^function CoreConcept({ image, title, description }) {
//  ^ return (
//  ^   <li>
//   ^    <img src={image} alt={title} />
//  ^     <h3>{title}</h3>
//   ^    <p>{description}</p>
//  ^   </li>
// ^  );
// ^}
// ➡️ Ab tumhe baar-baar props. likhne ki zaroorat nahi. Direct variable use ho jayega.

// 🔹 Final App.jsx Example
//^ import CoreConcept from "./CoreConcept";
//^ import { CORE_CONCEPTS } from "./data.js";

// ^function App() {
//  ^ return (
//   ^  <section id="core-concepts">
//   ^    <h2>Core Concepts</h2>
//    ^   <ul>
//   ^      <CoreConcept {...CORE_CONCEPTS[0]} />
//    ^     <CoreConcept {...CORE_CONCEPTS[1]} />
//   ^      <CoreConcept {...CORE_CONCEPTS[2]} />
//  ^       <CoreConcept {...CORE_CONCEPTS[3]} />
//   ^    </ul>
//  ^   </section>
// ^  );
//^ }

// ^export default App;

// 🔹 Important Learnings

// Spread Operator (...) se object ke saare key-value pairs props ban jaate hain.
// Destructuring se component ke andar props ko aur clean tarike se access karte hain.
// Ye dono milkar tumhara code short aur readable banate hain.

// 🔹 Problem

// Abhi tak humara App.jsx file bohot bada ho gaya tha:
// App component
// Header component
// CoreConcept component

// Sab ek hi file mein.
// Ye technically kaam karta hai, lekin maintain karna mushkil ho jaata hai jab project bada ho.

// 🔹 Solution: Components ko alag file mein rakhna

// Components folder banao
// src/components/ folder bana lo. Ye best practice hai, optional nahi hai.

// Header.jsx file
// App.jsx se Header component function cut karo.
// Header.jsx mein paste karo.
// Jo bhi constants Header ke liye chahiye (jaise reactDescriptions array aur genRandomInt function), unko bhi yahin paste karo.
// Export karo, mostly default export use hota hai:

//^ src/components/Header.jsx
// ^import React from "react";
// ^import ReactImage from "../assets/react-core-concepts.png";

// ^const reactDescriptions = [
// ^  "Fundamental React concepts",
//  ^ "Core React concepts",
// ^  "Crucial React concepts",
//^ ];

// ^function genRandomInt(max) {
//  ^ return Math.floor(Math.random() * (max + 1));
// ^}

// ^export default function Header() {
//  ^ const description = reactDescriptions[genRandomInt(2)];
//  ^ return (
//   ^  <header>
//     ^  <img src={ReactImage} alt="React" />
//    ^   <h1>{description}</h1>
//   ^  </header>
//  ^ );
// ^}
// Notice: Image import path ../assets/... kyunki Header.jsx ab nested folder components/ mein hai.

// App.jsx mein import karo
// ^import Header from "./components/Header";

// CoreConcept.jsx file
// App.jsx se CoreConcept component cut karo aur components/CoreConcept.jsx mein paste karo.

// Export karo default export ke saath:
//^ src/components/CoreConcept.jsx
// ^import React from "react";

//^ export default function CoreConcept({ image, title, description }) {
//  ^ return (
//  ^   <li>
// ^      <img src={image} alt={title} />
//     ^  <h3>{title}</h3>
//    ^   <p>{description}</p>
//   ^  </li>
//  ^ );
// ^}
// Simple aur clean.

// App.jsx mein import karo
//^ import CoreConcept from "./components/CoreConcept";
//^ import { CORE_CONCEPTS } from "./data.js";

// Aur JSX mein use karo:
// ^<ul>
//   ^{CORE_CONCEPTS.map((item, index) => (
//  ^   <CoreConcept key={index} {...item} />
// ^  ))}
//^ </ul>

// 🔹 Benefits of this approach

// Code clean aur readable ho jaata hai.
// Maintain karna easy ho jaata hai jab project bada ho.
// Components reusable aur modular ban jaate hain.
// Image aur data import paths properly manage ho jaate hain.

// 🔹 Problem

// Abhi tak sab CSS rules ek hi file (index.css) mein the:
// Header styles
// CoreConcept styles
// Ye technically kaam karta hai, lekin:
// Jab project bada ho, samajhna mushkil ho jaata hai ki kaunsa CSS kis component ke liye hai.

// Maintenance aur debugging me time lagta hai.

// 🔹 Solution: Component-specific CSS files
// 1️⃣ Header CSS

// src/components/header/ folder banao.
// Header.jsx aur Header.css is folder mein rakho.
// Header se related CSS ko Header.css mein move karo (cut-paste from index.css).

// ^/* src/components/header/Header.css */
//^ header {
// ^  background-color: #f5f5f5;
//  ^ padding: 20px;
// ^  text-align: center;
//^ }

// ^header img {
//  ^ width: 100px;
// ^}

//^ header h1 {
//  ^ font-size: 24px;
// ^}
// Header.jsx mein import karo:
// ^import "./Header.css";

// Ye build process handle karega aur CSS webpage me include ho jaayega.

// 2️⃣ Important Note About Scope

// CSS jo import kiya React component file me, automatically scoped nahi hota.
// Matlab agar tum app me kahin aur header element use karte ho, ye same styles apply ho jaayenge.

//^ App.jsx
//^ <header>
// ^  <h1>Hello World</h1>
//^ </header>

// Is header pe bhi Header.css ke styles lag jaayenge.
// Future me tum CSS Modules ya Styled Components use karke styles ko component-scoped bana sakte ho.

// 3️⃣ Optional: CoreConcept CSS
// Agar chaho, CoreConcept ke liye bhi ek coreconcept.css file bana sakte ho.
// CoreConcept.jsx me import karna, bilkul same jaise Header ke liye kiya.

// 4️⃣ Folder Structure Recommendation
// src/
//  ├─ assets/
//  │    └─ images...
//  ├─ components/
//  │    ├─ header/
//  │    │    ├─ Header.jsx
//  │    │    └─ Header.css
//  │    └─ coreconcept/
//  │         ├─ CoreConcept.jsx
//  │         └─ CoreConcept.css (optional)
//  ├─ App.jsx
//  ├─ index.jsx
//  └─ data.js
// Ab Har component ka JSX + CSS ek folder me hai → easy to find and maintain.
// Image imports ka path adjust karna: Header.jsx ke liye ab ../../assets/...

// ✅ Result:

// Project fully modular, maintainable, aur scalable ho gaya hai.
// Components aur styles properly separated.
// Future me naya component add karna ya CSS update karna bohot easy ho jaayega.



// 🔹 Step by Step Explanation
// 1️⃣ App.jsx me new Section banao

// CoreConcepts ke neeche ek naya <section> add karna hai.

// Usko ek id="examples" dena hai styling ke liye.
// ^<main>
//   ^<section id="core-concepts">
//  ^   {/* CoreConcepts yahan render honge */}
// ^  </section>

//  ^ <section id="examples">
//    ^ <h2>Examples</h2>
//   ^  <menu>
//    ^   {/* Yahan TabButtons aayenge */}
//   ^  </menu>
//  ^ </section>
// ^</main>
// 2️⃣ New Component: TabButton.jsx

// src/components/ folder me ek file banao TabButton.jsx.
// Isme ek TabButton component banao jo ek <li> ke andar ek <button> return kare.
// ^export default function TabButton(props) {
//   ^return (
//     ^<li>
//    ^   <button>{props.children}</button>
//   ^  </li>
//  ^ );
// ^}

// 👉 Important point:

// Yahan props.children use kiya gaya hai.
// Jo bhi text tum <TabButton>...</TabButton> ke beech me likhoge, woh children ke andar aayega.

// 3️⃣ App.jsx me TabButton import karke use karo
// ^import TabButton from "./components/TabButton";

// ^function App() {
//  ^ return (
//     ^<div>
//     ^  <main>
//       ^  <section id="examples">
//      ^     <h2>Examples</h2>
//         ^  <menu>
//        ^     <TabButton>Components</TabButton>
//       ^      <TabButton>JSX</TabButton>
//       ^      <TabButton>Props</TabButton>
//      ^       <TabButton>State</TabButton>
//     ^      </menu>
//    ^     </section>
//   ^    </main>
//  ^   </div>
// ^  );
//^ }

// 👉 Ab har button render hoga, aur text props.children ke through aayega.

// 4️⃣ props.children ka concept

// Agar tum component ko open aur close tag ke beech content doge, jaise:

//^ <TabButton>Components</TabButton>

// To React automatically us content ko ek special prop children me pass karta hai.
// Isliye tum props.children ya destructuring se { children } likhkar usko use kar sakte ho.

// 5️⃣ Alternate Approach (label prop use karke)

// Agar tum chaho to children ke jagah ek custom prop use kar sakte ho:
//^ export default function TabButton({ label }) {
//  ^ return (
//  ^   <li>
//   ^    <button>{label}</button>
//  ^   </li>
// ^  );
//^ }
// Aur call karte waqt:
//^ <TabButton label="Components" />
//^ <TabButton label="JSX" />

// ✅ Dono approach sahi hain.

// props.children tab useful hai jab tum open-close tags ke andar koi text/JSX pass karna chahte ho.
// label prop ya normal props tab useful hain jab tum specific data fields pass kar rahe ho.

// 6️⃣ Final Result

// Tumhare app ke niche ek Examples section aayega.
// Usme 4 buttons honge: Components, JSX, Props, State.
// Filhaal buttons sirf clickable hain, koi kaam nahi kar rahe (uske liye hum state aur event handling seekhenge).

// ⚡ To ab tumhe 2 naye concepts samajh aagaye:

// props.children – jab component ke andar content pass karte ho.
// Component Composition – ek component ke andar dusra component wrap karke use karna.



// 🔹 Vanilla JavaScript Approach

// Normally agar hum simple JavaScript use karein (React ke bina), toh aise likhte:
// ^const btn = document.querySelector("button");
// ^btn.addEventListener("click", () => {
//  ^ console.log("Hello World!");
// ^});

// 👉 Yahaan hum manually DOM select karte hain aur addEventListener use karte hain.
// But React mein aisa nahi karna hota, kyunki React khud DOM manage karta hai.

// 🔹 React Way (Declarative)

// React mein event listener directly JSX element ke prop ki tarah add karte hain.

// Example:

// ^function TabButton() {
//  ^ function handleClick() {
//   ^  console.log("Hello World!");
//  ^ }

//   ^return (
//     ^<button onClick={handleClick}>
//    ^   Tab Button
//   ^  </button>
//  ^ );
// ^}

// 🔑 Important Points:

// Prop ka naam onClick hota hai (camelCase).
// React ke andar sab events aise hi likhe jaate hain (onChange, onSubmit, onMouseEnter, etc).
// Function ko execute nahi karna 🚫

// ^❌ onClick={handleClick()}

// ^✅ onClick={handleClick}

// Kyunki agar tumne () lagaya toh function turant run ho jaayega render ke time, click ke baad nahi.
// Function ko component ke andar bana sakte ho
// Allowed hai, aur common bhi hai, kyunki vo sirf isi component mein kaam aayega.
// Function naming convention
// Common hai handleEventName (like handleClick).
// Kabhi kabhi eventNameHandler bhi use hota hai (like clickHandler).

// 🔹 Multiple Buttons Example

// ^function TabButton({ label }) {
//  ^ function handleClick() {
//    ^ console.log(label + " clicked!");
//   ^}

//  ^ return (
// ^    <button onClick={handleClick}>
//   ^    {label}
//  ^   </button>
// ^  );
//^ }

// ^export default function App() {
//  ^ return (
//    ^ <div>
//      ^ <TabButton label="Home" />
//     ^  <TabButton label="About" />
//    ^   <TabButton label="Contact" />
//   ^  </div>
//  ^ );
// ^}
// 👉 Ab jab bhi tum kisi button pe click karoge, uska label console mein show hoga.

// ⚡So React mein events handle karna kaafi easy hai → just use onClick (or other onEvent) props aur ek function ko pass karo.
// Perfect 👍 tu ab bilkul sahi step pe ho → abhi tak sirf button click detect kar pa rahe the, lekin ab hume button ke hisaab se content change karna hai. Iske liye 2 cheezein important hain:
// Props forwarding pattern (jaisa tu samjh raha hai: onSelect → onClick).
// State ka use (kyunki content ko dynamically change karna hai).
// Chalo step-by-step samajhte hain:

// 🔹 Step 1: Custom Button ko flexible banana (props accept karke)

// ^TabButton.jsx:

// ^function TabButton({ children, onSelect }) {
//  ^ return (
//    ^ <li>
//      ^ <button onClick={onSelect}>
//     ^    {children}
//    ^   </button>
//   ^  </li>
//  ^ );
// ^}

// ^export default TabButton;
// 👉 Yahaan humne onSelect prop banaya jo parent component (App) se function lega, aur usko button ke onClick ke andar forward kar diya.
// 👉 children ka use kiya hai taaki button ke andar label (text) aa sake.

// 🔹 Step 2: App Component me event handle karna

// ^App.jsx:
// ^import { useState } from "react";
// ^import TabButton from "./TabButton";

// ^export default function App() {
//   ^const [selectedTab, setSelectedTab] = useState("home"); // default tab

//  ^ function handleSelect(tab) {
//    ^ setSelectedTab(tab); // state update
//   ^}

//  ^ return (
//     ^<div>
//      ^ <menu>
//        ^ <TabButton onSelect={() => handleSelect("home")}>Home</TabButton>
//       ^  <TabButton onSelect={() => handleSelect("about")}>About</TabButton>
//      ^   <TabButton onSelect={() => handleSelect("contact")}>Contact</TabButton>
//     ^  </menu>

//    ^   <section>
//    ^     {selectedTab === "home" && <p>🏠 Welcome to Home!</p>}
//     ^    {selectedTab === "about" && <p>ℹ️ About us content goes here.</p>}
//    ^     {selectedTab === "contact" && <p>📞 Contact us at hello@example.com.</p>}
//   ^    </section>
//  ^   </div>
// ^  );
//^ }

// 🔑 Important Concepts:

// State (useState)

// React me agar tumhe UI me change laana hai (jaise content switch karna), toh tumhe ek state variable banana padega.
// Yahaan maine selectedTab banaya hai.

// Prop Forwarding

// App.jsx → TabButton.jsx me function pass hua hai (onSelect).
// TabButton ke andar vo function native onClick ko diya gaya hai.
// Jab button click hoga → App.jsx ka handleSelect call hoga.

// Conditional Rendering

// selectedTab ke hisaab se content change ho raha hai.
// React me common pattern: {condition && <JSX>}

// Example Flow 🔄

// User "About" button click karta hai → handleSelect("about") call hota hai.
// State update hoti hai → selectedTab = "about".
// React re-render karega → {selectedTab === "about" && <p>...} wala content render ho jaayega.

// Ye React ka golden pattern hai:
// 👉 "Event handling parent ke andar hota hai → state update hoti hai → UI automatically update ho jaata hai."

// Bhai 👌 tu abhi React ka most important pattern samajh raha hai → event ke sath custom data/arguments pass karna. Ye step bahut zaroori hai kyunki React khud se nahi samjhta ki hume "components", "jsx", "props", "state" wali value chahiye. Ye hume khud pass karni padti hai arrow function ke through.

// 🔹 Step 1: App.jsx me handleSelect parameter accept karna

//^ function App() {
//  ^ function handleSelect(selectedButton) {
//   ^  console.log("Selected:", selectedButton);
//  ^ }

//  ^ return (
//    ^ <menu>
//     ^  <TabButton onSelect={() => handleSelect("components")}>
//       ^  Components
//      ^ </TabButton>
//       ^<TabButton onSelect={() => handleSelect("jsx")}>
//      ^   JSX
//      ^ </TabButton>
//      ^ <TabButton onSelect={() => handleSelect("props")}>
//       ^  Props
//      ^ </TabButton>
//     ^  <TabButton onSelect={() => handleSelect("state")}>
//     ^    State
//    ^   </TabButton>
//   ^  </menu>
//  ^ );
// ^}
// 👉 Yahaan main onSelect ko ek arrow function de raha hoon, jisme handleSelect("components") manually call kar raha hoon.
// 👉 Ab jab button click hoga, tab React us arrow function ko call karega, aur vo aage handleSelect("components") execute karega.

// 🔹 Step 2: State use karke content change karna

// Ab hume bas ek state lagani hai jo store kare ki kaunsa tab select hua hai.

//^ import { useState } from "react";
// ^import TabButton from "./TabButton";

// ^export default function App() {
//   ^const [selectedTab, setSelectedTab] = useState("components");

//  ^ function handleSelect(selectedButton) {
//   ^  setSelectedTab(selectedButton); // yahi magic line hai
//  ^ }

//   ^return (
//     ^<div>
//      ^ <menu>
//         ^<TabButton onSelect={() => handleSelect("components")}>
//         ^  Components
//        ^ </TabButton>
//        ^ <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
//         ^<TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
//        ^ <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
//       ^</menu>

//      ^ <section>
//        ^ {selectedTab === "components" && <p>🔧 Components ka example content</p>}
//       ^  {selectedTab === "jsx" && <p>📝 JSX ka example content</p>}
//      ^   {selectedTab === "props" && <p>📦 Props ka example content</p>}
//     ^    {selectedTab === "state" && <p>⚡ State ka example content</p>}
//    ^   </section>
//   ^  </div>
//  ^ );
// ^}
// Kya ho raha hai yahaan:

// Arrow Function Trick

// onSelect={() => handleSelect("jsx")} likhne se hum control karte hain ki kaunsi value handleSelect ko milegi.
// Agar hum sirf handleSelect pass karte, toh sirf event object milta (aur hume chahiye "jsx" etc).

// State (useState)

// selectedTab ek variable hai jo React manage karta hai.
// Jab bhi tum setSelectedTab("jsx") call karte ho → React re-render karta hai aur naya content dikha deta hai.

// Conditional Rendering

// selectedTab === "jsx" && <p>...</p> ka matlab hai → agar tab "jsx" hai toh sirf uska content dikhao.

// 🔄 Flow Example:

// User ne "Props" button click kiya →
// Arrow function execute hota hai → handleSelect("props") call hota hai →

// setSelectedTab("props") hota hai →
// React re-render karke <p>📦 Props ka example content</p> dikha deta hai.
// Ab teri app bilkul ek mini tab system ban gayi hai React me 🎉
// Main tumhe isko step by step Hinglish mei samjhata hoon. Ye React ke ek important concept "State" ke start ka part hai.

// 🟢 Problem kya hai?

// Tumne ek tabContent naam ka normal variable banaya aur usme text rakha –
// let tabContent = "Please click a button";
// Aur jab tumne button click kiya toh tumne socha ki tabContent ko update karenge toh UI change ho jayega.
// Lekin jab tumne button dabaya toh UI update nahi hua, sirf console.log ka output aaya.

// 🟡 Aisa kyu hua?

// Jab React tumhare App Component ko pehli baar render karta hai, tab wo tabContent ki value "Please click a button" le leta hai aur UI bana deta hai.
// Jab tum button dabate ho, tab React dubara App Component function ko run nahi karta.
// Matlab React ko koi signal hi nahi mila ki App ko firse chalana hai aur UI update karna hai.
// Isiliye tumhara naya tabContent UI mei reflect nahi hua.

// 🔵 Important Baat

// 👉 React by default sirf ek baar Component ko chalata hai jab wo UI mei first time render hota hai.

// Jaise:

// App Component ek baar chalega.
// Uske andar jitne TabButton honge, wo utni baar chalenge.
// Lekin jab tum event (button click) karte ho, toh sirf uss event handler function ka code chalta hai, na ki pura Component dubara.

// 🟣 Example Logs

// Agar tum console.log("App rendering...") likho App ke andar aur console.log("TabButton rendering...") likho TabButton ke andar,
// toh tum dekhoge:
// Page load hone par:
// "App rendering..." ek baar print hoga.
// "TabButton rendering..." char baar print hoga (kyunki 4 buttons hain).
// Lekin button click par sirf event wala console chalega, component render wale nahi.

// 🔴 Solution kya hai?

// 👉 Tumhe React ko batana padega ki “Bhai UI update kar, mera data change ho gaya hai”.
// Aur ye kaam hota hai State ke through.

// React mei agar tumhe koi value change karni hai aur uske basis pe UI automatically update karwana hai,
// toh tumhe normal variable ki jagah state variable use karna padta hai.
// Aur state variable banane ke liye hum useState hook ka use karte hain.

// ⚡ Conclusion (Simple Words)

// Normal variable (let, var, const) → sirf memory mei change hota hai, UI update nahi hota.
// State variable (useState) → React ko signal deta hai ki “UI ko firse render karna hai”.

// 👉 Next step mei tum useState seekhoge, jaha tum dekhoge ki button click karne par UI properly update hoga.

// Ab tum React ka most important concept – State (useState) seekh rahe ho. Main tumhe isko bilkul easy Hinglish mei samjhata hoon step by step.

// 🔴 Problem Recap

// Normal variable (let tabContent = "Please click a button") use karne se UI update nahi ho raha tha.
// Kyunki React Component sirf ek baar run hota hai jab pehli baar render hota hai.
// Agar tum variable update karte ho toh React ko pata hi nahi chalta, isliye UI same dikhata hai.

// 🟢 Solution – useState

// React ne ek special function diya hai jiska naam hai useState.
// Ye ek Hook hai (React ke special functions jinka naam hamesha use se start hota hai).
// Hook ka kaam hota hai React ko batana: “Mere paas ek data hai jo change ho sakta hai, aur jab change hoga toh UI dobara update karna.”

// 🟡 Kaise use karte hain?

// Sabse pehle import karna padta hai:

// ^import { useState } from "react";

// Component function ke top level pe useState call karna hota hai.
// Example:
// ^const [selectedTopic, setSelectedTopic] = useState("Please click a button");

// ⚡ Yahan do cheezein milti hain:

// selectedTopic → Ye hai current value (UI mei jo dikhani hai).
// setSelectedTopic → Ye ek function hai jo value ko update karega aur React ko bolega ki UI dobara render kar.

// 🟣 Example Code

// ^import { useState } from "react";

// ^function App() {
//^ State banaya
// ^  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

//^ function handleSelect(selectedButton) {
// ^State update ki
//     ^setSelectedTopic(selectedButton);
//    ^ console.log("Selected topic:", selectedTopic);
//   ^}

//   ^return (
//     ^<div>
//       ^<button onClick={() => handleSelect("Components")}>Components</button>
//       ^<button onClick={() => handleSelect("JSX")}>JSX</button>
//      ^ <button onClick={() => handleSelect("Props")}>Props</button>
//     ^  <button onClick={() => handleSelect("State")}>State</button>

//    ^   <p>{selectedTopic}</p>
//   ^  </div>
//  ^ );
// ^}

// ^export default App;

// 🔵 Output Kya Hoga?

// Pehle UI dikhayega: Please click a button
// Jab button click karoge:
// Agar Components dabaya → UI mei "Components" show hoga.
// Agar JSX dabaya → UI mei "JSX" show hoga.
// UI automatic update hoga without page reload.

// 🟠 Important Note

// Agar tum console.log(selectedTopic) likhte ho immediately setSelectedTopic ke baad, toh tumhe purani value milegi.
// Kyun? Kyunki React pehle update ko schedule karta hai, fir component dobara run karke nayi value pass karta hai.
// Matlab nayi value sirf next render ke baad milegi.

// ✅ Ab tumne seekh liya ki useState ke bina interactive UI possible hi nahi hai. Ye React ka foundation hai.

// Perfect 👌 Tum ab ek aur core React concept seekh gaye ho → Conditional Rendering.
// Main tumhe phir se step-by-step aur easy Hinglish mei samjhata hoon.

// 🔴 Problem Recap

// Humne useState se selectedTopic manage karna seekh liya tha.
// Agar koi button press hota hai → UI update ho raha tha.
// Lekin jab page pehli baar load hota hai, hum kuch default text dikhana chahte hain → jaise "Please select a topic", na ki "Components".
// Yani hume different content dikhana hai, condition ke basis par.

// 🟢 Solution – Conditional Rendering

// React mei condition ke basis pe content dikhane ke 3 popular tareeke hote hain:

// 1. Ternary Operator ( ? : )

// Short and simple, dono cases handle kar sakte ho.

// ^<p>
//  ^ {!selectedTopic 
//   ^  ? "Please select a topic" 
//  ^   : `You selected: ${selectedTopic}`}
// ^</p>
// 👉 Agar selectedTopic empty hai → "Please select a topic"
// 👉 Agar koi value hai → "You selected: ..."

// 2. AND Operator ( && )

// Jab sirf ek case dikhana ho, dusra case mei kuch render na karna ho.

// ^{!selectedTopic && <p>Please select a topic</p>}

//^ {selectedTopic && (
// ^  <div>
//   ^  <h2>{selectedTopic}</h2>
//  ^   <p>Here’s some info about {selectedTopic}</p>
// ^  </div>
//^ )}

// 👉 Agar selectedTopic empty hai → fallback text show hoga.
// 👉 Agar value hai → content show hoga.

// ⚡ Ye React projects mei bahut zyada use hota hai because code short aur clean lagta hai.

// 3. Variable + If/Else
// Agar tumhe zyada complex logic likhna hai toh JSX ko ek variable mei store karke condition se overwrite kar sakte ho.

// ^ let tabContent = <p>Please select a topic</p>;

// ^if (selectedTopic) {
//  ^ tabContent = (
//    ^ <div>
//    ^   <h2>{selectedTopic}</h2>
//   ^    <p>Here’s some info about {selectedTopic}</p>
//  ^   </div>
// ^  );
//^ }

//^ return (
//  ^ <div>
//   ^  <h1>React Topics</h1>
//  ^   {tabContent}
// ^  </div>
//^ ); */}
//👉 Is approach se JSX lean aur readable banta hai.
//👉 Useful jab tumhare paas multiple complex cases ho.

// ^ 🟣 Example: Final App with Conditional Rendering 
//^  import { useState } from "react";

// ^function App() {
//   ^const [selectedTopic, setSelectedTopic] = useState("");

//   ^function handleSelect(topic) {
//    ^ setSelectedTopic(topic);
//   ^}

//   ^return (
//     ^<div>
//       ^<h1>React Topics</h1>

//       ^<button onClick={() => handleSelect("Components")}>Components</button>
//       ^<button onClick={() => handleSelect("JSX")}>JSX</button>
//       ^<button onClick={() => handleSelect("Props")}>Props</button>
//       ^<button onClick={() => handleSelect("State")}>State</button>

//      ^ {/* Conditional Rendering */}
//       ^{!selectedTopic && <p>Please select a topic</p>}

//      ^ {selectedTopic && (
//      ^   <div>
//      ^     <h2>{selectedTopic}</h2>
//     ^      <p>Some details about {selectedTopic}...</p>
//    ^     </div>
//   ^    )}
//  ^   </div>
// ^  );
//^ }

//^ export default App; */}

//🔵 Summary
//Ternary ( ? : ) → dono cases handle karna ho.
//AND ( && ) → sirf ek case show karna ho.

//Variable + If/Else → complex UI conditions handle karna ho.
//👉 Ye teen patterns tumko har React project mei milenge, aur tum situation ke hisaab se choose karoge.

//🔑 Transcript ka Matlab (Simple Hinglish mei):

//Abhi tak humne seekha tha ki React mei conditional rendering kaise karte hain (matlab content ko condition ke hisaab se dikhana/chupana).
//Ab teacher bol rahe hain ki styling ke baare mei baat karte hain – aur specially dynamic styling ke baare mei (jaise tab button select ho to uska rang alag ho jaye).

//👉 Example: Tumhare paas 4 buttons hain: Components, JSX, Props, State
//Agar tum Components wale pe click karte ho to wo button highlighted (alag style) hona chahiye.
//Abhi tak bas content change hota tha, lekin button highlight nahi hota tha.

//🟢 Class aur className ka Scene

//Normal HTML mei hum button ya div ko style karne ke liye class="active" likhte hain.
//Lekin React (JSX) mei class likhne ki jagah className likhna padta hai.
//Ye JSX ka rule hai.

//Example:
//^<button className="active">Click</button>

//🟢 Dynamically Class Lagana

//Hum chahte hain ki sirf selected button ke upar hi active class lage.
//Uske liye ek prop banayenge jiska naam hoga isSelected.
//Ye prop ek boolean value (true/false) rakhega.
//True → matlab button selected hai → active class lagao.
//False → matlab button selected nahi hai → koi class mat lagao.
//Iske liye React mei curly braces {} use karte hain, taki andar JavaScript likh saken.
//Aur condition ke liye hum ternary operator use karte hain:

//^className={ isSelected ? "active" : "" }

//Matlab:
//Agar isSelected true hai → className "active" set karo.
//Agar false hai → empty string "" set karo (kuch nahi lagao).

//🟢 Prop ko Pass Karna

//Abhi TabButton component bana hua hai.
//Usko use karte waqt App component se ye isSelected prop bhejna hoga.

//Example App.jsx:

//^<TabButton 
//^  isSelected={selectedTopic === "components"} 
//^</p>>
//^  Components
//^</TabButton>

//^<TabButton 
//^  isSelected={selectedTopic === "jsx"} 
//^</p>>
//^  JSX
//^</TabButton>

//^<TabButton 
//^  isSelected={selectedTopic === "props"} 
//^</p>>
//^  Props
//^</TabButton>

//^<TabButton 
//^  isSelected={selectedTopic === "state"} 
//^</p>>
//^  State
//^</TabButton>

//Yahaan selectedTopic ek state variable hai jisme store hota hai ki abhi konsa button select hua.
//Agar selectedTopic = "components" hai → pehle button ke isSelected mei true chala jayega → wo active class lega.
//Agar "jsx" hai → doosra button highlight hoga.
//Aur isi tarah sabka check hoga.

//🎯 Result:

//Jab app load hota hai → koi bhi selected nahi hota.
//Jab tum kisi button pe click karte ho → wo button highlight (active) ho jata hai.
//Matlab ab tumhe visual feedback milta hai ki kaunsa tab select hua hai.

//🔑 Transcript ka Matlab (Easy Hinglish):

//Abhi tak humne React ka ek chhota sa demo app banaya tha jisme “core concepts” (Components, JSX, Props, State) ko show kar rahe the.
//Lekin ek problem hai:

//👉 App component ke andar hum 4 baar manually likh rahe the:
//^<CoreConcept ... />
//^<CoreConcept ... />
//^<CoreConcept ... />
//^<CoreConcept ... />

//Matlab same code 4 baar repeat karna pad raha hai.
//Aur agar main ek concept ko comment out kar du ya delete kar du, to app toot sakta hai kyunki hum fir bhi 4 baar <CoreConcept /> likh chuke hain.

//🟢 Solution kya hai?

//Code repeat karne ki jagah hum chahte hain ki:
//Array ke andar jitne bhi concept items hain → utne hi <CoreConcept /> components automatically render ho jayein.
//Iske liye hum use karenge .map() method.

//🟢 Map Method ka Idea

//JavaScript mei .map() ek function hai jo ek array ko transform karta hai.
//Har ek item ko input leta hai
//Aur usko return karke ek naya array banata hai

//Example:

//^["Hello", "World"].map(item => <p>{item}</p>)

//Iska result hoga:

//^<p>Hello</p>
//^<p>World</p>
//Toh React JSX mei .map() ka use karke hum list of components bana sakte hain.

//🟢 Hamare App mei Map ka Use

//Humare paas ek coreConcepts array hai (jisme title, description, image data hai).
//Ab hum manually index access karne ke bajaye map use karenge:
//^<ul>
//^  {coreConcepts.map(conceptItem => (
//^    <CoreConcept 
// ^     key={conceptItem.title} 
// ^     title={conceptItem.title}
//  ^    description={conceptItem.description}
//  ^    image={conceptItem.image}
//   ^ />
//  ^))}
//^</ul>

//👉 Yahaan:

//.map() array ke har item ko lega (conceptItem)

//Aur usko <CoreConcept /> banake return karega
//Isse jitne items array mei hain → utne hi components banenge automatically

//🟢 Key Prop ka Scene

//Jab tum list banaate ho React mei, console mei ek warning aati hai:
//“Each child in a list should have a unique key prop.”
//Matlab React ko pata hona chahiye ki kaunsa item unique hai, taki jab list update ho to efficiently track kar sake.
//Isliye hum har <CoreConcept /> ko ek key prop denge:

//^key={conceptItem.title}

//Har title unique hai → to key ke liye sahi value hai.
//Ye prop component ke andar use nahi hoga, bas React apne kaam ke liye use karega.

//🎯 Final Result:

//Ab tum array mei jitne bhi items rakho → utne hi automatic <CoreConcept /> render ho jaayenge.
//Agar ek item delete karo → app break nahi hoga.
//Agar ek item add karo → wo bhi list mei aa jayega without extra code.
//Aur React ke warning ke liye key prop laga diya.

//⚡ Matlab ab tumne seekh liya:

//React mei .map() use karke dynamic list render karna.
//key prop ka importance.
//Repeated code ko avoid karna.

//🔑 React Essentials Recap (Hinglish)
//React = Components
//React basically components ka collection hai.
//Component ek function hota hai jo JSX code return karta hai.
//Component ka naam uppercase se start hona chahiye.
//Hum apne banaye components ko JSX mei custom HTML tag jaise use kar sakte hain.

//Example:
//^function MyButton() {
//^  return <button>Click me</button>;
//^}

//<MyButton />

//Props (Properties)
//Components ko data pass karne ka tarika hai.
//Tum apni marzi ke props bana sakte ho (title, isSelected, onSelect, etc).
//Props component function ke first parameter mei milte hain.
//Tum destructuring bhi kar sakte ho:

//^function MyComponent({title, image}) {
// ^ return <h2>{title}</h2>;
//^}

//React ek special children prop bhi deta hai → jo component ke opening aur closing tag ke beech wala content hota hai.
//Dynamic Content (Curly Braces {})
//JSX mei curly braces lagakar tum JavaScript values/output use kar sakte ho.

//Example:
//^<p>{2 + 2}</p>   // Output: 4
//^<h1>{props.title}</h1>

//Events Handling
//React mei event handlers HTML jaisa hi hote hain but camelCase mei likhne padte hain (onClick, onChange).
//Tum apne custom components ko bhi event functions props ke through pass kar sakte ho.

//Example:
//^function TabButton({onSelect}) {
//^  return <button onClick={onSelect}>Click</button>;
//^}

//State (useState Hook)

//Agar tumhe UI update karna ho jab koi value change ho → to tumhe state use karni padti hai.
//useState tumhe ek state variable aur ek update function deta hai.
//Jab state change hoti hai → React component ko dobara execute karta hai aur UI ko update karta hai.

//Example:
//^const [count, setCount] = useState(0);

//^<button onClick={() => setCount(count + 1)}>{count}</button>

//Conditional Rendering
//Tum alag-alag tariko se content conditionally render kar sakte ho:
//if statement + variable
//ternary operator (condition ? A : B)
//logical AND (condition && A)

//Example:
//^{isLoggedIn ? <p>Welcome!</p> : <p>Please login</p>}

//Lists and Keys
//Arrays ko JSX mei directly map karke render kar sakte ho.
//Har item ke liye ek unique key prop dena zaroori hai taki React efficiently update kar sake.

//Example:
//^const items = ["Apple", "Banana", "Mango"];

//^</p>{items.map(item => <li key={item}>{item}</li>)}

// 🎯 Tumne Ab Tak Kya Seekh Liya?

// Component banana aur use karna
// Props pass karna (normal + children)
// JSX mei curly braces se dynamic values dikhana
// Event handling karna (onClick etc.)
// State (useState) ke through UI update karna
// Conditional rendering (if, ternary, &&)
// Lists ko .map() ke saath render karna + key prop use karna

// 💡 Matlab ab tum React ke fundamentals master kar chuke ho ✅
// Ab tum basic React apps bana sakte ho (jaise todo app, counter, tabs).


// """
// 👉 Ab batao, kya main tumhe sabse pehle React Components detail mei Hinglish mei explain karun with example?
// 👉Kya tum chahte ho main abhi tumhe ek first React component ka code example bana ke Hinglish mei samjhau (step by step)?
// 👉 Kya tum chahte ho main tumhe abhi ek step-by-step guide banaun ki pehla React Component code mei kaise likhna hai aur usko kaise browser mei dekhna hai?
// 👉 Ab batao, kya main tumhe abhi step-by-step code likh ke dikhau ki apna pehla custom React Component (jaise ek "Hello" ya "Card" component) kaise banate hain aur use kaise karte hain?

// Kya tum chahte ho ki mai tumhare liye iska full working App.js code likhkar dikhau jisme Header component bana ho aur use bhi kiya ho?

// Chalo ab next step main tumhe ek chhota practice task de deta hoon (aur solution bhi dikhaunga):
// Header.jsx ko alag file bana ke App.jsx mein import karo (jaise upar dikhaya).
// Browser mein Inspect kar ke dekho <div id="root"> ke andar tumhara <header> aa gaya hai ya nahi.
// Agar chaho main turant yahi code ko thoda aur simplify karke tumhare liye ready kar doon aur explain kar doon ki console/inspect mein kya dikhna chahiye — batao, main seedha Header.jsx aur App.jsx ka final code copy-paste ready bana ke deta hoon. 😊

// Kya tum chahte ho ki main tumhare liye practice task banaun jisme tum khud dynamic data (like random image ya random color) dikhane ki try karo?

// 👉 Ab tumhe ek chhota sa doubt clear karna hoga:
// Tum chahte ho main tumhe practice task banaun jisme tum alag-alag images (3-4) import karke random image dikhane ka logic lagao (using curly braces + random number)?

// 👉 Ab ek sawaal tumhare liye:
// Kya tum chahte ho main tumhe practice task banaun jisme tum ek CoreConcept component banao aur usme 3 alag props pass karke ek list of 3 items show karo?

// 👉 Ab tumhare liye ek practice task:
// data.js file mein 4 core concepts diye gaye hain. Tum ek map() loop use karke saare items automatically render karo instead of manually writing 4 times.

// Kya chahte ho main uska code bhi bana kar dikhaun?

// Agar chaho, main tumhare liye final folder structure aur sab files ke paths + imports ka diagram bana doon, jisse clearly samajh aa jaaye ki React project structured kaise hota hai.

// Kya main wo bana doon?

// Agar chaho, main tumhare liye React ke liye best practices ka ek complete checklist bana doon jisme:
// Folder structure
// Component + CSS organization
// Props aur dynamic data
// Image handling
// Reusable patterns
// Isse tumhare projects professional aur clean ban jaayenge.
// Kya main wo bana doon?
// Ab batao, kya main tumhe agla step samjhau jisme button click hone par alag-alag example show hoga? (Ye hoga React ke State aur Event Handling se).
// Kya tum chahte ho ki main abhi agla step bhi samjhaun — jaise click karne pe alag-alag content show kaise karte hain (state ka use karke)?
// Kya tu chaahta hai main ab isko aur detail me samjhau ki state (useState) kaise kaam karta hai internally React ke andar?
// 👉 Ab bata, kya tu chaahta hai main tujhe samjhau ki ye useState ke andar React internally kaise decide karta hai ki re-render kab karna hai?
// Kya tum chahte ho main abhi tumhe useState ka example code bana ke samjhau, ki kaise tabContent ko state banake UI automatically update hoga?
// 👉 Kya tum chahte ho main tumhe ek visual diagram bana ke samjhau ki useState ke andar actually kya process hota hai (flow chart style)?
// Kya tum chahte ho ki main tumhe ek real-life analogy se samjhau (jaise cinema hall mei ticket ho toh movie dikhana, warna “please buy ticket” text dikhana) taki tumhe conditional rendering aur crystal clear samajh aa jaye?
// 👉 Ab tumhe samajh aaya kya ki isSelected prop + className dynamically kaise kaam karte hain?
// Chaho to main tumhe iska chhota sa demo code likh ke de du taaki tum React mei try kar sako.

// Kya tumhe code bhi chahiye?
// 👉 Tum chaho to main tumhe iska full example code likh kar dikhau jo run bhi ho sake React mei?

// 👉 Kya tum chahte ho ki main tumhe ek mini React project idea du (jaise TODO app ya Counter) jisme ye sab concepts ek sath practice ho jaye?
