import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'


export default class Item extends Component {
  // 对接收的props进行类型以及必要性的限制
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }
  state = {
    mouseOver: false
  }
  // 鼠标进入移出处理函数
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouseOver: flag })

    }
  }
  // todo勾选框改变处理函数
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }
  handleClick = (id) => {
    if (window.confirm('确定要删除吗？')) {
      this.props.deleteTodo(id)
    }
  }
  render() {
    const { id, name, done } = this.props
    const { mouseOver } = this.state
    return (
      <li style={{ background: mouseOver ? "#ddd" : "#fff" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" 
          onChange={this.handleCheck(id)}
          checked={done}/>
          &nbsp;&nbsp;<span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouseOver ? "block" : "none" }}
          onClick={() => this.handleClick(id)}>删除</button>
      </li>
    )
  }
}

