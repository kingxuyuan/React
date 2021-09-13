import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const middleware = createSagaMiddleware ();

const store = createStore(
    rootReducer,
    applyMiddleware(middleware)
);

middleware.run(rootSaga);

export default store;