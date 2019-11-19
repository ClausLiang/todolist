import {takeEvery,put} from 'redux-saga/effects'
import {SAGA_INIT} from './actionTypes'
import {initListAction} from './actionCreators'
import axios from 'axios'

function* init() {
    const res = yield axios.get('/data.json');
    const action = initListAction(res.data)
    yield put(action)
}

function* mySaga() {
    yield takeEvery(SAGA_INIT, init);
}

export default mySaga;
