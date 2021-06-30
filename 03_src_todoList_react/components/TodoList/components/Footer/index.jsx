import React, { Component } from 'react'
import './index.scss'
import PropTypes from 'prop-types'
export default class footer extends Component {
  cleanTodo = () =>{
    this.props.cleanTodo()
  }
  static propTypes = {
    todoList: PropTypes.array.isRequired,
    cleanTodo: PropTypes.func.isRequired,
    selectAllTodo: PropTypes.func.isRequired
  }
  render() {
    const { todoList } = this.props
    const isDone = todoList.filter(todo => todo.done).length
    let findOne = todoList.find(todo =>{
      return !todo.done
    })
    return (
      <div className="todo-footer">
        <div className="todo-wrap">
          <div className="left">
            <div className="checkbox-wrap">
              <input type="checkbox" onChange={ (e) => this.props.selectAllTodo(e.target.checked) } checked={ findOne === undefined ? true : false }/>
            </div>
            <div> 已完成{isDone} /全部{todoList.length}</div>
          </div>
          <button className="rightBtn" onClick={ this.cleanTodo }>
            清除已完成任务
        </button>
        </div>
      </div>
    )
  }
}
