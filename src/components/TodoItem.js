import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p style={{ textDecoration: props.completed ? "line-through" : "" }}>
        {props.text}
      </p>
    </div>
  );
}

export default TodoItem;
