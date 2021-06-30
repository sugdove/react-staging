import React, { Component } from 'react'
// 引入store 用于获取store中的状态
import store from '../../redux/store'
export default class index extends Component {
  // 共享的state才不写, 可以写不共享的state
  state = { carName: '奔驰c63' }
  Increment = (type, _) =>{
    const value = Number( this.select.value )
    type === '+' ? store.dispatch({type:'increment', data:value}) : store.dispatch({type:'decrement', data:value})
  }
  addIfOdd = () =>{
    const value = store.getState()
    if(value % 2 !== 0){
      this.Increment('+')
    }
  }
  addAsync = () =>{
    setTimeout(()=>{
      this.Increment('+')
    },500)
  }
  // componentDidMount(){
  //   // 检测store状态改变
  //   store.subscribe(()=>{
  //     this.setState({})
  //   })
  // }
  render() {
    const { count } = store.getState()
    return (
      <div>
        <h2>当前求和为{ store.getState() }</h2>
        <select ref={c => this.select = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={ (e) => this.Increment('+', e) }> + </button>
        <button onClick={ (e) => this.Increment('-', e) }> - </button>
        <button onClick={ this.addIfOdd}> 当求和为奇数时相加 </button>
        <button onClick={ this.addAsync}> 异步相加 </button>
      </div>
    )
  }
}
