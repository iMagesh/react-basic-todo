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
    axios
      .post("http://localhost:8080/todos", { title: input })
      .then(response => {
        this.setState({ todos: [...this.state.todos, response.data] });
      });
  }

  handleDelete(id) {
    axios.delete("http://localhost:8080/todos/" + id).then(response => {
      console.log(response);
      this.setState({
        todos: this.state.todos.filter(t => t.id !== response.data.id)
      });
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
