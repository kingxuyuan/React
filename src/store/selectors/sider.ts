import { createSelector } from "reselect";
import { AppState } from "../rootReducer";

const setSider = (state: AppState) => state.sider.unfoldState;

export const getSider = createSelector(setSider, (sider) => sider);
