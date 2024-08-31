import './App.css'
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'

function App() {
  return (
    <>
      <h1>This is a React Redux App</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
