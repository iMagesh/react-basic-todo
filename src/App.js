import React from "react";

function App() {
  return (
    <div class="container">
      <h2>My Todo App</h2>
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
      <div>
        <ul class="list-group">
          <li class="list-group-item">My first todo task</li>
          <li class="list-group-item">Watch Game of thrones next episode</li>
          <li class="list-group-item">Practice react todo application</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
