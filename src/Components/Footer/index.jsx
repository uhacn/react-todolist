import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  // 全选按钮改变处理函数
  handleAllCheck = (event) => {
    this.props.checkAllChange(event.target.checked)
  }
  // 清除按钮处理函数
 handleClearDone = () => {
   this.props.clearDone()
 }
  render() {
    const {todos} = this.props;
    const doneCount = todos.reduce((total, todo) => {
      return total + (todo.done? 1 : 0)
    }, 0)
    const todoTotal = todos.length
    return (
      <div className="todo-footer">
      <label>
        <input type="checkbox" onChange={this.handleAllCheck} checked={todoTotal === doneCount && todoTotal !== 0? true : false}/>
      </label>
      <span>
        <span>（已完成）{doneCount}</span> / {todoTotal}（全部）
      </span>
      <button className="btn btn-danger" onClick={this.handleClearDone}>清除已完成任务</button>
    </div>
    )
  }
}

