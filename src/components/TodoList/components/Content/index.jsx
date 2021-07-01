import React, { Component } from 'react'
import Item from '../Item'
import PropTypes from 'prop-types'
export default class content extends Component {
  static propTypes = {
    todoList: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }
    
  render() {
    const { todoList } = this.props
    return (
      <div className="Content">
        {
          todoList.map((todo) =>{
            return <Item key= {todo.id} {...todo} updateTodo={ this.props.updateTodo } deleteTodo={ this.props.deleteTodo }/>
          })
        }
      </div>
    )
  }
}
