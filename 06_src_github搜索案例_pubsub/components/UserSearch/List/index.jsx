import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.scss'
export default class index extends Component {
  state = { userList: [], Loading: false, err: '', isFirst:true }
  componentDidMount(){
    this.subscribe = PubSub.subscribe('updateState', (_,obj)=>{
      this.setState(obj)
    })
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.subscribe)
  }
  render() {
    const { userList, Loading, err, isFirst } = this.state
    return (
      <div className="list-container">
        {
          isFirst ? <h2>请进行搜索获得数据</h2> :
            Loading ? <h2>Loading...</h2> :
              err ? <h2 style={{ color:'red' }}>{ err }</h2> :
                userList.map(user => {
                  return (
                    <div className="list-item" key={user.id}>
                      <div className="list-wrap">
                        <img src={user.avatar_url} alt="" />
                        {user.login}
                      </div>
                    </div>
                  )
                })
        }
      </div>
    )
  }
}
