import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { nanoid } from 'nanoid'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import 'antd/dist/antd.css'
function List(){
  useEffect(()=>{
    // componentDidUpdate componentDidMount
    console.log(`useEffect!!!`)
    return ()=>{
      // componentWillUnmount componentDidMount
      console.log(`useEffectReturn!!!`)
    }
  },[])
  return <h2>List...</h2>
}
function Detail(){
  return <h2>Detail...</h2>
}
export default function App(){
  const [todoList, setTodoList] = useState([{id:1,name:'奔驰',price:'200W'}])
  const [time, setTime] = useState(new Date())
  // 第二个参数代表监听的状态，如果不传则默认不进行update监听
  useEffect(()=>{
    console.log(`useEffect!!!`)
    let interval = setInterval(()=>{
      setTime(new Date())
    }, 1000)
    return ()=>{
      console.log(`useEffectReturn!!!`)
      clearInterval(interval)
    }
  },[])
  return(
    <div>
      <h2>当前时间: {time.toLocaleTimeString()}</h2>
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/List">List</Link>
        </li>
        <li>
          <Link to="/Detail">Detail</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route path="/List" component={List}></Route>
          <Route path="/Detail" component={Detail}></Route>
        </Switch>
      </div>
      </BrowserRouter>
      {
        todoList.map(todo =>{
          return (
            <ul key={todo.id}>
              <li>ID:{todo.id}</li>
              <li>名称:{todo.name}</li>
              <li>价格:{todo.price}</li>
            </ul>
          )
        })
      }
      <Button onClick={ ()=>setTodoList([{id:nanoid(),name:'test',price:'10W'},...todoList])}>点击增加一条数据</Button>
    </div>
  )
}