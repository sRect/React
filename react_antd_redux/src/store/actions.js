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

export const handleAddNanoidAction = (nanoid) => {
  return {
    type: types.HANDLEADDNANOIDACTION,
    nanoid
  }
}

export const handleAddNanoid = () => {
  return {
    type: types.HANDLEADDNANOID
  }
}
