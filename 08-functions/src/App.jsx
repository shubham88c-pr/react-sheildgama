// import React from 'react'

// const App = () => {
//   // function btnClicked(){
//   //   console.log('button is clicked');
    
//   // }
//   // function mouseEnter(){
//   //   console.log("Mouse Entered");
    
//   // }

//   // function inputChanging(){
//   //   console.log('User is Typing');
    
//   // }

//   function inputChanging(val){
//     console.log(val);
    
//   }
//   return (
//     <div>
//       {/* <h1>Hello,Sarthak</h1> */}
//       {/* <button onMouseEnter={mouseEnter} onDoubleClick={btnClicked}>Change User</button> */}
//       {/* <button onClick={function(){
//         console.log("button clicked");
        
//       }}>Change User</button> */}
//       {/* <button onClick={()=>{
//         console.log("button clicked");
        
//       }}>Change User</button> */}
    
//     {/* <input onChange={inputChanging} type="text" placeholder="Enter Name" /> */}
//     {/* <input onChange={function(elem){
//       console.log(elem.target.value);
      
//     }} type="text" placeholder="Enter Name" /> */}
//     <input onChange={function(elem){
//       inputChanging(elem.target.value);
      
//     }} type="text" placeholder="Enter Name" />
    
    


//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <div onMouseMove={(elem)=>{
//         console.log(elem);
        
//       }} className='box'></div>
//     </div>
//   )
// }

// export default App 

import React from 'react'


const App = () => {
  
  const pageScrolling = (elem)=>{
    // console.log('page scrolling..... at speed',elem);
    if(elem>0){
      console.log('seedha scrolling');
      
    }
    else{
      console.log('ulta scrolling');
      
    }
  }

  return (
    // <div onWheel={pageScrolling}>
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY)
    }} >
     <div className="page1"></div>
     <div className="page2"></div>
     <div className="page3"></div>
    </div>
  )
}

export default App 