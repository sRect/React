import { combineReducers } from 'redux'

import cartReducer from "./cart-reducer"
import productReducer from "./products-reducer"

const allReducer = {
  cartReducer,
  productReducer
}

// combineReducers 组合多个reducer
const rootReducer = combineReducers(allReducer)

export default rootReducer