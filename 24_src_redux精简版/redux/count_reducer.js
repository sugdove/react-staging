/*
  1、该文件用于创建一个为store服务的reducer函数
  1、reducer会接收到两个参数, 一个是之前的状态, 另一个是动作对象
*/ 

// 设置初始化状态
const initState = 0

function countReducer(preState = initState, action){
  // 从 action 对象中获取 type、data
  const { type, data} = action
  // 判断type
  switch (type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return preState
  }
}

export default countReducer