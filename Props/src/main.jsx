import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/Card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render
(
    <>
    <App />
    <Card  button="Click Me"/> {/* this here is an exaple of the component with custom value changed according to user. This property is called Props */}
    <Card  button="View More"/>  
    </>
)
