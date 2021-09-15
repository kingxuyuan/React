import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../../api/api';
import { CONFIG } from '../actionsTypes/config';
import { FetchConfig } from '../types/config';
import { fetchConfigSuccess, fetchConfigFail } from '../actions/config';

function* fetchConfig(params: FetchConfig): any {
    try {
        const data = yield call(Api.config);
        yield put(fetchConfigSuccess(data));
    } catch (e) {
        yield put(fetchConfigFail());
    }
}

export default function* () {
    yield takeEvery(CONFIG.FETCH_CONFIG, fetchConfig)
}
