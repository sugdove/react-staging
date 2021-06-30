import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './index.scss'
class index extends Component {
  goForward = ()=>{
    this.props.history.goForward()
  }
  goBack = ()=>{
    this.props.history.goBack()
  }
  go = ()=>{
    this.props.history.go(-2)
  }
  render() {
    return (
      <h1 className="layout-header">
        React Router Demo
        <button onClick={ this.goForward}>前进</button>
        <button onClick={ this.goBack }>后退</button>
        <button onClick={ this.go }>go -2</button>
      </h1>
    )
  }
}

export default withRouter(index)

// withRouter可以加工一般组件，让一般组件具备路由组件的特点
// withRouter的返回值是一个新组件