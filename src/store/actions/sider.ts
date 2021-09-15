import { SILDEBAR } from "../actionsTypes/sider";
import { ChangeSiderFold } from "../types/sider";

export const changeSiderState = (data: boolean): ChangeSiderFold => ({
    type: SILDEBAR.SIDEBARFOLD,
    payload: {
        unfoldState: data,
    },
});
