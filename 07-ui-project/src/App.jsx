import React from 'react'
import Section1  from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
    intro:'',
    color:'royalblue',
    tag:'Satisfied'
  },
  {
    img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
    intro:'',
    color:'lightseagreen',
    tag:'Underserved'

  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661591155902-e0d1fe1523fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500',
    intro:'',
    color:'black',
    tag:'Underbanked'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
    intro:'',
    color:'pink',
    tag:'Underwear'
  }
  ]
  return (
    <div>
     <Section1 users={users}/>
     <Section2/>
    </div>
  )
}

export default App