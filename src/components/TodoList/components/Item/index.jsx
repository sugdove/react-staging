import React, { Component } from 'react'
import './index.scss'
import PropTypes from 'prop-types'
export default class item extends Component {
  state = { isShow: false }
  deleteItem = (id) => {
    return (event)=>{
      this.props.deleteTodo(id)
    }
  }
  changeShow = (bol) => {
    return () => {
      this.setState({ isShow: bol })
    }
  }
  changeState = (id) => {
    return (event) =>{
      let obj = {
        id,
        done: event.target.checked
      }
      this.props.updateTodo(obj)
    }
  }
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }
  render() {
    const { id, name, done } = this.props
    const { isShow } = this.state
    return (
      <div className="todo-item" onMouseLeave={this.changeShow(false)} onMouseEnter={this.changeShow(true)}>
        <div className="checkbox" >
          <input type="checkbox" onChange={this.changeState(id)} checked={done} />
        </div>
        <div className="item" >
          {name}
          <button className="deleteBtn" onClick={this.deleteItem(id)} style={{ display: isShow ? 'block' : 'none' }}>
            删除
          </button>
        </div>
      </div>
    )
  }
}
