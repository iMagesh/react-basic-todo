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
          name=""
          id=""
          className="btn btn-primary btn-block"
        >
          Add Todo
        </button>
      </div>
    );
  }
}

export default TodoForm;
