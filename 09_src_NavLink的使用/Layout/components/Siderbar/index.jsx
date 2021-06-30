import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
export default class index extends Component {
  render() {
    return (
      <div className="siderbar-container">
          <NavLink activeClassName="atguigu" className="siderbar-item" to="/about">
            About
          </NavLink>
          <NavLink activeClassName="atguigu" className="siderbar-item" to="/Home">
            Home
          </NavLink>
      </div>
    )
  }
}
