import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact'


// this below is the example of the od the routing process where the page is not refreshed again and again and links are visited
function App() {
    return (    <>
          <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
             <Footer/>
        </Router> 
        </>
    );
}

export default App;
