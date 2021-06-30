import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import MessageContent from './MessageContent'
export default class Message extends Component {
  state = {MessageArr:[{id:1,Message:'消息1'},{id:3,Message:'消息3'},{id:6,Message:'消息6'}]}
  render() {
    const { MessageArr } = this.state
    return (
      <div>
        <ul>
            {/* 向路由组件传递params参数 */}
          {/* {
            MessageArr.map(item =>{
              return <li key={ item.id }><Link to={`/about/Message/${ item.id }/${ item.Message }`} >{ item.Message }</Link></li>
            })
          } */}
          {/* 向路由组件传递search参数 */}
          {
            MessageArr.map(item =>{
              return <li key={ item.id }><Link to={`/about/Message/detail/?id=${ item.id }&Message=${ item.Message }`} >{ item.Message }</Link></li>
            })
          }
        </ul>
        <div>
          <Switch>
            {
              /* 接受params参数 */
            //   MessageArr.map((item) =>{
            //     return <Route path={`/about/Message/detail/:id/:Message`} key={ item.id } component={MessageContent}/>
            // })
            // 接受search参数
            MessageArr.map((item) =>{
                   return <Route path={`/about/Message/detail`} key={ item.id } component={MessageContent}/>
               })
          }
          </Switch>
        </div>
      </div>
      
    )
  }
}
