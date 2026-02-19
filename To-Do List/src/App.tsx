import { useState } from "react";
import type { todos } from "./components/InputField";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

const App: React.FC = () => {
  
  const [title, settitle] = useState<string>("")
  const [details, setdetails] = useState<string>("")
  const [lastdate, setlastdate] = useState<string>("")
  const [remainingdays, setremainingdays] = useState<number>(0)
  const [todos, settodos] = useState<todos[]>(() => {
    const items = localStorage.getItem("todos");
    return items ? JSON.parse(items) : [];
  });

  // Remove "todos" from localStorage if it's an empty array
  const todosInLocalStorage: string | null = localStorage.getItem("todos");
  if(todosInLocalStorage == "[]") {
    localStorage.removeItem("todos");
  }

  return (
    <div className="app-container">
      <div className="app">
        <InputField title={title} settitle={settitle} details={details} setdetails={setdetails} lastdate={lastdate} setlastdate={setlastdate} remainingdays={remainingdays} setremainingdays={setremainingdays} todos={todos} settodos={settodos}/>
        <TodoList todos={todos} settodos={settodos} />
      </div>
      <Footer />
    </div>
  )
}

export default App