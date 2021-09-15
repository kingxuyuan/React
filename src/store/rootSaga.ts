import { all, fork } from "redux-saga/effects";

import loginSaga from "./sagas/token";
import configSage from './sagas/config';

const rootSaga = function* () {
    yield all([
        fork(loginSaga),
        fork(configSage)
    ]);
};

export default rootSaga;
