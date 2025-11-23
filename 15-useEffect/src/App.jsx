import React, { useEffect } from 'react'
import  { useState } from 'react'

const App = () => {
  // function random(){
  //   const a = Math.random()
    // console.log("hello");
  //   console.log(a*100);
  // }
  // random()
  // const [num, setNum] = useState(0)
  // useEffect(function(){
  //     console.log("use effect is running....");
      
  // })
  const [a,setA] = useState(0)
  const [b,setB] = useState(0)
  
  function aChanging(){
    console.log('A ki value change ho gayi');  
  }
  function bChanging(){
    console.log('B ki value change ho gayi');
  }

  useEffect(function(){
    // console.log("use effect is running....");
    aChanging()
  },[a])
  useEffect(function(){
    // console.log("use effect is running....");
    bChanging()
  },[b])
  return (
    // <div>
    //    <h1>{num}</h1>
    //    <button onClick={()=>{
    //     setNum(10)
          //  setNum(num +1)
          // setNum2(Num2+10)
    //    }}>Click</button>
    // </div>
    // <div>

    // <h1>value of num is {num}</h1>
    // <h1>value of num2 is {num2}</h1>
    // <button onClick={()=>{
    //   setNum(num+1)
    // }}>Click</button>
    // </div>
  <div>
    <h1>A is {a}</h1>
    <h1>B is {b}</h1>
    <button onClick={()=>{
      setA(a+1)
    }}>Change A</button>
    <button onClick={()=>{
      setB(b-1)
    }}>Change B</button>
  </div>
  )
}

export default App
