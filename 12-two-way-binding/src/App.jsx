import React, { useState } from 'react'

const App = () => {
  
  const [title, setTitle] = useState('')
  const submitHandler= (e)=>{
  e.preventDefault();
  console.log('Form Submitted',title);
  setTitle('')
  
 } 

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input onChange={(e)=>{
          // console.log('inputing......');
          setTitle(e.target.value);
          
        }} value = {title} type="text" placeholder="Enter your name"/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

 