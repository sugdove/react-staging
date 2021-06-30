import React, { Component } from 'react'
import MyNavLink from '../../../components/MyNavLink'
import './index.scss'
export default class index extends Component {
  render() {
    return (
      <div className="siderbar-container">
        <MyNavLink to="/home">
          Home
          </MyNavLink>
        <MyNavLink to="/about">
          About
          </MyNavLink>
      </div>
    )
  }
}
