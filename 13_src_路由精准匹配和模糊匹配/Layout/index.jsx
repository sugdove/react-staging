import React, { Component } from 'react'
import Header from './components/Header'
import Siderbar from './components/Siderbar'
import { Route, Switch } from 'react-router-dom'
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
            <Switch>  
              {/* 开启路由严格匹配 能不开尽量不开  */}
            <Route exact path="/home" component={ Home }/>
              <Route exact path="/about" component={ About }/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
