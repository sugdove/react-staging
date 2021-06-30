import React, { Component } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import './index.scss'
export default class index extends Component {
  state = {
    todoList: [
      { id: '001', done: true, name: '打篮球' },
      { id: '002', done: false, name: '吃饭' },
      { id: '003', done: true, name: '打代码' },
    ]
  }
  addTodo = (todo) => {
    const { todoList } = this.state
    this.setState({
      todoList: [todo, ...todoList]
    })
  }
  updateTodo = (todo) => {
    const { todoList } = this.state
    const newTodo = todoList.map(item => {
      if (item.id === todo.id) {
        return { ...item, done: todo.done }
      }
      return item
    })
    this.setState({ todoList: newTodo })
  }
  deleteTodo = (id) => {
    if (window.confirm('确定删除吗?')) {
      const { todoList } = this.state
      const newTodo = todoList.filter(item => {
        return item.id !== id
      })
      this.setState({ todoList: newTodo })
    }
  }

  selectAllTodo = (bol) =>{
    const { todoList } = this.state
    const newTodo = todoList.map(item => {
      return {...item,...{done: bol}}
    })
    this.setState({ todoList: newTodo })
  }

  cleanTodo = () => {
    const { todoList } = this.state
    const newTodo = todoList.filter(item => {
      return !item.done
    })
    this.setState({ todoList: newTodo })
  }
  render() {
    return (
      <div className="todoList-container">
        <div className="todoList-wrap">
          <Header addTodo={this.addTodo} />
          <Content todoList={this.state.todoList} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer selectAllTodo={ this.selectAllTodo } todoList={this.state.todoList} cleanTodo={this.cleanTodo} />
        </div>
      </div>
    )
  }
}
