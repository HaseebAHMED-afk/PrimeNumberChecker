import { Button } from '@material-ui/core';
import TextField  from '@material-ui/core/TextField';
import React, { useState } from 'react';
import './App.css';

function App() {

  let [number , setNumber] = useState<Number>(0)

  const handleChange = (e : any) =>{
    let num = Number(e.target.value)

    setNumber(num)
    
  }

  const handleSubmit = () =>{
    console.log(number);
  }
  
  return (
    <div className="App">
     <div className="input-section">
       <TextField variant='filled' value={number} onChange={handleChange} color='secondary' label='Enter a number' className='input' />
       <Button variant='contained' color='secondary' className='input' onClick={handleSubmit} >Check</Button>
     </div>
     <div className="result">
       <h1 className='res-tag' >PRIME</h1>
     </div>
    </div>
  );
}

export default App;
