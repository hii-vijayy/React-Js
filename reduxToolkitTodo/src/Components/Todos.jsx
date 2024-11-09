import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/Todo/todoSlice';

// this is the component that will be used to display the todos
function Todos() {

    // this is the state that will be used to get the todos from the store
    const AllTodo=useSelector((state)=>state.todos)

    // this is the dispatch function that will be used to dispatch/remove the todo
    const dispatch=useDispatch()


    // this will display the todos
    return (
        <>
        <div className="container">
        <div className='todo-list'>
             {/* this will map through all the todos and display them */}
            {AllTodo.map((allTodo)=>(
                // this will display the todo and a delete button
                <li key={allTodo.id} className='todo-item'>
                    {/*this will display the text of the todo */}
                    <div className='todo-text'>{allTodo.text}</div>
                     {/* this will display the delete button */}
                    <button onClick={()=>dispatch(removeTodo(allTodo.id))} className='delete-button'>
                         {/* this is the svg icon for the delete button */}
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="icon">
                                 {/* this is the path of the svg icon */}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                                </svg>
                    </button>
                </li>
            ))}
        </div>
        </div>
        </>
    );
}

export default Todos;
