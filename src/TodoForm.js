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
          className="btn btn-primary btn-block"
          onClick={this.props.handleSubmit.bind(this, this.state.input)}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

export default TodoForm;
