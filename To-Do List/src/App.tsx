import { useState } from "react";
import InputField from "./components/InputField";
import type { todos } from "./components/InputField";
import TodoList from "./components/TodoList";

const App = () => {
  const [title, settitle] = useState("")
  const [details, setdetails] = useState("")
  const [todos, settodos] = useState<todos[]>([])
      
  return (
    <div className="app">
      <InputField title={title} settitle={settitle} details={details} setdetails={setdetails} todos={todos} settodos={settodos} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App