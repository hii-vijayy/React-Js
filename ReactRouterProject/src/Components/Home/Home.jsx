import React from 'react';
import {Link} from 'react-router-dom';
import '/Users/vijaykumar/Programming/React-Js/ReactRouterProject/src/App.css'

function Home() {
    return (
        <div className="container">
            <div className="homeMain">
                <div id="cnt-1">
                <Link to="/"><img className="img-1" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" /></Link>
                    <div id="sub-1">
                        <h1>Download Now</h1>
                        <h3>Lorem ipsum </h3>
                        <button id='download'>Download Now</button>
                    </div>
                </div>
                <div id="cnt-2">
                <Link to="/"><img className="img-2" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" /></Link>
                    <h1>Lorem ipsum dolor</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
