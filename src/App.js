import React from "react";

function App() {
  return (
    <div>
      <h2>My Todo App</h2>
      <div>
        <input type="text" placeholder="Add todo" />
        <button>Add Todo</button>
      </div>
      <div>
        <ul>
          <li>My first todo task</li>
          <li>Watch Game of thrones next episode</li>
          <li>Practice react todo application</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
