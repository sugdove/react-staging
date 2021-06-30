import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
export default class index extends Component {
  render() {
    return (
      <div className="siderbar-container">
          <Link className="siderbar-item" to="/about">
            About
          </Link>
          <Link className="siderbar-item" to="/Home">
            Home
          </Link>
      </div>
    )
  }
}
