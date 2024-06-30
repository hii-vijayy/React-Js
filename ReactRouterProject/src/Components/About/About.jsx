import React from 'react';
import {Link} from 'react-router-dom';
import '/Users/vijaykumar/Programming/React-Js/ReactRouterProject/src/App.css'

function About() {
    return (
        <>
        <hr />
        <div className="container">
            <div className="aboutMain">
                <div className="aboutImg">
                    <Link><img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image"/></Link> {/* this link tag is used in-place of 'a' tag and 'to' tag is used in place of 'href' tag this works same as 'a' tag but don't refresh tha webapage when links are visited */}
                </div>
                <div className="aboutBody">
                    <h2>React projects are developed by passionate developers</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam aliquid saepe ut aliquam sit pariatur possimus tempora modi recusandae doloremque, minima quos tenetur suscipit ratione consectetur, consequatur nobis dignissimos adipisci!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus voluptate harum at dicta aspernatur excepturi voluptatem earum maxime! Dolore, necessitatibus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, iusto accusamus ullam fugiat distinctio nulla eos facilis voluptatem dolore magni.</p>
                </div>
            </div>
        </div>
        <hr />
        </>
    );
}

export default About;
