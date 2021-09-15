import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const setConfig = (state: AppState) => state.config;

export const getConfig = createSelector(setConfig, config => config)