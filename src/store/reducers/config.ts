import { FetchConfigFail, FetchFailTypes } from './../types/config';
import { CONFIG } from '../actionsTypes/config';

const initState: FetchFailTypes = {
    msg: '',
    status: '',
    data: []
}

const configReducer = (state = initState, action: FetchConfigFail | any) => {
    switch (action.type) {
        case CONFIG.FETCH_CONFIG:
            return {
                ...state,
                status: 'padding'
            };
        case CONFIG.FETCH_CONFIG_FAIL:
            return {
                ...state,
                status: 'fail',
                data: action?.payload
            };
        case CONFIG.FETCH_CONFIG_SUCCESS:
            return {
                ...state,
                status: 'success',
                data: action?.payload
            };

        default:
            return state;
    }
}

export default configReducer;