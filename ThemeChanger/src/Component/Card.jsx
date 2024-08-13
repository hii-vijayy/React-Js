import React, { useEffect, useState } from 'react';
import '/Users/vijaykumar/Programming/React-Js/ThemeChanger/src/App.css'
import ToogleSwitch from './ToogleSwitch';
import { ThemeProvider } from '../Context/theme';

function Card() {

    // this is the used to change the or set the mode of the card
    const[themeMode , setThemeMode]= useState("light")

    // this is used to set the theme to light modee
    const lightMode=()=>{
        setThemeMode('light')
    }
    // this is used to set the theme to dark mode
    const darkMode=()=>{
        setThemeMode("dark")
    }


    // this will remove any light or dark mode class already added in the code and will add the default class which is light mode and then changes the mode if the user selects any other mode
    useEffect(() => {
        document.body.classList.remove('light-mode', 'dark-mode');
        document.body.classList.add(`${themeMode}-mode`);
    }, [themeMode]);
    
    
 // below is a card design that is used to demonatrate the light and dark mode switching 
    return (
        <ThemeProvider value={{themeMode, lightMode, darkMode}}>
            <div className="container">
            <ToogleSwitch/>
            <div className="main">
                <div className="img">
                    <img id='image' src="/Images/SaketGokhale.jpg" alt="Saket Gokhale" />
                </div>
                <div className="body">
                    <p id='title'>Full Body Workout, Diet Plan, Body Building Tips</p>
                        <div className="rating">
                            <div className="star">
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <p>4.0</p>
                        </div>
                    <div className="purchase">
                        <p id='price'>699Rs</p>
                        <button id='addbtn'>Add to cart</button>
                    </div>
                </div>
            </div>
            </div>
        </ThemeProvider>
    );
}

export default Card;