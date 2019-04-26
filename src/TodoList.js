import React from "react";

function TodoList(props) {
  return (
    <div>
      <ul class="list-group">
        {props.todos.map(todo => {
          return <li class="list-group-item">{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
