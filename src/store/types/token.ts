import { TOKEN } from '../actionTypes/token';

export interface FETCH_TOKEN_TYPES {
    payload: string
    callback: () => void
    type: TOKEN.FETCH_TOKEN
}

export interface SET_TOKEN_TYPES {
    payload: string
    type: TOKEN.SET_TOKEN
}

export interface WATCH_TOKEN_TYPES {
    type: TOKEN.WATCH_TOKEN
}

export interface CLEARN_TOKEN_TYPES {
    callback: () => void
}