import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("orange")

  return (
    <>
    <div className="container" style={{backgroundColor:color}}>
      <div id="buttons">
        <button id='red' onClick={() => setColor("red")}>Red</button>
        <button id='green' onClick={() => setColor("green")}>Green</button>
        <button id='blue' onClick={() => setColor("blue")}>Blue</button>
        <button id='olive' onClick={() => setColor("olive")}>Olive</button>
        <button id='grey' onClick={() => setColor("grey")}>Grey</button>
        <button id='yellow' onClick={() => setColor("yellow")}>Yellow</button>
        <button id='pink' onClick={() => setColor("pink")}>Pink</button>
        <button id='purple' onClick={() => setColor("purple")}>Pruple</button>
        <button id='violet' onClick={() => setColor("violet")}>violet</button>
        <button id='white' onClick={() => setColor("white")}>White</button>
        <button id='black' onClick={() => setColor("black")}>Balck</button>
      </div>
    </div>
    </>
  )
}

export default App
