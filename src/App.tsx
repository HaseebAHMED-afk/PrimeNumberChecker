import { Button } from '@material-ui/core';
import TextField  from '@material-ui/core/TextField';
import { useState } from 'react';
import './App.css';
import CheckPrime from './Utils/CheckPrime'

function App() {

  let [number , setNumber] = useState<Number>(0)
  let [flag , setFlag] = useState(false)

  const handleChange = (e : any) =>{
    let num = Number(e.target.value)

    setNumber(num)
    
  }

  const handleSubmit = () =>{

    setFlag(CheckPrime(number));
    setNumber(0)
  }
  
  return (
    <div className="App">
     <div className="input-section">
       <TextField variant='filled' value={number} onChange={handleChange} color='secondary' label='Enter a number' className='input' />
       <Button variant='contained' color='secondary' className='input' onClick={handleSubmit} >Check</Button>
     </div>
     <div className="result">
       <h1 className='res-tag' >{
         flag ? 'PRIME' : 'NON-PRIME'
       }</h1>
     </div>
    </div>
  );
}

export default App;
