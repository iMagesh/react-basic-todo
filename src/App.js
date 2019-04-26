import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        "My first todo task",
        "Watch Game of thrones next episode",
        "Practice react todo application"
      ]
    };
  }
  render() {
    return (
      <div className="container">
        <h2>My Todo App</h2>
        <TodoForm />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
