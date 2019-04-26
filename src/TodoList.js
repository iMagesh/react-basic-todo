import React from "react";

const toggleDone = event => {
  if (event.target.style.textDecoration === "line-through") {
    event.target.style.textDecoration = "";
  } else {
    event.target.style.textDecoration = "line-through";
  }
};

function TodoList(props) {
  return (
    <div>
      <ul className="list-group">
        {props.todos.map(todo => {
          return (
            <li key={todo.id} className="list-group-item">
              <span onClick={toggleDone}>{todo.title}</span>
              <span
                className="float-right"
                onClick={props.handleDelete.bind(this, todo.id)}
              >
                Delete
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
