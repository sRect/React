import { combineReducers } from 'redux'
import * as types from './types'
import { num } from './state'

let numReducer = (state = num, action) => {
  switch (action.type) {
    case types.INCREASE:
      return state + 1;
    case types.DECREASE:
      return state - 1;
    default:
      return state;
  }
}

const allReducer = {
  numReducer
}

// combineReducers 组合多个reducer
const rootReducer = combineReducers(allReducer)

export default rootReducer
