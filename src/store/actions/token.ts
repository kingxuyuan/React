import { TOKEN } from '../actionTypes/token';
import { SET_TOKEN_TYPES, WATCH_TOKEN_TYPES, CLEARN_TOKEN_TYPES, FETCH_TOKEN_TYPES } from '../types/token';

export const setToken = (data: string): SET_TOKEN_TYPES => ({
    type: TOKEN.SET_TOKEN,
    payload: data
})

export const getToken = (): WATCH_TOKEN_TYPES => ({
    type: TOKEN.WATCH_TOKEN,
})

export const clearnToken = (callback: () => void): CLEARN_TOKEN_TYPES => ({
    callback
})

export const fetchSetToken = (data: string, callback: () => void): FETCH_TOKEN_TYPES => ({
    type: TOKEN.FETCH_TOKEN,
    callback,
    payload: data
})