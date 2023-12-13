import React, { useState } from 'react'

const InputArea = () => {
  const [input,setinput] = useState()
  const onChange = (event) => {
    setinput(event.target.value)

  }
  return (
    <div>
      <form>
        <input type='text' onChange={onchange} value={input} className='border-2 border-black'></input>
        <button className='bg-black text-white p-1'>add</button>
      </form>
    </div>
  )
}

export default InputArea