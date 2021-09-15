import { FC } from "react";
import { Button, message } from "antd";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { fetchClearToken } from "../../store/actions/token";

interface PersonProps {}

const Person: FC<PersonProps> = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch(
            fetchClearToken(() => {
                message.success("成功退出！！！");
                history.replace("/login");
            }),
        );
    };
    return (
        <div className="person">
            <h1>个人中心</h1>
            <Button type="primary" onClick={() => logout()}>
                退出登录
            </Button>
        </div>
    );
};

export default Person;
