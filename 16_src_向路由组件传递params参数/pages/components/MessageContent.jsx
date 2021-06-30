import React, { Component } from 'react'

const DetailData = [
  {id:1,content:'你好,中国' },
  {id:3,content:'你好,尚硅谷' },
  {id:6,content:'你好,未来的自己' },
]
export default class MessageContent extends Component {
  render() {
    const {id, Message} = this.props.match.params 
    return (
      <ul>
        <li>ID: { id } </li>
        <li>TITLE: { Message }</li>
        <li>CONTENT: { DetailData.find(item=> item.id == id).content }</li>
      </ul>
    )
  }
}
