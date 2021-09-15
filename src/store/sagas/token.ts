import { call, put, takeEvery } from "redux-saga/effects";

import { setToken, clearToken } from "../actions/token";
import { FetchSetToken, FetchClearToken } from "../types/token";
import { TOKENSTYPES } from "../actionsTypes/token";

import token from "../../tools/token";

function* setTokenSaga({ payload, cb }: FetchSetToken) {
    yield call(token.setToken, payload.token);
    yield put(setToken({ token: payload.token }));
    cb && cb();
}
function* clearTokenSaga({ cb }: FetchClearToken) {
    yield call(token.clear);
    yield put(clearToken());
    cb && cb();
}

export default function* tokenSaga() {
    yield takeEvery(TOKENSTYPES.FETCH_SET_TOKEN, setTokenSaga);
    yield takeEvery(TOKENSTYPES.FETCH_CLEAR_TOKEN, clearTokenSaga);
}
