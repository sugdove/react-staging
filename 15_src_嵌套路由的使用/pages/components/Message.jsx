import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import MessageContent from './MessageContent'
export default class Message extends Component {
  state = {MessageArr:['Message001','Message002','Message003']}
  render() {
    const { MessageArr } = this.state
    return (
      <div>
        <ul>
          {
            MessageArr.map((item, index) =>{
              return <li><Link to={`/about/Message/${ item }`} key={ index }>{ item }</Link></li>
            })
          }
        </ul>
        <div>
          <Switch>
            {
              MessageArr.map((item, index) =>{
                return <Route path={`/about/Message/${ item }`} key={ index } component={MessageContent}/>
            })
          }
          </Switch>
        </div>
      </div>
      
    )
  }
}
