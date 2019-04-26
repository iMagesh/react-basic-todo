import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ["sdf"]
    };
  }

  handleSubmit(input) {
    console.log(input);
    this.setState({ todos: [...this.state.todos, input] });
  }

  render() {
    return (
      <div className="container">
        <h2>My Todo App</h2>
        <TodoForm handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
