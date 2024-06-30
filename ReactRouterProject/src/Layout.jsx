import React from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom';


// here we are making a layout for the routing process and telling that where the routing will work like what will remian same and where the changes will show effect
function Layout() {
    return (
        <>
        <Header/> {/* this will remian consatnt */}
        <Outlet/> {/* only this will change as the routing will work and display tha page passed by the routing process */}
        <Footer/> {/* same for this  */}
        </>
    );
}

export default Layout;