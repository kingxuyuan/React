import { SILDEBAR } from "../actionsTypes/sider";

export interface ChangeSiderTypes {
    unfoldState: boolean;
}

export interface ChangeSiderFold {
    type: string;
    payload: ChangeSiderTypes;
}
