import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item" key={props.id}>
            <input type="checkbox" checked={props.completed}/>
            <p style={{textDecoration: props.completed ? 'line-through' : '' }}>{props.text}</p>
        </div>
    )
}

export default TodoItem