import * as types from "./types";

export const handleAdd = () => {
  return {
    type: types.ADD
  }
}

export const handleDelete = () => {
  return {
    type: types.DELETE
  }
}

export const handleCountAdd = () => {
  return {
    type: types.COUNT_ADD
  }
}

export const handleCountDelete = () => {
  return {
    type: types.COUNT_DELETE
  }
}