import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

export function* helloSaga() {
    console.log('Hello Sagas!');
}

//Worker Saga
function* incrementAsync() {
    yield delay(1000);
    yield put({ type: 'INCREMENT' });
}

//Watcher saga
function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

//Root saga
export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}