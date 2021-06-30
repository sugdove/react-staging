import React, { Component } from 'react'

export default class index extends Component {
  state = { count: 0 }
  handleAdd = (type, _) =>{
    const value = Number( this.select.value )
    const newCount = type === '+' ? this.state.count + value :  this.state.count - value
    this.setState({ count: newCount })
  }
  addIfOdd = () =>{
    const value = this.state.count
    if(value % 2 !== 0){
      this.handleAdd('+')
    }
  }
  addAsync = () =>{
    setTimeout(()=>{
      this.handleAdd('+')
    },500)
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h2>当前求和为{ count }</h2>
        <select ref={c => this.select = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={ (e) => this.handleAdd('+', e) }> + </button>
        <button onClick={ (e) => this.handleAdd('-', e) }> - </button>
        <button onClick={ this.addIfOdd}> 当求和为奇数时相加 </button>
        <button onClick={ this.addAsync}> 异步相加 </button>
      </div>
    )
  }
}
