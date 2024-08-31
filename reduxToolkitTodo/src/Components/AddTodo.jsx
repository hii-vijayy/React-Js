import React, { useState } from 'react';
import '../App.css';
import {useDispatch} from 'react-redux';
import {addTodo} from '../features/Todo/todoSlice'

// this is the component that will be used to add a todo
function AddTodo() {

    // this will manage the input value
    const [input, setInput]=useState('');

    // this will be used to dispatch the action
    // this will help in updating the store by adding the new todo to the store
    const dispatch=useDispatch();

    // this will be used to add the todo to the store by dispatching the action/funciton ('AddTodo')
    // dispatch is used to add data to the store bu the help of reducers
    // this will also reset the input field after adding the todo
    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

    return (
        <form onSubmit={addTodoHandler} className='form'>

            {/* this is the input field where the user will enter the todo */}
            <input type="text"
            placeholder='Add Todo'
            className='input'
            value={input}
            onChange={(e)=>setInput(e.target.value)} />

            {/* this is the button that will be used to add the todo */}
            <button type='submit' className='button'>Add Todo</button>
        </form>
    );
}

export default AddTodo;
