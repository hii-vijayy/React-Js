import React, { useState } from 'react';
import { useTodo } from '../Context/TodoContext';
import '/Users/vijaykumar/Programming/React-Js/TodoContextLocalStorage/src/App.css'


// method for all the existing todos
function TodoItem({todo}) {

    //to check if the todo is editabel or not
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    //to set the todo msg(old/new)
    const [todoMsg , setTodoMsg] = useState(todo.message)
    //methods fetched from the TodoContext
    const {updateTodo, deleteTodo, toggleComplete}= useTodo()

    //if the edit button is clicked and a new msg is passed it will be updated in that todo
    //todo click will be identified by its id and the new msg will be updated and the edit option is disabled
    const editTodo=()=>{
        updateTodo(todo.id , {...todo, message:todoMsg})
        setIsTodoEditable(false)
    }
    // this will mark that todo as comppleted
    // when the checkbox is clicked then this will update the completed status to true
    const toggleCompleted=()=>{
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`todo-item ${
                todo.completed ? "completed" : "not-completed"
            }`}
        >
            <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`todo-text ${
                    isTodoEditable ? "editable" : ""
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="todo-button"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="todo-button"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
