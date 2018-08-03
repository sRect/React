import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Home/App';
import MyApp from './components'
import registerServiceWorker from './registerServiceWorker';

// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './redux/store'
// import { increase, decrease, handleAdd, handleDelete } from './redux/actions'

// let num = 0;

// // 定义reducer(计算规则)
// let reducer = (state = num, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return state + 1;
//     case "DECREASE":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// // 根据计算规则，生成store
// let store = createStore(reducer)

// 需要渲染什么数据
// let mapStateToProps = (state) => {
//   return {
//     num: state.numReducer,
//     arr: state.arrReducer
//   }
// }

// 触发数据变化
// let mapDispatchToProps = (dispatch) => {
//   return {
//     Increase: () => {
//       store.dispatch(increase())
//     },
//     Decrease: () => {
//       store.dispatch(decrease())
//     },
//     handleAdd: (...args) => {
//       store.dispatch(handleAdd(...args))
//     },
//     handleDelete: () => {
//       store.dispatch(handleDelete())
//     }
//   }
// }

// 派发规则
// store.subscribe(() => {
//   console.log(`current state:${store.getState()}`)
// })

// 触发数据变化
// store.dispatch({ type: 'INCREASE' })
// store.dispatch({ type: 'INCREASE' })

//连接组件
// let MyApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
