import React from 'react';
import { useParams } from 'react-router-dom';
import '/Users/vijaykumar/Programming/React-Js/ReactRouterProject/src/App.css'

function User() {
    const {userid}=useParams()
    return (
        <div id='user' className='container'>User:{userid}
        </div>
    );
}

export default User;
