import { TOKENSTYPES } from "../actionsTypes/token";

export interface TokenTypes {
    token: string;
}

export interface SetToken {
    type: TOKENSTYPES.SET_TOKEN;
    payload: TokenTypes;
}

export interface ClearToken {
    type: TOKENSTYPES.CLEAR_TOKEN;
}

export interface WatchToken {
    type: TOKENSTYPES.WATCH_CLEAR_TOKEN;
}
export type Actions = SetToken | ClearToken | WatchToken;

export interface FetchSetToken {
    type: TOKENSTYPES.FETCH_SET_TOKEN;
    payload: any;
    cb: () => void;
}

export interface FetchClearToken {
    type: TOKENSTYPES.FETCH_CLEAR_TOKEN;
    cb: () => void;
}
