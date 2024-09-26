import { useState } from "react";
import Header from "./components/Header"
import TodoList from "./components/TodoList"

const todoList=[

  {
    id:1,
    text:"Complete your project",
    completed:false
  },

  {
    id:new Date().getTime(),
    text:"Water the flowers",
    completed:false
  }
]

function App() {

  const [todos, setTodos] = useState(todoList)

  return (
    <div className="container">
      <Header setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
