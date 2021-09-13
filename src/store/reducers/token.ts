import token from '../../utils/token';
import { TOKEN } from '../actionTypes/token';

const initToken = {
    token: ''
};

const tokenReducer = (state = initToken, action: any) => {
    switch (action.type) {
        case TOKEN.SET_TOKEN:
            return action?.payload;
        case TOKEN.WATCH_TOKEN:
            console.log(token.getToken());
            return {
                ...state,
                token: token.getToken()
            };
        case TOKEN.CLEARN_TOKEN:
            return '';
        default:
            return state;
    }
}

export default tokenReducer;