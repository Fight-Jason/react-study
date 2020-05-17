import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionsTypes'
import { initListAction } from './actionsCreators'
import aixos from 'axios';
function* getInitList() {
    try {
        const res = yield aixos.get('http://mock-api.com/VnZrjrnw.mock/todoList');
        const action = initListAction(res.data);
        yield put(action);
    }catch(e) {
        console.log('list.json 网络请求失败')
    }
}

// generator 函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}
  
export default mySaga