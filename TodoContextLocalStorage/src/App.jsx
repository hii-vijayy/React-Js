import { useEffect, useState } from 'react'
import '/Users/vijaykumar/Programming/React-Js/TodoContextLocalStorage/src/App.css'
import {TodoProvider} from './Context/TodoContext'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  // used to manage the state of all the todos
  const [todos, setTodos]=useState([])

  //this will add a new todo with a id at the beginning of all the existing todo's
  const addTodo=(message)=>{
    setTodos((prev)=>[{id:Date.now(), ...message},...prev])
  }
  // if the id given matches the id of the todo in the Todo's array then update the message else keep the message aas it was
  // prevTodo stands for individual todo in the Todo's array who's id will be copmapred with the the is passed to updateTodo
  const updateTodo=(id,message)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? message : prevTodo)))
  }

  //if the id of any already existing todo matches the id passed then it will not be included in the new todo's array or we can say removed
  // all the previous values are accessed and every individual todo is filtered on the basis of the its id if the id matches it is not selected else selected
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id !== id))
  }

  // if the id of the any already existing todo matched the is passed then the completed status is toggled to opposite of what it was 
  // if a todo is found with the same id passed then everything remains same only the completed status is changed to opposite to current ( true to faslse and false to true)
  const toggleComplete=(id)=>{
   setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))) 
  }

  //local storage part:-

  //to set an item in the local storage you need a key(by which you call it later) and the item to set
  //to get the item from the local storage you need only the key(which was used to set the item) to get that item
    
  //get item form the local storage
  //when the page loads then this use effect will automatically gets the todos stored in the local storage of the browser and then sets them
  useEffect(()=>{
    const FetchItem = JSON.parse(localStorage.getItem("todos"))
    if(FetchItem && FetchItem.length>0 ){
      setTodos(FetchItem)
    }
  },[])

  //set item in the local storage
  //whenever any todo is added to the todo's array then this useEffect will automatically set it to the local storage of the browser
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])



  // this is the design of the Todo 
  return (
    // wrapped the Todo with the TodoProvider to use the values
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="container">
          <div className="todo-wrapper">
              <h1 className="title">Manage Your Todos</h1>
              <div className="form-container">
                  {/* Todo form goes here */}
                  <TodoForm/>
              </div>
              <div className="todo-list">
                {/* Loop and Add TodoItem here */}
                {todos.map((todo)=>(
                  <div key={todo.id} className='box'>
                        <TodoItem todo={todo}/>
                  </div>
                ))}
              </div>
          </div>
      </div>

      
    </TodoProvider>
  )
}

export default App
