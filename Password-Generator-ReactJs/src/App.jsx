// this below is a code for a Random Password Generator

import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

// the useState hook is used to change the state of the elements
// the useCallback hook is used to store the valuee in the cache memory to change accordingly if needed and it is used with a variable
// the useEffect hook is used to run a function everytime there's a change in the state or the function passed to it is called
// the useRef hook is used to take reference from the variables

function App() {
  const [length, setLength] = useState(8) // this is used to adjust the length of the password
  const [number,setNumber] = useState(false) // thsi is used to included number or not
  const [character,setCharacter] = useState(false) // this is used to include character or not 
  const [password,setpassword] = useState("") // this is where the password is changed(randomized)


  //this below is the function that will generate the password using the useCallback hook of the React
  const passwordGenerator=useCallback(() =>{
    let pass="" // this will hold the password
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // this is the character used to generate passsword

    if(number){
      str+="0123456789" // if the user wants to include numbe to the password then these are added
    }

    if(character){
      str+=".,{}@$*()/^#!" // if the user wants to add character in the password then these will be added
    }

    //this below is the loop that will generate the password of the required lenght by the user
    for (let i = 1; i <=length; i++){
      const char=Math.floor(Math.random()*str.length+1) // used to select the random index from all the values of the str
      pass+=str.charAt(char)  // this will hold the value at that randomly selected index
    }

    setpassword(pass) // this will give the password to this dependecny

  }, [length,number,character,setpassword]) // these are the dependencies used here to generate the password

  useEffect(()=>{passwordGenerator()}, [length,number,character,passwordGenerator]) // this is used to call the function whenever anything changes and even if we refreesh the page anytime

  const passwordref=useRef(null) // so this is a reference variable that will get reference from the others

  const copyPassword=useCallback(()=> {
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)},[password]) // this function is used to copy password to clipboard and select the password generated

  return (
    <>
       <div className="main">
        <div className="box">
          <h1 id='#heading'> Password Generator{/* this is the heading */}</h1>
          <div className="container">
            <input id='pass' type="text"
            placeholder='Passowrd'
            value={password} readOnly ref={passwordref}/> {/* this is the input field to display the result of the passsowrd generated but it is set to readonly so it can only be read also a reference variable is also added to share its reference to select the password */}
            <button id='copy' onClick={copyPassword}>Copy</button> {/* this button is used to copy the generated password to clipboard */}
          </div>
        </div>
        <div id='prop'>
          <input type="range" min={8} max={25} value={length} onChange={(e) => setLength(e.target.value)}/> <label> Length:{length}</label> {/* this is the range slider to set the deasired length of the password needed */}

          <input type="checkbox" defaultChecked={setNumber} id='number' onChange={()=>setNumber((prev) => !prev)}/> <label> Number</label> {/* this is used if we want number in our password or not */}

          <input type="checkbox" defaultChecked={setCharacter} id='character' onChange={()=>setCharacter((prev) => !prev)}/> <label> Character</label> {/* this is used if want special character in our password or not */}
        </div>
       </div>
    </>
  )
}

export default App
