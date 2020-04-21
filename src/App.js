import React from "react"
import AddToDo from "./components/AddToDo"
import "./styles.css";

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoArr: [],
      todo: "",
      id: "",
      //finished: false
    };
  }

  // Takes in new todo input and sets the temp value to the new input.
  handleChange = e => {
    this.setState({ todo: e.target.value })
  }

  handleCheckbox = e => {
    this.setState({ finished: !this.state.finished })
  }


  // Handles the submit for the form.
  // Right now used for alerting and debugging.
  // Using e.preventDefault() in order to no refresh the page.
  // Sets a new Object that takes in the new setStates of todo and id.
  // Concat() the object to the ToDoArr to later then loop through to display as <li />.
  handleSubmit = e => {
    e.preventDefault()
    const newDate = new Date();

    let newTodos = {
      todo: this.state.todo,
      id: newDate,
      //finished: this.state.finished,
    }
    this.setState({ todoArr: this.state.todoArr.concat(newTodos) })
    // alert(this.state.id + " " + this.state.todo)
  }

  render() {
    // Loops through the todoArr to display each as an <li /> element.
    let renderTodoList = this.state.todoArr.map(element => {
      return (
        <div>
          <li key={element.id} className="">
            <input 
              type="checkbox" 
              className="m-2 p-2" 
              //onClick={this.handleCheckbox}
              //style={{color: this.state.finished ? "red" : "green"}}
            />
            {element.todo}
            <i className="fa fa-times m-2"/>
          </li> <br />
          
        </div>
      )
    })

    return (
      <div>
        <h1 className=""> To Do List </h1>
        <AddToDo handleSubmit={this.handleSubmit} handleChange={this.handleChange} />

        <div className="">
          <ul className=""> 
            {renderTodoList}
          </ul>
        </div>
      </div>
    );
  }
}
