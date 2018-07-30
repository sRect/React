import React, { Component } from 'react'
import { createStore } from 'redux'

// 定义reducer(计算规则)
let reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
}

// 根据计算规则，生成store
let store = createStore(reducer)

// 派发规则
store.subscribe(() => {
  console.log(`current state:${store.getState()}`)
})

// 触发数据变化
store.dispatch({ type: 'INCREASE' })
store.dispatch({ type: 'INCREASE' })



class App extends Component {
  render() {
    return (
      <div className="App">
        <p>num:</p>
        <div>
          <button>increase</button>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <button>decrease</button>
        </div>
      </div>
    );
  }
}

export default App;
