import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/todos").then(response => {
      this.setState({ todos: response.data });
    });
  }

  addTodo(input) {
    this.setState({ todos: [...this.state.todos, input] });
  }

  handleDelete(todo) {
    this.setState({
      todos: this.state.todos.filter(t => t !== todo)
    });
  }

  render() {
    return (
      <div className="container">
        <h2>My Todo App</h2>
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList
          todos={this.state.todos}
          handleDelete={this.handleDelete.bind(this)}
        />
      </div>
    );
  }
}

export default App;
