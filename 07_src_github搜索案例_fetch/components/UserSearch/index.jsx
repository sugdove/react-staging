import React, { Component } from 'react'
import './index.scss'
import List from './List'
import Search from './Search'
export default class index extends Component {
  render() {
    return (
      <div className="userSearch-container">
        <Search />
        <List />
      </div>
    )
  }
}
