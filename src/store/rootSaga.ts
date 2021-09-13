import { all, fork } from 'redux-saga/effects';

import tokenSaga from './sagas/token';

export default function* rootSaga () {
    yield all([
        fork(tokenSaga)
    ])
}