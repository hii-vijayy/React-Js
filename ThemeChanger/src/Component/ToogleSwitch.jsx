import React from 'react';
import '/Users/vijaykumar/Programming/React-Js/ThemeChanger/src/App.css'
import useTheme from '../Context/theme';

function ToogleSwitch() {
    const {themeMode ,lightMode,darkMode}=useTheme()

    const onChangeBtn= (e)=>{
        const darkModeStatus=e.currentTarget.checked

        if(darkModeStatus){
            darkMode()
        }
        else{
            lightMode()
        }
    }

return(
    <label className='toggle-container'>
        <input type="checkbox" className='toggle-checkbox' checked={themeMode==="dark"} onChange={onChangeBtn} />

        <div className='theme-btn-switch'></div>
        <span className='toggle-text'>Toggle Theme</span>
    </label>
)
}

export default ToogleSwitch;
 