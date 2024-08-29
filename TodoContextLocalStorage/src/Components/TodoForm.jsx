import React, { useState } from 'react';
import '/Users/vijaykumar/Programming/React-Js/TodoContextLocalStorage/src/App.css'
import { useTodo } from '../Context/TodoContext';

//method for individual tods to be added
function TodoForm() {

    // state management for individual todo
    const [todo , setTodo] = useState("")

    // getting addTodo form the TodoContext by using the useTodo custom hook made
    const {addTodo} = useTodo()
    
    // method to check if todo exist to add
    // if todo exist then call addTodo method and pass the todo and set completed:false(default)
    const add = (e)=>{
        e.preventDefault()

        if(!todo){
            return
        }
        // todo is added as an object
        addTodo({message:todo, completed:false})

        // the value is cleaned after submit
        setTodo("")
    }

    //design for the input form for the todo
    return (
        <form onSubmit={add} className="flex-form">

    {/* input field with value received from the user and onchange action set up */}            
    <input
        type="text"
        placeholder="Write Todo..."
        className="input-field"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
    />
    {/* submit button */}
    <button type="submit" className="submit-button">
        Add
    </button>
</form>

    );
}

export default TodoForm;
