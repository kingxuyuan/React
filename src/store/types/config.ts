import { CONFIG } from './../actionsTypes/config';

export interface FetchFailTypes {
    status?: string
    msg?: string
    data:any
}

export interface FetchConfig {
    type: CONFIG.FETCH_CONFIG
}

export interface FetchConfigFail {
    type: CONFIG.FETCH_CONFIG_FAIL
}

export interface FetchConfigSuccess {
    type: CONFIG.FETCH_CONFIG_SUCCESS
    payload: any
}