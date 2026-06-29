import { useState } from 'react'
import './App.css'
import User from './User'
import Wrapper from './Wrapper' // This looks for Wrapper.jsx in the same folder

function App() {

  const[val,setVal] = useState("Anil Sidhu")
  return (
    <div>
      <h1>Get Input Field Value</h1>
      {/* <input type='text' onChange={(event) => alert(event.target.value)}placeholder='Enter User Name'/> */}
      
      <input type='text' value={val} onChange={(event) => setVal(event.target.value)} placeholder='Enter User Name'/>
    
      <h1>{val}</h1>
      <button onClick={() => setVal("")}>Clear Value</button>
    </div>
  )
}

export default App; 
