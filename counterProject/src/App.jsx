import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () =>{
    if(count<20){
      setCount(count+1)
    }
  }

  const subtractValue=() =>{
    if(count>0)
    setCount(count-1)
  }

  const resetValue = () =>{
    setCount(0)
  }

  return (
    <>
     <h1>Counter Project</h1>
     <h2>Counter: {count}</h2>
     <button id='add' onClick={addValue}>Add Value</button>
     <button id='decr' onClick={subtractValue}>Decrease Value</button> <br />
     <button id='reset' onClick={resetValue}>Reset</button>
    </>
  )
}
export default App
