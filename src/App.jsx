import React, { Component } from "react";
import './App.css'

import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";

export default class App extends Component {
  // 设置初始状态
  state = {
    todos: [
      { id: "001", name: "吃饭", done: false },
      { id: "002", name: "睡觉", done: false },
      { id: "003", name: "打豆豆", done: true }
    ]
  }
  addTodo = (todoObj) => {
    // 将新添加的 todo 和 todos 进行组合，重新赋值
    const todos = this.state.todos;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos })
  }
  updateTodo = (id, done) => {
    const todos = this.state.todos;
    // 更新 todo 的 done 状态，并重新赋值
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done }
      } else {
        return todo
      }
    })
    this.setState({ todos: newTodos })
  }
  deleteTodo = (id) => {
    const todos = this.state.todos;
    // 筛出所有没被点击的 todo
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({ todos: newTodos })
  }
  checkAllChange = (check) => {
    const todos = this.state.todos;
    // 让所有 todo 的状态都设为全选按钮的状态
    const newTodos = todos.map(todo => {
      return { ...todo, done: check }
    })
    this.setState({ todos: newTodos })
  }
  clearDone = () => {
    const todos = this.state.todos;
    const newTodos = todos.filter(todo => {
        return !todo.done
    })
    this.setState({todos: newTodos})
  }
  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={this.state.todos} updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
          checkAllChange={this.checkAllChange} />
          <Footer todos={todos} 
          checkAllChange={this.checkAllChange}
          clearDone={this.clearDone}
          />
        </div>
      </div>
    );
  }
}
