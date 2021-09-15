import { Actions } from "../types/token";
import { TOKENSTYPES } from "../actionsTypes/token";
import token from "../../tools/token"

const initToken = {
    token: token.getterToken(),
};

const tokenReducer = (state = initToken, action: Actions) => {
    switch (action.type) {
        case TOKENSTYPES.SET_TOKEN:
            return {
                token: action.payload.token,
            };
        case TOKENSTYPES.CLEAR_TOKEN:
            return {
                token: "",
            };
        case TOKENSTYPES.WATCH_CLEAR_TOKEN:

            return {
                token: token.getterToken()
            };
        default:
            return state
    }
};

export default tokenReducer;
