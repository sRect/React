import { combineReducers } from 'redux'
import * as types from './types'
import { num, arr } from './state'

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

let arrReducer = (state = arr, action) => {
  switch (action.type) {
    case types.ADD:
      return [...state, ...[action.arg]];
    case types.DELETE:
      return state.unshift();
    default:
      return state;
  }
}

const allReducer = {
  numReducer,
  arrReducer
}

// combineReducers 组合多个reducer
const rootReducer = combineReducers(allReducer)

export default rootReducer
