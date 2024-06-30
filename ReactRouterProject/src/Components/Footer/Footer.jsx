import React from 'react';
import {Link} from 'react-router-dom';
import '/Users/vijaykumar/Programming/React-Js/ReactRouterProject/src/App.css'

function Footer() {
    return (
        <>
        {/* <hr /> */}
        <div className="container">
            <div className="footerMain">
                <div className="footer-logo">
                    <Link to="/"><img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="Logo"/></Link>
                </div>
                <div className="footerList">
                    <ul>RESOURCES
                        <li>Home</li>
                        <li>About</li>
                    </ul>

                    <ul>FOLLOW US
                        <li>GitHub</li>
                        <li>Discord</li>
                    </ul>

                    <ul>LEGAL
                        <li>Privacy Pilicy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
            <div id='last'>
                <div id="last-text">
                <p> &copy; 2024vijaykmar &nbsp; All Rights Reserved</p>
                </div>
                <div id="connect">
                    <i className="fa-brands fa-facebook"></i> 
                    <i className="fa-brands fa-discord"></i> 
                    <i className="fa-brands fa-twitter"></i> 
                    <i className="fa-brands fa-github"></i> 
                    <i className="fa-solid fa-globe"></i> 
                </div>
            </div>
        </div>
    </>
    );
}

export default Footer;
