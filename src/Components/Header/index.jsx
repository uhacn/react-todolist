import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

import './index.css'

export default class Header extends Component {
  // 对接收的props进行类型以及必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  handleKeyup = (event) => {
    const { target, keyCode } = event;
    // 判断输入是否为回车键
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert("输入不能为空哦！")
      return
    }
    const todoObj = {
      // 利用 nanoid 随机生成id
      id: nanoid(),
      name: target.value,
      done: false
    }
    // 向父组件发出事件
    this.props.addTodo(todoObj)
    target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyup} />
      </div>
    )
  }
}

