import { takeEvery, put } from 'redux-saga/effects'
import { GETINITLIST, HANDLEADDNANOID } from './actionTypes'
import { getInitListAction, handleAddNanoidAction } from './actions'
import axios from 'axios';
const nanoid = require('nanoid')

function* getInitList() {
  try {
    let res = yield axios.get('https://easy-mock.com/mock/5aeb2da4d8f9ce513397a497/www.demo.com/listData');
    let data = yield res.data;
    if (data.info === 'ok') {
      const action = getInitListAction(data.data);
      yield put(action)
    }
  } catch (error) {
    console.error("error:" + error)
  }
}

function* handleAddNanoid() {
  try {
    let myNanoid = yield nanoid();
    console.log(myNanoid)
    const action = handleAddNanoidAction(myNanoid);
    yield put(action);
  } catch (error) {
    console.error("error:" + error)
  }
}

// es6 genarator
function* mySaga() {
  yield takeEvery(GETINITLIST, getInitList);
  yield takeEvery(HANDLEADDNANOID, handleAddNanoid);
}

export default mySaga