import TextField  from '@material-ui/core/TextField';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="input-section">
       <TextField variant='filled' color='secondary' label='Enter a number' className='input' />
     </div>
    </div>
  );
}

export default App;
