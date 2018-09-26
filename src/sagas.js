import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    getUserName,
    getCurrentUser,
    userMessage,
    newChatRoom
} from './services';

function* getUserNameSaga(action) {
    const username = yield call(getUserName, action.username);
    yield put({
        type: 'SET_USERNAME',
        username
    });
}

function* getCurrentUserSaga(action) {
    const currentUser = yield call(getCurrentUser, action.currentUser);
    yield put({
        type: 'SET_CURRENT_USER',
        currentUser
    });
}

function* userMessageSaga(action) {
    const messages = yield call(userMessage, action);
    yield put({
        type: 'SET_MESSAGE',
        messages
    });
}

function* newChatRoomSaga(action) {
    const room = yield call(newChatRoom, action);
    yield put({
        type: 'SET_NEW_ROOM',
        room
    });
}

export default function* sagas() {
    yield takeLatest('GET_USERNAME', getUserNameSaga);
    yield takeLatest('GET_CURRENT_USER', getCurrentUserSaga);
    yield takeLatest('GET_MESSAGE', userMessageSaga);
    yield takeLatest('GET_NEW_ROOM', newChatRoomSaga);
}
