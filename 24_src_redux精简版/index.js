import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App />, document.getElementById('root'))
// 检测到store变化之后马上重新render root 因为有diff算法 不用担心直接render的后果
store.subscribe(()=>{
  ReactDOM.render(<App />, document.getElementById('root'))
})