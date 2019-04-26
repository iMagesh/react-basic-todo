import React from "react";

function TodoList(props) {
  return (
    <div>
      <ul className="list-group">
        {props.todos.map((todo, i) => {
          return (
            <li key={i} className="list-group-item">
              {todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
