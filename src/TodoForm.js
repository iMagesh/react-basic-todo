import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add todo"
          aria-describedby="helpId"
          value={this.state.input}
          onChange={this.handleChange.bind(this)}
        />
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={this.handleSubmit.bind(this)}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

export default TodoForm;
