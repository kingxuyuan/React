import { TOKENSTYPES } from "../actionsTypes/token";

import { TokenTypes, SetToken, ClearToken, FetchSetToken, FetchClearToken ,WatchToken} from "../types/token";

export const setToken = (data: TokenTypes): SetToken => ({
    type: TOKENSTYPES.SET_TOKEN,
    payload: data,
});

export const clearToken = (): ClearToken => ({
    type: TOKENSTYPES.CLEAR_TOKEN,
});


export const watchToken = (): WatchToken => ({
    type: TOKENSTYPES.WATCH_CLEAR_TOKEN,
});

export const fetchSetToken = (data: any, cb: () => void): FetchSetToken => ({
    type: TOKENSTYPES.FETCH_SET_TOKEN,
    payload: data,
    cb,
});

export const fetchClearToken = (cb: () => void): FetchClearToken => ({
    type: TOKENSTYPES.FETCH_CLEAR_TOKEN,
    cb,
});
