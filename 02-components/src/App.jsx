// import React from 'react'



// const App = () => {
//   return (
//     <div>App</div>
//   )
// }
// export default App 

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <div className='card'>
//         <h1>Sarthak Sharma</h1>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, illum?</p>
//       </div>
//       <div className='card'>
//         <h1>Sarthak Sharma</h1>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, illum?</p>
//       </div> 
//     </div>
//   )
// }
// export default App 


// import React from 'react'
// import card from './components/card'
// const App = () => {

//   const user = 'harsh'
//   const age = 89
//   return (
//     <div>
//       <h1>Hello, Guys I am {user}</h1>
//       <h2>and I am {age} year old</h2>
//      {/* {card()} */}
//     </div>
//   )
// }
// export default App 

// import React from 'react'
// import Navbar from './components/Navbar'
// import Card from './components/card'
// const App = () => {
// return (
//     <div>
//     <Navbar/>
//     <Navbar/>
//     <Navbar/>
//      <Card/>    
//      <Card/>    
//      <Card/>    
//     </div>
//   )
// }
// export default App 


// import React from 'react'

// const App = () => {
//   return(
//     <div className='parent' >
//       <div className="card">
//         <img src="https://images.unsplash.com/photo-1751097006268-ae4601fcb117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1059" alt="" />
//         <h1>Sarthak Sharma</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         <button>View Profile</button>
//       </div>
//       <div className="card">
//         <img src="https://images.unsplash.com/photo-1751097006268-ae4601fcb117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1059" alt="" />
//         <h1>Sarthak Sharma</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         <button>View Profile</button>
//       </div>
//       </div>
//   )                         
// }                         

// export default App

// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   return(
//     <div className='parent' >
//       <Card user = 'aman' age={18} img='https://images.unsplash.com/photo-1751097006268-ae4601fcb117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1059'/>
//       <Card user = 'sarthak' age={34} img='https://images.unsplash.com/photo-1755655282628-633964d95570?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=713'/>
//       </div>
//   )                         
// }                         

// export default App


// import React from 'react'
// import Card from './components/card'
// const App = () => {
//   return (
//     <div className='parent'>
      
//       <Card/>
//       <Card/>
//       <Card/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import User from './components/User'
// const App = () => {
// // const arr = [10,20,30,40];
// const obj = [{
//     user:'Sarthak',
//     age:30
//   },
//   {
//     user:'Harsh',
//     age:36
//   },
//   {
//     user:'Aman',
//     age:20
//   }
// ];
//   // console.log(obj);
//   obj.map(function(elem){
//     console.log(elem);
    
//   })
//   return (
//     <div className='parent'>
//       {/* {arr.map(function(elem){
//         return ` ${elem/2} `
//       })} */}
//       {/* <User name = {arr[1]}/> */}
//       {/* <User name = {arr[0]}/> */}
//     </div>
//   )
// }

// export default App



import Card from './components/Card'
const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "3 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "2 months ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.pngall.com/wp-content/uploads/13/Adobe-Logo.png",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Automation Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "1 month ago",
    post: "AI Research Assistant",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Remote"
  }
];
  console.log(jobOpenings);
  
  // console.log(obj);
  // jobOpenings.map(function(elem){
  //   console.log(elem);
    
  // })
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,ix){
        return <div>

          <Card key={ix} company={elem.companyName} datePosted={elem.datePosted} post={elem.post} brandLogo={elem.brandLogo} pay={elem.pay} tag1={elem.tag1} tag2={elem.tag2}/>
        </div>
        // return <h1>{elem.companyName}</h1>
      })}
      
    </div>
  )
}

export default App
