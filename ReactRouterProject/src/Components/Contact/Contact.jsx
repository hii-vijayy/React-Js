import React from 'react';
import '/Users/vijaykumar/Programming/React-Js/ReactRouterProject/src/App.css'

function Contact() {
    return (
        <>
        <hr />
            <div className="container">
                <div className="contactMain">
                    <div id="contactCnt-1">
                        <div id="heading-1">
                            <h1>Get in Touch:</h1>
                            <p>Fill the form to start a conversation</p>
                        </div>
                        <div id="body-1">
                        <p><i className='fa-solid fa-location-dot'></i> Acme Inc, Street, State, Postal Code</p>
                        <p><i className='fa-solid fa-phone'></i> +44 1234567890</p>
                        <p><i className='fa-solid fa-envelope'></i> indo@acme.org</p>
                        </div>
                    </div>
                    <div id="contactCnt-2">
                        <input type="text" placeholder='Full Name' />
                        <input type="number" placeholder='Phone Number' />
                        <input type="email" placeholder='Email' />
                        <button id='submit'>Submit</button>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default Contact;
