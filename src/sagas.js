import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects'
import { getUserName } from './services';

function* userName(action) {
    const username = yield call(getUserName, action.username);
    yield put({ type: 'SET_USER_NAME', username });
}

export default function* sagas() {
    yield takeLatest('GET_USER_NAME', userName);
}