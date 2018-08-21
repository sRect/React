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

export const handleInputChange = (value) => {
  return {
    type: types.HANDLEINPUTCHANGE,
    value
  }
}

export const getInitListAction = (data) => {
  return {
    type: types.GETINITLISTACTION,
    data
  }
}

export const getInitList = () => {
  return {
    type: types.GETINITLIST
  }
}

