import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action'
export default class index extends Component {
  state = { count: 0 }
  Increment = (type, _) =>{
    const value = Number( this.select.value )
    type === '+' ? store.dispatch(createIncrementAction(value)) :  store.dispatch(createDecrementAction(value))
  }
  addIfOdd = () =>{
    const value = store.getState()
    if(value % 2 !== 0){
      this.Increment('+')
    }
  }
  addAsync = () =>{
    // setTimeout(()=>{
    //   this.Increment('+')
    // },500)
    const value = Number( this.select.value )
    store.dispatch(createIncrementAsyncAction(value, 500))
  }
  render() {
    const  count  = store.getState()
    return (
      <div>
        <h2>当前求和为{ count }</h2>
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
