import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import MessageContent from './MessageContent'
export default class Message extends Component {
  state = { MessageArr: [{ id: 1, Message: '消息1' }, { id: 3, Message: '消息3' }, { id: 6, Message: '消息6' }] }
  replaceShow = (type, item) =>{
    return (_)=>{
      // params
      this.props.history[type](`/about/Message/detail/${ item.id }/${ item.Message }`)
      // search
      // this.props.history[type](`/about/Message/detail?id=${ item.id }&Message=${ item.Message }`)
      // state
      // this.props.history[type](`/about/Message/detail`, {id: item.id, Message: item.Message})
    }
  }
  goForward = ()=>{
    this.props.history.goForward()
  }
  goBack = ()=>{
    this.props.history.goBack()
  }
  go = ()=>{
    this.props.history.go(-2)
  }
  render() {
    const { MessageArr } = this.state
    return (
      <div>
        <ul>
          {
            MessageArr.map(item => {
             {/* 向路由组件传递params参数 */}
              return (
                <li key={ item.id }><Link to={`/about/Message/detail/${ item.id }/${ item.Message }`} >{ item.Message }</Link>
                <button onClick={this.replaceShow('push',item)}>push查看</button>
                <button onClick={this.replaceShow('replace', item)}>replace查看</button>
                </li>
              ) 
              
              {/* 向路由组件传递search参数 */}
              // return <li key={item.id}><Link to={`/about/Message/detail/?id=${item.id}&Message=${item.Message}`} >{item.Message}</Link></li>
              {/* 向路由组件传递state参数 */}
              // return <li key={ item.id }><Link replace to={{pathname:'/about/Message/detail', state: {id: item.id, Message: item.Message}}} >{ item.Message }</Link></li>
            })
          }
        </ul>
        <div>
          <Switch>
            {
              MessageArr.map((item) => {
                /* 接受params参数 */
                    return <Route path={`/about/Message/detail/:id/:Message`} key={ item.id } component={MessageContent}/>
                // 接受search参数
                //  return <Route path={`/about/Message/detail`} key={ item.id } component={MessageContent}/>
                // 接受state参数
                //  return <Route path={`/about/Message/detail`} key={ item.id } component={MessageContent}/>
              })
            }
          </Switch>
        </div>
        <button onClick={ this.goForward}>前进</button>
        <button onClick={ this.goBack }>后退</button>
        <button onClick={ this.go }>go -2</button>
      </div>

    )
  }
}
