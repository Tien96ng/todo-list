import React from "react";
import TodoItem from "./components/TodoItem";
import { TODODATA } from "./data/todoData";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {todoData: TODODATA}
  }


  render() {
    let renderTodoItem = this.state.todoData.map(element => {
      return (
        <TodoItem
          key={element.id}
          text={element.text}
          completed={element.completed}
        />
      );
    });
    return <div className="todo-list">{renderTodoItem}</div>;
  }
}

export default App;
