import React, { Component } from 'react'
import './index.scss'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class index extends Component {
  // https://api.github.com/search/users?q=user
  
  handleSearch = () =>{
    let keyword = this.input.value
    PubSub.publish('updateState', {Loading: true, isFirst: false})
    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res=>{
      PubSub.publish('updateState', {userList: res.data.items, Loading: false, err: ''})
    }).catch(err=>{
      PubSub.publish('updateState', {Loading: false, err: err.message})
    })
  }
  handleInter = e =>{
    if(e.keyCode === 13){
      this.handleSearch()
    }
  }
  render() {
    return (
      <div className="search-container">
        <div className="search-wrap">
          <h2>搜索github用户</h2>
            <input type="text" placeholder="请输入用户名" ref={(c)=>{this.input = c}} onKeyUp={ this.handleInter }/>
            <button onClick={ this.handleSearch }>搜索</button>
        </div>
      </div>
    )
  }
}
