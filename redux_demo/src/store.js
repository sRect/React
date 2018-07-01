import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'; // 使用Redux工具调试
import rootReducer from "./reducers"

// 第二步：创建store
const store = createStore(rootReducer, composeWithDevTools())

export default store;

