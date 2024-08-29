import {useContext, createContext} from 'react';

// this is the context where the values and methods are declared
const TodoContext = createContext({
    // this is how all the todo are created and stored in an array
    todos:[
        {
            id:1,
            message:"Todo msg",
            completed: false,
        }
    ],

    // these are the method/function that are declared to do some task and the functionality will be declared later
    addTodo: (message)=>{}, // to add a todo
    updateTodo: (id, message) =>{}, // to update existing the todo
    deleteTodo: (id)=>{}, // to delete todo
    toggleComplete: (id)=>{} // to mark a todo as complete or incomplete
})

// this is a context provider to wrap the app.jsx to use the methods
export const TodoProvider= TodoContext.Provider

// custom hook/functiopn declared to use the value and method of this context
export const useTodo =()=>{
    return useContext(TodoContext)
}

export default TodoContext;
