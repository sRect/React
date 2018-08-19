import * as types from './actionTypes'
import axios from 'axios';

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
    type: types.GETINITLIST,
    data
  }
}

export const getInitList = () => {
  return (dispatch) => {
    axios.get('https://easy-mock.com/mock/5aeb2da4d8f9ce513397a497/www.demo.com/listData').then(res => {
      const data = res.data;
      if (data.info === "ok") {
        dispatch(getInitListAction(data.data))
      }
    }).catch(error => {
      console.log(error)
    })
  }
}
