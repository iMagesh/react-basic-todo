import React from "react";

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

export default TodoForm;
