import { put, call, takeEvery } from 'redux-saga/effects';
import { TOKEN } from '../actionTypes/token';
import { setToken } from '../actions/token';
import { FETCH_TOKEN_TYPES } from '../types/token';
import token from '../../utils/token';

function* fetchToken(params: FETCH_TOKEN_TYPES) {
    yield call(token.setToken, params.payload);
    yield put(setToken(params.payload));
    params.callback();
}

function* tokenSaga() {
    yield takeEvery(TOKEN.FETCH_TOKEN, fetchToken)
}
export default tokenSaga;