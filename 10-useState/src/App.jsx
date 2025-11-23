// import React from 'react'

// import { useState } from "react"

// const App = () => {
//   let a = 20;
  
//   function changeA(){
//     a = 30
//   }

//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={changeA}>Click</button>
//     </div>
//   )
// }

// export default App





// import React, { useState } from 'react'

// const App = () => {
  
//   const [num, setnum] = useState(10)
//   const [username,setUsername] = useState('sarthak')
//   const [users,setUsers] = useState([10,20,30])
//   function changeNum(){
//     setnum(30)
//     setUsername('Aman')
//     setUsers([30,40,50])
//   }
//   return (
//     <div>
//      <h1>value of num is {num}<br/>{users}<br/>Value of user is {username} <br/> </h1>
//      <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState(0)

//   function increaseNum(){
//        setnum(num+1)
//   }
//   function decreaseNum(){
//        setnum(num-1)
//   }
//   function JumpbyNum(){
//        setnum(num+5)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={increaseNum}>increase</button>
//       <button onClick={decreaseNum}>decrease</button>
//       <button onClick={JumpbyNum}>jump by 5</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
  
//   const [num, setNum] = useState({user:'Sarthak',age:20})
//   const btnClicked = ()=>{
//     const newNum = {...num};
//     newNum.user = 'Aman'
//     newNum.age = 29
//     setNum(newNum)
    
    // setNum(num)
    // console.log(num);
    // setNum(num+5)
    // console.log(num.user);
    // console.log(num.age);
    
//   }
//   return (
//     <div>
//       <h1>{num.user},{num.age}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
  
  // const [num,setNum] = useState([10,20,30])
  // const [num,setNum] = useState({user:'rishi',age:17})

  // const btnClicked = ()=>{
    // const newNum = [...num]
    // newNum.push(99)
    // setNum(newNum)
    
    // setNum(prev=>([10,20,20,40]))
//      setNum(prev=>({...prev,age:50}))
//   }
  
//   return (
//     <div>
//       <h1>{num.user},{num.age}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  
  
  const [num,setNum] = useState(10)

  const btnClicked = ()=>{
  
    //  setNum(prev=>(prev+1))
    //  console.log(num);     
    //  setNum(prev=>(prev+1))
    //  console.log(num);     
    //  setNum(prev=>(prev+1))
    //  console.log(num);     
    setNum(num+1)
    console.log(num);
    setNum(num+1)
    console.log(num);
    setNum(num+1)
    console.log(num);

  }
  
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App