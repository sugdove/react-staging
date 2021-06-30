const initValue = 0

function countReducer(prestate = initValue, action){
  console.log(prestate)
  const { type, data } = action
  switch (type) {
    case 'increment':
      return prestate + data
    case 'decrement':
      return prestate - data
    default:
      return prestate
  }
}

export default countReducer