import React, { Component } from "react";
import "./ToDo.css";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditting: false, name: this.props.name };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  toggleForm() {
    this.setState({ isEditting: !this.state.isEditting });
    // this.setState(
    //   (currState) => (currState.isEditting = !currState.isEditting)
    // );
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.name);
    this.setState((currState) => (currState.isEditting = false));

    //   this.setState({ name: this.props.name });
    this.setState((currState) => (currState.name = this.props.name));
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleToggle() {
    this.props.toggleCompletion(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditting) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
            <button>Update</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={
              this.props.completed ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.handleToggle}
          >
            {this.props.name}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.handleRemove}>
              <i class="fas fa-trash" />
            </button>
            <button onClick={this.toggleForm}>
              <i class="fas fa-pen" />
              i>
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default ToDo;
