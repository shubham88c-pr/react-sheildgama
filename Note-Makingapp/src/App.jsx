import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setdetails] = useState('')

  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(details);

    const copyTask = [...task];
    
    copyTask.push({title,details})

    setTask(copyTask)

    setTitle('')
    setdetails('')
  }
  
  const deleteNote = (idx)=>{
    // console.log("Note deleted");
  const copyTask = [...task];
  copyTask.splice(idx,1)
  setTask(copyTask)
    
  }

  return (
    <div className='h-screen lg:flex  bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex  lg:w-1/2 items-start gap-4 p-10'>
        <div className='flex gap-4 w-1/2 items-start flex-col'>
          <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>
          {/* PEHLA INPUT FOR HEADING */}
          <input value={title} onChange={(e) => {
            // console.log("hello");
            setTitle(e.target.value)

          }} type="text" className='px-5 py-2 w-full border-2 outline-none rounded font-medium' placeholder='Enter Notes Heading' />
          {/* DETAILED VALA INPUT  */}
          <textarea value={details} onChange={(e) => {
            setdetails(e.target.value)
          }} type="text" className='px-5 h-32 w-full py-2 border-2 rounded flex items-start flex-row outline-none font-medium' placeholder='Write Details' />
          <button className='bg-white active:scale-95 font-medium w-full text-black px-5 py-2 rounded outline-none '>Add Notes</button>
        </div>
      </form>
      <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black py-9 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
            <div>
               <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
            <p className='mt-3 leading-tight font-xs font-semibold text-gray-500'>{elem.details}</p>
            </div>
            <button onClick={()=>{deleteNote(idx)}} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            
          </div> 
        })}




      </div>
    </div>
    </div >
  )
}

export default App