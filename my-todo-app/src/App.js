import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { text: "Believe in the process!", isCompleted: false },
  ]);
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="wrapper">
      <div className="more-todo">
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
