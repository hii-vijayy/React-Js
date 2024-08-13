import React from 'react';
import '/Users/vijaykumar/Programming/React-Js/ThemeChanger/src/App.css'
import useTheme from '../Context/theme';

// this function is used to chnage the them of the card and work on the button
function ToogleSwitch() {

    // these are the function only called to change the theme but no value is passed. The actual funtion is declared in theme.js and value is passed in card.jsx
    const {themeMode ,lightMode,darkMode}=useTheme()

    // this is used to check is the button is already clicked
    const onChangeBtn= (e)=>{
        const darkModeStatus=e.currentTarget.checked

        // if yes then set theme to dark
        if(darkModeStatus){
            darkMode()
        }

        // else set to light mode
        else{
            lightMode()
        }
    }
// this below is the design of the toggle button that is used to chnage the theme of the card from dark to light and from light to dark
return(
    <label className='toggle-container'>
        <input type="checkbox" className='toggle-checkbox' checked={themeMode==="dark"} onChange={onChangeBtn} />

        <div className='theme-btn-switch'></div>
        <span className='toggle-text'>Toggle Theme</span>
    </label>
)
}

export default ToogleSwitch;
 