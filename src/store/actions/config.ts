import { CONFIG } from '../actionsTypes/config';
import { FetchConfig, FetchConfigSuccess, FetchConfigFail, FetchFailTypes } from '../types/config';

export const sendConfigRequest = ():FetchConfig => ({
    type: CONFIG.FETCH_CONFIG
})

export const fetchConfigFail = ():FetchConfigFail => ({
    type: CONFIG.FETCH_CONFIG_FAIL
})

export const fetchConfigSuccess = (data: any):FetchConfigSuccess => ({
    type: CONFIG.FETCH_CONFIG_SUCCESS,
    payload: data
})