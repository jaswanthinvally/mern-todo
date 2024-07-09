import React, { useState } from 'react'

const InputArea = () => {

  const[input,Setinput] = useState("")
  const[data,Setdata] = useState([])


  const handleclick = () => {
    if(input === "") {
      alert("please enter some data 😊")

    }
    Setdata([...data,input])
    Setinput("")


  }

  return (
    <div>
      <div className='flex flex-row justify-center'>
        <input 
        className='p-2 border-red-300 border-2 rounded-full me-3' 
        placeholder='enter the note'
        onChange={(e) => Setinput(e.target.value)
        }
         />
        <button 
        className='bg-gradient-to-r from-red-500 to-indigo-600 rounded-full p-2 text-white font-bold'
        onClick={handleclick}
        >add now</button>
      </div>

    </div>
  )
}

export default InputArea