import { createSelector } from "reselect";
import { AppState } from "../rootReducer";

const setToken = (state: AppState) => state.token.token;


export const getToken = createSelector(setToken, (token) => token);
