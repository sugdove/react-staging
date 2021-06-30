import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { nanoid } from 'nanoid'
import 'antd/dist/antd.css'

export default function App(){
  const [todoList, setTodoList] = useState([{id:1,name:'奔驰',price:'200W'}])
  useEffect(()=>{
    console.log(`userEffect->you have ${ todoList.length } todos`)
  })
  return(
    <div>
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