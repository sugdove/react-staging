import React, { useState, createContext, useContext } from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css'

const CountContext = createContext()

function List(){
  let count = useContext(CountContext)
  return <h2>{count}</h2>
}
export default function App(){
  const [count, setCount] = useState(0)
  return(
    <div>
      {
        <h2>您一共点击了:{count}次</h2>
      }
      <Button onClick={ ()=>setCount(count+1)}>点击</Button>
      <CountContext.Provider value={count}>
        <List />
      </CountContext.Provider>
    </div>
  )
}