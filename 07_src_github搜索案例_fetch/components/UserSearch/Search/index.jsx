import React, { Component } from 'react'
import './index.scss'
// import axios from 'axios'
import PubSub from 'pubsub-js'
export default class index extends Component {
  // https://api.github.com/search/users?q=user

  handleSearch = async () => {
    let keyword = this.input.value
    PubSub.publish('updateState', { Loading: true, isFirst: false })
    // axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res=>{
    //   PubSub.publish('updateState', {userList: res.data.items, Loading: false, err: ''})
    // }).catch(err=>{
    //   PubSub.publish('updateState', {Loading: false, err: err.message})
    // })

    // 发送网络请求，用fetch发送（未优化）
    // fetch(`https://api.github.com/search/users?q=${keyword}`).then(
    //   res => {
    //     console.log(' 联系服务器成功了 ！')
    //     return res.json()
    //   },
    //   err => {
    //     console.log(' 联系服务器失败了 ！', err)
    //     PubSub.publish('updateState', { Loading: false, err })
    //   }
    // ).then(
    //   res => {
    //     console.log(' 获取数据成功了 !', res.items)
    //     PubSub.publish('updateState', { userList: res.items, Loading: false, err: '' })
    //   },
    //   err => {
    //     console.log(' 获取数据失败了 !', err)
    //     PubSub.publish('updateState', { Loading: false, err })
    //   }
    // )
    // 发送网络请求，用fetch发送（优化）
    try {
      const res = await fetch(`https://api.github.com/search/users?q=${keyword}`)
      const data = await res.json()
      PubSub.publish('updateState', {userList: data.items, Loading: false, err: ''})
    } catch (err) {
      console.log(err)
      PubSub.publish('updateState', {Loading: false, err: err.message})
    }
    
  }
  handleInter = e => {
    if (e.keyCode === 13) {
      this.handleSearch()
    }
  }
  render() {
    return (
      <div className="search-container">
        <div className="search-wrap">
          <h2>搜索github用户</h2>
          <input type="text" placeholder="请输入用户名" ref={(c) => { this.input = c }} onKeyUp={this.handleInter} />
          <button onClick={this.handleSearch}>搜索</button>
        </div>
      </div>
    )
  }
}
