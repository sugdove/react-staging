import React, { Component } from 'react'
import './index.scss'
import List from './List'
import Search from './Search'
export default class index extends Component {
  state = { userList: [], Loading: false, err: '', isFirst:true }
  updateState = (obj) =>{
    this.setState(obj)
  }
  render() {
    return (
      <div className="userSearch-container">
        <Search updateState = { this.updateState }/>
        <List {...this.state}/>
      </div>
    )
  }
}
