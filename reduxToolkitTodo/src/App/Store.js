// store is configured/created
import { configureStore } from "@reduxjs/toolkit";

// the all the reducers are impotred here from the the todoSlice
import todoReducer from '../features/Todo/todoSlice'

// the store is exported
export const store = configureStore({
    // here the store have set the key value
    // reducer as key and todoreducer as the value 
    // a complete list of many reducers can also be given here
    reducer:todoReducer
})