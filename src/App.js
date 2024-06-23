import { useState } from "react";
import data from "./data";
import "./App.css";
import TodoList from "./components/Header/TodoList";
import TodoForm from "./components/Header/TodoForm";

const App = () => {
  const [todos, setTodos] = useState(data);

  const onComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === Number(id)
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      })
    );
  };

  // Eliminar una tarea
  const onDeleteItem = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  // Agregar una nueva tarea
  const addTodo = (newTodo) => {
    let newItem = { id: +new Date(), task: newTodo, completed: false };

    setTodos([...todos, newItem]);
  };

  return (
    <div className="container">
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        onComplete={onComplete}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
};

export default App;
