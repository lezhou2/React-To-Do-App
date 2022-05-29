import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewToDoForm.css";

class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let newTodo = { ...this.state, id: uuidv4(), completed: false };

    this.props.addTodo(newTodo);
    this.setState({ name: "" });
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="name">New Todo:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <button>Add </button>
      </form>
    );
  }
}

export default NewToDoForm;
