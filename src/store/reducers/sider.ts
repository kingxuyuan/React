import { SILDEBAR } from "../actionsTypes/sider";
import { ChangeSiderTypes } from "../types/sider";

interface Action {
    payload: ChangeSiderTypes;
    type: string;
}

const initState: ChangeSiderTypes = {
    unfoldState: false,
};

const sidebarReducer = (state = initState, action: Action) => {
    switch (action.type) {
        case SILDEBAR.SIDEBARFOLD:
            return {
                unfoldState: action.payload.unfoldState,
            };
        default:
            return state;
    }
};

export default sidebarReducer;
