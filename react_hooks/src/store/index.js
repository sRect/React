import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'; // 使用Redux工具调试
import rootReducer from './reducer'

const store = createStore(rootReducer, composeWithDevTools())

export default store