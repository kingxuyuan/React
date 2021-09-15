import { combineReducers } from "redux";

import tokenReducer from "./reducers/token";
import siderReducer from "./reducers/sider";
import configReducer from "./reducers/config";

const rootReducer = combineReducers({
    token: tokenReducer,
    sider: siderReducer,
    config: configReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
