import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

export default class index extends Component {
  render() {
    return (
      <NavLink activeClassName="atguigu" className="siderbar-item" {...this.props} />
    )
  }
}
