import token from '../../utils/token';
import { TOKEN } from '../actionTypes/token';

const initToken = {
    token: token.getToken()
};

const tokenReducer = (state = initToken, action: any) => {
    switch (action.type) {
        case TOKEN.SET_TOKEN:
            return {
                token: action?.payload
            };
        case TOKEN.WATCH_TOKEN:
            return {
                token: token.getToken()
            };
        case TOKEN.CLEARN_TOKEN:
            return {
                token: ''
            };
        default:
            return state;
    }
}

export default tokenReducer;