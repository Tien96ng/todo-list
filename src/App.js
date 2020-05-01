import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      count: 0,
    }
  }

  handleSubmitForm = (e) => {
    //alert(this.refs.newTodo.value)
    let currentToDo = {
      id: this.state.count,
      //id: new Date(),
      text: this.refs.newTodo.value,
      checked: false
    }
    
    this.setState({
      todos: this.state.todos.concat(currentToDo),
      count: this.state.count + 1
    })

    e.preventDefault()
  }

  handleRemove = id => {

    let newArr = this.state.todos.filter(element => element.id !== id) 
    //alert(JSON.stringify(newArr))
    this.setState({ todos: newArr })
  }

  handleCheckbox = (oldId, oldChecked, oldText) => {

    if (oldId) {
      this.setState(prevState => {
        let oldArr = prevState.todos
        oldArr[oldId] = {
          id: oldId,
          text: oldText,
          checked: !oldChecked
        }
        //alert(JSON.stringify(oldArr))

        return { todos: oldArr }
      })
    } else {
      alert('Nah')
    }

  }

  render() {
    let renderTodos = this.state.todos.map(element => {
      return (
        <span key={element.id}>
          <input type='checkbox' id={element.id} onChange={() => this.handleCheckbox(element.id, element.checked, element.text)} /> 
          <label for={element.id} style={element.checked ? {'color': 'red'} : {'color': 'green'} }> {element.text} </label>
          <i className="fa fa-times-circle" onClick={() => this.handleRemove(element.id)}/> <br />
        </span>
      )
    })


    return (
      <div>
        <button onClick={() => alert(JSON.stringify(this.state.todos))}> Todos </button>

        <form onSubmit={this.handleSubmitForm}>
          <input type='text' ref='newTodo' placeholder='Ex. Do Dishes..' />
          <button type='submit'> Add </button>
        </form>

        {renderTodos}
      </div>
    )
  }
}

/* NOTES:

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

