import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  // function getData(){
  //   console.log("Data aa gaya");

  // }

  // function getData(){
  //   const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);

  // }

  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);

  // }

  // const getData = async()=>{
  // const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  // const response = await fetch('https://jsonplaceholder.typicode.com/users')

  // const data = await response.json()
  // console.log(data);


  // console.log(response);

  // }


  // localStorage.setItem('user','sarthak')

  // const user = localStorage.getItem('user')
  // console.log(user)

  // localStorage.setItem('age','18')

  // const age = localStorage.getItem('age')
  // console.log(age);

  // localStorage.removeItem('user')

  // const user = {
  //   username :'sarthak',
  //   age:'69',
  //   city:'Bhopal'
  // }
  //  console.log(user);
  //  localStorage.setItem('user',JSON.stringify(user))

  // const user = localStorage.getItem('user')
  // const user = JSON.parse(localStorage.getItem('user'))

  // console.log(typeof(user));
  // console.log(user);

  // const getData = async()=>{
  // const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
  // const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')

  // console.log(response.data);
  // console.log(data);

  // }

  const [data, setData] = useState([])
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')

    setData(response.data)
    // console.log(response.data);

  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        
        {data.map(function (elem, idx) {

          return <h3>Hello {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App