import React, { Component } from 'react'
import Header from './components/Header'
import Siderbar from './components/Siderbar'
import { Route, BrowserRouter } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import './index.scss'
export default class index extends Component {
  render() {
    return (
      <div className="Layout-container">
        <Header />
        <div className="center-content">
          <Siderbar />
          <div className="content">
              <Route path="/about" component={ About }/>
              <Route path="/home" component={ Home }/>
          </div>
        </div>
      </div>
    )
  }
}
