import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import '/Users/vijaykumar/Programming/React-Js/ReactRouterProject/src/App.css'

function Header() {
    return (
    <>
        <div className="container">
            <div className="main">
                <div id="logo">
                    <Link to="/">
                        <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="Logo"/>
                    </Link>
                </div>
                <div id="head">
                    <NavLink  to="/"
                    className={({ isActive }) => (isActive ? "active home" : "home")} style={({ isActive }) => ({ color: isActive ? 'rgb(244, 95, 41)' : 'rgb(65, 65, 65)' })}>Home
                    </NavLink>
                    <NavLink to="/about"
                    className={({ isActive }) => (isActive ? "active about" : "about")} style={({ isActive }) => ({ color: isActive ? 'rgb(244, 95, 41)' : 'rgb(65, 65, 65)' })}>About
                    </NavLink>
                    <NavLink to="contact"
                    className={({ isActive }) => (isActive ? "active contact" : "contact")} style={({ isActive }) => ({ color: isActive ? 'rgb(244, 95, 41)' : 'rgb(65, 65, 65)' })}>Contact Us
                    
                    </NavLink>
                </div>
                <div id="button">
                    <button id='btn1'>Login</button>
                    <button id='btn2'>GetStarted</button>
                </div>
            </div>
        </div>
        <hr />
    </>
    );
}

export default Header;
