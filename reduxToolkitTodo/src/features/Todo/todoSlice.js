// here 'createSlice' is used to make slice and 'nanoid' is used to generate unique id
import {createSlice , nanoid} from '@reduxjs/toolkit';

// this here is the initial state with initial values
// this can also be declared inside the below todoSlice 
const initialState={
    // this is an array with different objects
    todos:[{
        id:1,
        text:"Hello World",
    }]
}

// this is almost like a big version of a reducer( a reducer is like funtion)
export const todoSlice=createSlice({
    // this is the name
    name:'todo',
    // this is the initial state which is declared abobe and can also be declared here 
    initialState,

    // this is the reducer
    // it conatins properties and functions
    reducers:{

        // this will add new todo to the store
        // this have properties and its functions
        // we have the access of the (state and action) always
        // state tells the current state and action gives the values required for updating the current state
        addTodo: (state, action)=>{
            const newTodo={
                // this gives the unique id to the new todo everytime 
                id:nanoid(),
                // this will pass the new message/text for that todo
                text:action.payload
            }
            // here we have the access of the array of the todos from the initial state and we have pushed the new todo to this array
            state.todos.push(newTodo)
        },
        
        // this will remove the todo from the store
        removeTodo:(state, action)=>{
            // here we are directly updating the array of the todos by not selecting the todo given by the user and keeping the rest 
            // here we are comparing the id of all the todos with the id of the todo given the user and then applying the filter so that if the id matched then that todo should not be kept in the new updated array of the todos
            // chcekTodo is the name of the value received from the array of the todos(this name can be set anything)
            state.todos=state.todos.filter((checkTodo)=>checkTodo.id!=action.payload)
        },

        // this will update the text of the seclected todo
        // if the id of the todo given by the user matches the id of todo in the array then the text value of that todo will be updated and if the value dosen't match then it will be kept as it was
        updateTodo:(state, action)=>{
            state.todos=state.todos.map((checkTodo)=> checkTodo.id === action.payload.id ? {...checkTodo , text:action.payload.text} : checkTodo)
        }
    }
})

// these are the functionalities exported individually so that these can be used/help spepratly in the components
export const {addTodo, removeTodo, updateTodo}= todoSlice.actions

// the store is restrictive so it only updates the reducers which are registered to it so it needs list to all the reducers
export default todoSlice.reducer