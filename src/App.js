import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoArr: [],
      todo: "",
      id: ""
    };
  }

  // Takes in new todo input and sets the temp value to the new input.
  handleChange = e => {
    let date = new Date();
    this.setState({
      todo: e.target.value,
      id: date
    });
  };

  // Handles the submit for the form.
  // Right now used for alerting and debugging.
  // Using e.preventDefault() in order to no refresh the page.
  // Sets a new Object that takes in the new setStates of todo and id.
  // Concat() the object to the ToDoArr to later then loop through to display as <li />.
  handleSubmit = e => {
    e.preventDefault();
    let newTodos = {
      todo: this.state.todo,
      id: this.state.id
    };
    this.setState({ todoArr: this.state.todoArr.concat(newTodos) });
    // alert(this.state.id + " " + this.state.todo)
  };

  render() {
    // Loops through the todoArr to display each as an <li /> element.
    let renderTodoList = this.state.todoArr.map(element => {
      return <li key={element.id}> {element.todo} </li>;
    });

    return (
      <div>
        <h1 className="title"> To Do List </h1>

        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Ex. Take Out Trash"
            onChange={this.handleChange}
          />
          <button type="submit"> Add </button>
        </form>

        <ul> {renderTodoList} </ul>
      </div>
    );
  }
}
