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
        {props.todos.map((todo, i) => {
          return (
            <li key={i} className="list-group-item" onClick={toggleDone}>
              {todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
