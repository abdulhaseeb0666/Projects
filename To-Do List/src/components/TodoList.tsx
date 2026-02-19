import type { todos } from "./InputField"
import DeleteTodo from "./DeleteTodo";

const TodoList: React.FC<{ todos: todos[] , settodos: React.Dispatch<React.SetStateAction<todos[]>> }> = ({ todos, settodos }) => {

  return (
    <div className="todo-list">
      
      <h1>Pending Tasks</h1>
      
      <div className="tasks">
        {
          localStorage.getItem("todos") != null ? (
            JSON.parse(localStorage.getItem("todos") || "[]").map((todo: todos, index: number) => {
              return <div className="task" key={index}>
                <h2>
                  {todo.title}
                  <span>
                    Remaining Days: {todo.remainingdays}
                  </span>
                </h2>
                <p>
                  {todo.details}
                </p>
                  {DeleteTodo(todos, settodos, index)}
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