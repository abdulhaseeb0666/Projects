import type { todos } from './InputField';

const DeleteTodo = (todos: todos[], settodos: React.Dispatch<React.SetStateAction<todos[]>>, index: number) => {

  function deleteTodo() {
    const updatedTodos: todos[] = [...todos];
    updatedTodos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    settodos(updatedTodos);
  }

  return <button onClick={deleteTodo}>Completed</button>

}

export default DeleteTodo