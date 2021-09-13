import { combineReducers } from 'redux';

import tokenReducer from './reducers/token';

const rootReducer = combineReducers({
    tokenReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;