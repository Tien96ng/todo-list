import React from "react"

export default function AddToDo(props) {
    return (
        <form className="" onSubmit={props.handleSubmit}>
          <input
            type="text"
            placeholder="Ex. Take Out Trash"
            onChange={props.handleChange}
          />
          <button type="submit"> Add </button>
        </form>
    )
}