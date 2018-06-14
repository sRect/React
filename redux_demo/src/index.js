import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import { combineReducers } from 'redux'

// 初始数据
const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}

// 第一步：创建reducer
const ProductReducer = (state = [], action) => {
  return state;
}

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
      break;
    default:
      return state;
      break;

  }
}

const allReducers = {
  ProductReducer,
  cartReducer
}

// combineReducers 组合多个reducer
const rootReducer = combineReducers(allReducers)

// 第二步：创建store
const store = createStore(rootReducer)

console.log("initial state: ", store.getState());

// 第三步：定义数据（即state）变化之后的派发规则
function addToCart(product, quantity, unitCost) {
  return {
    type: 'ADD_TO_CART',
    payload: { product, quantity, unitCost }
  }
}

let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})



// 第四步：触发数据变化
store.dispatch(addToCart("apple", 100, 1000))
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));


unsubscribe();

render(
  <App />,
  document.getElementById('root')
)