/*
  该文件用于专门暴露一个store
*/ 

// 引入createStore, 专用于创建redux最核心的store
import { createStore } from 'redux'
// 引入为count组件服务的reducer
import countReducer from './count_reducer'

const store = createStore(countReducer)

export default store