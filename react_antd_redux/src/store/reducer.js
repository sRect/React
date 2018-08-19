import * as types from './actionTypes'
import initStates from './state'

// reducer可以接收state,但绝不能修改state
export default (state = initStates, action) => {
  const newState = JSON.parse(JSON.stringify(initStates));

  switch (action.type) {
    case types.HANDLEADD:
      return Object.assign(state, { listData: [...newState.listData, action.value], inputVal: '' });

    case types.HANDLECLICKITEM:
      let arr = newState.listData;
      arr.splice(action.index, 1);
      return Object.assign(state, { listData: [...arr] });

    case types.HANDLEINPUTCHANGE:
      return Object.assign(state, { inputVal: action.value });

    case types.GETINITLIST:
      return Object.assign(state, { listData: [...action.data] })

    default:
      return state;
  }
}