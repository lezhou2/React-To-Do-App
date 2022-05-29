import React, { Component } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";
import "./ToDoList.css";
class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoes: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.renderTodoes = this.renderTodoes.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  addTodo(todo) {
    this.setState((currState) => ({
      todoes: [...this.state.todoes, todo],
    }));
  }

  removeTodo(id) {
    this.setState({
      todoes: this.state.todoes.filter((todo) => todo.id != id),
    });
  }
  updateTodo(id, newName) {
    const updatedTodoes = this.state.todoes.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: newName };
      }
      return todo;
    });
    this.setState({ todoes: updatedTodoes });
  }
  toggleCompletion(id) {
    const updatedTodoes = this.state.todoes.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todoes: updatedTodoes });
  }
  renderTodoes() {
    return this.state.todoes.map((todo) => (
      <ul>
        <ToDo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          completed={todo.completed}
          removeTodo={this.removeTodo}
          updateTodo={this.updateTodo}
          toggleCompletion={this.toggleCompletion}
        />
      </ul>
    ));
  }

  render() {
    return (
      <div className="TodoList">
        <h1>
          Todo List! <span>A Simple React Todo List App</span>
        </h1>

        {this.renderTodoes()}
        <NewToDoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default ToDoList;
