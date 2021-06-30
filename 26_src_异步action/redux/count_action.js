/*
  该文件专门为count组件生成action对象
*/
import { INCREMENT, DECREMENT } from './constant'
//同步action. 就是指action为Object类型的一般对象 

export const createIncrementAction = data => ({ type: INCREMENT, data})

export const createDecrementAction = data => ({ type: DECREMENT, data})

// 异步action. 就是指action的值为函数

export const createIncrementAsyncAction = (data, time) =>{
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(createIncrementAction(data))
    },time)
  } 
}
