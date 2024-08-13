import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
    const [username , setUsername]= useState('') //this is used to set the username of the user 
    const [password , setPassword]= useState('') // this is used to set the password of the user

    const {setUser} = useContext(UserContext) // fetching the values from the UserContext into setUser to display

    // this is used to pass and display the username and password everytime the submit button is clicked
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='Username' value={username} onChange={(e)=> setUsername(e.target.value)}/>  {/* this is used to take input of the username and passing it so that it can be displayed */}
            {" "}
            <input type="password" placeholder="Passowrd" value={password} onChange={(e)=> setPassword(e.target.value)}/> {/* taking the passowrd as input and displaying it */}
            {" "}
            <button onClick={handleSubmit}>Submit</button> {/* submit button to submit all the details and then display the final username and password entered */}
        </div>
    );
}

export default Login;
