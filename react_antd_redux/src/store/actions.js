import * as types from './actionTypes'

export const handleAdd = (value) => {
  return {
    type: types.HANDLEADD,
    value
  }
}

export const handleClickItem = (index) => {
  return {
    type: types.HANDLECLICKITEM,
    index
  }
}