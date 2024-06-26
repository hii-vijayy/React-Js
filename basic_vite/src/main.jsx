import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// all the import statement are imported as required in the project. The topmost 2 are necessary for the web-application

function Myapp(){
    return(
        <h1>This example of function in the main.jsx file</h1>
    )
}

// this above is an example of a function in the main.jsx file which is possible

ReactDOM.createRoot(document.getElementById('root')).render(
    <> {/* by using this empty braces we have multiple outputs */ }
    <App />  {/* here we are calling the App (H1 in it) which was returned in the App.jsx file*/}
    <Myapp />
    </>
)
