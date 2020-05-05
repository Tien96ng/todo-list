import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      count: 0,
      value: ""
    };
  }

  handleChangeInput = (e) => {
    this.setState({ value: e.target.value})
  }

  handleSubmitForm = (e) => {
    let currentToDo = {
      id: this.state.count,
      //text: this.refs.newTodo.value,
      text: this.state.value,
      checked: false,
      display: true
    };

    this.setState({
      todos: this.state.todos.concat(currentToDo),
      count: this.state.count + 1,
      value: ""
    });

    e.preventDefault();
  };

  handleRemove = (oldId, oldChecked, oldText, oldDisplay) => {
    this.setState((prevState) => {
      let oldArr = prevState.todos;
      oldArr[oldId] = {
        id: oldId,
        text: oldText,
        checked: oldChecked,
        display: !oldDisplay
      };

      return { todos: oldArr };
    });
  };

  handleCheckbox = (oldId, oldChecked, oldText, oldDisplay) => {
    this.setState((prevState) => {
      let oldArr = prevState.todos;
      oldArr[oldId] = {
        id: oldId,
        text: oldText,
        checked: !oldChecked,
        display: oldDisplay
      };

      return { todos: oldArr };
    });
  };

  handleAdd = e => {

  }

  render() {
    let renderTodos = this.state.todos.map((element) => {
      if (element.display) {
        return (
          <div key={element.id} className='list-container'>
            <input
              type="checkbox"
              id={element.id}
              onChange={() =>
                this.handleCheckbox(element.id, element.checked, element.text, element.display)
              }
            />
            <label
              className="text"
              for={element.id}
              style={element.checked ? { 
                'textDecoration': 'line-through', 
                'font-style': 'italic' } 
                : {"fontSize": "120%"}
                }
            >
              {element.text}
            </label>
            <i
              className='fa fa-times-circle close-button'
              onClick={() => this.handleRemove(element.id, element.checked, element.text, element.display)}
            />
            <br />
          </div>
        );
      }
      
    });
    // ref="newTodo"
    return (
      <div className="main-container">
        <h1 className="title"> To Do List </h1>

        <form onSubmit={this.handleSubmitForm} className="form">
          <input className="user-input"  type="text" value={this.state.value} onChange={this.handleChangeInput} placeholder="Ex. Do Dishes.." required maxLength="20" />
          <button type="submit"> Add </button>
        </form>

        {renderTodos}
      </div>
    );
  }
}

/* NOTES:

<button onClick={() => alert(JSON.stringify(this.state.todos))}>
          Todos
        </button>

handleRemove = id => {
    // var citrus = fruits.slice(fruits.indexOf('Lemon'), fruits.indexOf('Lemon')+1)
    //alert(id)
    //console.log(id)
    //let matchID = this.state.todos.filter(element => element.id === id)
    //console.log(matchID)
    //let index = this.state.todos.findIndex(element => element.id === id)
    //alert(JSON.stringify(this.state.todos[index]))

    //let objectToRemove = this.state.todos.slice(index, index + 1)
    //alert(JSON.stringify(objectToRemove))
    //let newArr = this.state.todos -  objectToRemove
    //alert(newArr)

      //todos: this.state.todos.slice(index, index)


    let newArr = this.state.todos.filter(element => element.id !== id) 
    //alert(JSON.stringify(newArr))
    this.setState({ todos: newArr })

  }


  handleRemove = id => {

    let newArr = this.state.todos.filter(element => element.id !== id) 
    //alert(JSON.stringify(newArr))
    this.setState({ todos: newArr })
  }

  */

