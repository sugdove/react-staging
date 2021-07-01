import React, { Component } from 'react'
import './index.scss'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
export default class header extends Component {
  handleKeyUp = (event) =>{
    if(event.keyCode !== 13 || !event.target.value.trim()) return 
      console.log(event.target.value)
      let todo = {
        id: nanoid(),
        name: event.target.value,
        done: false
      }
      this.props.addTodo(todo)
      event.target.value = ''
  }
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={ this.handleKeyUp } placeholder="请输入你的任务名称,按回车保存"/>
      </div>
    )
  }
}
