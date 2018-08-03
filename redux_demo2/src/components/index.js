import App from './Home/App'

import { connect } from 'react-redux'
import store from '../redux/store'
import { increase, decrease, handleAdd, handleDelete } from '../redux/actions'

// 需要渲染什么数据
let mapStateToProps = (state) => {
  return {
    num: state.numReducer,
    arr: state.arrReducer
  }
}

// 触发数据变化
let mapDispatchToProps = (dispatch) => {
  return {
    Increase: () => {
      store.dispatch(increase())
    },
    Decrease: () => {
      store.dispatch(decrease())
    },
    handleAdd: (...args) => {
      store.dispatch(handleAdd(...args))
    },
    handleDelete: () => {
      store.dispatch(handleDelete())
    }
  }
}

//连接组件
let MyApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default MyApp