import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// these all above are imported in as requirement but these two above basic and required for web-application

const root = ReactDOM.createRoot(document.getElementById('root')); // here we are passing the reference of the #root id to the root element.
root.render(
    <App/> // this is where we are fetching the H1 tag from the App.js file 
);