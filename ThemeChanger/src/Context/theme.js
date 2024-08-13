 import { createContext , useContext } from "react";


 // this is where we are making the context to be used by the card and the button 
 export const ThemeContext=createContext({

   // default theme is set to light and the dark and light mode function are only declared with working defined in the card.jsx
    themeMode:"light",
    darkMode: ()=>{},
    lightMode:()=>{},
 })
// created the themeProvider to wrap the card to use the propeties of the context
 export const ThemeProvider=ThemeContext.Provider


 // made a funtion to fetch the values from the context 
 export default function useTheme(){
    return useContext(ThemeContext)
 }