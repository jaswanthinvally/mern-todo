import React, { useState } from 'react';

const InputArea = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const handleClick = () => {
    if (input.trim() !== "") {
      setData([...data, input]);
      setInput(""); // Clear the input field after adding the note
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleRemove = (indexToRemove) => {
    setData(data.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
    <div>
      <h1 className='text-center font-bold pb-3'>Take you notes</h1>
    </div>
      <div className='flex flex-row justify-center'>
        <input 
          className='p-2 border-red-300 border-2 rounded-full me-3' 
          placeholder='Enter the note'
          value={input} // Bind the input value to the state
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress} // Listen for the Enter key press
        />
        <button 
          className='bg-gradient-to-r from-red-500 to-indigo-600 rounded-full p-2 text-white font-bold'
          onClick={handleClick}
        >
          Add Now
        </button>
      </div>

      <div className=' flex flex-col justify-center pt-3'>
        {data.map((note, index) => (
          <div key={index} className='flex justify-center items-center p-1'>
            <h1 className='me-4'>{note}</h1>
            <button 
              className='bg-red-500 text-white rounded-full p-2 ml-2'
              onClick={() => handleRemove(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputArea;
