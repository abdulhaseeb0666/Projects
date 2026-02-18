import type { todos } from "./InputField"

const TodoList: React.FC<{ todos: todos[] }> = () => {

  return (
    <div className="todo-list">
      
      <h1>Pending Tasks</h1>
      
      <div className="tasks">
        {
          localStorage.getItem("todos") != null ? (
            JSON.parse(localStorage.getItem("todos") || "[]").map((todo: todos, index: number) => {
              return <div className="task" key={index}>
                <h2>{todo.title}</h2>
                <p>{todo.details}</p>
              </div>
            })
          ) : (
              <p className="no-tasks">No pending tasks</p>
          )
        }
      </div>
    
    </div>
  )
}

export default TodoList