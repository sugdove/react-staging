import React, { Component } from 'react'
import Header from './components/Header'
import Siderbar from './components/Siderbar'
import { Route, Switch, Redirect } from 'react-router-dom'
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
              {/* 开启路由严格匹配 能不开尽量不开  */}
            <Switch>  
              <Route path="/home" component={ Home }/>
              <Route path="/about" component={ About }/>
              {/* 重定向兜底 */}
              <Redirect to="/home" />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
