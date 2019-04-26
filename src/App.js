import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  return (
    <div class="container">
      <h2>My Todo App</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
