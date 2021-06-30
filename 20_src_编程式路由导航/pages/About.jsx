import React, { Component } from 'react'
import MyNavLink from '../components/MyNavLink'
import { Route } from 'react-router-dom'
import Message from './components/Message'
import News from './components/News'
import './About.scss'
export default class About extends Component {
  render() {
    return (
      <div>
        <h1>
        我是About内容
        </h1>
        <div className="tabContent">
          <MyNavLink to="/about/News">News</MyNavLink>
          <MyNavLink to="/about/Message">Message</MyNavLink>
        </div>
        <hr/>
        <div>
          <Route path="/about/News" component={News} />
          <Route path="/about/Message" component={Message} />
        </div>
      </div>
      
      
    )
  }
}
