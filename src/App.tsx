import { Button } from '@material-ui/core';
import TextField  from '@material-ui/core/TextField';
import React from 'react';
import './App.css';

function App() {

  
  return (
    <div className="App">
     <div className="input-section">
       <TextField variant='filled' color='secondary' label='Enter a number' className='input' />
       <Button variant='contained' color='secondary' className='input'>Check</Button>
     </div>
     <div className="result">
       <h1 className='res-tag' >PRIME</h1>
     </div>
    </div>
  );
}

export default App;
