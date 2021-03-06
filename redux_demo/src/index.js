import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux' // 集成React
import App from './components/App'

import store from "./store"
import { addToCart, updateCart, deleteFromCart } from "./actions/cart-actions"


console.log("initial state: ", store.getState());

// 第三步：定义数据（即state）变化之后的派发规则
let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})



// 第四步：触发数据变化
store.dispatch(addToCart("apple", 100, 1000))
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));

// Update Cart
store.dispatch(updateCart('Flour 1kg', 5, 110));

// Delete from Cart
store.dispatch(deleteFromCart('Juice 2L'));

unsubscribe();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)