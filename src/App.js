import React from "react";

function App() {
  return (
    <div class="container">
      <h2>My Todo App</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
}

function TodoForm() {
  return (
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Add todo"
        aria-describedby="helpId"
      />
      <button type="button" name="" id="" class="btn btn-primary btn-block">
        Add Todo
      </button>
    </div>
  );
}

function TodoList() {
  return (
    <div>
      <ul class="list-group">
        <li class="list-group-item">My first todo task</li>
        <li class="list-group-item">Watch Game of thrones next episode</li>
        <li class="list-group-item">Practice react todo application</li>
      </ul>
    </div>
  );
}

export default App;
