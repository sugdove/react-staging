import React, { Component } from 'react'
import './index.scss'
export default class index extends Component {
  render() {
    const { userList, Loading, err, isFirst } = this.props
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
