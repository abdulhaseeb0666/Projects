import { useState } from "react";
import type { todos } from "./components/InputField";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

const App = () => {
  
  const [title, settitle] = useState("")
  const [details, setdetails] = useState("")
  const [todos, settodos] = useState<todos[]>(() => {
    const items = localStorage.getItem("todos");
    return items ? JSON.parse(items) : [];
  });

  const todosInLocalStorage = localStorage.getItem("todos");

  if(todosInLocalStorage == "[]") {
    localStorage.removeItem("todos");
  }

  return (
    <div className="app">
      <InputField title={title} settitle={settitle} details={details} setdetails={setdetails} todos={todos} settodos={settodos}/>
      <TodoList todos={todos} settodos={settodos} />
    </div>
  )
}

export default App