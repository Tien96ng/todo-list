import React from "react"
import TodoItem from "./components/TodoItem"
import { TODODATA } from "./data/todoData"

function App() {
    let renderTodoItem = TODODATA.map(element => {
      return(
        <TodoItem 
          id={element.id} 
          text={element.text}
          completed={element.completed}
        />
      )
    })
    return (
        <div className="todo-list">
            {renderTodoItem}
        </div>
    )
}

export default App