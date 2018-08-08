import * as types from "./types"

export const increase = () => {
  return {
    type: types.INCREASE
  }
}

export const decrease = () => {
  return {
    type: types.DECREASE
  }
}

export const handleAdd = (arg) => {
  return {
    type: types.ADD,
    arg: arg
  }
}

export const handleDelete = (arg) => {
  return {
    type: types.DELETE,
    arg: arg
  }
}

export const handleChecked = (arg) => {
  return {
    type: types.CHECKED,
    arg: arg
  }
}
