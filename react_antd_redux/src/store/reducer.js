import * as types from './actionTypes'
import initStates from './state'

// reducer可以接收state,但绝不能修改state
export default (state = initStates, action) => {
  const newState = JSON.parse(JSON.stringify(initStates.listData));

  switch(action.type) {
    case types.HANDLEADD:
      return Object.assign(state, {listData: [...newState, action.value]});

    case types.HANDLECLICKITEM:
      return Object.assign(state, {listData: [...newState.splice(action.index, 1)]});

    default:
      return state;
  }
}